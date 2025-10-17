// ========================================
// Navigation & Scroll Effects
// ========================================

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========================================
// Typing Animation
// ========================================

const typingText = document.querySelector('.typing-text');
const titles = [
    'Software Development Engineer',
    'Full-Stack Developer',
    'PHP & JavaScript Specialist',
    'Cloud Enthusiast',
    'Problem Solver'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (!isDeleting && charIndex <= currentTitle.length) {
        typingText.textContent = currentTitle.substring(0, charIndex);
        charIndex++;
        typingSpeed = 100;
    } else if (isDeleting && charIndex >= 0) {
        typingText.textContent = currentTitle.substring(0, charIndex);
        charIndex--;
        typingSpeed = 50;
    }

    if (charIndex === currentTitle.length + 1 && !isDeleting) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation when page loads
if (typingText) {
    setTimeout(typeEffect, 1000);
}

// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default if it's not just "#"
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Scroll Reveal Animation
// ========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.timeline-item, .skill-category, .highlight-item, .contact-method');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.timeline-item, .skill-category, .highlight-item, .contact-method');

    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Run on page load
window.addEventListener('load', () => {
    initScrollReveal();
    revealOnScroll();
});

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// ========================================
// Skills Animation on Hover
// ========================================

const skillTags = document.querySelectorAll('.skill-tags span, .tech-tags span');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// ========================================
// Contact Methods Animation
// ========================================

const contactMethods = document.querySelectorAll('.contact-method');

contactMethods.forEach((method, index) => {
    method.style.opacity = '0';
    method.style.transform = 'translateY(20px)';
    method.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(method);
});

// ========================================
// Performance Optimization
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    highlightNavigation();
    revealOnScroll();
}));

// ========================================
// Preloader (Optional)
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Console Easter Egg
// ========================================

console.log('%c Hi there! 👋', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%c Looking for something? Feel free to reach out!', 'color: #60a5fa; font-size: 14px;');
console.log('%c 📧 paulonobrejunior@outlook.com', 'color: #a3a3a3; font-size: 12px;');
console.log('%c 💼 https://linkedin.com/in/paulonobrejr', 'color: #a3a3a3; font-size: 12px;');
