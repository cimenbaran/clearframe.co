export const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Experience Spaces Like Never Before",
      subtitle: "We create immersive virtual tours that bring architectural spaces to life. Perfect for real estate showcases and architectural presentations.",
    },
    services: {
      title: "Our Services",
      subtitle: "We offer comprehensive virtual tour solutions for real estate and architecture professionals.",
      virtualTours: "Virtual Tours",
      virtualToursDesc: "Immersive 360° virtual tours with interactive hotspots and guided navigation.",
      modeling: "3D Modeling",
      modelingDesc: "Detailed 3D models of buildings and spaces with photorealistic rendering.",
      realEstate: "Real Estate Showcase",
      realEstateDesc: "Engaging virtual property tours for real estate marketing and sales.",
      architecture: "Architecture Visualization",
      architectureDesc: "Professional visualization services for architectural projects and presentations.",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Explore our portfolio of virtual tours and architectural visualizations.",
    },
    team: {
      title: "Our Team",
      subtitle: "Meet the experts behind our virtual tour solutions.",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      portfolio: "Portfolyo",
      about: "Hakkımızda",
      contact: "İletişim",
      getStarted: "Başlayın",
    },
    hero: {
      title: "Mekanları Farklı Deneyimleyin",
      subtitle: "Mimari alanları canlandıran sürükleyici sanal turlar oluşturuyoruz. Emlak gösterimleri ve mimari sunumlar için mükemmel.",
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle: "Emlak ve mimarlık profesyonelleri için kapsamlı sanal tur çözümleri sunuyoruz.",
      virtualTours: "Sanal Turlar",
      virtualToursDesc: "Etkileşimli erişim noktaları ve rehberli navigasyon ile sürükleyici 360° sanal turlar.",
      modeling: "3B Modelleme",
      modelingDesc: "Fotorealistik görselleştirme ile detaylı bina ve mekan 3B modelleri.",
      realEstate: "Emlak Gösterimi",
      realEstateDesc: "Emlak pazarlama ve satışları için etkileyici sanal mülk turları.",
      architecture: "Mimari Görselleştirme",
      architectureDesc: "Mimari projeler ve sunumlar için profesyonel görselleştirme hizmetleri.",
    },
    projects: {
      title: "Öne Çıkan Projeler",
      subtitle: "Sanal turlarımız ve mimari görselleştirmelerimizi keşfedin.",
    },
    team: {
      title: "Ekibimiz",
      subtitle: "Sanal tur çözümlerimizin arkasındaki uzmanlarla tanışın.",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
