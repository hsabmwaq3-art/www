// Auto-generate SEO pages for better indexing
// This script will create additional pages for comprehensive SEO coverage

const emirates = [
    { name: 'dubai', arabic: 'دبي', areas: ['مارينا', 'ديرة', 'جميرا', 'وسط المدينة', 'الخليج التجاري'] },
    { name: 'abudhabi', arabic: 'أبوظبي', areas: ['وسط أبوظبي', 'جزيرة ياس', 'السعديات', 'مدينة زايد', 'مصدر'] },
    { name: 'sharjah', arabic: 'الشارقة', areas: ['وسط الشارقة', 'الماجد', 'البحيرة', 'مليحة', 'كلباء'] },
    { name: 'ajman', arabic: 'عجمان', areas: ['وسط عجمان', 'المعيريض', 'النعيمية', 'الروضة', 'مدينة عجمان'] },
    { name: 'ras-al-khaimah', arabic: 'رأس الخيمة', areas: ['وسط راك', 'جبل جيس', 'العقة', 'المعمورة', 'دقداقة'] },
    { name: 'fujairah', arabic: 'الفجيرة', areas: ['وسط الفجيرة', 'دبا', 'مسافي', 'البدية', 'الطويين'] },
    { name: 'umm-al-quwain', arabic: 'أم القيوين', areas: ['وسط أم القيوين', 'فلج المعلا', 'السلمة', 'الراشدية', 'البحرية'] }
];

const services = [
    { name: 'winch', arabic: 'ونش', description: 'خدمات الونش والطوارئ' },
    { name: 'maintenance', arabic: 'صيانة', description: 'صيانة السيارات' },
    { name: 'washing', arabic: 'غسيل', description: 'غسيل وتنظيف السيارات' },
    { name: 'oil-change', arabic: 'تغيير الزيت', description: 'تغيير زيت المحرك' },
    { name: 'battery', arabic: 'البطارية', description: 'خدمات البطارية' },
    { name: 'tire', arabic: 'الإطارات', description: 'تغيير وإصلاح الإطارات' },
    { name: 'emergency', arabic: 'طوارئ', description: 'خدمات الطوارئ' },
    { name: 'fuel', arabic: 'وقود', description: 'توصيل الوقود' },
    { name: 'lockout', arabic: 'فتح السيارات', description: 'فتح السيارات المقفلة' },
    { name: 'roadside', arabic: 'الطريق', description: 'مساعدة على الطريق' }
];

// Generate page content template
function generatePageContent(emirate, service, area = null) {
    const title = area 
        ? `${service.arabic} ${area} ${emirate.arabic} | خدمات السيارات | 0561309910`
        : `${service.arabic} ${emirate.arabic} | ${service.description} في ${emirate.arabic} | 0561309910`;
    
    const description = area
        ? `أفضل ${service.description} في ${area} ${emirate.arabic}. خدمة سريعة ومتخصصة على مدار الساعة. اتصل الآن 0561309910`
        : `${service.description} في ${emirate.arabic}. خدمة احترافية وسريعة في جميع مناطق ${emirate.arabic}. فريق متخصص 24/7`;
    
    const keywords = area
        ? `${service.arabic} ${area}, ${service.arabic} ${emirate.arabic}, خدمات السيارات ${area}, ${service.description} ${emirate.arabic}`
        : `${service.arabic} ${emirate.arabic}, ${service.description} ${emirate.arabic}, خدمات السيارات ${emirate.arabic}`;

    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <link rel="canonical" href="https://hsabmwaq3-art.github.io/www/${emirate.name}-${service.name}${area ? '-' + area.replace(/\s+/g, '-') : ''}.html">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "${service.arabic} ${emirate.arabic}",
        "description": "${description}",
        "provider": {
            "@type": "LocalBusiness",
            "name": "خدمات السيارات الإمارات",
            "telephone": "+971561309910"
        },
        "areaServed": {
            "@type": "City",
            "name": "${emirate.arabic}"
        }
    }
    </script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <h1><i class="fas fa-car"></i> ${service.arabic} ${emirate.arabic}</h1>
                </div>
                <div class="nav-links">
                    <a href="index.html">الرئيسية</a>
                    <a href="${emirate.name}.html">${emirate.arabic}</a>
                    <a href="#contact">اتصل بنا</a>
                    <a href="tel:0561309910" class="phone-btn"><i class="fas fa-phone"></i> 0561309910</a>
                </div>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>${service.description} المتخصصة في ${emirate.arabic}${area ? ' - ' + area : ''}</h1>
                <p>${description}</p>
                <div class="hero-buttons">
                    <a href="tel:0561309910" class="btn-primary">
                        <i class="fas fa-phone"></i> اطلب ${service.arabic} الآن
                    </a>
                    <a href="https://wa.me/971561309910?text=أحتاج ${service.arabic} في ${emirate.arabic}" class="btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> واتساب
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <h2>خدمات ${service.arabic} في ${emirate.arabic}</h2>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-clock"></i>
                    <h3>خدمة سريعة</h3>
                    <p>نصل إليك في أسرع وقت ممكن</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-tools"></i>
                    <h3>معدات حديثة</h3>
                    <p>نستخدم أحدث المعدات والتقنيات</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-user-tie"></i>
                    <h3>فريق متخصص</h3>
                    <p>مهندسين وفنيين ذوي خبرة عالية</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-shield-alt"></i>
                    <h3>خدمة مضمونة</h3>
                    <p>نضمن جودة الخدمة ورضا العملاء</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>اطلب ${service.arabic} في ${emirate.arabic}</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>اتصل الآن</h4>
                            <p><a href="tel:0561309910">0561309910</a></p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <div>
                            <h4>واتساب</h4>
                            <p><a href="https://wa.me/971561309910" target="_blank">تواصل فوري</a></p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>متاح</h4>
                            <p>24 ساعة، 7 أيام في الأسبوع</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${service.arabic} ${emirate.arabic}</h3>
                    <p>أفضل ${service.description} في ${emirate.arabic}. خدمة موثوقة ومتخصصة</p>
                </div>
                <div class="footer-section">
                    <h3>تواصل معنا</h3>
                    <p><i class="fas fa-phone"></i> 0561309910</p>
                    <p><i class="fab fa-whatsapp"></i> واتساب</p>
                    <p><i class="fas fa-clock"></i> خدمة 24/7</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script src="seo-analytics.js"></script>
