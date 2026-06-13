const h = React.createElement;
const {useEffect, useRef, useState, createContext, useContext} = React;
const page = document.body.dataset.page || 'index';

const LangContext = createContext({lang:'en', setLang:()=>{}});
const useLang = () => useContext(LangContext);

const nav = [
  ['home','index.html','index'],
  ['about','about.html','about'],
  ['services','services.html','services'],
  ['solutions','solutions.html','solutions'],
  ['insights','insights.html','insights'],
  ['contact','contact.html','contact']
];

const t = {
  en: {
    nav:{
      home:'Home',
      about:'About',
      services:'Services',
      solutions:'Solutions',
      insights:'Insights',
      contact:'Contact',
      book:'Book a consultation →'
    },

    common:{
      location:'Sultanate of Oman',
      phone:'+968 9229 2961',
      email:'contact@tamqinx.com',
      consult:'Book a Consultation',
      explore:'Explore Solutions',
      rights:'Tamqinx Technology. All rights reserved.'
    },

    home:{
      eyebrow:'POWERING DIGITAL TRANSFORMATION FOR MODERN BUSINESSES',
      words:['Build.','Automate.','Scale.'],
      copy:'Tamqinx Technology is an Oman-based software company delivering intelligent business software, AI-driven automation, and scalable digital growth solutions built for the future.',
      typing:['real-time dashboards','digital operating systems','AI-ready business workflows','secure integrations','future-ready platforms'],
      script:'From idea to intelligent operations.',
      brands:'TRUSTED BY BRANDS YOU KNOW',
      systemTitle:'A digital command centre for modern companies.',
      systemCopy:'We help leadership teams see operations clearly, connect disconnected workflows, and turn repetitive manual work into measurable digital systems.',
      visionTitle:'Oman Vision 2040, translated into working software.',
      visionCopy:'Tamqinx supports the Sultanate of Oman’s digital transformation by building platforms that improve productivity, local capability, data visibility, automation and long-term competitiveness.',
      chooseTitle:'Why choose Tamqinx over others?',
      chooseCopy:'Because we think like product builders, not template sellers. Every platform is shaped around workflow, users, data and long-term scalability.',
      terminalTitle:'DIGITAL OPERATING LAYER',
      terminalCopy:'We help leadership teams see operations clearly, connect disconnected workflows, and turn repetitive manual work into measurable digital systems.'
    },

    choose:[
      ['Workflow-first discovery','We study how your team works before designing screens, so the final system reduces friction instead of adding complexity.'],
      ['AI-ready architecture','Your software can later connect to agents, analytics, alerts, automations and integrations without rebuilding the whole platform.'],
      ['Clear milestone delivery','Large systems are split into testable phases, helping you review progress and launch safely.'],
      ['Long-term technical care','We support QA, monitoring, performance, security, updates and new features after launch.']
    ],

    testimonialsTitle:'You’re in good hands',
    testimonialsCopy:'Professional feedback from teams that trusted Tamqinx for software, dashboards, integrations, QA and digital systems.',

    testimonials:[
      ['Tamqinx Technology exceeded our expectations in every way. Their attention to detail in custom software development, paired with their expertise in API integrations and data dashboards, has given us a clear, real-time view of our performance. If you are looking to build, automate, and scale your operations, they are the best in the business.','Abdulaziz Anwar Al Senani','IBS, Founder'],
      ['Incredible attention to detail and lightning-fast delivery! They exceeded my expectations in every way. Truly the best in the business for modern web solutions.','Uzair Nisar','Al Aseel, Co-founder'],
      ['What stands out about Tamqinx is their commitment to quality. Their QA processes and 24/7 support ensure our systems remain secure and stable. They did not just give us a product; they gave us a future-ready foundation that has improved our ROI from day one.','Moumin Ali Alhinai','Al Fakhamah, Founder'],
      ['Tamqinx helped us think beyond a normal website. The system gives us a better way to track detailing jobs, customer updates, service history, photos, payments and team workflow from one clean dashboard.','Founder','SKYCARE Car Detailing']
    ],

    about:{
      eyebrow:'About Tamqinx',
      title:'An Oman-based technology partner with global AI ambition.',
      copy:'Tamqinx Technology builds business software, AI automation and digital platforms for organizations that want clearer operations, faster decisions and scalable growth.',
      note:'Born in Oman. Built for markets that move fast.',
      rdTitle:'AI research and development, made practical.',
      rdCopy:'We follow global progress in AI agents, automation, analytics, computer vision, workflow orchestration and integration systems, then translate useful ideas into deployable products for businesses.',
      globalTitle:'Global R&D awareness',
      globalCopy:'We track agentic workflows, generative interfaces, data engineering, automation, computer vision, model evaluation and analytics systems used by modern technology companies.',
      omanTitle:'Local AI readiness in Oman',
      omanCopy:'For Omani businesses, the first step is often clean data, connected workflows, dashboards, staff adoption and automation that can later support intelligent agents.',
      visionTitle:'How Tamqinx aligns with Oman Vision 2040',
      visionCopy:'Oman Vision 2040 encourages innovation, digital transformation, local talent, productivity and a knowledge-based economy. Tamqinx contributes by helping companies digitize operations, improve decision-making and build scalable technology capability in the Sultanate of Oman.'
    },

    services:{
      eyebrow:'Our Technology Services',
      title:'Services designed around timelines, tech stacks and long-term support.',
      copy:'This page focuses only on what Tamqinx can deliver as services: software engineering, AI automation, dashboards, integrations, QA, UX/UI and maintenance.',
      serviceTitle:'End-to-end services for companies that want to build, automate and scale.'
    },

    serviceCards:[
      ['Business Software',['ERP Systems','CRM Platforms','HR Management Systems','Firm Management Software','Billing & Invoicing Solutions']],
      ['Web & Mobile Development',['Custom Business Websites','iOS & Android Applications','Progressive Web Apps','E-commerce Platforms','System Integrations']],
      ['AI, Automation & Analytics',['AI Chatbots & Assistants','Machine Learning Models','Process Automation','Data Dashboards','Predictive Analytics']],
      ['Digital Marketing & UX/UI',['SEO Optimization','Meta Ads Management','Content Creation','UX / UI Design','Brand Strategy']],
      ['Consulting & Training',['Technology Adoption Strategy','Process Digitization','Client Team Training','Implementation Support','Technical Guidance']],
      ['API & Integration',['Custom API Development','Third-party Integrations','Microservices Architecture','Legacy System Bridging','Secure Data Sync']],
      ['Support & Maintenance',['24/7 Technical Support','Bug Fixes & Patching','Performance Optimization','Version Upgrades','System Health Monitoring']],
      ['QA & Software Testing',['Automated Regression Testing','User Acceptance Testing','Security & Pen Testing','Performance & Load Testing','Code Quality Audits']]
    ],

    solutions:{
      eyebrow:'Solutions & Products',
      title:'Product systems from Tamqinx, customized around your workflow.',
      copy:'These are product-style systems we can deliver and customize further for different industries, teams and operational models.',
      posTitle:'Restaurant POS & Management System',
      posCopy:'A full restaurant and cafe operating system covering POS, order dashboard, table management, kitchen display, customer status display, CRM, inventory, payments, reports and future AI intelligence.',
      posLink:'Visit pos.tamqinx.com',
      acTitle:'AC Service Management System',
      acCopy:'A service management platform for government contracts, apartments, enterprises and one-time jobs with AC tag registry, technician workflow, Google Maps-style location, job cards, billing, reminders, reports and spare parts tracking.',
      carTitle:'Car Detailing Operations System',
      carCopy:'A detailing workflow system that tracks bookings, vehicle intake, before/after photos, service stages, staff actions, payments, customer updates and complete service history.',
      agentsTitle:'AI Agents for Operations',
      agentsCopy:'AI agents can reduce manual labour by answering questions, summarizing requests, updating workflows, triggering reminders and connecting with websites, CRM, dashboards and internal tools.',
      customTitle:'Custom Industry Platforms',
      customCopy:'From dashboards to mini-ERPs, booking systems, asset tracking and customer portals, we can shape products around your internal workflow instead of forcing you into generic software.'
    },

    insights:{
      eyebrow:'Insights',
      title:'AI transformation, Oman Vision 2040 and practical technology adoption.',
      copy:'Selected reading and perspectives around AI, SME digitalisation, automation and the digital economy in the Sultanate of Oman.',
      cards:[
        ['Oman News: AI and Digital Economy','Official news and national updates connected to AI, digital transformation and future economy priorities in Oman.','https://omannews.gov.om/topics/en/80/show/115949','Read official article'],
        ['Digitalisation Driving SME Growth','Why innovation and technology adoption are becoming essential for Omani SMEs that want to compete and scale.','https://www.muscatdaily.com/2025/08/20/digitalisation-driving-growth-of-smes-in-oman/','Read Muscat Daily'],
        ['Oman AI Programme & Vision 2040','Oman’s AI programme supports the digital economy and the wider goals of Oman Vision 2040.','https://www.middleeastmonitor.com/20240924-oman-unveils-ambitious-ai-programme-to-drive-digital-economy-and-achieve-vision-2040/','Read full article']
      ],
      imageTitle:'Oman Vision 2040',
      imageCopy:'Technology becomes meaningful when it improves productivity, service quality, skills and long-term economic resilience.'
    },

    faq:[
      ['How long does a business website usually take?','A focused business website usually takes 1–3 weeks depending on page count, content readiness, animations, brand assets, language support and revision cycles.'],
      ['How long does a custom system take?','A usable first release for POS, AC service management, CRM or operations dashboards usually takes 6–12 weeks. Larger systems are delivered in milestone phases.'],
      ['Which technology stack do you recommend?','We choose the stack based on the project. Common choices include React, Next.js, Node.js, Python, Django, PostgreSQL, MongoDB, AWS, Docker, Tailwind, Supabase, Firebase, LangChain and n8n.'],
      ['Can Tamqinx integrate with our existing software?','Yes. We can connect websites, CRM systems, dashboards, accounting exports, payment gateways, notification channels and third-party APIs through secure integration layers.'],
      ['Can AI agents reduce manual work?','Yes. AI agents can answer repetitive questions, summarize requests, collect information, route tasks, update dashboards, trigger reminders and assist teams inside existing workflows.'],
      ['What support is available after launch?','Support can include bug fixes, QA, monitoring, backups, staff training, security updates, performance improvement, new features and technical guidance.']
    ],

    contact:{
      eyebrow:'Contact',
      title:'Tell us what you want to build.',
      copy:'For websites, dashboards, AI agents, POS systems, service management platforms or custom products, contact Tamqinx Technology in the Sultanate of Oman.',
      formTitle:'Start with a clear project brief.',
      formCopy:'Share your current workflow, manual problems and the type of software you want. We will help define the right route from idea to launch.'
    }
  },

  ar: {
    nav:{
      home:'الرئيسية',
      about:'من نحن',
      services:'الخدمات',
      solutions:'الحلول',
      insights:'الرؤى',
      contact:'تواصل معنا',
      book:'احجز استشارة ←'
    },

    common:{
      location:'سلطنة عُمان',
      phone:'+968 9229 2961',
      email:'contact@tamqinx.com',
      consult:'احجز استشارة',
      explore:'استكشف حلولنا',
      rights:'تمكين اكس للتقنية. جميع الحقوق محفوظة.'
    },

    home:{
      eyebrow:'نقود التحوّل الرقمي للشركات الحديثة',
      words:['نبني.','نؤتمت.','نوسّع.'],
      copy:'تمكين اكس للتقنية شركة برمجيات عُمانية تطوّر أنظمة أعمال ذكية، وحلول أتمتة مدعومة بالذكاء الاصطناعي، ومنصات رقمية قابلة للتوسّع ومهيأة للمستقبل.',
      typing:['لوحات معلومات لحظية','أنظمة أعمال ذكية','أتمتة مدعومة بالذكاء الاصطناعي','تكاملات آمنة','منصات رقمية قابلة للتوسّع'],
      script:'من الفكرة إلى تشغيل أذكى.',
      brands:'تثق بنا علامات تجارية تعرفها',
      systemTitle:'مركز قيادة رقمي للشركات الحديثة.',
      systemCopy:'نساعد فرق الإدارة على رؤية العمليات بوضوح، وربط مسارات العمل المتفرقة، وتحويل المهام اليدوية المتكررة إلى أنظمة رقمية قابلة للقياس.',
      visionTitle:'نحوّل رؤية عُمان 2040 إلى برمجيات تعمل على أرض الواقع.',
      visionCopy:'تدعم تمكين اكس مسيرة التحوّل الرقمي في سلطنة عُمان من خلال بناء منصات تعزّز الإنتاجية، وترفع الكفاءة المحلية، وتمنح وضوحًا أكبر للبيانات، وتدعم الأتمتة، وتزيد القدرة التنافسية على المدى الطويل.',
      chooseTitle:'لماذا تختار تمكين اكس؟',
      chooseCopy:'لأننا لا نتعامل مع المشاريع كقوالب جاهزة؛ بل نبني منتجات رقمية مصممة حول سير العمل، واحتياجات المستخدمين، والبيانات، وقابلية التوسّع على المدى الطويل.',
      terminalTitle:'طبقة التشغيل الرقمية',
      terminalCopy:'نساعد فرق الإدارة على رؤية العمليات بوضوح، وربط مسارات العمل المتفرقة، وتحويل المهام اليدوية المتكررة إلى أنظمة رقمية قابلة للقياس.'
    },

    choose:[
      ['فهم سير العمل أولًا','ندرس طريقة عمل فريقك قبل تصميم الشاشات، حتى يكون النظام النهائي وسيلة لتسهيل العمل لا طبقة جديدة من التعقيد.'],
      ['بنية مهيأة للذكاء الاصطناعي','نصمّم برنامجك ليكون قابلًا لاحقًا للربط مع وكلاء الذكاء الاصطناعي، والتحليلات، والتنبيهات، والأتمتة، وتكاملات الأنظمة دون الحاجة إلى إعادة بناء المنصة من الصفر.'],
      ['تسليم واضح على مراحل','نقسّم الأنظمة الكبيرة إلى مراحل واضحة وقابلة للاختبار، لتتمكن من متابعة التقدم وإطلاق النظام بثقة وأمان.'],
      ['دعم تقني مستدام','نواصل دعم النظام بعد الإطلاق من خلال ضمان الجودة، والمراقبة، وتحسين الأداء، وتعزيز الأمان، وتنفيذ التحديثات، وإضافة الميزات الجديدة.']
    ],

    testimonialsTitle:'مشروعك بين أيدٍ خبيرة',
    testimonialsCopy:'شهادات من فرق وثقت بـ تمكين اكس في تطوير البرمجيات، ولوحات المعلومات، وتكاملات الأنظمة، وضمان الجودة، وبناء الأنظمة الرقمية.',

    testimonials:[
      ['تجاوزت تمكين اكس للتقنية توقعاتنا في كل جانب. دقتهم في تطوير الأنظمة المخصصة، إلى جانب خبرتهم في تكاملات واجهات البرمجة ولوحات المعلومات، منحتنا رؤية واضحة ولحظية لأداء أعمالنا. إذا كنت تبحث عن بناء عملياتك، وأتمتتها، وتوسيع نطاقها، فتمكين اكس خيار يستحق الثقة.','عبدالعزيز أنور السناني','مؤسس IBS'],
      ['اهتمام عالٍ بالتفاصيل وسرعة مميزة في التسليم. تجاوزوا توقعاتي في كل مرحلة، وأثبتوا أنهم من أفضل الخيارات لحلول الويب الحديثة.','عزير نثار','الشريك المؤسس، الأصيل'],
      ['ما يميّز تمكين اكس هو التزامهم الحقيقي بالجودة. آليات ضمان الجودة والدعم المستمر لديهم ساعدت في الحفاظ على أمان أنظمتنا واستقرارها. لم يقدّموا لنا منتجًا فقط؛ بل بنوا لنا أساسًا جاهزًا للمستقبل ساهم في تحسين عائد الاستثمار منذ اليوم الأول.','مؤمن علي الهنائي','مؤسس الفخامة'],
      ['ساعدتنا تمكين اكس على التفكير بما يتجاوز فكرة الموقع الإلكتروني التقليدي. أصبح لدينا نظام واضح لمتابعة أعمال العناية بالسيارات، وتحديثات العملاء، وسجل الخدمات، والصور، والمدفوعات، وسير عمل الفريق من لوحة تحكم واحدة ومنظمة.','المؤسس','سكاي كير للعناية بالسيارات']
    ],

    about:{
      eyebrow:'من نحن',
      title:'شريك تقني عُماني بطموح عالمي في الذكاء الاصطناعي.',
      copy:'تمكين اكس للتقنية تبني برمجيات أعمال، وأتمتة مدعومة بالذكاء الاصطناعي، ومنصات رقمية للمؤسسات التي تريد عمليات أوضح، وقرارات أسرع، ونموًا قابلًا للتوسّع.',
      note:'من سلطنة عُمان إلى أسواق تتحرك بسرعة.',
      rdTitle:'بحث وتطوير في الذكاء الاصطناعي بصورة عملية.',
      rdCopy:'نتابع التطور العالمي في وكلاء الذكاء الاصطناعي، والأتمتة، والتحليلات، والرؤية الحاسوبية، وتنسيق سير العمل، وأنظمة التكامل، ثم نحوّل الأفكار المفيدة إلى منتجات قابلة للتطبيق.',
      globalTitle:'وعي عالمي بالبحث والتطوير',
      globalCopy:'نتابع سير العمل المعتمد على الوكلاء، والواجهات التوليدية، وهندسة البيانات، والأتمتة، والرؤية الحاسوبية، وتقييم النماذج، وأنظمة التحليلات المستخدمة في الشركات التقنية الحديثة.',
      omanTitle:'جاهزية الذكاء الاصطناعي في عُمان',
      omanCopy:'بالنسبة للشركات العُمانية، تبدأ الجاهزية غالبًا ببيانات نظيفة، ومسارات عمل مترابطة، ولوحات معلومات، وتبنّي الفريق، وأتمتة يمكن أن تدعم الوكلاء الذكيين لاحقًا.',
      visionTitle:'كيف تتوافق تمكين اكس مع رؤية عُمان 2040',
      visionCopy:'تشجع رؤية عُمان 2040 الابتكار، والتحول الرقمي، وتنمية المواهب المحلية، والإنتاجية، والاقتصاد القائم على المعرفة. وتسهم تمكين اكس في ذلك من خلال مساعدة الشركات على رقمنة العمليات، وتحسين اتخاذ القرار، وبناء قدرات تقنية قابلة للتوسّع في سلطنة عُمان.'
    },

    services:{
      eyebrow:'خدماتنا التقنية',
      title:'خدمات مصممة حول الجداول الزمنية، والتقنيات، والدعم طويل المدى.',
      copy:'تركز هذه الصفحة على ما تقدمه تمكين اكس كخدمات: هندسة البرمجيات، أتمتة الذكاء الاصطناعي، لوحات المعلومات، التكاملات، ضمان الجودة، تجربة المستخدم، والصيانة.',
      serviceTitle:'خدمات متكاملة للشركات التي تريد البناء، والأتمتة، والتوسّع.'
    },

    serviceCards:[
      ['برمجيات الأعمال',['أنظمة ERP','منصات CRM','أنظمة إدارة الموارد البشرية','أنظمة إدارة الشركات','حلول الفوترة وإصدار الفواتير']],
      ['تطوير الويب والتطبيقات',['مواقع أعمال مخصصة','تطبيقات iOS و Android','تطبيقات ويب تقدمية','منصات تجارة إلكترونية','تكاملات الأنظمة']],
      ['الذكاء الاصطناعي والأتمتة والتحليلات',['مساعدات ومحادثات ذكية','نماذج تعلم آلي','أتمتة العمليات','لوحات معلومات','تحليلات تنبؤية']],
      ['التسويق الرقمي وتجربة المستخدم',['تحسين محركات البحث','إدارة إعلانات Meta','إنشاء المحتوى','تصميم UX / UI','استراتيجية العلامة التجارية']],
      ['الاستشارات والتدريب',['استراتيجية تبني التقنية','رقمنة العمليات','تدريب فرق العمل','دعم التنفيذ','إرشاد تقني']],
      ['واجهات API والتكامل',['تطوير API مخصص','تكاملات مع أطراف خارجية','بنية الخدمات المصغرة','ربط الأنظمة القديمة','مزامنة بيانات آمنة']],
      ['الدعم والصيانة',['دعم تقني مستمر','إصلاح الأخطاء والتحديثات','تحسين الأداء','ترقية الإصدارات','مراقبة صحة النظام']],
      ['ضمان الجودة واختبار البرمجيات',['اختبار انحدار آلي','اختبار قبول المستخدم','اختبار أمان واختراق','اختبار أداء وتحمل','تدقيق جودة الكود']]
    ],

    solutions:{
      eyebrow:'الحلول والمنتجات',
      title:'أنظمة من تمكين اكس قابلة للتخصيص حول سير عملك.',
      copy:'هذه أنظمة بأسلوب المنتجات يمكننا تسليمها وتخصيصها أكثر حسب الصناعة، والفريق، ونموذج التشغيل.',
      posTitle:'نظام POS وإدارة المطاعم',
      posCopy:'نظام تشغيل كامل للمطاعم والمقاهي يشمل نقطة البيع، ولوحة الطلبات، وإدارة الطاولات، وشاشة المطبخ، وشاشة حالة العميل، وإدارة العملاء، والمخزون، والمدفوعات، والتقارير، وذكاء اصطناعي مستقبلي.',
      posLink:'زيارة pos.tamqinx.com',
      acTitle:'نظام إدارة خدمات التكييف',
      acCopy:'منصة لإدارة خدمات العقود الحكومية، والشقق، والشركات، والطلبات الفردية، مع سجل أصول التكييف، وسير عمل الفني، وموقع بأسلوب خرائط Google، وبطاقات عمل، وفواتير، وتذكيرات، وتقارير، وتتبع قطع الغيار.',
      carTitle:'نظام عمليات العناية بالسيارات',
      carCopy:'نظام يتتبع الحجوزات، واستلام المركبة، وصور قبل وبعد، ومراحل الخدمة، وإجراءات الفريق، والمدفوعات، وتحديثات العملاء، وتاريخ الخدمة الكامل.',
      agentsTitle:'وكلاء ذكاء اصطناعي للعمليات',
      agentsCopy:'يمكن لوكلاء الذكاء الاصطناعي تقليل العمل اليدوي عبر الرد على الأسئلة، وتلخيص الطلبات، وتحديث سير العمل، وتشغيل التذكيرات، والاتصال بالمواقع، وأنظمة CRM، ولوحات المعلومات، والأدوات الداخلية.',
      customTitle:'منصات مخصصة للقطاعات',
      customCopy:'من لوحات المعلومات إلى أنظمة Mini-ERP، وأنظمة الحجز، وتتبع الأصول، وبوابات العملاء، نصمّم المنتجات حول سير عملك الداخلي بدلًا من إجبارك على برنامج عام.'
    },

    insights:{
      eyebrow:'الرؤى',
      title:'تحوّل الذكاء الاصطناعي، ورؤية عُمان 2040، وتبنّي التقنية عمليًا.',
      copy:'قراءات ورؤى مختارة حول الذكاء الاصطناعي، ورقمنة الشركات الصغيرة والمتوسطة، والأتمتة، والاقتصاد الرقمي في سلطنة عُمان.',
      cards:[
        ['وكالة الأنباء العُمانية: الذكاء الاصطناعي والاقتصاد الرقمي','أخبار رسمية وتحديثات وطنية مرتبطة بالذكاء الاصطناعي، والتحول الرقمي، وأولويات اقتصاد المستقبل في عُمان.','https://omannews.gov.om/topics/en/80/show/115949','اقرأ الخبر الرسمي'],
        ['الرقمنة تدفع نمو الشركات الصغيرة والمتوسطة','لماذا أصبح الابتكار وتبنّي التقنية ضرورة للشركات العُمانية التي تريد المنافسة والنمو.','https://www.muscatdaily.com/2025/08/20/digitalisation-driving-growth-of-smes-in-oman/','اقرأ في Muscat Daily'],
        ['برنامج الذكاء الاصطناعي ورؤية 2040','برنامج عُمان للذكاء الاصطناعي يدعم الاقتصاد الرقمي وأهداف رؤية عُمان 2040.','https://www.middleeastmonitor.com/20240924-oman-unveils-ambitious-ai-programme-to-drive-digital-economy-and-achieve-vision-2040/','اقرأ المقال']
      ],
      imageTitle:'رؤية عُمان 2040',
      imageCopy:'تصبح التقنية ذات قيمة عندما ترفع الإنتاجية، وتحسّن جودة الخدمة، وتطوّر المهارات، وتعزز المرونة الاقتصادية على المدى الطويل.'
    },

    faq:[
      ['كم يستغرق تنفيذ موقع أعمال؟','عادة يستغرق موقع الأعمال من أسبوع إلى ثلاثة أسابيع حسب عدد الصفحات، وجاهزية المحتوى، والرسوم المتحركة، وأصول العلامة، ودعم اللغة، ودورات المراجعة.'],
      ['كم يستغرق تنفيذ نظام مخصص؟','الإصدار الأول القابل للاستخدام لأنظمة POS، أو إدارة خدمات التكييف، أو CRM، أو لوحات العمليات يستغرق عادة من 6 إلى 12 أسبوعًا. ويتم تسليم الأنظمة الكبيرة على مراحل.'],
      ['ما التقنية المناسبة للمشروع؟','نختار التقنية حسب طبيعة المشروع. من الخيارات الشائعة React و Next.js و Node.js و Python و Django و PostgreSQL و MongoDB و AWS و Docker و Tailwind و Supabase و Firebase و LangChain و n8n.'],
      ['هل يمكن التكامل مع أدواتنا الحالية؟','نعم. يمكننا ربط المواقع، وأنظمة CRM، ولوحات المعلومات، وتصدير المحاسبة، وبوابات الدفع، وقنوات الإشعارات، وواجهات الطرف الثالث من خلال طبقات تكامل آمنة.'],
      ['هل يمكن لوكلاء الذكاء الاصطناعي تقليل العمل اليدوي؟','نعم. يمكنهم الرد على الأسئلة المتكررة، وتلخيص الطلبات، وجمع المعلومات، وتوجيه المهام، وتحديث لوحات المعلومات، وتشغيل التذكيرات، ومساعدة الفرق داخل سير العمل الحالي.'],
      ['ما نوع الدعم المتاح بعد الإطلاق؟','يمكن أن يشمل الدعم إصلاح الأخطاء، وضمان الجودة، والمراقبة، والنسخ الاحتياطي، وتدريب الفريق، وتحديثات الأمان، وتحسين الأداء، وإضافة ميزات جديدة، وتقديم إرشاد تقني.']
    ],

    contact:{
      eyebrow:'تواصل معنا',
      title:'أخبرنا ماذا تريد أن تبني.',
      copy:'للمواقع، ولوحات المعلومات، ووكلاء الذكاء الاصطناعي، وأنظمة POS، ومنصات إدارة الخدمات، أو المنتجات المخصصة، تواصل مع تمكين اكس للتقنية في سلطنة عُمان.',
      formTitle:'ابدأ بملخص مشروع واضح.',
      formCopy:'شاركنا سير عملك الحالي، والمشكلات اليدوية، ونوع البرنامج الذي تريد بناءه. سنساعدك في تحديد المسار الأنسب من الفكرة إلى الإطلاق.'
    }
  }
};

