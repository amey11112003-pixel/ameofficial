/**
 * ===================================================================
 * AME PORTFOLIO - SHARED CONTROLLER (Theme & Dual-Language i18n)
 * Handles Dark/Light mode and Arabic/English synchronization
 * across all sub-pages (Video, Voice, Design, Social)
 * ===================================================================
 */

(function () {
  'use strict';

  // -----------------------------------------------------------------
  // 1. I18N DICTIONARY FOR SUB-PAGES
  // -----------------------------------------------------------------
  const subTranslations = {
    ar: {
      // Header & Navigation
      "nav_back": "رجوع",
      "back_services_title": "الرجوع لقسم الخدمات والأعمال",
      "back_home": "الرئيسية",
      "back_home_title": "الذهاب للصفحة الرئيسية",
      "theme_dark": "داكن",
      "theme_light": "فاتح",

      // Floating Contact
      "contact_hint": "عجبك الشغل؟ كلمني مباشرة",
      "contact_btn": "تواصل معنا",

      // Video Page (portfolio-video.html)
      "video_page_title": "أعمال مونتاج الفيديو | Ahmed Mohamed (AME)",
      "video_tag": "أعمالي في",
      "video_title": "مونتاج الفيديو",
      "video_subtitle": "Video Editing & Visual Storytelling",
      "video_desc": "أعمال مونتاج احترافية تشمل فلوجات صناع المحتوى، إعلانات المنتجات، تغطيات الحفلات، والمناسبات بإيقاع بصري يخطف الأنظار",
      "video_stat1": "<strong>20</strong> عملاً مكتملاً",
      "video_stat2": "<strong>6</strong> مجالات وتصنيفات",
      "video_stat3": "مشاهدة مباشرة <strong>Direct In-Page Player</strong>",
      "video_note": "اضغط على أي فيديو لمشاهدته فوراً داخل الموقع بجودة عالية",
      "video_filter_all": "الكل",
      "video_filter_vlogger": "🎬 فلوجر وصناع محتوى",
      "video_filter_music": "🎸 فرقة بصمة",
      "video_filter_ads": "📢 إعلانات وبرومو",
      "video_filter_wedding": "💍 مناسبات وأفراح",
      "video_filter_intro": "🎙️ مقدمات وإنترو",
      "video_filter_info": "💡 تثقيفي ورياضي",
      "video_watch_now": "مشاهدة الفيديو",
      "video_whatsapp": "تواصل معي بخصوص هذا العمل",
      "video_modal_title": "مشغل الفيديو الاحترافي",
      "video_modal_quality": "جودة فائقة HD",
      "video_modal_direct": "مشاهدة مباشرة",
      "video_modal_copy": "نسخ الرابط",
      "video_modal_close": "إغلاق",
      "video_toast_copy": "تم نسخ رابط الفيديو المباشر بنجاح! 📋",

      // Voice Page (portfolio-voice.html)
      "voice_page_title": "أعمال فويس أوفر | Ahmed Mohamed (AME)",
      "voice_tag": "أعمالي في",
      "voice_title": "فويس أوفر",
      "voice_subtitle": "Voice Over & Audio Production",
      "voice_desc": "تسجيلات صوتية احترافية تتنوع بين السرد السينمائي، الإعلانات المشوّقة، وشروحات الألعاب بنبرة متقنة وأداء استثنائي",
      "voice_stat1": "<strong>19</strong> عملاً مسجلاً",
      "voice_stat2": "<strong>5</strong> تخصصات ومجالات",
      "voice_stat3": "جودة استوديو احترافية <strong>Studio Mastered</strong>",
      "voice_filter_all": "الكل",
      "voice_filter_film": "🎙️ أفلام قصيرة ووثائقي",
      "voice_filter_game": "🎮 شروحات ألعاب",
      "voice_filter_story": "📖 سرد قصصي",
      "voice_filter_ads": "📢 إعلانات تجارية",
      "voice_filter_social": "⚡ ريلز وسوشيال",
      "voice_listen": "استماع للمقطع",
      "voice_whatsapp": "تواصل معي بخصوص هذا العمل",
      "voice_modal_title": "مشغل الفويس أوفر الاحترافي",
      "voice_modal_quality": "استوديو احترافي HD",
      "voice_modal_direct": "استماع مباشر",
      "voice_modal_copy": "نسخ الرابط",
      "voice_modal_close": "إغلاق",
      "voice_toast_copy": "تم نسخ رابط الفويس أوفر بنجاح! 📋",

      // Design Page (portfolio-design.html)
      "design_page_title": "أعمال جرافيك ديزاين | Ahmed Mohamed (AME)",
      "design_tag": "أعمالي في",
      "design_title": "جرافيك ديزاين",
      "design_subtitle": "Graphic Design & Visual Identity",
      "design_desc": "بوستات احترافية · إعلانات · هويات بصرية · حملات تسويقية مبتكرة",
      "design_tag_logos": "تصميم شعارات وهوية بصرية",
      "design_title_logos": "تصميم الشعارات | Logo Design",
      "design_sub_logos": "مجموعة شعارات احترافية للعلامات التجارية والأنشطة المختلفة (25 لوجو حصري)",
      "logo_khotwa_cat": "خدمات عامة",
      "logo_lamsa_cat": "ديكور وتصميم داخلي",
      "logo_betna_cat": "خدمات منزلية",
      "logo_lokma_cat": "مطعم مصري",
      "logo_hekaya_cat": "هدايا وLifestyle",
      "logo_eish_cat": "مخبز مصري",
      "logo_sekka_cat": "سفر / توصيل / تنقل",
      "logo_beit_cat": "أثاث وتصميم داخلي",
      "logo_sohab_cat": "كافيه وLifestyle",
      "logo_alaallah_cat": "ملابس Streetwear",
      "logo_tamam_cat": "منصة خدمات رقمية",
      "logo_habba_cat": "منتجات غذائية طبيعية",
      "logo_dar_cat": "عقارات وأثاث فاخر",
      "logo_fasel_cat": "وكالة إبداعية وتصميم",
      "logo_alaelmashy_cat": "كافيه ووجبات سريعة",
      "logo_wostelbalad_cat": "لايف ستايل مصري / ثقافة المدينة",
      "logo_awelha_cat": "ستارت أب وخدمات أعمال",
      "logo_mazaag_cat": "كافيه ولايف ستايل",
      "logo_habbababba_cat": "تعليم وتطوير شخصي",
      "logo_fatta_cat": "مطعم أكل مصري",
      "logo_zaad_cat": "مطعم / براند أكل فاخر",
      "logo_sohba_cat": "مطعم اجتماعي وكاجوال",
      "logo_dowra_cat": "مطعم",
      "logo_nabd_cat": "تكنولوجيا / AI",
      "logo_loulou_cat": "مجوهرات فاخرة",
      "logo_whatsapp_cta": "تواصل بخصوص هذا اللوجو",
      "design_whatsapp_cta_logos": "تواصل معي بخصوص تصميم لوجو",
      "design_tag_sana": "براند عطور سعودي",
      "design_sub_sana": "Saudi Perfume Brand",
      "design_tag_aqari": "تطوير عقاري",
      "design_sub_aqari": "Real Estate Development Company",
      "design_tag_mahwar": "خدمات سيارات فارهة",
      "design_sub_mahwar": "Luxury Automotive Services",
      "design_tag_carcare": "حماية وتعديل سيارات",
      "design_sub_carcare": "Automotive Protection & Detailing",
      "design_tag_lamar": "براند ذهب ومجوهرات",
      "design_sub_lamar": "Gold & Jewelry Brand",
      "design_tag_vitapulse": "مشروبات صحية وطاقة",
      "design_sub_vitapulse": "Health & Energy Drinks",
      "design_tag_velora": "شوكولاتة سويسرية فاخرة",
      "design_sub_velora": "Luxury Artisan Chocolate",
      "design_tag_rizq": "سلسلة مطاعم مأكولات بحرية",
      "design_sub_rizq": "Fresh Seafood Chain",
      "design_tag_hetta": "سلسلة مطاعم بيتزا إيطالية",
      "design_sub_hetta": "Artisan Italian Pizza",
      "design_tag_elgaan": "مطعم برجر وسندوتشات",
      "design_sub_elgaan": "Gourmet Burger & Street Food",
      "design_tag_halawetna": "حلويات شرقية وغربية",
      "design_sub_halawetna": "Authentic Sweets & Pastries",
      "design_tag_shifaa": "مركز طبي وعيادات متخصصة",
      "design_sub_shifaa": "Specialized Medical Center",
      "design_tag_nazra": "براند نظارات وبصريات",
      "design_sub_nazra": "Eyewear & Sunglasses",
      "design_tag_slimlab": "مكملات غذائية ورشاقة",
      "design_sub_slimlab": "Fitness & Nutrition Supplements",
      "design_tag_dg": "مستلزمات منزلية ومفروشات",
      "design_sub_dg": "Home Decor & Furnishings",
      "design_tag_re7letak": "تطبيق وموقع حجز رحلات",
      "design_sub_re7letak": "Travel & Tourism Platform",
      "design_tag_rehla": "رحلات سياحية وترفيهية",
      "design_sub_rehla": "Tourism & Group Trips",
      "design_tag_alrehab": "مركز أشعة وتحاليل طبية",
      "design_sub_alrehab": "Diagnostic Radiology & Lab",
      "design_tag_levelup": "متجر ألعاب وأجهزة كمبيوتر",
      "design_sub_levelup": "Gaming Store & PC Hardware",
      "design_tag_gym": "جيم ولياقة بدنية",
      "design_sub_gym": "Fitness & Bodybuilding Club",
      "design_tag_glow": "عيادة جلدية وتجميل",
      "design_sub_glow": "Dermatology & Aesthetic Clinic",
      "design_tag_zero": "براند ملابس ستريت وير",
      "design_sub_zero": "Urban Streetwear Apparel",
      "design_tag_barber": "صالون حلاقة وعناية رجالية",
      "design_sub_barber": "Premium Barber & Grooming",
      "design_tag_coffee": "كافيه ومحمصة قهوة مختصة",
      "design_sub_coffee": "Specialty Coffee & Roastery",
      "design_tag_dental": "عيادات طب وجراحة الأسنان",
      "design_sub_dental": "Dental Care & Implantology",
      "design_whatsapp_cta": "تواصل معي بخصوص هذا التصميم",

      // Social Page (portfolio-social.html)
      "social_page_title": "أعمال إدارة السوشيال ميديا | Ahmed Mohamed (AME)",
      "social_tag": "أعمالي في",
      "social_title": "إدارة السوشيال ميديا",
      "social_subtitle": "Social Media Management",
      "social_desc": "إدارة الصفحات · صناعة المحتوى · النشر · المتابعة",
      "social_cs_title": "قريباً",
      "social_cs_desc": "يتم الآن تجهيز الأعمال وإضافتها. سيتم عرض أعمال إدارة صفحات السوشيال ميديا هنا قريباً.",
      "social_cs_cta": "تواصل معي الآن",
      "footer_rights": "جميع الحقوق محفوظة"
    },

    en: {
      // Header & Navigation
      "nav_back": "Back",
      "back_services_title": "Back to Services & Works",
      "back_home": "Home",
      "back_home_title": "Go to Homepage",
      "theme_dark": "Dark",
      "theme_light": "Light",

      // Floating Contact
      "contact_hint": "Like the work? Let's talk directly",
      "contact_btn": "Contact Me",

      // Video Page (portfolio-video.html)
      "video_page_title": "Video Editing Portfolio | Ahmed Mohamed (AME)",
      "video_tag": "Portfolio in",
      "video_title": "Video Editing",
      "video_subtitle": "Video Editing & Visual Storytelling",
      "video_desc": "High-impact video editing for content creators, commercials, concerts, and events crafted with captivating visual rhythm.",
      "video_stat1": "<strong>20</strong> Completed Projects",
      "video_stat2": "<strong>6</strong> Creative Categories",
      "video_stat3": "In-Page Streaming <strong>Direct Video Player</strong>",
      "video_note": "Click any video to stream instantly inside the site in Full HD",
      "video_filter_all": "All",
      "video_filter_vlogger": "🎬 Vlogger & Creators",
      "video_filter_music": "🎸 Basma Band",
      "video_filter_ads": "📢 Ads & Promos",
      "video_filter_wedding": "💍 Weddings & Events",
      "video_filter_intro": "🎙️ Intros & Openers",
      "video_filter_info": "💡 Info & Sports",
      "video_watch_now": "Watch Video",
      "video_whatsapp": "Contact about this project",
      "video_modal_title": "Cinema Video Player",
      "video_modal_quality": "Ultra HD 1080p",
      "video_modal_direct": "Direct Stream",
      "video_modal_copy": "Copy Link",
      "video_modal_close": "Close",
      "video_toast_copy": "Direct video link copied! 📋",

      // Voice Page (portfolio-voice.html)
      "voice_page_title": "Voice Over Portfolio | Ahmed Mohamed (AME)",
      "voice_tag": "Portfolio in",
      "voice_title": "Voice Over",
      "voice_subtitle": "Voice Over & Audio Production",
      "voice_desc": "Professional studio voice recordings covering cinematic storytelling, dynamic ads, and gaming tutorials with distinct character.",
      "voice_stat1": "<strong>19</strong> Recorded Tracks",
      "voice_stat2": "<strong>5</strong> Specialized Genres",
      "voice_stat3": "Professional Audio <strong>Studio Mastered</strong>",
      "voice_filter_all": "All",
      "voice_filter_film": "🎙️ Short Films & Docs",
      "voice_filter_game": "🎮 Gaming Guides",
      "voice_filter_story": "📖 Storytelling",
      "voice_filter_ads": "📢 Commercial Ads",
      "voice_filter_social": "⚡ Reels & Social",
      "voice_listen": "Listen to Track",
      "voice_whatsapp": "Contact about this project",
      "voice_modal_title": "Studio Voice Player",
      "voice_modal_quality": "Studio Mastered HD",
      "voice_modal_direct": "Direct Audio",
      "voice_modal_copy": "Copy Link",
      "voice_modal_close": "Close",
      "voice_toast_copy": "Direct voice track link copied! 📋",

      // Design Page (portfolio-design.html)
      "design_page_title": "Graphic Design Portfolio | Ahmed Mohamed (AME)",
      "design_tag": "Portfolio in",
      "design_title": "Graphic Design",
      "design_subtitle": "Graphic Design & Visual Identity",
      "design_desc": "Social Posts · Commercial Ads · Brand Identity · Creative Campaigns",
      "design_tag_logos": "Logo Design & Branding",
      "design_title_logos": "Logo Design Collection",
      "design_sub_logos": "Professional logos crafted for modern brands & diverse industries (25 Exclusive Logos)",
      "logo_khotwa_cat": "General Services",
      "logo_lamsa_cat": "Interior Design & Decor",
      "logo_betna_cat": "Home Services",
      "logo_lokma_cat": "Egyptian Restaurant",
      "logo_hekaya_cat": "Gifts & Lifestyle",
      "logo_eish_cat": "Egyptian Bakery",
      "logo_sekka_cat": "Travel & Mobility",
      "logo_beit_cat": "Furniture & Interior Design",
      "logo_sohab_cat": "Café & Lifestyle",
      "logo_alaallah_cat": "Streetwear Apparel",
      "logo_tamam_cat": "Digital Services Platform",
      "logo_habba_cat": "Natural Food Products",
      "logo_dar_cat": "Luxury Real Estate & Furniture",
      "logo_fasel_cat": "Creative & Design Agency",
      "logo_alaelmashy_cat": "Café & Fast Food",
      "logo_wostelbalad_cat": "Egyptian Lifestyle & Urban Culture",
      "logo_awelha_cat": "Startup & Business Services",
      "logo_mazaag_cat": "Café & Lifestyle",
      "logo_habbababba_cat": "Education & Personal Development",
      "logo_fatta_cat": "Egyptian Food Restaurant",
      "logo_zaad_cat": "Fine Dining & Gourmet Food Brand",
      "logo_sohba_cat": "Casual & Social Restaurant",
      "logo_dowra_cat": "Restaurant & Dining",
      "logo_nabd_cat": "Technology & AI Solutions",
      "logo_loulou_cat": "Luxury Fine Jewelry",
      "logo_whatsapp_cta": "Contact about this logo",
      "design_whatsapp_cta_logos": "Contact me for Logo Design",
      "design_tag_sana": "Saudi Perfume Brand",
      "design_sub_sana": "Saudi Perfume Brand",
      "design_tag_aqari": "Real Estate Development",
      "design_sub_aqari": "Real Estate Development Company",
      "design_tag_mahwar": "Luxury Automotive Services",
      "design_sub_mahwar": "Luxury Automotive Services",
      "design_tag_carcare": "Auto Detailing & Protection",
      "design_sub_carcare": "Automotive Protection & Detailing",
      "design_tag_lamar": "Gold & Fine Jewelry",
      "design_sub_lamar": "Gold & Jewelry Brand",
      "design_tag_vitapulse": "Health & Energy Beverages",
      "design_sub_vitapulse": "Health & Energy Drinks",
      "design_tag_velora": "Artisan Swiss Chocolate",
      "design_sub_velora": "Luxury Artisan Chocolate",
      "design_tag_rizq": "Seafood Restaurant Chain",
      "design_sub_rizq": "Fresh Seafood Chain",
      "design_tag_hetta": "Italian Artisan Pizza",
      "design_sub_hetta": "Artisan Italian Pizza",
      "design_tag_elgaan": "Gourmet Burger & Street Food",
      "design_sub_elgaan": "Gourmet Burger & Street Food",
      "design_tag_halawetna": "Traditional & Western Sweets",
      "design_sub_halawetna": "Authentic Sweets & Pastries",
      "design_tag_shifaa": "Specialized Medical Clinic",
      "design_sub_shifaa": "Specialized Medical Center",
      "design_tag_nazra": "Eyewear & Opticals",
      "design_sub_nazra": "Eyewear & Sunglasses",
      "design_tag_slimlab": "Fitness & Health Supplements",
      "design_sub_slimlab": "Fitness & Nutrition Supplements",
      "design_tag_dg": "Home Decor & Furnishings",
      "design_sub_dg": "Home Decor & Furnishings",
      "design_tag_re7letak": "Travel Booking Platform",
      "design_sub_re7letak": "Travel & Tourism Platform",
      "design_tag_rehla": "Tourism & Leisure Trips",
      "design_sub_rehla": "Tourism & Group Trips",
      "design_tag_alrehab": "Diagnostic Radiology Lab",
      "design_sub_alrehab": "Diagnostic Radiology & Lab",
      "design_tag_levelup": "Gaming Store & PC Hardware",
      "design_sub_levelup": "Gaming Store & PC Hardware",
      "design_tag_gym": "Fitness & Bodybuilding Gym",
      "design_sub_gym": "Fitness & Bodybuilding Club",
      "design_tag_glow": "Aesthetic & Skin Care Clinic",
      "design_sub_glow": "Dermatology & Aesthetic Clinic",
      "design_tag_zero": "Urban Streetwear Brand",
      "design_sub_zero": "Urban Streetwear Apparel",
      "design_tag_barber": "Premium Men's Grooming",
      "design_sub_barber": "Premium Barber & Grooming",
      "design_tag_coffee": "Specialty Coffee Roastery",
      "design_sub_coffee": "Specialty Coffee & Roastery",
      "design_tag_dental": "Dental Surgery & Care",
      "design_sub_dental": "Dental Care & Implantology",
      "design_whatsapp_cta": "Contact me about this design",

      // Social Page (portfolio-social.html)
      "social_page_title": "Social Media Management | Ahmed Mohamed (AME)",
      "social_tag": "Portfolio in",
      "social_title": "Social Media Management",
      "social_subtitle": "Social Media Management",
      "social_desc": "Page Growth · Content Strategy · Publishing · Community Engagement",
      "social_cs_title": "Coming Soon",
      "social_cs_desc": "Showcases are currently being prepared. Social media management projects will be displayed here soon.",
      "social_cs_cta": "Contact Me Now",
      "footer_rights": "All rights reserved"
    }
  };

  // -----------------------------------------------------------------
  // 2. STATE MANAGEMENT (Synchronized with localStorage)
  // -----------------------------------------------------------------
  let currentTheme = localStorage.getItem('ame_portfolio_theme') || 'dark';
  let currentLang = localStorage.getItem('ame_portfolio_lang') || 'ar';

  // SVG Icons for Theme Toggle
  const iconSun = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const iconMoon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  // -----------------------------------------------------------------
  // 3. THEME MANAGEMENT
  // -----------------------------------------------------------------
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ame_portfolio_theme', theme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      const themeIcon = themeToggleBtn.querySelector('.theme-icon');
      const themeLabel = themeToggleBtn.querySelector('.theme-label');

      if (theme === 'light') {
        if (themeIcon) themeIcon.innerHTML = iconMoon;
        if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'داكن' : 'Dark';
        themeToggleBtn.setAttribute('title', currentLang === 'ar' ? 'التبديل إلى الوضع الداكن' : 'Switch to Dark Mode');
      } else {
        if (themeIcon) themeIcon.innerHTML = iconSun;
        if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'فاتح' : 'Light';
        themeToggleBtn.setAttribute('title', currentLang === 'ar' ? 'التبديل إلى الوضع الفاتح' : 'Switch to Light Mode');
      }
    }
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  // -----------------------------------------------------------------
  // 4. DUAL LANGUAGE I18N MANAGEMENT
  // -----------------------------------------------------------------
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('ame_portfolio_lang', lang);

    // Update active state on language pills
    const allLangBtns = document.querySelectorAll('[data-lang]');
    allLangBtns.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update Theme Toggle label
    applyTheme(currentTheme);

    // Translate all [data-i18n] text elements
    const dict = subTranslations[lang] || subTranslations.ar;
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate all [data-i18n-html] elements
    const i18nHtmlElements = document.querySelectorAll('[data-i18n-html]');
    i18nHtmlElements.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate page <title> if mapped
    const pagePath = window.location.pathname.toLowerCase();
    if (pagePath.includes('video') && dict.video_page_title) {
      document.title = dict.video_page_title;
    } else if (pagePath.includes('voice') && dict.voice_page_title) {
      document.title = dict.voice_page_title;
    } else if (pagePath.includes('design') && dict.design_page_title) {
      document.title = dict.design_page_title;
    } else if (pagePath.includes('social') && dict.social_page_title) {
      document.title = dict.social_page_title;
    }

    // Dynamic translations for sub-page cards & filters (if not using data-i18n attributes)
    updateSubPageDynamicTexts(lang, dict);
  }

  function updateSubPageDynamicTexts(lang, dict) {
    const isEn = lang === 'en';

    // 1. Navigation buttons in header
    const backServicesBtn = document.querySelector('.back-btn-services');
    if (backServicesBtn) {
      const span = backServicesBtn.querySelector('span');
      if (span) span.textContent = dict.nav_back || (isEn ? 'Back' : 'رجوع');
      backServicesBtn.setAttribute('title', dict.back_services_title || (isEn ? 'Back to Services & Works' : 'الرجوع لقسم الخدمات والأعمال'));
    }

    const backHomeBtn = document.querySelector('.back-btn-home');
    if (backHomeBtn) {
      const span = backHomeBtn.querySelector('span');
      if (span) span.textContent = dict.back_home || (isEn ? 'Home' : 'الرئيسية');
      backHomeBtn.setAttribute('title', dict.back_home_title || (isEn ? 'Go to Homepage' : 'الذهاب للصفحة الرئيسية'));
    }

    // 2. Floating Contact Widget
    const floatingHint = document.querySelector('.floating-contact-hint span:last-child');
    if (floatingHint) floatingHint.textContent = dict.contact_hint;
    const floatingText = document.querySelector('.floating-contact-text');
    if (floatingText) floatingText.textContent = dict.contact_btn;

    // 3. Video Page specific
    const videoActionBtns = document.querySelectorAll('.video-action-play span');
    videoActionBtns.forEach(s => s.textContent = dict.video_watch_now);

    const videoTags = document.querySelectorAll('.tag-vlogger');
    videoTags.forEach(t => t.textContent = isEn ? '🎬 Vlogger & Creators' : '🎬 فلوجر وصناع محتوى');

    const musicTags = document.querySelectorAll('.tag-music');
    musicTags.forEach(t => t.textContent = isEn ? '🎸 Basma Band' : '🎸 فرقة بصمة');

    const adsTags = document.querySelectorAll('.tag-ads');
    adsTags.forEach(t => t.textContent = isEn ? '📢 Ads & Promos' : '📢 إعلانات وبرومو');

    const weddingTags = document.querySelectorAll('.tag-wedding');
    weddingTags.forEach(t => t.textContent = isEn ? '💍 Weddings & Events' : '💍 مناسبات وأفراح');

    const introTags = document.querySelectorAll('.tag-intro');
    introTags.forEach(t => t.textContent = isEn ? '🎙️ Intros & Openers' : '🎙️ مقدمات وإنترو');

    const infoTags = document.querySelectorAll('.tag-info');
    infoTags.forEach(t => t.textContent = isEn ? '💡 Info & Sports' : '💡 تثقيفي ورياضي');

    // 4. Voice Page specific
    const voiceActionBtns = document.querySelectorAll('.voice-action-preview:not(.video-action-play) span');
    voiceActionBtns.forEach(s => s.textContent = isEn ? 'Listen Track' : 'استماع للمقطع');

    // WhatsApp Action Buttons (Voice & Video)
    const cardWhatsappSpans = document.querySelectorAll('.voice-card-actions .voice-action-whatsapp span');
    cardWhatsappSpans.forEach(s => s.textContent = isEn ? 'Contact about this project' : 'تواصل معي بخصوص هذا العمل');

    // 5. Social Page specific
    const csTitle = document.querySelector('.cs-title');
    if (csTitle) csTitle.textContent = dict.social_cs_title;
    const csDesc = document.querySelector('.cs-desc');
    if (csDesc) csDesc.textContent = dict.social_cs_desc;
    const csCtaSpan = document.querySelector('.cs-cta-btn span');
    if (csCtaSpan) csCtaSpan.textContent = dict.social_cs_cta;

    // 6. Design Page specific
    const designWhatsappSpans = document.querySelectorAll('.design-whatsapp-btn span');
    designWhatsappSpans.forEach(s => s.textContent = isEn ? 'Contact me about this design' : 'تواصل معي بخصوص هذا التصميم');

    document.querySelectorAll('.project-accordion').forEach(acc => {
      const nameEl = acc.querySelector('.project-name');
      const ctaBtn = acc.querySelector('.design-whatsapp-btn');
      if (nameEl && ctaBtn) {
        const projName = nameEl.textContent.trim();
        const msg = isEn
          ? `Hello Ahmed, I'm interested in the "${projName}" graphic design project and would like to inquire about working on a similar project.`
          : `مرحباً أحمد، معجب بتصميم "${projName}" في الجرافيك ديزاين وحابب أستفسر عن تفاصيل تنفيذ مشروع مشابه`;
        ctaBtn.href = 'https://wa.me/201515409280?text=' + encodeURIComponent(msg);
      }
    });

    // 7. Logo Cards specific
    const logoWhatsappSpans = document.querySelectorAll('.logo-whatsapp-btn span');
    logoWhatsappSpans.forEach(s => s.textContent = isEn ? 'Contact about this logo' : 'تواصل بخصوص هذا اللوجو');

    document.querySelectorAll('.logo-card').forEach(card => {
      const titleEl = card.querySelector('.logo-card-title');
      const catEl = card.querySelector('.logo-category-tag');
      const btn = card.querySelector('.logo-whatsapp-btn');
      if (titleEl && btn) {
        const logoName = titleEl.textContent.trim();
        const logoCat = catEl ? catEl.textContent.trim() : '';
        const msg = isEn
          ? `Hello Ahmed, I'm interested in the "${logoName}" logo (${logoCat}) and would like to request a custom logo for my project.`
          : `مرحباً أحمد، معجب بلوجو (${logoName}) الخاص بـ (${logoCat}) وحابب أصمم لوجو لمشروعي`;
        btn.href = 'https://wa.me/201515409280?text=' + encodeURIComponent(msg);
      }
    });
  }

  // -----------------------------------------------------------------
  // 5. EVENT LISTENERS & STORAGE SYNCHRONIZATION
  // -----------------------------------------------------------------
  function bindControls() {
    // Theme Toggle Button
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.removeEventListener('click', toggleTheme);
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Language Pill Buttons
    const arBtn = document.getElementById('lang-btn-ar');
    if (arBtn) {
      arBtn.onclick = () => applyLanguage('ar');
    }

    const enBtn = document.getElementById('lang-btn-en');
    if (enBtn) {
      enBtn.onclick = () => applyLanguage('en');
    }
  }

  // Cross-tab synchronization via storage event
  window.addEventListener('storage', (e) => {
    if (e.key === 'ame_portfolio_theme' && e.newValue) {
      applyTheme(e.newValue);
    }
    if (e.key === 'ame_portfolio_lang' && e.newValue) {
      applyLanguage(e.newValue);
    }
  });

  // -----------------------------------------------------------------
  // 6. INITIALIZATION
  // -----------------------------------------------------------------
  function init() {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    bindControls();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export globally for inline triggers if needed
  window.AME_applyTheme = applyTheme;
  window.AME_applyLanguage = applyLanguage;
  window.AME_toggleTheme = toggleTheme;
})();
