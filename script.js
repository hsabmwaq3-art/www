// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .emirate-card, .contact-item');
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form form');
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'جاري الإرسال...';
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        alert('تم إرسال طلبكم بنجاح! سنتواصل معكم قريباً.');
        e.target.reset();
        
        // Redirect to WhatsApp with pre-filled message
        const message = `مرحباً، أحتاج خدمة في ${data.emirate || 'الإمارات'}\nالاسم: ${data.name || ''}\nرقم الهاتف: ${data.phone || ''}\nالوصف: ${data.message || ''}`;
        const whatsappUrl = `https://wa.me/971561309910?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
    } catch (error) {
        alert('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track phone call clicks for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_call', {
                'event_category': 'contact',
                'event_label': 'phone_number_click'
            });
        }
    });
});

// WhatsApp link click tracking
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track WhatsApp clicks for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'contact',
                'event_label': 'whatsapp_link_click'
            });
        }
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Search Functionality (for future implementation)
function searchServices(query) {
    const services = [
        'ونش دبي',
        'شقق دبي', 
        'ونش أبوظبي',
        'ونش الشارقة',
        'ونش عجمان',
        'ونش رأس الخيمة',
        'ونش الفجيرة',
        'ونش أم القيوين',
        'صيانة السيارات',
        'خدمات الطوارئ'
    ];
    
    return services.filter(service => 
        service.toLowerCase().includes(query.toLowerCase())
    );
}

// Dynamic Content Loading for SEO
function loadEmirateContent(emirate) {
    const contents = {
        'dubai': {
            title: 'خدمات السيارات في دبي',
            description: 'أفضل خدمات الونش والصيانة في دبي',
            keywords: 'ونش دبي, صيانة السيارات دبي, خدمات السيارات دبي'
        },
        'abudhabi': {
            title: 'خدمات السيارات في أبوظبي',
            description: 'خدمات متخصصة للسيارات في العاصمة أبوظبي',
            keywords: 'ونش أبوظبي, صيانة السيارات أبوظبي, خدمات السيارات أبوظبي'
        },
        'sharjah': {
            title: 'خدمات السيارات في الشارقة',
            description: 'خدمات شاملة للسيارات في إمارة الشارقة',
            keywords: 'ونش الشارقة, صيانة السيارات الشارقة, خدمات السيارات الشارقة'
        }
    };
    
    return contents[emirate] || contents['dubai'];
}

// Emergency Contact Button
function createEmergencyButton() {
    const emergencyBtn = document.createElement('div');
    emergencyBtn.className = 'emergency-btn';
    emergencyBtn.innerHTML = `
        <a href="tel:0561309910" class="emergency-link">
            <i class="fas fa-phone"></i>
            <span>طوارئ</span>
        </a>
    `;
    
    // Add emergency button styles
    const style = document.createElement('style');
    style.textContent = `
        .emergency-btn {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            animation: pulse 2s infinite;
        }
        
        .emergency-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            background: #e53e3e;
            color: white;
            border-radius: 50%;
            text-decoration: none;
            box-shadow: 0 4px 20px rgba(229, 62, 62, 0.4);
            transition: all 0.3s ease;
        }
        
        .emergency-link:hover {
            background: #c53030;
            transform: scale(1.1);
        }
        
        .emergency-link i {
            font-size: 1.2rem;
            margin-bottom: 2px;
        }
        
        .emergency-link span {
            font-size: 0.7rem;
            font-weight: 600;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(229, 62, 62, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(229, 62, 62, 0); }
            100% { box-shadow: 0 0 0 0 rgba(229, 62, 62, 0); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(emergencyBtn);
}

// Initialize emergency button
document.addEventListener('DOMContentLoaded', createEmergencyButton);

// Service Worker Registration for PWA (Progressive Web App)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance Monitoring
window.addEventListener('load', () => {
    // Monitor page load performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            console.log(`Page load time: ${loadTime}ms`);
            
            // Send to analytics if load time is too high
            if (loadTime > 3000) {
                console.warn('Page load time is above 3 seconds');
            }
        }
    }
});

// Auto-scroll to top button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 100px;
            left: 20px;
            width: 50px;
            height: 50px;
            background: #2c5282;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background: #1a365d;
            transform: translateY(-2px);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);