const stacks = [
  ['React','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
  ['Next.js','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'],
  ['Node.js','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
  ['Python','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
  ['Django','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'],
  ['PostgreSQL','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
  ['MongoDB','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
  ['AWS','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'],
  ['Docker','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
  ['Tailwind','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'],
  ['Supabase','https://cdn.simpleicons.org/supabase/3ECF8E'],
  ['Firebase','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'],
  ['Stripe','https://cdn.simpleicons.org/stripe/635BFF'],
  ['LangChain','https://cdn.simpleicons.org/langchain/1C3C3C'],
  ['n8n','https://cdn.simpleicons.org/n8n/EA4B71'],
  ['TensorFlow','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'],
  ['OpenCV','https://cdn.simpleicons.org/opencv/5C3EE8']
];

function App(){
  const [lang,setLang] = useState(localStorage.getItem('tamqinxLang') || 'en');
  return h(LangContext.Provider,{value:{lang,setLang}}, h(Layout,null, h(route(),null)));
}

function route(){
  return ({index:Home,about:About,services:Services,solutions:Solutions,insights:Insights,contact:Contact}[page] || Home);
}

function usePageEffects(){
  useEffect(()=>{
    const timer = setTimeout(()=>document.querySelector('.loader')?.classList.add('hide'), 750);

    const reveal = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('in');
      });
    }, {threshold:.08});

    document.querySelectorAll('.reveal,.stagger > *,.zoom-reveal,.flow-step').forEach(el => reveal.observe(el));

    const move = e => {
      document.documentElement.style.setProperty('--mx', e.clientX+'px');
      document.documentElement.style.setProperty('--my', e.clientY+'px');

      const dot = document.querySelector('.cursor-dot');
      const ring = document.querySelector('.cursor-ring');

      if(dot) dot.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;

      if(ring) {
        ring.animate(
          {transform:`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`},
          {duration:380,fill:'forwards',easing:'cubic-bezier(.2,.8,.2,1)'}
        );
      }

      document.querySelectorAll('.card,.why-card,.service-card,.project,.quote,.insight-card,.contact-card,.terminal').forEach(c=>{
        const b=c.getBoundingClientRect();
        c.style.setProperty('--cardx',`${e.clientX-b.left}px`);
        c.style.setProperty('--cardy',`${e.clientY-b.top}px`);
      });
    };

    const scroll = () => {
      document.querySelectorAll('.parallax').forEach(el => {
        el.style.transform = `translate3d(0,${window.scrollY * Number(el.dataset.speed || .04)}px,0)`;
      });
    };

    window.addEventListener('mousemove',move);
    window.addEventListener('scroll',scroll);

    return ()=>{
      clearTimeout(timer);
      reveal.disconnect();
      window.removeEventListener('mousemove',move);
      window.removeEventListener('scroll',scroll);
    };
  },[]);
}

function Layout({children}){
  usePageEffects();

  const {lang,setLang}=useLang();
  const c=t[lang];

  const [open,setOpen]=useState(false);
  const [sc,setSc]=useState(false);

  useEffect(()=>{
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    document.documentElement.lang=lang;
    document.title='Tamqinx Technology';
    localStorage.setItem('tamqinxLang',lang);
  },[lang]);

  useEffect(()=>{
    const f=()=>setSc(window.scrollY>20);
    f();
    window.addEventListener('scroll',f);
    return()=>window.removeEventListener('scroll',f);
  },[]);

  return h('div',{className:`site lang-${lang}`},
    h(Loader,{lang}),
    h(NeuralCanvas),
    h('div',{className:'cursor-dot'}),
    h('div',{className:'cursor-ring'}),
    h('div',{className:'spotlight'}),
    h('div',{className:'noise'}),

    h('header',{className:`nav ${sc?'scrolled':''}`},
      h('a',{className:'brand',href:'index.html'},
        h('img',{src:'assets/logo/logo.png',alt:'Tamqinx Technology logo'})
      ),
      h('nav',{className:'nav-links'},
        nav.map(([key,href,p])=>h('a',{key,href,className:page===p?'active':''}, c.nav[key]))
      ),
      h('button',{className:'lang-toggle',onClick:()=>setLang(lang==='en'?'ar':'en')}, lang==='en'?'عربي':'EN'),
      h('a',{className:'nav-cta',href:'contact.html'}, c.nav.book),
      h('button',{className:'mobile-btn',onClick:()=>setOpen(!open)}, open?'×':'☰')
    ),

    open && h('div',{className:'mobile-panel'},
      nav.map(([key,href])=>h('a',{key,href},c.nav[key])),
      h('button',{onClick:()=>setLang(lang==='en'?'ar':'en')},lang==='en'?'العربية':'English')
    ),

    children,
    h(Footer)
  );
}

function Loader({lang}){
  return h('div',{className:'loader'},
    h('div',{className:'loader-card'},
      h('img',{src:'assets/logo/logo.png',alt:''}),
      h('div',{className:'loader-line'},h('span')),
      h('p',null,lang==='ar'?'نجهز تجربة رقمية ذكية':'Preparing an intelligent digital experience')
    )
  );
}

function NeuralCanvas(){
  const ref=useRef(null);

  useEffect(()=>{
    const canvas=ref.current;
    const ctx=canvas.getContext('2d');

    let w,hgt,nodes=[],raf;

    const init=()=>{
      w=canvas.width=window.innerWidth*devicePixelRatio;
      hgt=canvas.height=window.innerHeight*devicePixelRatio;
      canvas.style.width=window.innerWidth+'px';
      canvas.style.height=window.innerHeight+'px';

      const count=Math.min(240,Math.floor(window.innerWidth/5.8));

      nodes=Array.from({length:count},()=>({
        x:Math.random()*w,
        y:Math.random()*hgt,
        vx:(Math.random()-.5)*.38*devicePixelRatio,
        vy:(Math.random()-.5)*.38*devicePixelRatio,
        r:(Math.random()*1.6+1)*devicePixelRatio
      }));
    };

    const draw=()=>{
      ctx.clearRect(0,0,w,hgt);
      ctx.lineWidth=.65*devicePixelRatio;

      for(const a of nodes){
        a.x+=a.vx;
        a.y+=a.vy;

        if(a.x<0||a.x>w)a.vx*=-1;
        if(a.y<0||a.y>hgt)a.vy*=-1;
      }

      for(let i=0;i<nodes.length;i++){
        for(let j=i+1;j<nodes.length;j++){
          const a=nodes[i],b=nodes[j];
          const dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);

          if(d<175*devicePixelRatio){
            ctx.strokeStyle=`rgba(10,169,214,${(1-d/(175*devicePixelRatio))*0.42})`;
            ctx.beginPath();
            ctx.moveTo(a.x,a.y);
            ctx.lineTo(b.x,b.y);
            ctx.stroke();
          }
        }
      }

      for(const a of nodes){
        ctx.fillStyle='rgba(9, 118, 148, .96)';
        ctx.beginPath();
        ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
        ctx.fill();
      }

      raf=requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener('resize',init);

    return()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',init);
    };
  },[]);

  return h('canvas',{ref,className:'neural-canvas','aria-hidden':true});
}

function Footer(){
  const {lang}=useLang();
  const c=t[lang];

  return h('footer',{className:'footer'},
    h('div',{className:'footer-inner'},
      h('div',null,`© ${new Date().getFullYear()} ${c.common.rights}`),
      h('div',{className:'socials'},
        h('a',{href:'https://www.linkedin.com/company/tamqinx',target:'_blank',rel:'noreferrer'},lang==='ar'?'لينكدإن':'LinkedIn'),
        h('a',{href:'https://x.com/tamqinx',target:'_blank',rel:'noreferrer'},lang==='ar'?'إكس':'X'),
        h('a',{href:'https://www.instagram.com/tamqinx/',target:'_blank',rel:'noreferrer'},lang==='ar'?'إنستغرام':'Instagram'),
        h('a',{href:`mailto:${c.common.email}`},lang==='ar'?'البريد الإلكتروني':'Email'),
        h('a',{href:`mailto:${c.common.email}?subject=CV%20for%20Tamqinx%20Technology`},lang==='ar'?'انضم إلى فريقنا':'Join our team')
      )
    )
  );
}

function Eyebrow({children}){
  return h('div',{className:'eyebrow'},children);
}

function SectionTitle({eyebrow,title,copy}){
  return h('div',{className:'reveal'},
    h(Eyebrow,null,eyebrow),
    h('h2',{className:'section-title'},title),
    copy && h('p',{className:'section-copy'},copy)
  );
}

function LocationBadge(){
  const {lang}=useLang();

  return h('div',{className:'location-row reveal'},
    h('div',{className:'location-badge'},
      h('span'),
      t[lang].common.location
    )
  );
}

function TypingText({items}){
  const [i,setI]=useState(0);

  useEffect(()=>{
    const id=setInterval(()=>setI(v=>(v+1)%items.length),1850);
    return()=>clearInterval(id);
  },[items]);

  return h('div',{className:'typing-line'},
    h('span',null,'//'),
    h('b',null,items[i]),
    h('i',{className:'typing-cursor'})
  );
}

function HeroTitle({words}){
  return h('h1',{className:'hero-title'},
    words.map((w,i)=>h('span',{key:w,className:`word ${i===2?'accent-word':''}`},w))
  );
}

function HeroVisual(){
  const {lang}=useLang();

  const metricLabels = lang==='ar'
    ? [
        ['الأتمتة','على مدار الساعة'],
        ['الذكاء الاصطناعي','AI'],
        ['لوحات المعلومات','مباشرة'],
        ['الأمان','ضمان الجودة']
      ]
    : [
        ['Automations','24/7'],
        ['Decision layer','AI'],
        ['Dashboards','Live'],
        ['Security','QA']
      ];

  return h('div',{className:'hero-visual zoom-reveal'},
    h('div',{className:'visual-shell parallax','data-speed':'-.018'},
      h('div',{className:'visual-inner'},
        h('div',{className:'visual-grid'}),
        h('div',{className:'ai-orb'}),

        h('div',{className:'code-window'},
          h('div',{className:'code-top'},h('i'),h('i'),h('i')),
          h('div',{className:'code-lines'},
            h('div',null,h('em',null,'const'),' platform = ',h('strong',null,'TamqinxOS')),
            h('div',null,'connect(data, teams, workflows)'),
            h('div',null,'deploy(ai_agents, dashboards)'),
            h('div',null,'scale(region: ',h('strong',null,'"Sultanate of Oman"'),')')
          )
        ),

        h('div',{className:'robot-mini'},h('div',{className:'robot-head'})),

        h('div',{className:'mini-dashboard'},
          metricLabels.map((m,i)=>
            h('div',{className:'metric',key:i},
              h('span',null,m[0]),
              h('b',null,m[1])
            )
          )
        )
      )
    )
  );
}

function Terminal({title,copy}){
  const {lang}=useLang();

  const lines=lang==='ar'
    ? ['tamqinx init –project platform','تحليل سير العمل… تم','تصميم قاعدة البيانات… تم','ربط لوحات المعلومات… تم']
    : ['tamqinx init –project platform','mapping workflows… done','designing database… done','connecting dashboards… done'];

  return h('div',{className:'terminal reveal'},
    h('div',{className:'term-top'},h('i'),h('i'),h('i')),
    h('div',{className:'term-body'},
      lines.map((l,i)=>h('div',{key:i},
        h('span',{className:'prompt'}, i===0?'$ ':'> '),
        l
      ))
    ),
    h('div',{className:'card',style:{boxShadow:'none',borderRadius:'0',border:'0',borderTop:'1px solid rgba(255,255,255,.1)',background:'rgba(255,255,255,.04)'}},
      h('h3',null,title),
      h('p',null,copy)
    )
  );
}

function ClientMarquee(){
  const {lang}=useLang();

  const logos = [
    'b1.png',
    'b2.png',
    'b3.png',
    'b4.png',
    'b5.png',
    'b6.png',
    'b7.png',
    'b8.png'
  ];

  return h('section',{className:'client-band'},
    h('p',null,t[lang].home.brands),
    h('div',{className:'client-track'},
      logos.concat(logos,logos).map((logo,i)=>
        h('div',{className:'client-logo',key:i},
          h('img',{
            src:`assets/client-logos/${logo}`,
            alt:`Tamqinx client logo ${i + 1}`,
            loading:'lazy'
          })
        )
      )
    )
  );
}

function TechMarquee(){
  const {lang}=useLang();

  return h('section',{className:'tech-band'},
    h('div',{className:'tech-label'},lang==='ar'?'أبرز التقنيات التي نستخدمها':'Top stacks we use'),
    h('div',{className:'tech-track'},
      stacks.concat(stacks).map((s,i)=>
        h('div',{className:'tech-chip',key:i},
          h('img',{src:s[1],alt:''}),
          h('span',null,s[0])
        )
      )
    )
  );
}

function VisionImageCard(){
  const {lang}=useLang();
  const c=t[lang].insights;

  return h('div',{className:'vision-card zoom-reveal'},
    h('img',{src:'assets/images/insights.png',alt:'Oman Vision 2040'}),
    h('div',{className:'vision-overlay'},
      h('h3',null,c.imageTitle),
      h('p',null,c.imageCopy)
    )
  );
}

function OmanGlobe(){
  const {lang}=useLang();

  return h('div',{className:'globe-card zoom-reveal'},
    h('div',{className:'globe'},h('span',{className:'oman-pin'})),
    h('div',{className:'globe-label'},t[lang].common.location)
  );
}

function CustomerWow(){
  const {lang}=useLang();

  const items = lang==='ar'
    ? [
        ['رحلة واضحة','من أول طلب وحتى الفاتورة أو التقرير، يحصل العميل على مسار واضح ومنظّم بدلًا من خطوات يدوية متفرقة.'],
        ['تحديثات ذكية','الإشعارات والرسائل وتحديثات الحالة تقلّل الاتصالات المتكررة، وتعزّز وضوح التجربة وثقة العميل.'],
        ['رؤية إدارية شاملة','تمنح الإدارة رؤية موحّدة للطلبات، والإيرادات، والأداء، والمشكلات، والمخزون، والفرص من مكان واحد.']
      ]
    : [
        ['Clear journey','From first request to invoice or report, the customer sees a clear path instead of random manual steps.'],
        ['Smart updates','Notifications, messages and status updates reduce repeated calls and increase trust.'],
        ['Executive visibility','Leadership can see orders, revenue, performance, issues, inventory and opportunities from one place.']
      ];

  return h('section',{className:'page-section'},
    h('div',{className:'narrow'},
      h(SectionTitle,{
        eyebrow:lang==='ar'?'تجربة العملاء':'CUSTOMER EXPERIENCE',
        title:lang==='ar'?'نحوّل العمليات اليومية إلى تجربة رقمية يلمسها عملاؤك في كل تفاعل.':'We turn daily operations into a digital experience your customers can feel.',
        copy:lang==='ar'?'هدفنا لا يقتصر على بناء برنامج؛ بل نصمّم نظامًا يجعل الخدمة أسرع، والتواصل أوضح، والقرارات أدق، وفرق العمل أكثر ثقة في كل خطوة.':'The goal is not just to build software. It is to create a system that makes service faster, communication clearer, decisions sharper and teams more confident at every step.'
      }),
      h('div',{className:'experience-grid stagger spacer'},
        items.map((x,i)=>h('div',{className:'experience-card',key:i},
          h('span',null,`0${i+1}`),
          h('h3',null,x[0]),
          h('p',null,x[1])
        ))
      )
    )
  );
}

function RobotShowcase(){
  const {lang}=useLang();

  return h('section',{className:'page-section section-soft'},
    h('div',{className:'narrow grid-2'},
      h('div',{className:'robot-stage zoom-reveal'},
        h('div',{className:'robot-core'},
          h('div',{className:'robot-face'},h('i'),h('i')),
          h('div',{className:'robot-body'}, h('span'),h('span'),h('span'))
        ),
        h('div',{className:'robot-ring r1'}),
        h('div',{className:'robot-ring r2'}),
        h('div',{className:'robot-node n1'}),
        h('div',{className:'robot-node n2'}),
        h('div',{className:'robot-node n3'})
      ),
      h('div',null,
        h(SectionTitle,{
          eyebrow:lang==='ar'?'عقلية قائمة على الذكاء الاصطناعي والروبوتات':'AI + ROBOTICS MINDSET',
          title:lang==='ar'?'نصمّم أنظمة لعالم يتجه بثبات نحو الأتمتة.':'We design systems for a more automated world.',
          copy:lang==='ar'?'سواء كان النظام لمطعم، أو شركة خدمات، أو مركز عناية بالسيارات، أو فريق داخلي، فإننا نبنيه بأساس قابل للتطوير ليدعم لاحقًا وكلاء الذكاء الاصطناعي، والرؤية الحاسوبية، والتحليلات، وتكاملات الأنظمة، والتنبيهات الآلية.':'Whether the system is for a restaurant, a service company, a car detailing center or an internal team, we build it so it can later support AI agents, computer vision, analytics, integrations and automated alerts.'
        }),
        h('p',{className:'hand-note reveal'},lang==='ar'?'برمجيات اليوم، وذكاء الغد.':'Software today. Intelligence tomorrow.')
      )
    )
  );
}

function Home(){
  const {lang}=useLang();
  const c=t[lang];

  return h('main',null,
    h('section',{className:'hero home-hero'},
      h('div',{className:'hero-wrap'},
        h('div',{className:'reveal'},
          h(Eyebrow,null,c.home.eyebrow),
          h(HeroTitle,{words:c.home.words}),
          h('p',{className:'hero-copy'},c.home.copy),
          h('div',{className:'hero-actions'},
            h('a',{className:'btn btn-dark',href:'contact.html'},c.common.consult),
            h('a',{className:'btn btn-light',href:'solutions.html'},c.common.explore)
          ),
          h('div',{className:'script'},c.home.script),
          h(TypingText,{items:c.home.typing}),
          h(LocationBadge)
        ),
        h(HeroVisual)
      )
    ),

    h(ClientMarquee),
    h(CustomerWow),
    h(RobotShowcase),

    h('section',{className:'page-section'},
      h('div',{className:'narrow grid-2'},
        h(SectionTitle,{
          eyebrow:lang==='ar'?'طبقة التشغيل الرقمية':'DIGITAL OPERATING LAYER',
          title:c.home.systemTitle,
          copy:c.home.systemCopy
        }),
        h(Terminal,{title:c.home.terminalTitle,copy:c.home.terminalCopy})
      )
    ),

    h('section',{className:'page-section section-soft'},
      h('div',{className:'narrow grid-2'},
        h(VisionImageCard),
        h('div',null,
          h(SectionTitle,{
            eyebrow:lang==='ar'?'رؤية عُمان 2040':'OMAN VISION 2040',
            title:c.home.visionTitle,
            copy:c.home.visionCopy
          }),
          h('p',{className:'hand-note reveal'},lang==='ar'?'تقنية تصنع أثرًا، لا ضجيجًا.':'Technology with purpose, not noise.')
        )
      )
    ),

    h('section',{className:'page-section'},
      h('div',{className:'narrow'},
        h(SectionTitle,{
          eyebrow:lang==='ar'?'ما يميّزنا':'DIFFERENTIATION',
          title:c.home.chooseTitle,
          copy:c.home.chooseCopy
        }),
        h('div',{className:'grid-4 stagger spacer'},
          c.choose.map((x,i)=>h('div',{className:'why-card',key:i},
            h('div',{className:'pill'},`0${i+1}`),
            h('h3',null,x[0]),
            h('p',null,x[1])
          ))
        )
      )
    ),

    h(Testimonials)
  );
}

function Testimonials(){
  const {lang}=useLang();
  const c=t[lang];

  return h('section',{className:'page-section section-soft'},
    h('div',{className:'narrow'},
      h(SectionTitle,{
        eyebrow:lang==='ar'?'آراء العملاء':'TESTIMONIALS',
        title:c.testimonialsTitle,
        copy:c.testimonialsCopy
      }),
      h('div',{className:'quotes stagger spacer'},
        c.testimonials.map((q,i)=>h('blockquote',{className:'quote',key:i},
          h('p',null,'“',q[0],'”'),
          h('footer',null,
            h('b',null,q[1]),
            h('span',null,q[2])
          )
        ))
      )
    )
  );
}

function PageHero({eyebrow,title,copy,visual}){
  return h('section',{className:'hero page-hero'},
    h('div',{className:'hero-wrap'},
      h('div',{className:'reveal'},
        h(Eyebrow,null,eyebrow),
        h('h1',{className:'hero-title'},
          h('span',{className:'word'},title)
        ),
        h('p',{className:'hero-copy'},copy),
        h(LocationBadge)
      ),
      visual || h('div',{className:'hero-card-note zoom-reveal'},
        h('h3',null,'Tamqinx Technology'),
        h('p',null,copy)
      )
    )
  );
}

function About(){
  const {lang}=useLang();
  const c=t[lang];

  return h('main',null,
    h(PageHero,{eyebrow:c.about.eyebrow,title:c.about.title,copy:c.about.copy,visual:h(OmanGlobe)}),

    h('section',{className:'page-section'},
      h('div',{className:'narrow grid-2'},
        h('div',null,
          h(SectionTitle,{eyebrow:'AI R&D',title:c.about.rdTitle,copy:c.about.rdCopy}),
          h('p',{className:'hand-note reveal'},c.about.note)
        ),
        h(Terminal,{title:lang==='ar'?'من البحث إلى المنتج':'From research to product',copy:c.about.rdCopy})
      )
    ),

    h('section',{className:'page-section section-soft'},
      h('div',{className:'narrow grid-2'},
        h('div',{className:'card reveal'},h('h3',null,c.about.globalTitle),h('p',null,c.about.globalCopy)),
        h('div',{className:'card reveal'},h('h3',null,c.about.omanTitle),h('p',null,c.about.omanCopy))
      )
    ),

    h('section',{className:'page-section'},
      h('div',{className:'narrow grid-2'},
        h(OmanGlobe),
        h(SectionTitle,{eyebrow:lang==='ar'?'رؤية عُمان 2040':'Oman Vision 2040',title:c.about.visionTitle,copy:c.about.visionCopy})
      )
    )
  );
}

function Services(){
  const {lang}=useLang();
  const c=t[lang];

  return h('main',null,
    h(PageHero,{eyebrow:c.services.eyebrow,title:c.services.title,copy:c.services.copy,visual:h(Terminal,{title:'Service architecture',copy:c.services.copy})}),

    h('section',{className:'page-section'},
      h('div',{className:'narrow'},
        h(SectionTitle,{eyebrow:lang==='ar'?'القدرات':'Capabilities',title:c.services.serviceTitle}),
        h('div',{className:'grid-4 stagger spacer'},
          c.serviceCards.map((s,i)=>h('div',{className:'service-card',key:i},
            h('h3',null,s[0]),
            h('ul',null,s[1].map(item=>h('li',{key:item},item)))
          ))
        )
      )
    ),

    h(TechMarquee),

    h('section',{className:'page-section section-soft'},
      h('div',{className:'narrow'},
        h(SectionTitle,{
          eyebrow:lang==='ar'?'مسار التسليم':'Delivery Flow',
          title:lang==='ar'?'طريقة التسليم التقنية':'How technical delivery works',
          copy:lang==='ar'?'نبدأ بالاكتشاف، ثم النموذج، ثم التطوير المرحلي، ثم الاختبار، ثم الإطلاق والدعم.':'We start with discovery, move into prototype, build in milestones, test carefully, then launch with support.'
        }),
        h('div',{className:'flow spacer'},
          ['Discovery','Prototype','Build & Integrate','QA & Launch'].map((x,i)=>h('div',{className:'flow-step',key:i},
            h('b',null,`0${i+1}`),
            h('h4',null,lang==='ar'?['الاكتشاف','النموذج','البناء والتكامل','الاختبار والإطلاق'][i]:x),
            h('p',null,lang==='ar'?'مرحلة واضحة بمخرجات قابلة للمراجعة قبل الانتقال للخطوة التالية.':'A clear phase with reviewable outputs before moving to the next step.')
          ))
        )
      )
    )
  );
}

function Solutions(){
  const {lang}=useLang();
  const c=t[lang];
  const sol=c.solutions;

  return h('main',null,
    h(PageHero,{eyebrow:sol.eyebrow,title:sol.title,copy:sol.copy,visual:h(HeroVisual)}),

    h('section',{className:'page-section'},
      h('div',{className:'narrow project-grid stagger'},
        h('div',{className:'project wide'},
          h('h3',null,sol.posTitle),
          h('p',null,sol.posCopy),
          h('a',{className:'product-link',href:'https://pos.tamqinx.com',target:'_blank',rel:'noreferrer'},sol.posLink,' →')
        ),
        h('div',{className:'project'},h('h3',null,sol.acTitle),h('p',null,sol.acCopy)),
        h('div',{className:'project'},h('h3',null,sol.carTitle),h('p',null,sol.carCopy)),
        h('div',{className:'project'},h('h3',null,sol.agentsTitle),h('p',null,sol.agentsCopy)),
        h('div',{className:'project'},h('h3',null,sol.customTitle),h('p',null,sol.customCopy))
      )
    ),

    h('section',{className:'page-section section-soft'},
      h('div',{className:'narrow grid-2'},
        h(Terminal,{title:lang==='ar'?'أتمتة سير العمل':'Workflow automation',copy:sol.agentsCopy}),
        h('div',null,
          h(SectionTitle,{
            eyebrow:'AI Systems',
            title:lang==='ar'?'المنتجات تصبح أذكى مع البيانات':'Products become smarter with data',
            copy:lang==='ar'?'عندما تجمع المنصة الطلبات، والعملاء، والمخزون، ونشاط الفريق، والتقارير، تصبح جاهزة لتوقعات وتنبيهات ووكلاء أكثر ذكاءً.':'When a platform collects orders, customers, inventory, staff activity and reports, it becomes ready for smarter predictions, alerts and agents.'
          })
        )
      )
    )
  );
}

function Insights(){
  const {lang}=useLang();
  const c=t[lang];

  return h('main',null,
    h(PageHero,{eyebrow:c.insights.eyebrow,title:c.insights.title,copy:c.insights.copy,visual:h(HeroVisual)}),

    h('section',{className:'page-section'},
      h('div',{className:'narrow page-split'},
        h('div',null,
          h(SectionTitle,{
            eyebrow:lang==='ar'?'قائمة قراءة':'Reading List',
            title:lang==='ar'?'روابط مختارة عن التحول الرقمي في عُمان':'Selected links on Oman’s digital transformation',
            copy:c.insights.copy
          }),
          h('p',{className:'hand-note reveal'},lang==='ar'?'رؤية وطنية، تنفيذ عملي.':'National vision, practical execution.')
        ),
        h('div',{className:'news-grid stagger'},
          c.insights.cards.map((card,i)=>h('article',{className:'insight-card',key:i},
            h('h3',null,card[0]),
            h('p',null,card[1]),
            h('a',{href:card[2],target:'_blank',rel:'noreferrer'},card[3],' →')
          ))
        )
      )
    ),

    h('section',{className:'page-section section-soft'},
      h('div',{className:'narrow grid-2'},
        h(VisionImageCard),
        h('div',null,
          h(SectionTitle,{
            eyebrow:'Tamqinx Perspective',
            title:lang==='ar'?'كيف نحوّل الرؤية إلى أنظمة':'How we turn vision into systems',
            copy:lang==='ar'?'نربط التحول الوطني بحلول عملية: منصات للشركات، ولوحات معلومات، وأتمتة، ووكلاء ذكاء اصطناعي، وتكاملات، وتدريب للفرق.':'We connect national digital transformation with practical systems: business platforms, dashboards, automation, AI agents, integrations and team training.'
          })
        )
      )
    )
  );
}

function Contact(){
  const {lang}=useLang();
  const c=t[lang];

  return h('main',null,
    h(PageHero,{eyebrow:c.contact.eyebrow,title:c.contact.title,copy:c.contact.copy,visual:h(Terminal,{title:'contact@tamqinx.com',copy:c.contact.formCopy})}),

    h('section',{className:'page-section'},
      h('div',{className:'narrow contact-grid'},
        h('div',{className:'contact-card reveal'},
          h('h3',null,c.contact.formTitle),
          h('p',null,c.contact.formCopy),
          h('div',{className:'contact-list'},
            h('div',null,c.common.location),
            h('a',{href:`tel:${c.common.phone.replaceAll(' ','')}`},c.common.phone),
            h('a',{href:`mailto:${c.common.email}`},c.common.email),
            h('a',{href:'https://www.linkedin.com/company/tamqinx',target:'_blank',rel:'noreferrer'},lang==='ar'?'لينكدإن':'LinkedIn'),
            h('a',{href:'https://x.com/tamqinx',target:'_blank',rel:'noreferrer'},lang==='ar'?'إكس':'X'),
            h('a',{href:'https://www.instagram.com/tamqinx/',target:'_blank',rel:'noreferrer'},lang==='ar'?'إنستغرام':'Instagram'),
            h('a',{href:`mailto:${c.common.email}?subject=CV%20for%20Tamqinx%20Technology`},lang==='ar'?'انضم إلى فريقنا — أرسل سيرتك الذاتية':'Join our team — send your CV')
          )
        ),
        h('div',{className:'form-shell reveal'},
          h('input',{placeholder:lang==='ar'?'الاسم':'Name'}),
          h('input',{placeholder:lang==='ar'?'البريد الإلكتروني':'Email'}),
          h('input',{placeholder:lang==='ar'?'نوع المشروع':'Project type'}),
          h('textarea',{placeholder:lang==='ar'?'اكتب فكرة المشروع أو المشكلة التي تريد حلها':'Describe your project idea or operational problem'}),
          h('a',{className:'btn btn-dark',href:`mailto:${c.common.email}?subject=Consultation%20Request`},c.common.consult)
        )
      )
    ),

    h('section',{className:'page-section section-soft'},
      h('div',{className:'narrow'},
        h(SectionTitle,{
          eyebrow:'FAQ',
          title:lang==='ar'?'أسئلة حول الجداول الزمنية والتقنيات':'Questions about timelines and tech',
          copy:lang==='ar'?'إجابات عملية قبل بدء المشروع.':'Practical answers before starting the project.'
        }),
        h(FAQ)
      )
    )
  );
}

function FAQ(){
  const {lang}=useLang();
  const [open,setOpen]=useState(0);

  return h('div',{className:'faq-list spacer'},
    t[lang].faq.map((q,i)=>h('div',{className:`faq-item ${open===i?'open':''}`,key:i},
      h('button',{className:'faq-q',onClick:()=>setOpen(open===i?-1:i)},
        h('span',null,q[0]),
        h('span',null,open===i?'−':'+')
      ),
      h('div',{className:'faq-a'},q[1])
    ))
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));