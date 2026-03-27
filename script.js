/**
 * Rifat Ara Tasnim - Portfolio Website
 * Interactive JavaScript for animations and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavbar();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    initParallax();
    initCounters();
});

/**
 * Navbar scroll effects
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    // Configuration for different animation types
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .about-text,
        .about-skills,
        .research-card,
        .project-card,
        .publication-item,
        .teaching-card,
        .award-card,
        .timeline-item
    `);

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const cta = document.querySelector('.nav-cta');

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.toggle('active');

        if (menu) {
            menu.style.display = isOpen ? 'flex' : 'none';
            menu.style.position = 'absolute';
            menu.style.top = '100%';
            menu.style.left = '0';
            menu.style.right = '0';
            menu.style.flexDirection = 'column';
            menu.style.background = 'white';
            menu.style.padding = '20px';
            menu.style.borderRadius = '16px';
            menu.style.margin = '10px 20px';
            menu.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
            menu.style.gap = '15px';
        }

        if (cta) {
            cta.style.display = isOpen ? 'block' : 'none';
            cta.style.marginTop = '10px';
            cta.style.textAlign = 'center';
        }

        // Animate hamburger
        const spans = toggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggle.click();
            }
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effect for hero section
 */
function initParallax() {
    const heroBg = document.querySelector('.hero-bg');

    if (!heroBg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        heroBg.style.transform = `translate(${rate * 0.1}px, ${rate * 0.2}px) rotate(${scrolled * 0.01}deg)`;
    });
}

/**
 * Animated counters for stats
 */
function initCounters() {
    const stats = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => counterObserver.observe(stat));
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const target = parseInt(text.replace('+', ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
    }, 16);
}

/**
 * Tilt effect for cards (optional enhancement)
 */
function initTiltEffect() {
    const cards = document.querySelectorAll('.hero-card, .research-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/**
 * Typing effect for hero title (optional)
 */
function initTypingEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;

    const text = title.innerHTML;
    title.innerHTML = '';
    title.style.opacity = '1';

    let i = 0;
    const speed = 50;

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                // Handle HTML tags
                const tagEnd = text.indexOf('>', i);
                title.innerHTML += text.substring(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                title.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }

    type();
}

/**
 * Magnetic button effect
 */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

/**
 * Add visual feedback when scrolling sections
 */
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop) {
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
}

// Initialize optional enhancements
// Uncomment these to enable additional effects:
// initTiltEffect();
// initMagneticButtons();
initActiveSection();

/**
 * Cursor follower effect (optional premium feature)
 */
function initCursorFollower() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    document.body.appendChild(cursor);

    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Dot follows immediately
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

        // Ring follows with delay
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

        requestAnimationFrame(animate);
    }

    animate();

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .cursor-follower {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
            mix-blend-mode: difference;
        }
        .cursor-dot {
            position: fixed;
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            margin: -4px 0 0 -4px;
        }
        .cursor-ring {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            margin: -20px 0 0 -20px;
        }
        @media (max-width: 768px) {
            .cursor-follower { display: none; }
        }
    `;
    document.head.appendChild(style);
}

// Uncomment to enable cursor effect:
// initCursorFollower();

/**
 * Scroll progress indicator
 */
function initScrollProgress() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #E85D4C 0%, #FF7B6B 100%);
            z-index: 10001;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progress.style.width = `${scrollPercent}%`;
    });
}

initScrollProgress();

/**
 * Add loading animation
 */
function initLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Loading...</div>
        </div>
    `;
    document.body.appendChild(loader);

    const style = document.createElement('style');
    style.textContent = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #FAF6F0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100000;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        .page-loader.hidden {
            opacity: 0;
            visibility: hidden;
        }
        .loader-content {
            text-align: center;
        }
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid #E8E0D0;
            border-top-color: #E85D4C;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        .loader-text {
            font-family: 'DM Serif Display', serif;
            font-size: 1.2rem;
            color: #2D5A3D;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }, 500);
    });
}

// Initialize loader (uncomment if you want a loading screen)
// initLoader();

console.log('Portfolio initialized successfully!');
