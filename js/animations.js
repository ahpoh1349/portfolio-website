// Animation effects for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for different elements
                if (entry.target.classList.contains('stat')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBars(entry.target);
                }
                
                if (entry.target.classList.contains('project-card')) {
                    animateProjectCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Elements to observe for animations
    const animatedElements = document.querySelectorAll(`
        .hero-content,
        .about-text,
        .stat,
        .project-card,
        .skill-category,
        .contact-info,
        .contact-form,
        .section-title
    `);
    
    animatedElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
    
    // Counter animation for statistics
    function animateCounter(element) {
        const counter = element.querySelector('h3');
        if (!counter) return;
        
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number
            if (counter.textContent.includes('+')) {
                counter.textContent = Math.floor(current) + '+';
            } else if (counter.textContent.includes('%')) {
                counter.textContent = Math.floor(current) + '%';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Skill bars animation
    function animateSkillBars(element) {
        const skillItems = element.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'scale(1.1)';
                item.style.transition = 'transform 0.3s ease';
                
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    }
    
    // Project card animation
    function animateProjectCard(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Parallax effect for hero section
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.backgroundPosition = `center ${rate}px`;
        }
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // Floating animation for hero elements
    function floatingAnimation() {
        const floatingElements = document.querySelectorAll('.profile-placeholder');
        
        floatingElements.forEach(element => {
            element.style.animation = 'float 6s ease-in-out infinite';
        });
    }
    
    // Mouse cursor trail effect
    let mouseTrail = [];
    const trailLength = 10;
    
    function createTrailDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #3498db;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            opacity: 1;
            transition: opacity 0.5s ease;
        `;
        
        document.body.appendChild(dot);
        
        mouseTrail.push(dot);
        
        if (mouseTrail.length > trailLength) {
            const oldDot = mouseTrail.shift();
            if (oldDot && oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }
        
        // Fade out trail dots
        mouseTrail.forEach((trailDot, index) => {
            const opacity = (index + 1) / trailLength;
            trailDot.style.opacity = opacity * 0.5;
        });
    }
    
    // Enable mouse trail on desktop only
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', function(e) {
            createTrailDot(e.clientX, e.clientY);
        });
    }
    
    // Smooth reveal animation for sections
    function revealSections() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        // Reveal hero immediately
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }
    }
    
    // Text reveal animation
    function animateTextReveal() {
        const textElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description');
        
        textElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 500);
        });
    }
    
    // Button hover animations
    function enhanceButtonAnimations() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
            
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(0) scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
        });
    }
    
    // Loading animation
    function showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <p>Loading Portfolio...</p>
            </div>
        `;
        
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #2c3e50;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            color: white;
            font-family: 'Poppins', sans-serif;
        `;
        
        const spinnerStyle = `
            .loader-spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid #3498db;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 1rem;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .loader-content {
                text-align: center;
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = spinnerStyle;
        document.head.appendChild(style);
        
        document.body.appendChild(loader);
        
        // Remove loader after page loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }, 500);
            }, 1000);
        });
    }
    
    // Add CSS animations
    const animationStyles = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-content > * {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .skill-item {
            transition: transform 0.3s ease, background-color 0.3s ease;
        }
        
        .skill-item:hover {
            transform: scale(1.1);
            background-color: #2980b9;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
    
    // Initialize animations
    floatingAnimation();
    revealSections();
    animateTextReveal();
    enhanceButtonAnimations();
    showLoadingAnimation();
    
    console.log('Animations initialized successfully!');
});

