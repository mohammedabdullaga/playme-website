/* ===========================
   PlayMe – Language Toggle & Internationalization
   Supports: English (EN) & Arabic (AR)
   Uses localStorage for persistence
   =========================== */

// ===========================
// Translation Strings
// ===========================

const translations = {
  en: {
    // Navbar
    languageEn: 'EN',
    languageAr: 'AR',

    // Hero Section
    heroTitle: 'Streaming Without Limits',
    heroDescription:
      'Enjoy a smoother, faster, and more reliable streaming experience designed for modern viewers.',

    // Features
    feature1Title: 'Access TOD TV in Saudi Arabia',
    feature1Description:
      'Watch TOD TV smoothly without interruptions. Optimized for mobile devices and smart TVs with no complex setup.',

    feature2Title: 'Faster IPTV Streaming',
    feature2Description:
      'Reduce buffering and improve stream stability. Designed to enhance performance on local internet networks.',

    // Streaming Modes
    streamingModesTitle: 'Streaming Modes',
    streamingModesDesc: 'Choose your streaming mode for the best experience',
    todModeTitle: 'TOD Mode',
    todModeSubtitle: 'TOD Streaming',
    iptvModeTitle: 'IPTV Mode',
    iptvModeSubtitle: 'IPTV Streaming',
    selectTodMode: 'Select TOD Mode',
    selectIptv: 'Select IPTV Mode',
    activeModeLabel: 'Active Mode:',

    // Free Trial
    freeTrialTitle: 'Start Your Free Trial Today',
    freeTrialBadge: 'Free for Limited Time',
    freeTrialDescription:
      'PlayMe app is completely free to use for a limited time. No payment required. Get instant access after installing the app.',
    instantAccess: 'Instant Access',
    instantAccessDesc: 'No sign-up delays',
    noPayment: 'No Payment Required',
    noPaymentDesc: 'Free for the trial period',
    fullFeatures: 'Full Features',
    fullFeaturesDesc: 'Access all streaming modes',
    downloadFreeTrial: 'Download Free Trial',

    // iOS & Apple TV
    iosSectionTitle: 'Available on iOS & Apple TV',
    iosSectionDesc: 'Seamless streaming on all Apple devices',
    iphoneTitle: 'iPhone & iPad',
    iphoneDesc:
      'Enjoy PlayMe on your iPhone and iPad with full streaming capabilities. Easy setup, no jailbreak required.',
    iosGuideBtn: 'iOS Setup Guide',
    appleTvTitle: 'Apple TV',
    appleTvDesc:
      'Stream to your big screen with Apple TV. Get the ultimate home streaming experience with PlayMe.',
    appleTvGuideBtn: 'Apple TV Setup Guide',

    // Setup Modals
    iosSetupTitle: 'iOS Setup Guide',
    appTvSetupTitle: 'Apple TV Setup Guide',
    downloadFromAppStore: 'Download from App Store',
    downloadAppStoreDesc: 'Search for "PlayMe" in the Apple App Store and download.',
    installProfile: 'Install Profile',
    installProfileDesc:
      'Go to Settings > VPN & Device Management and install the PlayMe profile.',
    launchAndEnjoy: 'Launch & Enjoy',
    launchDesc:
      'Open PlayMe and start streaming your favorite channels instantly.',
    configureVPN: 'Configure VPN Profile',
    configureVPNDesc:
      'Install the VPN profile through Settings > AirPlay and HomeKit.',
    startStreaming: 'Start Streaming',
    startStreamingDesc:
      'Open PlayMe and enjoy all your favorite channels on the big screen.',

    // APK Download Section
    apkTitle: 'Download PlayMe Now',
    apkDescription:
      'Get the PlayMe app on your Android device for the ultimate streaming experience. Download the APK directly and start enjoying unlimited streaming today.',
    apkSize: 'App Size',
    apkSizeValue: '45 MB',
    apkMinAndroid: 'Min Android',
    apkMinAndroidValue: '8.0+',
    apkVersion: 'Version',
    apkVersionValue: '1.0.0',
    downloadButton: 'Download APK',

    // Coming Soon
    comingSoonTitle: 'Coming Soon',
    comingSoonDescription:
      'The PlayMe app is currently in final preparation. Stay tuned for the official release.',

    // About App Section
    aboutAppTitle: 'About PlayMe',
    commonIssuesTitle: 'Common Issues',
    commonIssue1: 'Streaming platforms being blocked or partially restricted',
    commonIssue2: 'Slow IPTV speeds due to ISP throttling',
    commonIssue3: 'Unstable connections during live matches and events',
    
    howPlayMeHelpsTitle: 'How PlayMe Helps',
    howPlayMeHelps1: 'Restore access to blocked streaming platforms such as TOD TV in Saudi Arabia',
    howPlayMeHelps2: 'Improve IPTV streaming stability and speed',
    howPlayMeHelps3: 'Reduce buffering during live sports and high-demand events',
    
    howItWorksTitle: 'How It Works',
    howItWorksDesc: 'The app works automatically in the background and does not require any manual configuration.',
    
    availableOnTitle: 'Available On',
    availableOn1: 'Android phones & Android TV',
    availableOn2: 'iOS devices',
    availableOn3: 'Apple TV',
    
    freeTrialHighlightTitle: 'Free Trial Available',
    freeTrialHighlightDesc: 'PlayMe can be used for free for a limited trial period, allowing users to test performance before committing.',
    
    aboutAppIntro: 'PlayMe is a smart streaming optimization app designed to solve common streaming issues faced by users in specific regions.',

    // Contact Us Section
    contactUsTitle: 'Contact Us',
    contactUsSubtitle: 'Reach out to us through any of our channels',
    emailLabel: 'Email',
    emailCtaEn: 'Send Email →',
    emailCtaAr: 'إرسال بريد ←',
    
    telegramLabel: 'Telegram',
    telegramHandle: 'elit_bahrain',
    telegramCtaEn: 'Message Us →',
    telegramCtaAr: 'راسلنا ←',
    
    instagramLabel: 'Instagram',
    instagramHandle: 'e_bahrainstore',
    instagramCtaEn: 'Follow Us →',
    instagramCtaAr: 'تابعنا ←',

    // Footer
    footerText: '© 2026 PlayMe. All rights reserved.',
  },

  ar: {
    // Navbar
    languageEn: 'إنجليزي',
    languageAr: 'عربي',

    // Hero Section
    heroTitle: 'تجربة مشاهدة بلا حدود',
    heroDescription:
      'استمتع ببث أسرع وأكثر استقرارًا مصمم خصيصًا للمشاهدة الحديثة.',

    // Features
    feature1Title: 'مشاهدة TOD TV داخل السعودية',
    feature1Description:
      'استمتع بمشاهدة TOD TV بسلاسة وبدون انقطاع، مع دعم كامل للجوال والتلفزيون الذكي.',

    feature2Title: 'تسريع بث IPTV',
    feature2Description:
      'تقليل التقطيع وتحسين استقرار البث، مع أداء أفضل على شبكات الإنترنت المحلية.',

    // Streaming Modes
    streamingModesTitle: 'أوضاع البث',
    streamingModesDesc: 'اختر وضع البث المناسب لتجربة أفضل',
    todModeTitle: 'وضع TOD',
    todModeSubtitle: 'بث TOD',
    iptverModTitle: 'وضع IPTV',
    iptverModSubtitle: 'بث IPTV',
    selectTodMode: 'اختر وضع TOD',
    selectIptv: 'اختر وضع IPTV',
    activeModeLabel: 'الوضع النشط:',

    // Free Trial
    freeTrialTitle: 'ابدأ تجربتك المجانية اليوم',
    freeTrialBadge: 'مجاني لفترة محدودة',
    freeTrialDescription:
      'تطبيق PlayMe مجاني تماماً لفترة محدودة. لا توجد متطلبات دفع. احصل على الوصول الفوري بعد تثبيت التطبيق.',
    instantAccess: 'الوصول الفوري',
    instantAccessDesc: 'بدون تأخير في التسجيل',
    noPayment: 'بدون دفع',
    noPaymentDesc: 'مجاني خلال التجربة',
    fullFeatures: 'جميع المميزات',
    fullFeaturesDesc: 'الوصول لجميع أوضاع البث',
    downloadFreeTrial: 'تحميل التجربة المجانية',

    // iOS & Apple TV
    iosSectionTitle: 'متاح على iOS و Apple TV',
    iosSectionDesc: 'بث سلس على جميع أجهزة Apple',
    iphoneTitle: 'iPhone و iPad',
    iphoneDesc:
      'استمتع بـ PlayMe على iPhone و iPad مع كامل إمكانيات البث. إعداد سهل، بدون الحاجة للجيلبريك.',
    iosGuideBtn: 'دليل إعداد iOS',
    appleTvTitle: 'Apple TV',
    appleTvDesc:
      'البث إلى شاشتك الكبيرة مع Apple TV. احصل على تجربة البث المنزلي الشاملة مع PlayMe.',
    appleTvGuideBtn: 'دليل إعداد Apple TV',

    // Setup Modals
    iosSetupTitle: 'دليل إعداد iOS',
    appTvSetupTitle: 'دليل إعداد Apple TV',
    downloadFromAppStore: 'تحميل من App Store',
    downloadAppStoreDesc: 'ابحث عن "PlayMe" في متجر Apple App وحمّل التطبيق.',
    installProfile: 'تثبيت الملف الشخصي',
    installProfileDesc:
      'انتقل إلى الإعدادات > VPN وإدارة الأجهزة وثبّت ملف PlayMe.',
    launchAndEnjoy: 'ابدأ والمتعة',
    launchDesc:
      'افتح PlayMe وابدأ بث قنواتك المفضلة على الفور.',
    configureVPN: 'تكوين ملف VPN',
    configureVPNDesc:
      'ثبّت ملف VPN من خلال الإعدادات > AirPlay و HomeKit.',
    startStreaming: 'ابدأ البث',
    startStreamingDesc:
      'افتح PlayMe واستمتع بجميع قنواتك المفضلة على الشاشة الكبيرة.',

    // APK Download Section
    apkTitle: 'حمّل PlayMe الآن',
    apkDescription:
      'احصل على تطبيق PlayMe على جهازك الأندرويد للاستمتاع به. حمّل ملف APK مباشرة وابدأ بمشاهدة غير محدودة اليوم.',
    apkSize: 'حجم التطبيق',
    apkSizeValue: '45 ميجابايت',
    apkMinAndroid: 'الحد الأدنى',
    apkMinAndroidValue: '8.0+',
    apkVersion: 'الإصدار',
    apkVersionValue: '1.0.0',
    downloadButton: 'تحميل APK',

    // Coming Soon
    comingSoonTitle: 'قريبًا',
    comingSoonDescription:
      'تطبيق PlayMe قيد التحضير النهائي. ترقبوا الإطلاق الرسمي قريبًا.',

    // About App Section
    aboutAppTitle: 'عن تطبيق PlayMe',
    commonIssuesTitle: 'المشاكل الشائعة',
    commonIssue1: 'حظر بعض منصات البث أو تقييدها جزئيًا',
    commonIssue2: 'بطء بث IPTV بسبب تقييد السرعة من مزودي الخدمة',
    commonIssue3: 'تقطيع وعدم استقرار أثناء المباريات والبث المباشر',
    
    howPlayMeHelpsTitle: 'كيف يساعد PlayMe',
    howPlayMeHelps1: 'استعادة الوصول إلى منصات البث مثل TOD TV داخل السعودية',
    howPlayMeHelps2: 'تحسين سرعة واستقرار بث IPTV',
    howPlayMeHelps3: 'تقليل التقطيع أثناء الفعاليات المباشرة والمباريات',
    
    howItWorksTitle: 'كيفية الاستخدام',
    howItWorksDesc: 'يعمل التطبيق تلقائيًا في الخلفية دون الحاجة لأي إعدادات معقدة.',
    
    availableOnTitle: 'متوفر على',
    availableOn1: 'أجهزة أندرويد وAndroid TV',
    availableOn2: 'أجهزة iOS',
    availableOn3: 'Apple TV',
    
    freeTrialHighlightTitle: 'فترة تجريبية مجانية',
    freeTrialHighlightDesc: 'يمكن استخدام PlayMe مجانًا لفترة محدودة لتجربة الأداء قبل الاشتراك.',
    
    aboutAppIntro: 'PlayMe هو تطبيق ذكي لتحسين تجربة البث، تم تطويره لحل مشاكل المشاهدة الشائعة التي يواجهها المستخدمون في بعض المناطق.',

    // Contact Us Section
    contactUsTitle: 'اتصل بنا',
    contactUsSubtitle: 'تواصل معنا عبر أي من قنواتنا',
    emailLabel: 'البريد الإلكتروني',
    emailCtaEn: 'Send Email →',
    emailCtaAr: 'إرسال بريد ←',
    
    telegramLabel: 'تيليجرام',
    telegramHandle: 'elit_bahrain',
    telegramCtaEn: 'Message Us →',
    telegramCtaAr: 'راسلنا ←',
    
    instagramLabel: 'إنستجرام',
    instagramHandle: 'e_bahrainstore',
    instagramCtaEn: 'Follow Us →',
    instagramCtaAr: 'تابعنا ←',

    // Footer
    footerText: '© 2026 PlayMe. جميع الحقوق محفوظة.',
  },
};

