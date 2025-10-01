// Google Analytics 4 (GA4) Configuration
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX', {
    custom_map: {
        'custom_parameter_1': 'emirate',
        'custom_parameter_2': 'service_type'
    }
});

// Google Tag Manager (Optional)
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');

// SEO and Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    
    // Track page load time for SEO
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        gtag('event', 'page_load_time', {
            'custom_parameter_1': Math.round(loadTime / 1000),
            'event_category': 'performance'
        });
    });

    // Track scroll depth for user engagement
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track every 25%
                gtag('event', 'scroll_depth', {
                    'custom_parameter_1': maxScroll,
                    'event_category': 'engagement'
                });
            }
        }
    });

    // Enhanced phone number tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'phone_call', {
                'event_category': 'contact',
                'event_label': 'phone_number_click',
                'custom_parameter_1': window.location.pathname
            });
        });
    });

    // WhatsApp tracking with message content
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'whatsapp_click', {
                'event_category': 'contact',
                'event_label': 'whatsapp_link_click',
                'custom_parameter_1': window.location.pathname
            });
        });
    });

    // Form submission tracking
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            gtag('event', 'form_submit', {
                'event_category': 'lead_generation',
                'event_label': 'contact_form',
                'custom_parameter_1': window.location.pathname
            });
        });
    });

    // Service card click tracking
    document.querySelectorAll('.service-card a, .emirate-card a').forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'service_click', {
                'event_category': 'navigation',
                'event_label': this.textContent.trim(),
                'custom_parameter_1': window.location.pathname
            });
        });
    });
});

// Generate and inject structured data for current page
function generatePageStructuredData() {
    const pageTitle = document.title;
    const pageDescription = document.querySelector('meta[name="description"]')?.content || '';
    const currentURL = window.location.href;
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageTitle,
        "description": pageDescription,
        "url": currentURL,
        "inLanguage": "ar",
        "isPartOf": {
            "@type": "WebSite",
            "name": "خدمات السيارات الإمارات",
            "url": "https://hsabmwaq3-art.github.io/www/"
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": generateBreadcrumbs()
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Generate breadcrumb structured data
function generateBreadcrumbs() {
    const pathSegments = window.location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://hsabmwaq3-art.github.io/www/"
    }];

    pathSegments.forEach((segment, index) => {
        const position = index + 2;
        const name = getPageNameFromSegment(segment);
        const url = `https://hsabmwaq3-art.github.io/www/${pathSegments.slice(0, index + 1).join('/')}`;
        
        breadcrumbs.push({
            "@type": "ListItem",
            "position": position,
            "name": name,
            "item": url
        });
    });

    return breadcrumbs;
}

// Map URL segments to Arabic names
function getPageNameFromSegment(segment) {
    const pageNames = {
        'dubai-winch.html': 'ونش دبي',
        'dubai-apartments.html': 'شقق دبي',
        'dubai.html': 'دبي',
        'abudhabi.html': 'أبوظبي',
        'sharjah.html': 'الشارقة',
        'ajman.html': 'عجمان',
        'ras-al-khaimah.html': 'رأس الخيمة',
        'fujairah.html': 'الفجيرة',
        'umm-al-quwain.html': 'أم القيوين',
        'car-maintenance.html': 'صيانة السيارات',
        'emergency-services.html': 'خدمات الطوارئ'
    };
    
    return pageNames[segment] || segment;
}

// Core Web Vitals monitoring for SEO
function monitorCoreWebVitals() {
    // Import web-vitals library dynamically
    import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        
        getCLS((metric) => {
            gtag('event', 'web_vitals', {
                'event_category': 'performance',
                'event_label': 'CLS',
                'custom_parameter_1': metric.value,
                'custom_parameter_2': metric.rating
            });
        });

        getFID((metric) => {
            gtag('event', 'web_vitals', {
                'event_category': 'performance',
                'event_label': 'FID',
                'custom_parameter_1': metric.value,
                'custom_parameter_2': metric.rating
            });
        });

        getFCP((metric) => {
            gtag('event', 'web_vitals', {
                'event_category': 'performance',
                'event_label': 'FCP',
                'custom_parameter_1': metric.value,
                'custom_parameter_2': metric.rating
            });
        });

        getLCP((metric) => {
            gtag('event', 'web_vitals', {
                'event_category': 'performance',
                'event_label': 'LCP',
                'custom_parameter_1': metric.value,
                'custom_parameter_2': metric.rating
            });
        });

        getTTFB((metric) => {
            gtag('event', 'web_vitals', {
                'event_category': 'performance',
                'event_label': 'TTFB',
                'custom_parameter_1': metric.value,
                'custom_parameter_2': metric.rating
            });
        });
    }).catch(err => {
        console.log('Web Vitals library not loaded:', err);
    });
}

// Search Console indexing request (for new pages)
function requestGoogleIndexing(url) {
    // This would typically be done server-side with Google Search Console API
    // For client-side, we can track new page visits for manual indexing
    if (document.referrer === '') {
        gtag('event', 'new_page_visit', {
            'event_category': 'indexing',
            'event_label': url,
            'custom_parameter_1': 'direct_visit'
        });
    }
}

// Initialize SEO features
document.addEventListener('DOMContentLoaded', function() {
    generatePageStructuredData();
    monitorCoreWebVitals();
    requestGoogleIndexing(window.location.href);
    
    // Add missing alt attributes to images for SEO
    document.querySelectorAll('img:not([alt])').forEach(img => {
        const src = img.src;
        const filename = src.split('/').pop().split('.')[0];
        img.alt = `خدمات السيارات ${filename}`;
    });
    
    // Add title attributes to links for better accessibility and SEO
    document.querySelectorAll('a:not([title])').forEach(link => {
        if (link.textContent.trim()) {
            link.title = link.textContent.trim();
        }
    });
});

// Page speed optimization - preload critical resources
function preloadCriticalResources() {
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = 'styles.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
    
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap';
    criticalFont.as = 'style';
    document.head.appendChild(criticalFont);
}

// Call preload function
preloadCriticalResources();

// Service Worker for better SEO and performance
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
                gtag('event', 'service_worker', {
                    'event_category': 'performance',
                    'event_label': 'registered'
                });
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}