</body>
</html>`;
}

// Generate article content for each emirate
function generateEmirateArticle(emirate) {
    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دليل خدمات السيارات في ${emirate.arabic} | معلومات شاملة | 0561309910</title>
    <meta name="description" content="دليل شامل لخدمات السيارات في ${emirate.arabic}. تاريخ، مناطق، خدمات، ونصائح مفيدة لأصحاب السيارات في ${emirate.arabic}">
    <meta name="keywords" content="خدمات السيارات ${emirate.arabic}, دليل ${emirate.arabic}, مناطق ${emirate.arabic}, تاريخ ${emirate.arabic}, سيارات ${emirate.arabic}">
    <link rel="canonical" href="https://hsabmwaq3-art.github.io/www/${emirate.name}-guide.html">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <h1><i class="fas fa-book"></i> دليل ${emirate.arabic}</h1>
                </div>
                <div class="nav-links">
                    <a href="index.html">الرئيسية</a>
                    <a href="${emirate.name}.html">${emirate.arabic}</a>
                    <a href="tel:0561309910" class="phone-btn"><i class="fas fa-phone"></i> 0561309910</a>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <article class="article-content">
            <div class="container">
                <h1>دليل شامل لخدمات السيارات في ${emirate.arabic}</h1>
                
                <section class="article-section">
                    <h2>نبذة عن ${emirate.arabic}</h2>
                    <p>تعتبر ${emirate.arabic} من أهم الإمارات في دولة الإمارات العربية المتحدة، وتتميز بتطورها العمراني وازدهارها الاقتصادي. نحن نفخر بتقديم أفضل خدمات السيارات في جميع أنحاء ${emirate.arabic}.</p>
                </section>

                <section class="article-section">
                    <h2>خدمات السيارات المتاحة في ${emirate.arabic}</h2>
                    <ul>
                        <li><strong>خدمات الونش:</strong> متاحة 24 ساعة في جميع المناطق</li>
                        <li><strong>الصيانة المتنقلة:</strong> نأتي إليك أينما كنت</li>
                        <li><strong>خدمات الطوارئ:</strong> استجابة سريعة للحالات العاجلة</li>
                        <li><strong>غسيل السيارات:</strong> خدمة منزلية متميزة</li>
                    </ul>
                </section>

                <section class="article-section">
                    <h2>المناطق المخدومة في ${emirate.arabic}</h2>
                    <div class="areas-grid">
                        ${emirate.areas.map(area => `
                            <div class="area-card">
                                <h3>${area}</h3>
                                <p>خدمات شاملة في منطقة ${area}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="article-section">
                    <h2>نصائح للعناية بالسيارة في ${emirate.arabic}</h2>
                    <p>نظراً للمناخ الصحراوي في ${emirate.arabic}، من المهم اتباع بعض النصائح للحفاظ على سيارتك:</p>
                    <ul>
                        <li>فحص دوري لنظام التبريد</li>
                        <li>تغيير الزيت بانتظام</li>
                        <li>فحص الإطارات باستمرار</li>
                        <li>حماية السيارة من أشعة الشمس</li>
                    </ul>
                </section>
            </div>
        </article>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>خدمات السيارات ${emirate.arabic}</h3>
                    <p>دليلك الشامل لخدمات السيارات في ${emirate.arabic}</p>
                </div>
                <div class="footer-section">
                    <h3>تواصل معنا</h3>
                    <p><i class="fas fa-phone"></i> 0561309910</p>
                </div>
            </div>
        </div>
    </footer>

    <style>
        .article-content {
            padding: 120px 0 80px;
            background: white;
        }
        
        .article-section {
            margin-bottom: 3rem;
        }
        
        .article-section h2 {
            color: #2c5282;
            margin-bottom: 1rem;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.5rem;
        }
        
        .areas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .area-card {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 8px;
            border-right: 4px solid #2c5282;
        }
        
        .area-card h3 {
            color: #2c5282;
            margin-bottom: 0.5rem;
        }
    </style>

    <script src="script.js"></script>
</body>
</html>`;
}

// Console log the generation plan
console.log('SEO Page Generation Plan:');
console.log('========================');
console.log(`Total Emirates: ${emirates.length}`);
console.log(`Total Services: ${services.length}`);
console.log(`Pages per emirate-service combination: ${emirates.length * services.length}`);
console.log(`Pages with area combinations: ${emirates.reduce((total, emirate) => total + (emirate.areas.length * services.length), 0)}`);
console.log(`Guide pages: ${emirates.length}`);
console.log('');
console.log('To generate all pages, you would need to create:');
emirates.forEach(emirate => {
    console.log(`\n${emirate.arabic} (${emirate.name}):`);
    services.forEach(service => {
        console.log(`  - ${emirate.name}-${service.name}.html`);
        emirate.areas.forEach(area => {
            console.log(`  - ${emirate.name}-${service.name}-${area.replace(/\s+/g, '-')}.html`);
        });
    });
    console.log(`  - ${emirate.name}-guide.html (Article)`);
});

// This would generate over 2000 pages for comprehensive SEO coverage
// Each page targets specific keywords and locations for better search ranking