// ===========================
// Language Management
// ===========================

class LanguageManager {
  constructor() {
    this.currentLanguage = this.loadLanguage() || 'en';
    this.init();
  }

  /**
   * Initialize language manager
   */
  init() {
    this.setupEventListeners();
    this.applyLanguage(this.currentLanguage);
  }

  /**
   * Load language from localStorage
   */
  loadLanguage() {
    return localStorage.getItem('playmeLanguage');
  }

  /**
   * Save language to localStorage
   */
  saveLanguage(lang) {
    localStorage.setItem('playmeLanguage', lang);
  }

  /**
   * Setup click handlers for language buttons
   */
  setupEventListeners() {
    const btnEn = document.getElementById('lang-en');
    const btnAr = document.getElementById('lang-ar');

    if (btnEn) {
      btnEn.addEventListener('click', () => this.setLanguage('en'));
    }

    if (btnAr) {
      btnAr.addEventListener('click', () => this.setLanguage('ar'));
    }
  }

  /**
   * Set language and update UI
   */
  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ar') {
      console.warn(`Invalid language: ${lang}`);
      return;
    }

    this.currentLanguage = lang;
    this.saveLanguage(lang);
    this.applyLanguage(lang);
  }

  /**
   * Apply language to the entire page
   */
  applyLanguage(lang) {
    // Update HTML dir and lang attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-rtl', lang === 'ar');

    // Update language button states
    this.updateButtonStates(lang);

    // Show/hide language-specific content
    this.toggleLanguageContent(lang);

    // Update dynamic text content
    this.updateTextContent(lang);
  }

  /**
   * Update active state of language buttons
   */
  updateButtonStates(lang) {
    const btnEn = document.getElementById('lang-en');
    const btnAr = document.getElementById('lang-ar');

    if (btnEn) {
      btnEn.classList.toggle('active', lang === 'en');
    }

    if (btnAr) {
      btnAr.classList.toggle('active', lang === 'ar');
    }
  }

  /**
   * Show/hide language-specific sections
   */
  toggleLanguageContent(lang) {
    // Hide all language sections
    document.querySelectorAll('.lang-en, .lang-ar').forEach((el) => {
      el.classList.add('hidden');
    });

    // Show only the current language
    const selector = lang === 'en' ? '.lang-en' : '.lang-ar';
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.remove('hidden');
      el.dir = lang === 'ar' ? 'rtl' : 'ltr';
    });
  }

  /**
   * Update text content dynamically if needed
   * (For additional elements, add more selectors here)
   */
  updateTextContent(lang) {
    // Example: Update meta description
    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      if (lang === 'ar') {
        metaDescription.setAttribute(
          'content',
          'PlayMe يساعدك على الاستمتاع ببث سلس وسريع وموثوق مصمم للمشاهدة الحديثة.'
        );
      } else {
        metaDescription.setAttribute(
          'content',
          'PlayMe helps you enjoy smooth streaming and access your favorite services with better stability and speed.'
        );
      }
    }
  }
}

