/**
 * ===================================================================
 * AHMED MOHAMED (AME) - PORTFOLIO INTERACTIVE CONTROLLER
 * Video Editor & Graphic Designer | Creative Identity: AME
 * Complete Bilingual (AR/EN), Dark/Light Theming, Filters, Modal & UX
 * ===================================================================
 */

(function () {
  'use strict';

  // -----------------------------------------------------------------
  // 1. TRANSLATION DICTIONARY (ARABIC & ENGLISH)
  // -----------------------------------------------------------------
  const translations = {
    en: {
      // Brand & Identity
      "brand.name": "Ahmed Mohamed",
      "brand.sub": "Creative Portfolio",
      "brand.mahwar": "MAHWAR — Automotive",
      "brand.aqari": "AQARY — Property",
      "brand.zero": "ZERO — Fashion",
      "brand.levelup": "LEVEL UP — Gaming",
      "brand.sana": "SANA — Fragrance",
      "brand.velora": "VELORA — Chocolate",
      "brand.vitapulse": "VITA PULSE — Beverage",
      "brand.nazra": "NAZRA — Eyewear",
      "brand.lamar": "LAMAR — Jewelry",
      "brand.rizqelbahr": "RIZQ EL BAHR — Seafood",

      // Badges & Pills
      "badge.socialDesign": "Social Media & Design",
      "badge.ratio11": "1:1 Square",
      "badge.ratio916": "9:16 Reel",
      "badge.ratio169": "16:9 Promo",
      "badge.ratioLuxury": "1:1 & 9:16",
      "badge.videoEditing": "Video Editing",
      "badge.commercialVideo": "Commercial Video",
      "badge.automotiveVideo": "Automotive Video",
      "badge.luxuryBranding": "Luxury Branding",
      "badge.aiCreative": "AI Creative",
      "badge.branding": "Branding",
      "badge.posterDesign": "Poster Design",
      "badge.reels": "Reels",
      "badge.motionGraphics": "Motion Graphics",
      "badge.colorGrading": "Color Grading",
      "badge.commercial": "Commercial",
      "badge.speedRamping": "Speed Ramping",
      "badge.soundDesign": "Sound Design",
      "badge.socialPosters": "Social Posters",
      "badge.macroVideo": "Macro Video",
      "badge.aiVisuals": "AI Visuals",
      "badge.appPromo": "App Promo",

      // Navigation
      "nav.home": "Home",
      "nav.work": "Work",
      "nav.services": "Services & Work",
      "nav.about": "About",
      "nav.skills": "Skills & Tools",
      "nav.results": "Results",
      "nav.contact": "Contact",
      "nav.letsTalk": "Let's Talk",

      // Hero
      "hero.status": "Available for New Projects",
      "hero.title": "Ahmed Mohamed",
      "hero.role": "Video Editor & Graphic Designer",
      "hero.statement": "Transforming bold concepts into unforgettable visual stories through high-impact video editing, social media design, and AI-accelerated creative direction.",
      "hero.pipeline.idea": "Idea",
      "hero.pipeline.story": "Story",
      "hero.pipeline.design": "Design",
      "hero.pipeline.editing": "Editing",
      "hero.pipeline.ai": "AI",
      "hero.pipeline.content": "Content",
      "hero.pipeline.analysis": "Analysis",
      "hero.cta.work": "Services & Work",
      "hero.cta.contact": "Let's Work Together",
      "hero.badge.video": "Video Editing",
      "hero.badge.design": "Social Media Design",
      "hero.badge.ai": "AI Creative",
      "hero.badge.motion": "Motion Graphics",
      "hero.badge.voice": "Voice Over",
      "hero.badge.story": "Visual Storytelling",
      "hero.preview.title": "AME Creative Studio",
      "hero.preview.sub": "High-End Visual Production & Direction",
      "hero.stat.years": "9+ Yrs Experience",
      "hero.stat.views": "Millions Views",
      "hero.stat.speed": "Fast Delivery",

      // Clients
      "clients.intro": "Trusted By Forward-Thinking Brands & Businesses",

      // Selected Work
      "work.tag": "Portfolio Showcase",
      "work.title": "Selected Creative Work",
      "work.subtitle": "A curated collection of short-form videos, social media campaigns, brand visuals, and AI-assisted creative projects.",
      "filter.all": "All Projects",
      "filter.video": "Video Editing",
      "filter.social": "Social Media",
      "filter.design": "Graphic Design",
      "filter.ads": "Advertising",
      "filter.ai": "AI Creative",

      // Projects
      "project.nazra.title": "Dynamic Social Eyewear Campaign",
      "project.nazra.desc": "High-engagement visual campaign featuring premium product framing, sleek typography, and social ad layouts.",
      "project.aqari.title": "Luxury Real Estate Promo Reel",
      "project.aqari.desc": "Cinematic pacing, color grading, and modern motion graphics crafted to captivate luxury property investors.",
      "project.shefaa.title": "Medical Awareness Video Series",
      "project.shefaa.desc": "Clear, informative motion design and dynamic reel editing delivering vital health insights with high retention.",
      "project.mehwar.title": "Automotive Showcase Social Feed",
      "project.mehwar.desc": "Punchy car showcase reels with speed ramps, high-energy sound design, and bold promotional banners.",
      "project.lamar.title": "Luxury Jewelry Visual Campaign",
      "project.lamar.desc": "Elegant color grading and high-end social media posters highlighting jewelry brilliance and craftsmanship.",
      "project.tawseela.title": "Smart Transportation Launch Ad",
      "project.tawseela.desc": "Fast-paced promo video combining dynamic motion graphics, sound effects, and AI-generated lifestyle visuals.",
      "project.btn.caseStudy": "View Case Study",

      // Services
      "services.tag": "What I Do Best",
      "services.title": "Services & Work",
      "services.subtitle": "From raw ideas to viral-ready visual content. Comprehensive creative execution built for speed, emotion, and client conversion.",
      "services.simple.videoTags": "Reels <span class=\"bullet-dot\">•</span> Long-form Videos <span class=\"bullet-dot\">•</span> Ads <span class=\"bullet-dot\">•</span> Social Media",
      "services.simple.designTags": "Posts <span class=\"bullet-dot\">•</span> Ads <span class=\"bullet-dot\">•</span> Visual Identities <span class=\"bullet-dot\">•</span> Campaigns",
      "services.simple.voiceTags": "Ads <span class=\"bullet-dot\">•</span> Reels <span class=\"bullet-dot\">•</span> Videos <span class=\"bullet-dot\">•</span> Voiceover",
      "services.simple.socialTags": "Page Management <span class=\"bullet-dot\">•</span> Content Creation <span class=\"bullet-dot\">•</span> Publishing <span class=\"bullet-dot\">•</span> Monitoring",
      "services.social.contactBtn": "Contact Us to Learn More",
      "services.social.p1": "Page Management",
      "services.social.p1Sub": "Full Strategy & Account Organization",
      "services.social.p2": "Content Creation",
      "services.social.p2Sub": "Creative Ideas, Copywriting & Scripts",
      "services.social.p3": "Publishing",
      "services.social.p3Sub": "Strategic Scheduling & Best Timing",
      "services.social.p4": "Monitoring",
      "services.social.p4Sub": "Analytics & Continuous Engagement",

      // About Me
      "about.tag": "My Creative Journey",
      "about.title": "Behind The Screen: Story, Passion & Vision",
      "about.subtitle": "How a curiosity for storytelling in 2017 grew into a dedicated career in visual creation.",
      "about.card.role": "Creative Director & Visual Storyteller",
      "about.quote": "\"I don't create visual work merely because it is a job. I create because I genuinely love the craft, the rhythm, and the emotional connection it sparks with an audience.\"",
      "about.pillar.speed": "Fast Turnaround",
      "about.pillar.quality": "Zero Quality Sacrifice",
      "about.pillar.story": "Story-Driven",
      "about.pillar.ai": "AI-Accelerated",
      "about.heading": "From Stage Acting to Visual Mastery",
      "about.p1": "Ahmed Mohamed began his creative journey in 2017, initially producing personal social media videos, comedic sketches, and experimental short-form content. While performing in front of the camera was fun, he quickly discovered a much deeper fascination: the intricate craft happening behind the scenes.",
      "about.p2": "The rhythm of video cuts, the emotional resonance of sound design, the psychology of color, and the subtle visual cues in graphic design captivated him. With a strong foundation in theatrical stage acting, Ahmed developed an intuitive understanding of human emotion, dramatic pacing, and audience engagement.",
      "about.highlight.title": "The Acting Advantage in Visual Design",
      "about.highlight.desc": "Acting taught Ahmed how to convey a message in seconds. This unique perspective allows him to direct and edit visuals that don't just look pretty—they tell a story that makes people feel and take action.",



      // Skills & Tools
      "skills.tag": "Technical Mastery",
      "skills.title": "Tools & Technologies",
      "skills.subtitle": "A transparent overview of the software and AI systems Ahmed utilizes daily to craft high-impact visuals.",
      "skills.group1.title": "Editing & Design Software",
      "skills.group2.title": "AI & Generative Tools",
      "skills.tag.learning": "Currently Learning",
      "skills.note1": "Ahmed utilizes DaVinci Resolve and Premiere Pro for high-level commercial editing, Photoshop for precision design, and is actively expanding skills in Adobe After Effects.",
      "skills.note2": "Ahmed leverages leading generative AI engines (ChatGPT, Claude, Grok, Gemini, and Midjourney) as creative co-pilots for ideation, copywriting, storyboarding, and visual exploration.",

      // Results & Credibility
      "results.tag": "Proven Milestones",
      "results.title": "Results & Credibility",
      "results.subtitle": "Verifiable track record built over years of dedicated creative work and brand partnerships.",
      "results.stat1.num": "2017",
      "results.stat1.title": "Journey Began",
      "results.stat1.desc": "Started creating visual content, sketches, and learning digital editing.",
      "results.stat2.num": "9+ Yrs",
      "results.stat2.title": "Creative Evolution",
      "results.stat2.desc": "Years of continuous learning, tool mastery, and visual design growth.",
      "results.stat3.num": "Millions",
      "results.stat3.title": "Total Video Views",
      "results.stat3.desc": "Generated across content produced, edited, and directed for client brands.",
      "results.stat4.num": "100K+",
      "results.stat4.title": "Audience Reach",
      "results.stat4.desc": "Followers grown and engaged across managed client social channels.",
      "results.stat5.num": "Multiple",
      "results.stat5.title": "Trusted Brands",
      "results.stat5.desc": "Successful creative collaborations across diverse commercial sectors.",

      // Future Vision
      "vision.tag": "Vision & Ambition",
      "vision.title": "Building The Future of Creative Production",
      "vision.text": "Ahmed Mohamed is on a clear mission. Over the next year, he is establishing a full-service creative agency. His long-term goal is to build one of the premier creative powerhouses in the Arab world and Middle East—empowering brands through world-class visual storytelling.",
      "vision.goal1": "Next Milestone: Launch Creative Studio",
      "vision.goal2": "Long-Term Goal: Premier Arab Creative House",

      // Contact
      "contact.tag": "Let's Connect",
      "contact.title": "Have a project in mind?",
      "contact.highlight": "Let's create something people remember.",
      "contact.desc": "Every project is unique. Reach out to discuss your goals, timeline, and vision, and I will prepare a customized proposal tailored to your needs.",
      "contact.pricingNote": "<strong>Transparent & Affordable:</strong> Because every video and design scope differs, pricing is customized per project to give you the highest value.",
      "contact.form.name": "Name",
      "contact.form.namePlaceholder": "Enter your name (optional)...",
      "contact.form.optional": "(optional)",
      "contact.form.service": "Project Type",
      "contact.form.serviceSelect": "-- Select Project Type (optional) --",
      "contact.form.opt1": "Video Editing",
      "contact.form.opt2": "Graphic Design",
      "contact.form.opt3": "Voice Over",
      "contact.form.opt4": "Social Media Management",
      "contact.form.opt5": "Other Project | Custom Collaboration",
      "contact.form.msg": "Project Details & Vision",
      "contact.form.msgPlaceholder": "Write your project details and ideas here (optional)...",
      "contact.form.submit": "Let's Work Together",
      "contact.toast.success": "Redirecting to WhatsApp...",

      // Footer
      "footer.tagline": "Crafting unforgettable visual stories with speed, passion, and precision.",
      "footer.col1": "Quick Navigation",
      "footer.col2": "Social Channels",
      "footer.backToTop": "Back to Top",
      "footer.rights": "All rights reserved.",

      // Modal
      "modal.close": "Close Preview",
      "modal.client": "Client:",
      "modal.role": "Role:",
      "modal.challenge": "The Challenge:",
      "modal.idea": "The Creative Concept:",
      "modal.execution": "Work Done:",
      "modal.result": "Final Outcome:",
      "modal.cta": "Request a Similar Project"
    },

    ar: {
      // Brand & Identity
      "brand.name": "أحمد محمد",
      "brand.sub": "معرض الأعمال الإبداعية",
      "brand.mahwar": "MAHWAR — Automotive",
      "brand.aqari": "AQARY — Property",
      "brand.zero": "ZERO — Fashion",
      "brand.levelup": "LEVEL UP — Gaming",
      "brand.sana": "SANA — Fragrance",
      "brand.velora": "VELORA — Chocolate",
      "brand.vitapulse": "VITA PULSE — Beverage",
      "brand.nazra": "NAZRA — Eyewear",
      "brand.lamar": "LAMAR — Jewelry",
      "brand.rizqelbahr": "RIZQ EL BAHR — Seafood",

      // Badges & Pills
      "badge.socialDesign": "سوشيال ميديا وتصميم",
      "badge.ratio11": "مربع 1:1",
      "badge.ratio916": "ريلز 9:16",
      "badge.ratio169": "برومو 16:9",
      "badge.ratioLuxury": "مربع 1:1 وريلز 9:16",
      "badge.videoEditing": "مونتاج فيديو",
      "badge.commercialVideo": "فيديو إعلاني",
      "badge.automotiveVideo": "فيديو سيارات",
      "badge.luxuryBranding": "هوية فاخرة",
      "badge.aiCreative": "إبداع بالذكاء الاصطناعي",
      "badge.branding": "هوية بصرية",
      "badge.posterDesign": "تصميم بوسترات",
      "badge.reels": "ريلز وفيديوهات قصيرة",
      "badge.motionGraphics": "موشن جرافيك",
      "badge.colorGrading": "تصحيح ألوان",
      "badge.commercial": "إعلانات تجارية",
      "badge.speedRamping": "تسريع وإبطاء احترافي",
      "badge.soundDesign": "تصميم وهندسة صوتية",
      "badge.socialPosters": "بوسترات سوشيال ميديا",
      "badge.macroVideo": "تصوير ومونتاج ماكرو",
      "badge.aiVisuals": "بصريات بالذكاء الاصطناعي",
      "badge.appPromo": "ترويج تطبيقات",

      // Navigation
      "nav.home": "الرئيسية",
      "nav.work": "الأعمال",
      "nav.services": "الخدمات والأعمال",
      "nav.about": "عن أحمد",
      "nav.skills": "المهارات والأدوات",
      "nav.results": "النتائج والخبرة",
      "nav.contact": "تواصل معي",
      "nav.letsTalk": "لنبدأ العمل",

      // Hero
      "hero.status": "متاح للمشاريع الجديدة",
      "hero.title": "أحمد محمد",
      "hero.role": "مونتير ومصمم جرافيك",
      "hero.statement": "تحويل الأفكار الملهمة إلى تجارب بصرية لا تُنسى من خلال مونتاج سينمائي عالي التأثير، تصاميم سوشيال ميديا مبتكرة، وتوجيه إبداعي مدعوم بأحدث أدوات الذكاء الاصطناعي.",
      "hero.pipeline.idea": "الفكرة",
      "hero.pipeline.story": "القصة",
      "hero.pipeline.design": "التصميم",
      "hero.pipeline.editing": "المونتاج",
      "hero.pipeline.ai": "الذكاء الاصطناعي",
      "hero.pipeline.content": "المحتوى",
      "hero.pipeline.analysis": "التحليل",
      "hero.cta.work": "الخدمات والأعمال",
      "hero.cta.contact": "دعنا نعمل معاً",
      "hero.badge.video": "مونتاج الفيديو",
      "hero.badge.design": "تصاميم السوشيال ميديا",
      "hero.badge.ai": "الإبداع بالذكاء الاصطناعي",
      "hero.badge.motion": "موشن جرافيك",
      "hero.badge.voice": "تعليق صوتي (Voice Over)",
      "hero.badge.story": "السرد القصصي البصري",
      "hero.preview.title": "الهوية الإبداعية: AME",
      "hero.preview.sub": "إنتاج وإخراج بصري احترافي متكامل",
      "hero.stat.years": "+9 سنوات خبرة وتعلّم",
      "hero.stat.views": "ملايين المشاهدات",
      "hero.stat.speed": "سرعة فائقة في التسليم",

      // Clients
      "clients.intro": "مشاريع وعلامات تجارية أبدعنا لها",

      // Selected Work
      "work.tag": "معرض الأعمال",
      "work.title": "مختارات من الأعمال الإبداعية",
      "work.subtitle": "مجموعة مختارة من فيديوهات الريلز، حملات السوشيال ميديا، الهويات البصرية، والمشاريع الإبداعية المدعومة بالذكاء الاصطناعي.",
      "filter.all": "جميع المشاريع",
      "filter.video": "مونتاج فيديو",
      "filter.social": "سوشيال ميديا",
      "filter.design": "تصميم جرافيك",
      "filter.ads": "إعلانات تجارية",
      "filter.ai": "إبداع الذكاء الاصطناعي",

      // Projects
      "project.nazra.title": "حملة بصرية متكاملة لنظارات عصرية",
      "project.nazra.desc": "حملة تفاعلية تتميز بإبراز جماليات المنتجات، خطوط أنيقة، وتنسيقات إعلانية مخصصة لرفع المبيعات.",
      "project.aqari.title": "فيديو ترويجي سينمائي لمشاريع عقارية فاخرة",
      "project.aqari.desc": "مونتاج سينمائي مدروس مع تصحيح ألوان دقيق ومؤثرات موشن جرافيك لجذب المستثمرين والعملاء.",
      "project.shefaa.title": "سلسلة فيديوهات توعوية طبية بأسلوب ريلز",
      "project.shefaa.desc": "موشن جرافيك مبسط ومونتاج ديناميكي يقدم معلومات طبية موثوقة بنسبة احتفاظ عالية بالمشاهدين.",
      "project.mehwar.title": "محتوى إعلاني بصري لتجارة السيارات",
      "project.mehwar.desc": "فيديوهات ريلز حماسية مع تسريع وإبطاء احترافي (Speed Ramping) وتصميم صوتي قوي وبوسترات لافتة.",
      "project.lamar.title": "حملة مجوهرات فاخرة وتصاميم سوشيال ميديا",
      "project.lamar.desc": "تدرجات ألوان فخمة وبوسترات راقية تبرز بريق القطع ودقة التفاصيل الحرفية.",
      "project.tawseela.title": "إعلان إطلاق خدمات النقل الذكي",
      "project.tawseela.desc": "فيديو إعلاني سريع يجمع بين الموشن جرافيك، المؤثرات الصوتية، والعناصر البصرية المدعومة بالذكاء الاصطناعي.",
      "project.btn.caseStudy": "تفاصيل المشروع",

      // Services
      "services.tag": "الخدمات الإبداعية",
      "services.title": "الخدمات والأعمال",
      "services.subtitle": "تنفيذ احترافي يجمع بين السرعة، الجودة، والتأثير العاطفي.",
      "services.simple.videoTags": "ريلز <span class=\"bullet-dot\">•</span> فيديوهات طويلة <span class=\"bullet-dot\">•</span> إعلانات <span class=\"bullet-dot\">•</span> سوشيال ميديا",
      "services.simple.designTags": "بوستات <span class=\"bullet-dot\">•</span> إعلانات <span class=\"bullet-dot\">•</span> هويات بصرية <span class=\"bullet-dot\">•</span> حملات",
      "services.simple.voiceTags": "إعلانات <span class=\"bullet-dot\">•</span> ريلز <span class=\"bullet-dot\">•</span> فيديوهات <span class=\"bullet-dot\">•</span> تعليق صوتي",
      "services.simple.socialTags": "إدارة الصفحات <span class=\"bullet-dot\">•</span> صناعة المحتوى <span class=\"bullet-dot\">•</span> النشر <span class=\"bullet-dot\">•</span> المتابعة",
      "services.social.contactBtn": "تواصل معنا لمعرفة المزيد",
      "services.social.p1": "إدارة الصفحات",
      "services.social.p1Sub": "خطة وتنظيم شامل للحسابات",
      "services.social.p2": "صناعة المحتوى",
      "services.social.p2Sub": "أفكار مبتكرة، كتابة وسيناريوهات",
      "services.social.p3": "النشر",
      "services.social.p3Sub": "جدولة استراتيجية في أفضل الأوقات",
      "services.social.p4": "المتابعة",
      "services.social.p4Sub": "تحليل الأداء والتفاعل المستمر",

      // About Me
      "about.tag": "رحلتي الإبداعية",
      "about.title": "خلف الشاشة: قصة، شغف ورؤية",
      "about.subtitle": "كيف تحول الفضول لصناعة المحتوى عام 2017 إلى مسيرة مهنية متخصصة في الإبداع البصري.",
      "about.card.role": "صانع محتوى ومخرج بصري",
      "about.quote": "\"أنا لا أصنع الأعمال البصرية لمجرد أنها وظيفة.. بل أصنعها لأنني أعشق هذا الفن، وأستمتع بكل ثانية في المونتاج والتصميم وإيقاع القصة وتأثيرها على المشاهد.\"",
      "about.pillar.speed": "سرعة في التسليم",
      "about.pillar.quality": "جودة بدون مساومة",
      "about.pillar.story": "قصة ذات مغزى",
      "about.pillar.ai": "أدوات متطورة",
      "about.heading": "من التمثيل المسرحي إلى الاحتراف البصري",
      "about.p1": "بدأ أحمد محمد رحلته في عالم الإبداع عام 2017 من خلال صناعة الفيديوهات واسكتشات التمثيل على منصات التواصل الاجتماعي. ومع استمراره في التجربة، اكتشف أن شغفه الحقيقي لم يكن فقط أمام الكاميرا، بل في السحر الذي يحدث خلفها في المونتاج والتصميم وهندسة الصوت.",
      "about.p2": "كان فضوله يكبر مع كل مشروع حول كيفية ضبط الإيقاع وتناسق الألوان واختيار اللقطة التي تثير مشاعر المشاهد. وقد منحته خلفيته في التمثيل المسرحي فهماً عميقاً للمشاعر الإنسانية، وتناغم الأداء، وكيفية إيصال الفكرة إلى المتلقي بأسرع وأصدق طريقة.",
      "about.highlight.title": "قيمة الخلفية المسرحية في العمل البصري",
      "about.highlight.desc": "التمثيل المسرحي علم أحمد كيف يفهم الجمهور وكيف يبني إيقاعاً يشد الانتباه؛ لذا فإن كل فيديو وتصميم يصنعه ليس مجرد ألوان ولقطات، بل قصة تلامس المشاعر وتدفع للتفاعل.",



      // Skills & Tools
      "skills.tag": "المهارات والتقنيات",
      "skills.title": "الأدوات والبرامج الاحترافية",
      "skills.subtitle": "نظرة شفافة على البرامج وأنظمة الذكاء الاصطناعي التي يستخدمها أحمد يومياً لصناعة أعماله.",
      "skills.group1.title": "برامج المونتاج والتصميم",
      "skills.group2.title": "أدوات الذكاء الاصطناعي والإبداع",
      "skills.tag.learning": "قيد التعلّم والتطوير",
      "skills.note1": "يعتمد أحمد على أدوات رائدة مثل Premiere Pro و DaVinci Resolve للمونتاج، و Photoshop للتصميم، ويعمل حالياً على التعلّم المستمر وتطوير مهاراته في Adobe After Effects.",
      "skills.note2": "يوظف أحمد نماذج الذكاء الاصطناعي المتقدمة (ChatGPT, Claude, Grok, Gemini وأدوات توليد الصور والفيديو والصوت) كمساعد إبداعي لتسريع توليد الأفكار والستوري بورد وصياغة النصوص.",

      // Results & Credibility
      "results.tag": "محطات وإنجازات",
      "results.title": "النتائج والخبرة العملية",
      "results.subtitle": "سجل عملي حقيقي بُني على مدار سنوات من التعلم المستمر وصناعة المحتوى للعلامات التجارية.",
      "results.stat1.num": "2017",
      "results.stat1.title": "بداية الرحلة",
      "results.stat1.desc": "انطلاق الشغف بصناعة المحتوى والاسكتشات وتعلّم مهارات المونتاج الرقمي.",
      "results.stat2.num": "+9 سنوات",
      "results.stat2.title": "خبرة وتطوير مستمر",
      "results.stat2.desc": "سنوات من الممارسة والتعلّم ومواكبة أحدث تقنيات الإنتاج البصري.",
      "results.stat3.num": "ملايين",
      "results.stat3.title": "مشاهدات متحققة",
      "results.stat3.desc": "مشاهدات تولدت عبر الفيديوهات والمحتوى الذي صنعه وأداره للعملاء.",
      "results.stat4.num": "+100 ألف",
      "results.stat4.title": "متابعون لصفحات أدارها",
      "results.stat4.desc": "بناء وتفاعل جماهيري حقيقي عبر مشاريع وحسابات عمل عليها.",
      "results.stat5.num": "مشاريع متنوعة",
      "results.stat5.title": "علامات تجارية موثوقة",
      "results.stat5.desc": "مشاريع ناجحة مع شركات ومؤسسات في مختلف القطاعات التجارية والجامعية.",

      // Future Vision
      "vision.tag": "الرؤية والطموح المستقبلي",
      "vision.title": "نحو بناء كيان إبداعي عربي رائد",
      "vision.text": "يسير أحمد محمد بخطوات واثقة نحو مستقبله؛ حيث يهدف خلال العام القادم إلى تأسيس شركة إنتاج إبداعي معروفة في المجال، مع طموح مستقبلي لبناء واحدة من كبرى الشركات الإبداعية في العالم العربي والشرق الأوسط لتمكين العلامات التجارية من رواية قصصها البصرية بأعلى المعايير العالمية.",
      "vision.goal1": "الهدف القريب: إطلاق شركة إنتاج إبداعي رائدة",
      "vision.goal2": "الطموح المستقبلي: أحد أكبر الكيانات الإبداعية بالشرق الأوسط",

      // Contact
      "contact.tag": "تواصل معي",
      "contact.title": "هل لديك مشروع في ذهنك؟",
      "contact.highlight": "دعنا نصنع شيئاً يتذكره الجميع.",
      "contact.desc": "كل مشروع له خصوصيته وأهدافه الفريدة. تواصل معي لنناقش فكرتك، وسأقدم لك مقترحاً إبداعياً وسعراً منافساً يناسب احتياجاتك.",
      "contact.pricingNote": "<strong>أسعار منافسة ومخصصة:</strong> نظراً لاختلاف تفاصيل كل فيديو وتصميم، يتم تحديد السعر وفق متطلبات المشروع لتقديم أعلى جودة بأفضل قيمة.",
      "contact.form.name": "الاسم",
      "contact.form.namePlaceholder": "اكتب اسمك هنا (اختياري)...",
      "contact.form.optional": "(اختياري)",
      "contact.form.service": "نوع المشروع المطلوب",
      "contact.form.serviceSelect": "-- اختر نوع المشروع (اختياري) --",
      "contact.form.opt1": "مونتاج الفيديو | Video Editing",
      "contact.form.opt2": "جرافيك ديزاين | Graphic Design",
      "contact.form.opt3": "فويس أوفر | Voice Over",
      "contact.form.opt4": "إدارة صفحات السوشيال ميديا | Social Media Management",
      "contact.form.opt5": "مشروع آخر | تعاون مخصص",
      "contact.form.msg": "تفاصيل المشروع وفكرتك",
      "contact.form.msgPlaceholder": "اكتب تفاصيل وفكرة مشروعك هنا (اختياري)...",
      "contact.form.submit": "دعنا نعمل معاً",
      "contact.toast.success": "جارٍ تحويلك إلى واتساب...",

      // Footer
      "footer.tagline": "صناعة قصص بصرية متميزة بسرعة وشغف واحترافية.",
      "footer.col1": "روابط سريعة",
      "footer.col2": "حسابات التواصل",
      "footer.backToTop": "العودة للأعلى",
      "footer.rights": "جميع الحقوق محفوظة.",

      // Modal
      "modal.close": "إغلاق المعاينة",
      "modal.client": "العميل:",
      "modal.role": "الدور:",
      "modal.challenge": "التحدي:",
      "modal.idea": "الفكرة الإبداعية:",
      "modal.execution": "ما تم تنفيذه:",
      "modal.result": "النتيجة:",
      "modal.cta": "اطلب مشروعاً مماثلاً"
    }
  };

  // -----------------------------------------------------------------
  // 2. CASE STUDY DATA STORE
  // -----------------------------------------------------------------
  const caseStudiesData = {
    "nazra": {
      clientEn: "نظرة للنظارات (Nazra Eyewear)",
      clientAr: "نظرة للنظارات",
      titleEn: "Dynamic Social Eyewear Campaign",
      titleAr: "حملة بصرية وتوجيه إبداعي لمنصات السوشيال ميديا",
      typeEn: "Social Media Campaign & Branding",
      typeAr: "حملة سوشيال ميديا وهوية رقمية",
      roleEn: "Graphic Design + Creative Direction",
      roleAr: "تصميم جرافيك + توجيه إبداعي",
      challengeEn: "Stand out in a saturated eyewear market by presenting optical products with high fashion appeal.",
      challengeAr: "التميز في سوق النظارات التنافسي وتقديم منتجات النظارات بأسلوب بصري فاخر وعصري.",
      ideaEn: "Combine clean minimalism with dynamic typography and lifestyle framing to highlight frame aesthetics.",
      ideaAr: "الجمع بين البساطة الراقية والخطوط العصرية وإبراز تفاصيل الإطارات بأسلوب يلائم السوشيال ميديا.",
      executionEn: "Designed custom social media templates, product showcase posters, and promotional banner layouts.",
      executionAr: "تصميم قوالب بوستات موحدة، بوسترات ترويجية لافتة، وبانرات إعلانية للحملات الرقمية.",
      resultEn: "Elevated brand perception and delivered a cohesive visual identity across social platforms.",
      resultAr: "رفع القيمة البصرية للعلامة التجارية وزيادة ملحوظة في التفاعل وطلبات الشراء المباشرة.",
      category: "Graphic Design / Social Media",
      aspect: "1:1 & 9:16 Visuals"
    },
    "shefaa": {
      clientEn: "معامل شفاء (Shefaa Labs)",
      clientAr: "معامل شفاء",
      titleEn: "Medical Awareness Video Series",
      titleAr: "سلسلة ريلز توعوية طبية وتصميم موشن جرافيك",
      typeEn: "Video Content & Motion Graphics",
      typeAr: "محتوى فيديو وموشن جرافيك",
      roleEn: "Video Editing + Motion Graphics + Sound",
      roleAr: "مونتاج فيديو + موشن جرافيك + مؤثرات صوتية",
      challengeEn: "Translate complex laboratory tests and health topics into engaging, easy-to-digest short videos.",
      challengeAr: "تبسيط التحاليل الطبية والمفاهيم الصحية وتقديمها في فيديوهات سريعة ومشوقة.",
      ideaEn: "Use fast visual motion, friendly kinetic typography, and sound effects to maintain high retention.",
      ideaAr: "استخدام عناصر موشن جرافيك متحركة ونصوص واضحة وتصميم صوتي يحافظ على انتباه المشاهد.",
      executionEn: "Edited 15+ educational reels, designed animated infographics, and color graded footage.",
      executionAr: "مونتاج أكثر من 15 فيديو ريلز، تصميم إنفوجرافيك متحرك، وتصحيح ألوان اللقطات.",
      resultEn: "Dramatically increased viewer watch-time and patient inquiries through informative video content.",
      resultAr: "زيادة معدل المشاهدة الكاملة للفيديوهات وارتفاع استفسارات المراجعين عبر منصات المعامل.",
      category: "Video Editing / Motion",
      aspect: "9:16 Vertical Reel"
    },
    "aqari": {
      clientEn: "شركة عقاري (Aqari Real Estate)",
      clientAr: "شركة عقاري",
      titleEn: "Luxury Real Estate Promo Reel",
      titleAr: "حملة ترويجية سينمائية لمشاريع عقارية فاخرة",
      typeEn: "Commercial Video & Ads",
      typeAr: "إعلانات فيديو تجارية",
      roleEn: "Video Editor & Motion Designer",
      roleAr: "مونتير فيديو ومصمم موشن",
      challengeEn: "Showcase high-value residential developments with a cinematic feel that builds trust with buyers.",
      challengeAr: "عرض المشروعات السكنية الراقية بأسلوب سينمائي يمنح المشاهد شعوراً بالفخامة والمصداقية.",
      ideaEn: "Architectural pacing with ambient sound design and sleek property feature callouts.",
      ideaAr: "إيقاع بصري هادئ وفخم مع مؤثرات صوتية محيطية وإبراز مميزات الوحدات العقارية.",
      executionEn: "Crafted 4K promotional property walkthroughs, social teaser ads, and interactive feature cards.",
      executionAr: "مونتاج فيديوهات جولات عقارية بدقة 4K، إعلانات تيزر للسوشيال ميديا، وبطاقات مميزات رقمية.",
      resultEn: "High ad engagement and strong visual positioning as a premier real estate leader.",
      resultAr: "تفاعل قوي مع الإعلانات وترسيخ مكانة الشركة كخيار موثوق في الاستثمار العقاري.",
      category: "Video Editing / Commercial",
      aspect: "16:9 & 9:16 Video"
    },
    "mehwar": {
      clientEn: "محور لتجارة السيارات (Mehwar Automotive)",
      clientAr: "محور لتجارة السيارات",
      titleEn: "Automotive Showcase Social Feed",
      titleAr: "محتوى إعلاني بصري لتجارة السيارات",
      typeEn: "Promotional Video & Ads",
      typeAr: "فيديوهات إعلانية وسوشيال ميديا",
      roleEn: "Video Editing & Sound Design",
      roleAr: "مونتاج وتصميم صوتي",
      challengeEn: "Generate instant excitement and high shareability for new vehicle inventory arrivals.",
      challengeAr: "خلق حماس فوري وتفاعل واسع للسيارات المعروضة والمعلنة حديثاً.",
      ideaEn: "High-octane sound effects, speed ramps, and bold kinetic text highlighting engine specs and offers.",
      ideaAr: "مؤثرات صوتية محركات قوية، تسريع وإبطاء إيقاعي، ونصوص بارزة تبرز مواصفات السيارة والأسعار.",
      executionEn: "Produced 10+ dynamic reels, promotional carousel covers, and story announcement graphics.",
      executionAr: "إنتاج أكثر من 10 ريلز ديناميكية، أغلفة بوستات مميزة، وتصاميم ستوري إعلانية.",
      resultEn: "Exponential increase in video shares and direct showroom visits.",
      resultAr: "ارتفاع كبير في مشاركات الفيديو وزيارات المعرض المباشرة.",
      category: "Video Editing / Advertising",
      aspect: "9:16 Vertical Video"
    },
    "lamar": {
      clientEn: "لمار للمجوهرات (Lamar Jewelry)",
      clientAr: "لمار للمجوهرات",
      titleEn: "Luxury Jewelry Visual Campaign",
      titleAr: "تصاميم سوشيال ميديا وفيديوهات ترويجية للمجوهرات",
      typeEn: "Visual Branding & Social Reels",
      typeAr: "هوية بصرية وريلز ترويجية",
      roleEn: "Graphic Designer & Video Editor",
      roleAr: "مصمم جرافيك ومونتير فيديو",
      challengeEn: "Highlight the delicate craftsmanship and sparkle of jewelry pieces in digital social formats.",
      challengeAr: "إبراز دقة وبريق المجوهرات الفاخرة وتقديمها بأسلوب يناسب الذوق الرفيع على منصات التواصل.",
      ideaEn: "Deep moody backgrounds with precise golden color grading and luxury typographic hierarchy.",
      ideaAr: "خلفيات داكنة فخمة مع درجات لونية ذهبية دقيقة وخطوط طبوغرافية ملكية.",
      executionEn: "Produced luxury social media carousels, promotional story ads, and macro jewelry video reels.",
      executionAr: "إنتاج سلاسل بوستات انستقرام راقية، إعلانات ستوري تفاعلية، وفيديوهات ماكرو للقطع الفاخرة.",
      resultEn: "Aesthetic consistency that enhanced prestige and direct customer engagement on Instagram.",
      resultAr: "تناسق بصري فخم رفع من ولاء المتابعين وزاد من استفسارات الشراء المباشرة.",
      category: "Graphic Design / Video",
      aspect: "1:1 Square & 9:16 Reel"
    },
    "tawseela": {
      clientEn: "شركة توصيلة (Tawseela)",
      clientAr: "شركة توصيلة",
      titleEn: "Smart Transportation Launch Ad",
      titleAr: "إعلان إطلاق خدمات النقل الذكي",
      typeEn: "Brand Launch Video & AI Visuals",
      typeAr: "فيديو إطلاق وهوية بالذكاء الاصطناعي",
      roleEn: "Video Editor & AI Visual Creator",
      roleAr: "مونتير ومصمم ذكاء اصطناعي",
      challengeEn: "Introduce a modern transportation app with fresh, energetic visual appeal on a tight schedule.",
      challengeAr: "إطلاق تطبيق نقل ذكي بهوية شبابية وحيوية بصرية خلال وقت تسليم قياسي.",
      ideaEn: "Utilize AI-generated lifestyle backgrounds and fast-paced motion graphics to emphasize speed and ease.",
      ideaAr: "دمج خلفيات مولدة بالذكاء الاصطناعي مع موشن جرافيك سريع لإبراز السرعة والراحة في الخدمة.",
      executionEn: "Built promotional launch video, app feature highlight clips, and social ad set.",
      executionAr: "صناعة فيديو الإطلاق الترويجي، مقاطع مميزات التطبيق، ومجموعة بوستات إعلانية.",
      resultEn: "Successful launch campaign generating high app installs in the first two weeks.",
      resultAr: "حملة إطلاق ناجحة حققت أرقام تحميل مرتفعة للتطبيق خلال أول أسبوعين.",
      category: "AI Creative / Video Editing",
      aspect: "16:9 & 9:16 Video"
    }
  };

  // -----------------------------------------------------------------
  // 3. STATE MANAGEMENT
  // -----------------------------------------------------------------
  let currentLang = localStorage.getItem('ame_portfolio_lang') || 'ar';
  let currentTheme = localStorage.getItem('ame_portfolio_theme') || 'dark';

  // -----------------------------------------------------------------
  // 4. DOM ELEMENTS
  // -----------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const langButtons = document.querySelectorAll('[data-lang]');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const contactForm = document.getElementById('contact-form');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const backToTopBtn = document.getElementById('back-to-top');
  const toastContainer = document.getElementById('toast-container');

  // -----------------------------------------------------------------
  // 5. INITIALIZATION
  // -----------------------------------------------------------------
  function init() {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    setupLanguageControls();
    setupHeaderScroll();
    setupMobileMenu();
    setupPortfolioFilters();
    setupCaseStudyModals();
    setupContactForm();
    setupScrollReveal();
    setupSmoothScroll();

    // Set Dynamic Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // -----------------------------------------------------------------
  // 6. THEME SWITCHING (DARK / LIGHT)
  // -----------------------------------------------------------------
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ame_portfolio_theme', theme);

    if (themeToggleBtn) {
      const themeIcon = themeToggleBtn.querySelector('.theme-icon');
      const themeText = themeToggleBtn.querySelector('.theme-label');
      if (theme === 'light') {
        if (themeIcon) {
          themeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        }
        if (themeText) themeText.textContent = currentLang === 'ar' ? 'داكن' : 'Dark';
      } else {
        if (themeIcon) {
          themeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        }
        if (themeText) themeText.textContent = currentLang === 'ar' ? 'فاتح' : 'Light';
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // -----------------------------------------------------------------
  // 7. DUAL LANGUAGE SWITCHING (ARABIC / ENGLISH & RTL/LTR)
  // -----------------------------------------------------------------
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('ame_portfolio_lang', lang);

    // Update active state on all dual language buttons (desktop & mobile)
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

    // Update Theme toggle button text
    applyTheme(currentTheme);

    // Update All Elements with [data-i18n]
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update All Elements with [data-i18n-html]
    const i18nHtmlElements = document.querySelectorAll('[data-i18n-html]');
    i18nHtmlElements.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Placeholders
    const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update Page Meta Title and Description based on Language
    if (lang === 'ar') {
      document.title = "أحمد محمد (AME) | مونتير ومصمم جرافيك - معرض الأعمال الإبداعية";
    } else {
      document.title = "Ahmed Mohamed (AME) | Video Editor & Graphic Designer Portfolio";
    }

    // Update Service Toggle Buttons state
    document.querySelectorAll('.btn-view-works').forEach(btn => {
      const isExpanded = btn.classList.contains('active');
      const labelEl = btn.querySelector('.btn-works-label');
      if (labelEl) {
        if (isExpanded) {
          labelEl.textContent = lang === 'ar' ? 'إخفاء الأعمال' : 'Hide Works';
        } else {
          labelEl.textContent = lang === 'ar' ? 'مشاهدة الأعمال' : 'View Works';
        }
      }
    });
  }

  function setupLanguageControls() {
    // Attach listener to all language buttons (desktop + mobile drawer)
    document.addEventListener('click', (e) => {
      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) {
        e.preventDefault();
        const selectedLang = langBtn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== currentLang) {
          applyLanguage(selectedLang);
          showToast(selectedLang === 'ar' ? 'تم تحويل الموقع إلى اللغة العربية' : 'Switched to English');
        }
      }
    });
  }

  // -----------------------------------------------------------------
  // 8. HEADER SCROLL & SPY
  // -----------------------------------------------------------------
  function setupHeaderScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Back to top visibility
      if (backToTopBtn) {
        if (window.scrollY > 500) {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.pointerEvents = 'auto';
        } else {
          backToTopBtn.style.opacity = '0';
          backToTopBtn.style.pointerEvents = 'none';
        }
      }

      // Active Section Highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { passive: true });
  }

  // -----------------------------------------------------------------
  // 9. MOBILE NAVIGATION DRAWER
  // -----------------------------------------------------------------
  function setupMobileMenu() {
    if (!mobileToggleBtn || !navMenu) return;

    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -----------------------------------------------------------------
  // 10. PORTFOLIO FILTERING
  // -----------------------------------------------------------------
  function setupPortfolioFilters() {
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active button class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category') || '';
          if (filterValue === 'all' || cardCategories.includes(filterValue)) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInCard 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // -----------------------------------------------------------------
  // 11. CASE STUDY MODAL LIGHTBOX
  // -----------------------------------------------------------------
  function setupCaseStudyModals() {
    const triggers = document.querySelectorAll('[data-case-study]');
    if (!triggers.length || !modalOverlay) return;

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const studyId = trigger.getAttribute('data-case-study');
        openCaseStudyModal(studyId);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function openCaseStudyModal(studyId) {
    const data = caseStudiesData[studyId];
    if (!data) return;

    const isAr = currentLang === 'ar';
    const client = isAr ? data.clientAr : data.clientEn;
    const title = isAr ? data.titleAr : data.titleEn;
    const type = isAr ? data.typeAr : data.typeEn;
    const role = isAr ? data.roleAr : data.roleEn;
    const challenge = isAr ? data.challengeAr : data.challengeEn;
    const idea = isAr ? data.ideaAr : data.ideaEn;
    const execution = isAr ? data.executionAr : data.executionEn;
    const result = isAr ? data.resultAr : data.resultEn;

    document.getElementById('modal-client').textContent = client;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-type').textContent = type;
    document.getElementById('modal-role-val').textContent = role;
    document.getElementById('modal-challenge-val').textContent = challenge;
    document.getElementById('modal-idea-val').textContent = idea;
    document.getElementById('modal-execution-val').textContent = execution;
    document.getElementById('modal-result-val').textContent = result;
    document.getElementById('modal-category-tag').textContent = data.category;
    document.getElementById('modal-aspect-tag').textContent = data.aspect;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // -----------------------------------------------------------------
  // 12. CONTACT FORM → WHATSAPP
  // -----------------------------------------------------------------
  function setupContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput    = document.getElementById('form-name');
      const serviceInput = document.getElementById('form-service');
      const msgInput     = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';

      // Optional fields
      const service = serviceInput && serviceInput.value
        ? serviceInput.options[serviceInput.selectedIndex].text.replace(/^[-–—\s]+|[-–—\s]+$/g, '')
        : null;
      const message = msgInput && msgInput.value.trim() ? msgInput.value.trim() : null;

      // Build WhatsApp message with clean formatting and clear spacing (no emojis)
      let waText = '';
      if (currentLang === 'ar') {
        let lines = [
          name ? ('مرحباً أحمد، أنا : ' + name) : 'مرحباً أحمد،'
        ];

        if (service) {
          lines.push('نوع المشروع المطلوب:\n' + service);
        }

        if (message) {
          lines.push('تفاصيل المشروع والفكرة:\n' + message);
        }

        lines.push('تواصلت معك من خلال موقعك لبدء العمل معاً.');

        // Join with double newline to keep distinct spaces between each section
        waText = lines.join('\n\n');
      } else {
        let lines = [
          name ? ('Hello Ahmed, my name is: ' + name) : 'Hello Ahmed,'
        ];

        if (service) {
          lines.push('Project Type:\n' + service);
        }

        if (message) {
          lines.push('Project Details:\n' + message);
        }

        lines.push('I contacted you through your website to work together.');

        waText = lines.join('\n\n');
      }

      const whatsappNumber = '201515409280';
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;

      showToast(currentLang === 'ar' ? 'جارٍ فتح واتساب...' : 'Opening WhatsApp...', 'success');

      // Direct WhatsApp redirect
      const newTab = window.open(waUrl, '_blank');
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        window.location.href = waUrl;
      }
    });

    // Special quick action for Social Media "Contact Us to Learn More" button
    const btnSocialContact = document.getElementById('btn-social-contact');
    if (btnSocialContact) {
      btnSocialContact.addEventListener('click', () => {
        const serviceSelect = document.getElementById('form-service');
        const nameInput = document.getElementById('form-name');
        if (serviceSelect) {
          serviceSelect.value = 'social_media';
          serviceSelect.dispatchEvent(new Event('change'));
          serviceSelect.classList.add('select-highlighted');
          setTimeout(() => {
            serviceSelect.classList.remove('select-highlighted');
          }, 2400);
        }
        setTimeout(() => {
          if (nameInput) {
            nameInput.focus();
          }
        }, 650);
      });
    }
  }

  function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';

    const iconSvg = type === 'success' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `
      <span class="toast-icon">${iconSvg}</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.35s ease';
      setTimeout(() => {
        toast.remove();
      }, 350);
    }, 4500);
  }

  // -----------------------------------------------------------------
  // 13. SCROLL REVEAL (INTERSECTION OBSERVER)
  // -----------------------------------------------------------------
  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  }

  // -----------------------------------------------------------------
  // 14. SMOOTH SCROLL & BACK TO TOP
  // -----------------------------------------------------------------
  function setupSmoothScroll() {
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Modal CTA to scroll to contact and close
    const modalCta = document.getElementById('modal-cta-btn');
    if (modalCta) {
      modalCta.addEventListener('click', () => {
        closeModal();
      });
    }

    // Anchor links smooth scroll with dynamic header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            const headerHeight = header ? header.offsetHeight : 70;
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 10);
            
            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: 'smooth'
            });

            // If mobile menu is open, close it
            if (navMenu && navMenu.classList.contains('open')) {
              navMenu.classList.remove('open');
              if (mobileToggleBtn) {
                mobileToggleBtn.setAttribute('aria-expanded', 'false');
              }
            }
          }
        }
      });
    });
  }

  // Add Card Fade-In Animation Keyframe dynamically
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes fadeInCard {
      from { opacity: 0; transform: translateY(12px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  document.head.appendChild(styleEl);

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
