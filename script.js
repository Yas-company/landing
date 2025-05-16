document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('.ri-menu-line').parentElement;
    const mobileMenu = document.querySelector('.md\\:hidden.absolute');
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
        } else {
            menuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
        }
    });

    // Animate on scroll
    const animateOnScroll = () => {
        // Handle feature cards and hero elements
        const animateElements = document.querySelectorAll('.feature-card, .hero-section h1, .hero-section p, .hero-section .flex, .animate-fade-in');
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-in');
            }
        });

        // Handle fade-in and fade-in-up animations
        const fadeElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    if (entry.target.classList.contains('animate-fade-in-up')) {
                        entry.target.style.transform = 'translateY(0)';
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    };

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Add staggered animation to service cards on hover
    const serviceCards = document.querySelectorAll('#services .feature-card');
    serviceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Add staggered animation to other cards
            serviceCards.forEach((otherCard, otherIndex) => {
                if (otherCard !== card) {
                    otherCard.style.transition = 'transform 0.3s ease';
                    otherCard.style.transform = 'scale(0.95)';
                    otherCard.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            // Reset other cards
            serviceCards.forEach((otherCard) => {
                otherCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                otherCard.style.transform = '';
                otherCard.style.opacity = '';
            });
        });
    });

    // Animate counter numbers
    const counterElements = document.querySelectorAll('.text-4xl.font-bold.text-primary');
    const animateCounters = () => {
        counterElements.forEach(counter => {
            const target = parseInt(counter.innerText.replace('+', ''));
            const suffix = counter.innerText.includes('+') ? '+' : '';
            let count = 0;
            const duration = 2000; // 2 seconds
            const increment = Math.ceil(target / (duration / 30));
            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    if (count > target) count = target;
                    counter.innerText = count + suffix;
                    setTimeout(updateCounter, 30);
                }
            };

            // Start animation when element is in view
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.disconnect();
                }
            }, { threshold: 0.5 });
            observer.observe(counter);
        });
    };

    // Initialize counter animation
    animateCounters();

    // Add hover animations to social icons
    const socialIcons = document.querySelectorAll('footer .flex.space-x-4 a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('animate-bounce');
            setTimeout(() => {
                icon.classList.remove('animate-bounce');
            }, 1000);
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
}); 