// ===========================
// Initialize Language Manager on DOM Ready
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  new LanguageManager();
  new StreamingModeManager();
  new SetupModalManager();
  new MobileMenuManager();
});

// ===========================
// Streaming Mode Manager
// ===========================

class StreamingModeManager {
  constructor() {
    this.currentMode = this.loadMode() || 'tod';
    this.init();
  }

  init() {
    this.setupModeCards();
    this.applyMode(this.currentMode);
  }

  loadMode() {
    return localStorage.getItem('playmeMode');
  }

  saveMode(mode) {
    localStorage.setItem('playmeMode', mode);
  }

  setupModeCards() {
    const modeCards = document.querySelectorAll('.mode-card');
    modeCards.forEach((card) => {
      const btn = card.querySelector('.mode-activate-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          const mode = card.getAttribute('data-mode');
          this.setMode(mode);
        });
      }
    });
  }

  setMode(mode) {
    if (mode !== 'tod' && mode !== 'iptv') {
      console.warn(`Invalid mode: ${mode}`);
      return;
    }

    this.currentMode = mode;
    this.saveMode(mode);
    this.applyMode(mode);
  }

  applyMode(mode) {
    // Update active states on mode cards
    document.querySelectorAll('.mode-card').forEach((card) => {
      const cardMode = card.getAttribute('data-mode');
      card.classList.toggle('active', cardMode === mode);
    });
  }
}

