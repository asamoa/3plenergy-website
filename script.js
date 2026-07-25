// ===============================================
// Mobile Navigation Toggle
// ===============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===============================================
// Smooth Scrolling
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// Navbar Background on Scroll
// ===============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.backgroundColor = 'var(--secondary-color)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===============================================
// Contact Form Handling
// ===============================================
const contactForm = document.getElementById('contactForm');

// Check if form uses Formspree (has action attribute)
if (contactForm.getAttribute('action') && contactForm.getAttribute('action').includes('formspree')) {
    // Formspree will handle the submission, just add success feedback
    contactForm.addEventListener('submit', (e) => {
        // Let Formspree handle the actual submission
        // Show a brief loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Note: Formspree will redirect or show their success page
        // For better UX, you can use their AJAX endpoint instead
    });
} else {
    // Fallback for testing locally without Formspree setup
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        
        alert(`Thank you for your enquiry, ${name}!\n\nService of interest: ${service}\n\nWe'll get back to you soon at ${email}.\n\nNote: To enable email delivery, please set up Formspree as described in the README.`);
        
        // Reset form
        contactForm.reset();
    });
}

// ===============================================
// Scroll Animations (Intersection Observer)
// ===============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards and why-items
document.querySelectorAll('.service-card, .why-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===============================================
// Active Navigation Link Highlighting
// ===============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ===============================================
// Stats Counter Animation
// ===============================================
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-item h4');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('+')) {
                    const number = parseInt(text);
                    animateCounter(stat, 0, number, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ===============================================
// Console Welcome Message
// ===============================================
console.log('%c 3PL Energy LTD ', 'background: #d4af37; color: #1a1a2e; font-size: 20px; padding: 10px;');
console.log('%c Website successfully loaded! ', 'color: #d4af37; font-size: 14px;');
