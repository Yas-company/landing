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
    const animateElements = document.querySelectorAll('.feature-card, .hero-section h1, .hero-section p, .hero-section .flex, .animate-fade-in');
    const animateOnScroll = () => {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-in');
            }
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

    // Language translations
    const translations = {
        en: {
            nav: {
                home: "Home",
                about: "About Us",
                services: "Services",
                contact: "Contact",
                request: "Request Project"
            },
            hero: {
                title: "Transform Your Ideas into Digital Reality",
                description: "At YAS, we believe every idea deserves to be built. We're here to accompany you on your journey from the first spark to launching your software product with professionalism and high quality.",
                request: "Request Project",
                learn: "Learn More"
            },
            about: {
                title: "About Us",
                description1: "We are YAS, a software company specialized in transforming ideas into comprehensive digital solutions.",
                description2: "Our vision stems from a deep belief that every idea, no matter how simple, can make a difference if properly translated into an effective product.",
                mission: {
                    title: "Our Mission",
                    description: "We provide software development services, UI/UX design, and technical solution analysis to give our clients powerful tools that help them excel in their market. Our team consists of passionate programmers, designers, and creators who treat every project as their own."
                },
                vision: {
                    title: "Our Vision",
                    description: "We don't just build software, we build long-term partnerships, and we take pride in being part of our clients' success stories."
                },
                values: {
                    title: "Our Values",
                    excellence: {
                        title: "Excellence",
                        description: "We always strive to deliver the highest quality in every aspect of our work, from development to customer support."
                    },
                    innovation: {
                        title: "Innovation",
                        description: "We encourage creative thinking and embrace new technologies to deliver innovative solutions that exceed our clients' expectations."
                    },
                    collaboration: {
                        title: "Collaboration",
                        description: "We believe in the power of teamwork and build genuine partnerships with our clients to achieve mutual success."
                    }
                }
            },
            services: {
                title: "Powerful Features for Modern Businesses",
                description: "Our comprehensive toolkit helps you streamline workflows, improve collaboration, and drive business growth.",
                web: {
                    title: "Web Development",
                    description: "Custom responsive websites and applications built with the latest technologies to deliver exceptional user experiences."
                },
                mobile: {
                    title: "Mobile Development",
                    description: "Native and cross-platform mobile applications for iOS and Android that provide smooth performance and engaging user interfaces."
                },
                ui: {
                    title: "UI/UX Consulting",
                    description: "User-centered design solutions that enhance usability, accessibility, and visual appeal to create unforgettable digital experiences."
                },
                devops: {
                    title: "DevOps",
                    description: "Streamline your development pipeline with continuous integration, deployment automation, and infrastructure management solutions."
                },
                business: {
                    title: "Business Development",
                    description: "Strategic consulting services and digital transformation to help your business grow, improve processes, and increase market share."
                }
            },
            testimonial: {
                text: "\"Implementing this software was transformative for our business. The intuitive interface, powerful analytics, and exceptional customer support exceeded our expectations. We've seen a 30% increase in productivity since adoption.\"",
                name: "Sarah Al-Khaldi",
                position: "Technical Director, Global Innovations Company"
            },
            contact: {
                title: "Contact Us",
                description: "Get in touch with our team for any inquiries.",
                email: "Your email address",
                message: "Your message",
                send: "Send Message",
                quickLinks: "Quick Links",
                services: "Services"
            },
            footer: {
                description: "Innovative software solutions for modern businesses. We transform ideas into powerful technology since 2015.",
                copyright: "© 2025 YAS Solutions. All rights reserved.",
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                cookies: "Cookie Policy"
            }
        },
        ar: {
            nav: {
                home: "الرئيسية",
                about: "من نحن",
                services: "خدماتنا",
                contact: "اتصل بنا",
                request: "طلب مشروع"
            },
            hero: {
                title: "حوّل أفكارك إلى واقع رقمي",
                description: "في YAS، نؤمن أن كل فكرة تستحق أن تُبنى. نحن هنا لنرافقك في رحلتك من أول شرارة حتى إطلاق منتجك البرمجي باحترافية وجودة عالية.",
                request: "طلب مشروع",
                learn: "اعرف المزيد"
            },
            about: {
                title: "من نحن",
                description1: "نحن YAS، شركة برمجيات متخصصة في تحويل الأفكار إلى حلول رقمية متكاملة.",
                description2: "انطلقت رؤيتنا من إيمان عميق بأن كل فكرة، مهما كانت بسيطة، يمكن أن تُحدث فرقًا إذا تمت ترجمتها بشكل صحيح إلى منتج فعّال.",
                mission: {
                    title: "مهمتنا",
                    description: "نقدم خدمات تطوير البرمجيات، وتصميم واجهات الاستخدام، وتحليل الحلول التقنية، لنمنح عملاءنا أدوات قوية تساعدهم على التميز في سوقهم. فريقنا يضم مبرمجين ومصممين ومبدعين يعملون بشغف، ونتعامل مع كل مشروع كأنه مشروعنا الشخصي."
                },
                vision: {
                    title: "رؤيتنا",
                    description: "نحن لا نبني مجرد برمجيات، بل نبني شراكات طويلة الأمد، ونفخر بأن نكون جزءًا من قصص نجاح عملائنا."
                },
                values: {
                    title: "قيمنا",
                    excellence: {
                        title: "التميز",
                        description: "نسعى دائمًا لتقديم أعلى مستويات الجودة في كل جانب من جوانب عملنا، من التطوير إلى دعم العملاء."
                    },
                    innovation: {
                        title: "الابتكار",
                        description: "نشجع التفكير الإبداعي ونتبنى التقنيات الجديدة لتقديم حلول مبتكرة تتجاوز توقعات عملائنا."
                    },
                    collaboration: {
                        title: "التعاون",
                        description: "نؤمن بقوة العمل الجماعي ونبني علاقات شراكة حقيقية مع عملائنا لتحقيق النجاح المشترك."
                    }
                }
            },
            services: {
                title: "ميزات قوية للشركات الحديثة",
                description: "مجموعة أدواتنا الشاملة تساعدك على تبسيط سير العمل، وتحسين التعاون، ودفع نمو الأعمال.",
                web: {
                    title: "تطوير الويب",
                    description: "مواقع ويب وتطبيقات متجاوبة مخصصة مبنية بأحدث التقنيات لتقديم تجارب مستخدم استثنائية."
                },
                mobile: {
                    title: "تطوير الجوال",
                    description: "تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android توفر أداءً سلسًا وواجهات مستخدم جذابة."
                },
                ui: {
                    title: "استشارات واجهة المستخدم",
                    description: "حلول تصميم تركز على المستخدم تعزز سهولة الاستخدام وإمكانية الوصول والجاذبية البصرية لخلق تجارب رقمية لا تُنسى."
                },
                devops: {
                    title: "ديف أوبس",
                    description: "تبسيط خط إنتاج التطوير مع التكامل المستمر وأتمتة النشر وحلول إدارة البنية التحتية."
                },
                business: {
                    title: "تطوير الأعمال",
                    description: "خدمات استشارية استراتيجية وتحول رقمي لمساعدة عملك على النمو وتحسين العمليات وزيادة حصتك في السوق."
                }
            },
            testimonial: {
                text: "\"كان تنفيذ هذا البرنامج تحولًا لأعمالنا. لقد تجاوزت الواجهة البديهية والتحليلات القوية ودعم العملاء الاستثنائي توقعاتنا. لقد شهدنا زيادة بنسبة 30% في الإنتاجية منذ التبني.\"",
                name: "سارة الخالدي",
                position: "المدير التقني، شركة الابتكارات العالمية"
            },
            contact: {
                title: "اتصل بنا",
                description: "تواصل مع فريقنا لأي استفسارات.",
                email: "عنوان بريدك الإلكتروني",
                message: "رسالتك",
                send: "إرسال الرسالة",
                quickLinks: "روابط سريعة",
                services: "الخدمات"
            },
            footer: {
                description: "حلول برمجية مبتكرة للشركات الحديثة. نحول الأفكار إلى تكنولوجيا قوية منذ عام 2015.",
                copyright: "© 2025 تك سوليوشنز. جميع الحقوق محفوظة.",
                privacy: "سياسة الخصوصية",
                terms: "شروط الخدمة",
                cookies: "سياسة ملفات تعريف الارتباط"
            }
        }
    };

    // Language switching functionality
    let currentLang = localStorage.getItem('language') || 'ar'; // Get language from localStorage or default to 'ar'

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang); // Store language preference
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update language switcher text
        document.querySelectorAll('.current-lang').forEach(el => {
            el.textContent = lang === 'ar' ? 'EN' : 'AR';
        });

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let translation = translations[lang];
            
            for (const k of keys) {
                translation = translation[k];
            }
            
            if (translation) {
                el.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const keys = key.split('.');
            let translation = translations[lang];
            
            for (const k of keys) {
                translation = translation[k];
            }
            
            if (translation) {
                el.placeholder = translation;
            }
        });
    }

    // Initialize language
    updateLanguage(currentLang);

    // Add click event listeners to language switchers
    document.getElementById('language-switcher').addEventListener('click', () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        updateLanguage(newLang);
    });

    document.getElementById('mobile-language-switcher').addEventListener('click', () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        updateLanguage(newLang);
    });

    // ... rest of your existing DOMContentLoaded code ...
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