// ===========================
// Setup Modal Manager
// ===========================

class SetupModalManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupModalTriggers();
    this.setupModalClosers();
  }

  setupModalTriggers() {
    const buttons = document.querySelectorAll('.setup-guide-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const guide = btn.getAttribute('data-guide');
        this.openModal(guide);
      });
    });
  }

  setupModalClosers() {
    // Close modal with X button
    document.querySelectorAll('.modal-close').forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        this.closeModal(modal);
      });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal);
        }
      });
    });
  }

  openModal(guide) {
    const modalId = guide === 'ios' ? 'ios-modal' : 'appletv-modal';
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modal) {
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  }
}

// ===========================
// Mobile Menu Manager
// ===========================

class MobileMenuManager {
  constructor() {
    this.menuBtn = document.getElementById('mobileMenuBtn');
    this.navMenu = document.getElementById('navMenu');
    this.init();
  }

  init() {
    if (!this.menuBtn || !this.navMenu) return;

    // Toggle menu on hamburger click
    this.menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMenu();
    });

    // Simple approach: just close menu when any nav-item is clicked
    // Let the browser handle the link navigation naturally
    this.navMenu.addEventListener('click', (e) => {
      const navItem = e.target.closest('.nav-item');
      if (!navItem) return;

      // Just close the menu - let the link navigate naturally
      this.closeMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const clickedInsideMenu = e.target.closest('.nav-menu');
      const clickedMobileBtn = e.target.closest('.mobile-menu-btn');
      if (!clickedInsideMenu && !clickedMobileBtn) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navMenu.classList.toggle('open');
    this.menuBtn.classList.toggle('active');
    document.body.classList.toggle('drawer-open');
  }

  closeMenu() {
    this.navMenu.classList.remove('open');
    this.menuBtn.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }
}

// ===========================
// Export for Module Usage (if needed)
// ===========================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    translations,
    LanguageManager,
    StreamingModeManager,
    SetupModalManager,
    MobileMenuManager,
  };
}
