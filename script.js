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

    // Intersection Observer for all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-fade-in-right, .service-card, .feature-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add appropriate animation class based on element type
                if (element.classList.contains('animate-fade-in')) {
                    element.style.opacity = '1';
                } else if (element.classList.contains('animate-fade-in-up')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                } else if (element.classList.contains('animate-fade-in-right')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                } else if (element.classList.contains('service-card')) {
                    element.classList.add('animate-in');
                } else if (element.classList.contains('feature-card')) {
                    element.classList.add('animate-in');
                }

                // Stop observing once animation is triggered
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add hover animations to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            serviceCards.forEach((otherCard, otherIndex) => {
                if (otherCard !== card) {
                    otherCard.style.transition = 'transform 0.3s ease';
                    otherCard.style.transform = 'scale(0.95)';
                    otherCard.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            serviceCards.forEach((otherCard) => {
                otherCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                otherCard.style.transform = '';
                otherCard.style.opacity = '';
            });
        });
    });

    // Animate counter numbers when in view
    const counterElements = document.querySelectorAll('.text-4xl.font-bold.text-[#13EEFF]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.innerText.replace('+', ''));
                const suffix = counter.innerText.includes('+') ? '+' : '';
                let count = 0;
                const duration = 2000;
                const increment = Math.ceil(target / (duration / 30));
                
                const updateCounter = () => {
                    if (count < target) {
                        count += increment;
                        if (count > target) count = target;
                        counter.innerText = count + suffix;
                        setTimeout(updateCounter, 30);
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => {
        counterObserver.observe(counter);
    });

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