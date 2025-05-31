// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Enhanced smooth scrolling function
function smoothScroll(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;
    
    // Close mobile menu if open
    navLinks.classList.remove('active');
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smoother animation
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Blog card hover effect enhancement
const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
    });
});

// Smooth scrolling for "Back to All Articles" button
const backButtons = document.querySelectorAll('.back-to-articles');
backButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll('#portfolio');
    });
});

// Add smooth scrolling to footer links
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Add scroll progress indicator
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrollPercentage + '%';
    }
});

// Create scroll progress bar
const progressContainer = document.createElement('div');
progressContainer.style.position = 'fixed';
progressContainer.style.top = '0';
progressContainer.style.left = '0';
progressContainer.style.width = '100%';
progressContainer.style.height = '5px';
progressContainer.style.backgroundColor = 'transparent';
progressContainer.style.zIndex = '1000';

const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
progressBar.style.height = '100%';
progressBar.style.width = '0';
progressBar.style.backgroundColor = '#3498db';
progressBar.style.transition = 'width 0.2s ease';

progressContainer.appendChild(progressBar);
document.body.appendChild(progressContainer);