// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Project Card Animation on Scroll
const projectCards = document.querySelectorAll('.project-card');

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

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-level');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width;
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Theme Toggle (Optional - Uncomment to enable)
/*
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.classList.add('theme-toggle');
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1001';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.innerHTML = document.body.classList.contains('dark-theme') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Add dark theme styles
const darkThemeStyles = `
    .dark-theme {
        --light-color: #1f2937;
        --dark-color: #f9fafb;
        --gray-color: #9ca3af;
    }
    
    .dark-theme .navbar {
        background-color: rgba(31, 41, 55, 0.95);
    }
    
    .dark-theme .project-card,
    .dark-theme .stat,
    .dark-theme .contact-form input,
    .dark-theme .contact-form textarea {
        background-color: #374151;
        color: #f9fafb;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = darkThemeStyles;
document.head.appendChild(styleSheet);
*/