// script.js - UPDATED VERSION

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 1000);
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const watchImage = document.querySelector('.watch-image');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero.getBoundingClientRect().top <= 0) {
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
            watchImage.style.transform = `rotateY(-10deg) rotateX(5deg) translateY(${rate * 0.1}px)`;
        }
        
        // Navbar background on scroll
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(10, 15, 10, 0.95)';
            nav.style.padding = '1rem 3rem';
        } else {
            nav.style.backgroundColor = 'rgba(10, 15, 10, 0.9)';
            nav.style.padding = '1.5rem 3rem';
        }
    });

    // Tab functionality for details section
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.detail-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding panel
            const panel = document.getElementById(`${tabId}-panel`);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });

    // Testimonial slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Calculate new slide index
        currentSlide = (n + slides.length) % slides.length;
        
        // Show current slide and activate dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Next/previous controls
    prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
    
    // Dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto-advance testimonials
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 8000);

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        
        // Animate menu lines
        const lines = document.querySelectorAll('.menu-line');
        lines.forEach(line => line.classList.toggle('active'));
    });

    // Hover animations for collection items
    const collectionImages = document.querySelectorAll('.collection-image');
    
    collectionImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterButton = document.querySelector('.newsletter-button');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (newsletterInput.value && newsletterInput.value.includes('@')) {
            // Simulate form submission
            newsletterButton.textContent = 'Subscribed';
            newsletterButton.style.backgroundColor = 'rgba(201, 169, 110, 0.3)';
            newsletterInput.value = '';
            
            // Reset after 3 seconds
            setTimeout(function() {
                newsletterButton.textContent = 'Submit';
                newsletterButton.style.backgroundColor = 'rgba(201, 169, 110, 0.1)';
            }, 3000);
        }
    });

    // Add luxury hover effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(201, 169, 110, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 25px rgba(201, 169, 110, 0.3)';
        });
    });

    // Image lazy loading enhancement
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });

    // Initialize with first testimonial active
    showSlide(0);
});