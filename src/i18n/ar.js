const ar = {
  navbar: {
    home: 'الرئيسية',
    services: 'الدورات',
    about: 'من نحن',
    story: 'رحلتنا',
    projects: 'قصص نجاح',
    clients: 'الشركاء',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    live: 'البث المباشر',
    resources: 'الموارد'
  },
  header: {
    contact_cta: 'انضم الآن'
  },
  home: {
    // Hero Section
    hero: {
      headline: 'هنا يبدأ طريقك نحو القمة',
      subtitle: 'تعلّم واكتشف معنا عالمًا من الدروس المجانية، والجلسات المباشرة، وبرامج الإرشاد التي تساعدك على تطوير مهاراتك وتحقيق طموحك أينما كنت.',
      cta_primary: 'ابدأ رحلتك',
      cta_secondary: 'استكشف الدورات'
    },

    // Company Story / Timeline
    story: {
      title: 'رحلتنا',
      subtitle: 'من حلم إلى حركة تُحدث تحولاً في التعليم بالسودان',
      timeline: [
        {
          year: '2020',
          title: 'البداية',
          description: 'تأسست قمم السودانية برؤية لتوفير تعليم مجاني وعالي الجودة للطلاب السودانيين.'
        },
        {
          year: '2021',
          title: 'أول 1000 طالب',
          description: 'حققنا أول إنجازنا مع أكثر من 1000 طالب انضموا إلى منصتنا من مختلف أنحاء السودان.'
        },
        {
          year: '2022',
          title: 'إطلاق الجلسات المباشرة',
          description: 'أطلقنا الجلسات التفاعلية المباشرة والندوات مع مدربين خبراء من حول العالم.'
        },
        {
          year: '2024',
          title: '50000+ متعلم',
          description: 'نخدم الآن أكثر من 50000 طالب سوداني في دورات الهندسة والتكنولوجيا.'
        }
      ]
    },

    // Mission, Vision, Values
    mission_vision: {
      mission: {
        title: 'مهمتنا',
        description: 'ت Democratize التعليم من خلال توفير مصادر تعليمية مجانية وعالية الجودة لكل طالب سوداني، وتمكينهم من تحقيق أحلامهم والمساهمة في مستقبل السودان.'
      },
      vision: {
        title: 'رؤيتنا',
        description: 'أن نكون المنصة التعليمية الرائدة في أفريقيا، نربط المواهب السودانية بالمعرفة والفرص العالمية.'
      },
      values: {
        title: 'قيمنا',
        items: [
          { title: 'إمكانية الوصول', description: 'تعليم مجاني للجميع بغض النظر عن الموقع' },
          { title: 'التميز', description: 'أعلى جودة محتوى من مدربين خبراء' },
          { title: 'الابتكار', description: 'طرق تعليمية حديثة وتقنية' },
          { title: 'المجتمع', description: 'دعم بعضنا البعض للنجاح معًا' }
        ]
      }
    },

    // Achievements & Stats
    stats: {
      title: 'تأثيرنا',
      items: [
        { number: '50000+', label: 'طالب نشط' },
        { number: '200+', label: 'فيديو курс' },
        { number: '50+', label: 'مدرب خبير' },
        { number: '95%', label: 'معدل النجاح' }
      ]
    },

    // Services (Courses)
    services: {
      title: 'دوراتنا',
      subtitle: 'مسارات تعليمية شاملة في الهندسة والتكنولوجيا',
      electrical: {
        title: 'الهندسة الكهربائية',
        description: 'أتقن تحليل الدوائر وأنظمة الطاقة والإلكترونيات مع دورات من مدربين خبراء.'
      },
      mechanical: {
        title: 'الهندسة الميكانيكية',
        description: 'تعلم الديناميكا الحرارية وميكانيكا الماكينات وتصميم الآلات.'
      },
      low_current: {
        title: 'أنظمة التيار الضعيف',
        description: 'الشبكات وأنظمة البيانات وأنظمة الأمان وبنية الاتصالات.'
      },
      automation: {
        title: 'الأتمتة والتحكم',
        description: 'برمجة PLC والروبوتات وإنترنت الأشياء وأنظمة أتمتة المباني.'
      },
      cad: {
        title: 'الرسم التقني CAD',
        description: 'AutoCAD وRevit وSolidWorks ومهارات الرسم التقني.'
      },
      installation: {
        title: 'التركيب والصيانة',
        description: 'مهارات عملية في تركيب المعدات والتشغيل وهندسة الصيانة.'
      },
      cta_view_all: 'تصفح جميع الدورات'
    },

    // Projects (Success Stories)
    projects: {
      title: 'قصص النجاح',
      subtitle: 'نتائج حقيقية من طلابنا',
      view_all: 'عرض الكل',
      items: [
        {
          title: 'خريج هندسة',
          category: 'نجاح',
          location: 'الخرطوم',
          year: '2024',
          description: 'اجتاز أحمد امتحاناته النهائية مع التميز باستخدام دروسنا والجلسات المباشرة.'
        },
        {
          title: 'حاصل على منحة',
          category: 'إنجاز',
          location: 'أم درمان',
          year: '2023',
          description: 'حصلت فاطمة على منحة كاملة للدراسة في الخارج بعد إكمال برنامج الإرشاد.'
        },
        {
          title: 'فائز بمسابقة وطنية',
          category: 'مسابقة',
          location: 'مدني',
          year: '2023',
          description: 'فاز فريق الطلاب الخاص بنا بالمركز الأول في مسابقة الابتكار الهندسي الوطنية.'
        },
        {
          title: 'وظيفة متميزة',
          category: 'وظيفة',
          location: 'بورتسودان',
          year: '2022',
          description: 'تم توظيف أكثر من 200 طالب في شركات هندسية مرموقة من خلال بوابة الوظائف.'
        },
        {
          title: 'نشر بحث علمي',
          category: 'أكاديمي',
          location: 'الخرطوم',
          year: '2022',
          description: 'نشر بحث الطلاب في مجلة هندسية دولية.'
        }
      ]
    },

    // Testimonials
    testimonials: {
      title: 'ماذا يقول طلابنا',
      items: [
        {
          name: 'أحمد محمد',
          role: 'طالب هندسة كهربائية',
          quote: 'ساعدتني قمم السودانية على فهم المفاهيم المعقدة بطرق لم تستطع دورياتي الجامعية. أنا الآن أعمل في شركة هندسية كبرى!',
          image: null
        },
        {
          name: 'فاطمة علي',
          role: 'طالبة هندسة ميكانيكية',
          quote: 'غيرتني الجلسات المباشرة وبرنامج الإرشاد حياتي. حصلت على منحة لمواصلة دراستي في الخارج.',
          image: null
        },
        {
          name: 'عمر حسن',
          role: 'طالب أتمتة',
          quote: 'منحتني المشاريع العملية والدورات التدريبية مهارات يبحث عنها أصحاب العمل. أوصي به بشدة!',
          image: null
        }
      ]
    },

    // Clients (Partners)
    clients: {
      title: 'شركاؤنا',
      subtitle: 'نتعاون مع مؤسسات تعليمية رائدة'
    },

    // Why Choose Us
    why: {
      title: 'لماذا تختار قمم السودانية',
      items: [
        { icon: '✓', title: '100% مجاني', text: 'جميع الدورات والموارد مجانية تمامًا.' },
        { icon: '⚙️', title: 'مدربون خبراء', text: 'تعلم من مهندسين ومعلمين ذوي خبرة.' },
        { icon: '🤝', title: 'إرشاد', text: 'توجيه فردي من متخصصين في الصناعة.' },
        { icon: '🔌', title: 'مهارات عملية', text: 'مشاريع عملية وتطبيقات من الواقع.' }
      ]
    },

    // Final CTA
    cta: {
      title: 'ابدأ رحلتك اليوم!',
      subtitle: 'انضم إلى آلاف الطلاب السودانيين الذين يحولون مستقبلهم من خلال التعليم.',
      cta_primary: 'انضم مجانًا الآن',
      cta_secondary: 'تصفح الدورات'
    }
  },

  // About Page
  about: {
    title: 'تعرّف على قمم',
    overview: 'فيديوهات تعليمية',
    overviewTitle: 'تعرّف على قمم',
    overviewText: 'بوابتك المتكاملة للتفوق في الشهادة. قمم منصة تعليمية رائدة تمنحك الأدوات اللازمة للفهم العميق والتحصيل الذكي، من خلال شروحات مرئية، أدلة عملية، ودعم مستمر يرافقك في كل خطوة نحو القمة.',
    vision: { 
      title: 'الرؤية', 
      text: 'شروحات ونصائح تساعدك على الفهم وتنظيم المذاكرة والاستعداد للامتحانات بثقة.' 
    },
    mission: { 
      title: 'بوصلة قمم', 
      text: 'دليلك العملي لتنظيم المذاكرة، يحتوي على أفضل الطرق لتحقيق أعلى النتائج.' 
    },
    values: { 
      title: 'قيمنا', 
      items: [
        { icon: '✓', title: 'إمكانية الوصول', text: 'تعليم مجاني للجميع.' },
        { icon: '⚙️', title: 'التميز', text: 'جودة المحتوى من الخبراء.' },
        { icon: '🤝', title: 'المجتمع', text: 'معا ننمو.' },
        { icon: '🌱', title: 'الابتكار', text: 'طرق تعليمية حديثة.' }
      ]
    },
    story: { 
      title: 'قصتنا', 
      items: [
        { year: '2020', title: 'التأسيس', text: 'بدأنا برؤية لمساعدة الطلاب السودانيين.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=60' },
        { year: '2021', title: 'النمو', text: 'وصلنا إلى 1000+ طالب في جميع أنحاء السودان.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60' },
        { year: '2024', title: 'التأثير', text: '50000+ متعلم وننمو كل يوم.', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=60' }
      ]
    }
  },
  
  // Contact Page
  contact: {
    title: 'اتصل بنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    message: 'الرسالة',
    submit: 'إرسال الرسالة',
    hero: 'لنتواصل',
    hours: 'متاحون على مدار الساعة',
    info: {
      address: 'الخرumont، السودان',
      phone: '+٢٤٩ ١٢٣ ٤٥٦ ٧٨٩',
      email: 'info@qimamsudanese.com'
    }
  },
  
  // Projects Page (Success Stories)
  projects: {
    title: 'قصص النجاح',
    items: [
      { title: 'خريج هندسة', sector: 'نجاح', location: 'الخرumont', year: '2024', text: 'اجتاز الامتحانات بامتياز.' },
      { title: 'حاصل على منحة', sector: 'إنجاز', location: 'أم درمان', year: '2023', text: 'حصل على منحة من خلال برنامج الإرشاد.' },
      { title: 'فائز بمسابقة', sector: 'مسابقة', location: 'مدني', year: '2023', text: 'فاز بمسابقة الهندسة الوطنية.' },
      { title: 'وظيفة متميزة', sector: 'وظيفة', location: 'بورتسودان', year: '2022', text: 'وظيفة في شركات هندسية كبرى.' },
      { title: 'نشر بحث', sector: 'أكاديمي', location: 'الخرumont', year: '2022', text: 'نشر في مجلة دولية.' },
      { title: 'ريادي', sector: 'أعمال', location: 'الخرumont', year: '2021', text: 'أسس استشارية هندسية.' }
    ]
  },
  
  // Clients Page (Partners)
  clients: {
    title: 'شركاؤنا',
    subtitle: 'مؤسسات تعليمية تدعم مهمتنا.',
    items: [
      { name: 'جامعة الخرumont', logo: '/logo-placeholder.svg' },
      { name: 'جامعة الأحفاد', logo: '/logo-placeholder.svg' },
      { name: 'الجامعة الدولية أفريقيا', logo: '/logo-placeholder.svg' },
      { name: 'الجامعة التقنية', logo: '/logo-placeholder.svg' },
      { name: 'وزارة التعليم', logo: '/logo-placeholder.svg' },
      { name: 'نقابة المهندسين', logo: '/logo-placeholder.svg' }
    ]
  },
  
  // Services Page (Courses)
  services: {
    title: 'دوراتنا',
    subtitle: 'مسارات تعليمية شاملة مجانية',
    items: [
      { title: 'الهندسة الكهربائية', text: 'تحليل الدوائر وأنظمة الطاقة والإلكترونيات.' },
      { title: 'الهندسة الميكانيكية', text: 'الديناميكا الحرارية والميكانيكا.' },
      { title: 'أنظمة التيار الضعيف', text: 'الشبكات والأمان والاتصالات.' },
      { title: 'الأتمتة والتحكم', text: 'PLC والروبوتات وإنترنت الأشياء.' },
      { title: 'الرسم التقني CAD', text: 'AutoCAD وRevit وSolidWorks.' },
      { title: 'التركيب والصيانة', text: 'مهارات تركيب عملية.' }
    ]
  },
  
  // Footer
  footer: {
    contactTitle: 'اتصل بنا',
    links: 'روابط سريعة',
    description: 'قمم السودانية - تمكين الطلاب السودانيين بتعليم مجاني وعالي الجودة في الهندسة والتكنولوجيا.',
    address: 'الخرumont، السودان',
    phone: '+٢٤٩ ١٢٣ ٤٥٦ ٧٨٩',
    email: 'info@qimamsudanese.com',
    copyright: '© ٢٠٢٤ قمم السودانية. جميع الحقوق محفوظة.'
  },
  
  // Blog
  blog: {
    title: 'المدونة',
    intro: 'نصائح دراسية وقصص نجاح ومحتوى تعليمي'
  }
};

export default ar;
