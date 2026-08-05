export type Lang = 'it' | 'en' | 'es';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets?: string[];
  description?: string;
}

interface Copy {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    badge: string;
    tagline: string;
    ctaContact: string;
    ctaCv: string;
    stackLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    factsRole: string;
    factsRoleValue: string;
    factsLocation: string;
    factsLocationValue: string;
    factsFocus: string;
    factsFocusValue: string;
    factsEducation: string;
    factsEducationValue: string;
    languagesTitle: string;
    langNative: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    backendTitle: string;
    dbTitle: string;
    devopsTitle: string;
    frontendTitle: string;
    frontendNote: string;
    architectureTitle: string;
    toolsTitle: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    archBackendTitle: string;
    archBullets: string[];
    devopsTitle: string;
    devopsBullets: string[];
    stackTitle: string;
    moreLink: string;
    danceBadge: string;
    danceTitle: string;
    danceParagraph: string;
    danceNote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailCta: string;
    linkedinCta: string;
    showEmail: string;
    showPhone: string;
    location: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

export const translations: Record<Lang, Copy> = {
  it: {
    nav: {
      about: 'Chi sono',
      skills: 'Competenze',
      experience: 'Esperienza',
      projects: 'Progetti',
      contact: 'Contatti',
      downloadCv: 'Scarica CV',
    },
    hero: {
      badge: 'Disponibile per nuove opportunità · Milano, Italia',
      tagline:
        "Full Stack Developer con il cuore nel backend. Costruisco API, microservizi e architetture solide — il frontend lo curo volentieri, spesso con una mano dall'AI per la parte grafica.",
      ctaContact: 'Contattami',
      ctaCv: 'Scarica CV',
      stackLabel: 'STACK PRINCIPALE',
    },
    about: {
      eyebrow: '01 · Chi sono',
      title: 'Backend per vocazione, full stack per necessità',
      p1: "Sono un Full Stack Developer con una netta preferenza per lo sviluppo backend e una forte passione per il problem solving su sistemi web. Mi adatto rapidamente a nuove tecnologie e contesti, con un approccio pratico orientato a risultati concreti.",
      p2: "Ho esperienza nello sviluppo di applicazioni end-to-end in ambienti dinamici, mantenendo codice pulito e rispettando le scadenze. Il frontend non mi spaventa — lo costruisco volentieri con Angular e Tailwind — ma per la parte puramente grafica mi affido spesso a un aiuto dell'AI, per concentrare le mie energie dove creo più valore: architettura, API e logica di dominio.",
      p3: "Sono aperto sia a nuove opportunità professionali sia a collaborazioni su progetti e idee da trasformare in soluzioni concrete — un prodotto, una piattaforma, un prototipo. Se pensi che le mie competenze backend possano aggiungere valore, sarò felice di parlarne.",
      factsRole: 'Ruolo attuale',
      factsRoleValue: 'Software Developer @ Reply',
      factsLocation: 'Sede',
      factsLocationValue: 'Milano, Italia',
      factsFocus: 'Focus',
      factsFocusValue: 'Backend · Microservizi · Cloud',
      factsEducation: 'Formazione',
      factsEducationValue: 'ITS Rizzoli · Polimi',
      languagesTitle: 'Lingue',
      langNative: 'Madrelingua',
    },
    skills: {
      eyebrow: '02 · Competenze',
      title: 'Cosa so fare',
      subtitle:
        'Uno stack pensato per il backend enterprise, con solide basi full stack per costruire e mantenere un prodotto dall\'inizio alla fine.',
      backendTitle: 'Backend',
      dbTitle: 'Database & Cache',
      devopsTitle: 'DevOps & Infra',
      frontendTitle: 'Frontend',
      frontendNote: "Curato con l'aiuto dell'AI per la parte grafica",
      architectureTitle: 'Architettura & Pattern',
      toolsTitle: 'Strumenti & Cloud',
    },
    experience: {
      eyebrow: '03 · Esperienza',
      title: 'Percorso professionale',
      items: [
        {
          role: 'Software Developer — Reply',
          company: '',
          period: 'Apr 2025 — oggi',
          location: 'Milano, Italia',
          bullets: [
            'Analisi e risoluzione di bug backend in Java / Spring Boot su microservizi bancari (UAT e produzione).',
            'Application Maintenance (AMS) su sistemi critici enterprise, garantendo continuità operativa.',
            'Debug e tracciamento richieste frontend–backend–servizi esterni via REST, XML e JSON.',
            'Monitoraggio log con Splunk e analisi chiamate distribuite con VMware Aria.',
            'Supporto su Oracle Database e gestione attività su Jira in team cross-funzionali.',
          ],
        },
        {
          role: 'Full-Stack Developer — Progetto personale, Cloud Storage',
          company: '',
          period: 'Apr 2025 — oggi',
          location: 'Milano, Italia',
          description:
            'Piattaforma cloud-like per file storage e annunci, ispirata a servizi S3, containerizzata e deployata su VPS. Approfondita nella sezione Progetti qui sotto.',
        },
        {
          role: 'Software Developer — Reply (tramite Dacomat)',
          company: '',
          period: 'Apr 2025 — Giu 2026',
          location: 'Milano, Italia',
          description:
            "Primo ingresso in Reply come consulente tramite l'agenzia Dacomat, occupandomi delle stesse attività di analisi e manutenzione backend descritte sopra. Il contratto con Dacomat si è concluso a giugno 2026; da allora proseguo il percorso direttamente con Reply.",
        },
        {
          role: 'Junior Software Developer — Object Method',
          company: '',
          period: 'Ott 2024 — Feb 2025',
          location: 'Milano, Italia',
          bullets: [
            'Servizi RESTful con Spring Boot, migliorando organizzazione e scalabilità del codice.',
            'Ottimizzazione query MySQL, riducendo i tempi di risposta.',
            'Interfacce dinamiche con Angular, Bootstrap e Tailwind CSS.',
            'Code review e debugging per ridurre i bug in produzione.',
          ],
        },
        {
          role: 'Sviluppatore COBOL su Mainframe IBM z/OS — GruppoInfo',
          company: '',
          period: 'Mar 2025 — Mag 2025',
          location: 'Milano, Italia · Percorso formativo',
          description:
            'COBOL, JCL e ambiente TSO/ISPF per lo sviluppo enterprise su mainframe: dai job batch alla modularizzazione in copybook e sottoprogrammi.',
        },
        {
          role: 'Junior Software Developer — F2Informatica',
          company: '',
          period: 'Apr 2024 — Lug 2024',
          location: 'Milano, Italia',
          bullets: [
            "Applicazioni full stack dall'analisi dei requisiti alla distribuzione.",
            'Autenticazione e autorizzazione JWT con RSA, pagine dinamiche con Thymeleaf.',
            'Autenticazione utenti con AWS Cognito e gestione dati NoSQL con DynamoDB.',
            'Interfacce reattive con Angular e componenti riutilizzabili.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: '04 · Progetti',
      title: 'Cosa sto costruendo',
      subtitle:
        "Architettura full-stack self-hosted, ispirata ai servizi S3, con backend, storage, database e reverse proxy separati in container distinti — per simulare un'infrastruttura cloud distribuita reale.",
      archBackendTitle: 'Architettura & Backend',
      archBullets: [
        'API REST per gestione file, metadati e operazioni di upload/download.',
        'Accesso sicuro ai file tramite signed URL con scadenza temporale.',
        'Autenticazione e autorizzazione stateless basata su JWT.',
        'Storage object-based compatibile S3 tramite RustFS / MinIO.',
        'Upload diretto verso lo storage senza passare per il server applicativo.',
      ],
      devopsTitle: 'DevOps & Infrastruttura',
      devopsBullets: [
        'Containerizzazione completa con Docker e orchestrazione con Docker Compose.',
        'Deploy su VPS in un ambiente production-like.',
        'NGINX per routing, reverse proxy e gestione HTTPS.',
        'MariaDB per dati e metadati; Redis in sviluppo per caching e rate limiting.',
      ],
      stackTitle: 'Stack tecnico',
      moreLink: 'Vedi altri progetti su GitHub',
      danceBadge: 'In sviluppo',
      danceTitle: 'Progetto dedicato al ballo',
      danceParagraph:
        "Nato da una passione per il ballo scoperta di recente, sto costruendo una nuova piattaforma pensata per ballerini e appassionati — ancora nelle fasi iniziali di progettazione e sviluppo.",
      danceNote: "Dettagli in arrivo man mano che il progetto prende forma.",
    },
    contact: {
      eyebrow: '05 · Contatti',
      title: 'Parliamo di backend',
      subtitle:
        'Sono aperto a nuove opportunità come Backend / Full Stack Developer. Scrivimi pure, rispondo sempre volentieri.',
      emailCta: 'sidney1243@gmail.com',
      linkedinCta: 'Connettiamoci su LinkedIn',
      showEmail: 'Mostra email',
      showPhone: 'Mostra numero',
      location: 'Milano, Italia',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      builtWith: 'Costruito con Angular & Tailwind CSS',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      badge: 'Available for new opportunities · Milan, Italy',
      tagline:
        "Full Stack Developer at heart a backend engineer. I build APIs, microservices and solid architectures — I'm happy to handle the frontend too, often with a hand from AI on the visual side.",
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
      stackLabel: 'CORE STACK',
    },
    about: {
      eyebrow: '01 · About',
      title: 'Backend by choice, full stack by necessity',
      p1: 'I\'m a Full Stack Developer with a clear preference for backend development and a strong passion for problem solving on web systems. I adapt quickly to new technologies and contexts, with a practical, results-driven approach.',
      p2: "I have experience building end-to-end applications in fast-moving environments, keeping code clean and meeting deadlines. Frontend doesn't scare me — I happily build with Angular and Tailwind — but for the purely visual side I often lean on AI, so I can focus my energy where I create the most value: architecture, APIs and domain logic.",
      p3: "I'm open both to new professional opportunities and to collaborating on projects and ideas that need to become concrete solutions — a product, a platform, a prototype. If you think my backend skills could add value, I'd be glad to talk.",
      factsRole: 'Current role',
      factsRoleValue: 'Software Developer @ Reply',
      factsLocation: 'Location',
      factsLocationValue: 'Milan, Italy',
      factsFocus: 'Focus',
      factsFocusValue: 'Backend · Microservices · Cloud',
      factsEducation: 'Education',
      factsEducationValue: 'ITS Rizzoli · Polimi',
      languagesTitle: 'Languages',
      langNative: 'Native',
    },
    skills: {
      eyebrow: '02 · Skills',
      title: 'What I can do',
      subtitle:
        'A stack built for enterprise backend work, with solid full stack foundations to build and maintain a product end to end.',
      backendTitle: 'Backend',
      dbTitle: 'Database & Cache',
      devopsTitle: 'DevOps & Infra',
      frontendTitle: 'Frontend',
      frontendNote: 'Polished with an AI assist on the visual side',
      architectureTitle: 'Architecture & Patterns',
      toolsTitle: 'Tools & Cloud',
    },
    experience: {
      eyebrow: '03 · Experience',
      title: 'Professional journey',
      items: [
        {
          role: 'Software Developer — Reply',
          company: '',
          period: 'Apr 2025 — present',
          location: 'Milan, Italy',
          bullets: [
            'Analysis and resolution of backend bugs in Java / Spring Boot on banking microservices (UAT and production).',
            'Application Maintenance (AMS) support on critical enterprise systems, ensuring operational continuity.',
            'Debugging and request tracing across frontend, backend and external services via REST, XML and JSON.',
            'Log monitoring with Splunk and distributed call analysis with VMware Aria.',
            'Support on Oracle Database and task management on Jira within cross-functional teams.',
          ],
        },
        {
          role: 'Full-Stack Developer — Personal Project, Cloud Storage',
          company: '',
          period: 'Apr 2025 — present',
          location: 'Milan, Italy',
          description:
            'Cloud-like platform for file storage and listings, inspired by S3-style services, containerized and deployed on a VPS. Covered in more depth in the Projects section below.',
        },
        {
          role: 'Software Developer — Reply (via Dacomat)',
          company: '',
          period: 'Apr 2025 — Jun 2026',
          location: 'Milan, Italy',
          description:
            "My first stint at Reply, placed there as a consultant through the Dacomat agency, handling the same backend analysis and maintenance work described above. The Dacomat contract ended in June 2026; since then I've continued directly with Reply.",
        },
        {
          role: 'Junior Software Developer — Object Method',
          company: '',
          period: 'Oct 2024 — Feb 2025',
          location: 'Milan, Italy',
          bullets: [
            'RESTful services with Spring Boot, improving code organization and scalability.',
            'MySQL query optimization, reducing response times.',
            'Dynamic interfaces with Angular, Bootstrap and Tailwind CSS.',
            'Code review and debugging to reduce production bugs.',
          ],
        },
        {
          role: 'COBOL Developer on IBM z/OS Mainframe — GruppoInfo',
          company: '',
          period: 'Mar 2025 — May 2025',
          location: 'Milan, Italy · Training program',
          description:
            'COBOL, JCL and the TSO/ISPF environment for enterprise mainframe development: from batch jobs to modularization in copybooks and subprograms.',
        },
        {
          role: 'Junior Software Developer — F2Informatica',
          company: '',
          period: 'Apr 2024 — Jul 2024',
          location: 'Milan, Italy',
          bullets: [
            'Full stack applications from requirements analysis through to deployment.',
            'JWT authentication and authorization with RSA, dynamic pages with Thymeleaf.',
            'User authentication with AWS Cognito and NoSQL data management with DynamoDB.',
            'Reactive interfaces with Angular and reusable components.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: '04 · Projects',
      title: 'What I\'m building',
      subtitle:
        'A self-hosted, full-stack architecture inspired by S3-style services, with backend, storage, database and reverse proxy split across separate containers — simulating a real distributed cloud infrastructure.',
      archBackendTitle: 'Architecture & Backend',
      archBullets: [
        'REST APIs for file management, metadata and upload/download operations.',
        'Secure file access via time-limited signed URLs.',
        'Stateless authentication and authorization based on JWT.',
        'S3-compatible object storage via RustFS / MinIO.',
        'Direct upload to storage without passing through the application server.',
      ],
      devopsTitle: 'DevOps & Infrastructure',
      devopsBullets: [
        'Full containerization with Docker and orchestration with Docker Compose.',
        'Deployed on a VPS in a production-like environment.',
        'NGINX for routing, reverse proxy and HTTPS.',
        'MariaDB for data and metadata; Redis in progress for caching and rate limiting.',
      ],
      stackTitle: 'Tech stack',
      moreLink: 'See more projects on GitHub',
      danceBadge: 'In development',
      danceTitle: 'A project built around dance',
      danceParagraph:
        "Born from a passion for dance I discovered recently, I'm building a new platform for dancers and enthusiasts — still in the early stages of design and development.",
      danceNote: 'More details coming as the project takes shape.',
    },
    contact: {
      eyebrow: '05 · Contact',
      title: "Let's talk backend",
      subtitle:
        "I'm open to new opportunities as a Backend / Full Stack Developer. Feel free to reach out — I always enjoy replying.",
      emailCta: 'sidney1243@gmail.com',
      linkedinCta: "Let's connect on LinkedIn",
      showEmail: 'Show email',
      showPhone: 'Show number',
      location: 'Milan, Italy',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Angular & Tailwind CSS',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
    },
    hero: {
      badge: 'Disponible para nuevas oportunidades · Milán, Italia',
      tagline:
        'Full Stack Developer de corazón backend. Construyo APIs, microservicios y arquitecturas sólidas — el frontend también lo cuido con gusto, muchas veces con una ayuda de la IA en la parte gráfica.',
      ctaContact: 'Contáctame',
      ctaCv: 'Descargar CV',
      stackLabel: 'STACK PRINCIPAL',
    },
    about: {
      eyebrow: '01 · Sobre mí',
      title: 'Backend por vocación, full stack por necesidad',
      p1: 'Soy Full Stack Developer con una clara preferencia por el desarrollo backend y una gran pasión por resolver problemas en sistemas web. Me adapto rápido a nuevas tecnologías y contextos, con un enfoque práctico orientado a resultados concretos.',
      p2: 'Tengo experiencia desarrollando aplicaciones end-to-end en entornos dinámicos, manteniendo el código limpio y cumpliendo plazos. El frontend no me asusta — lo construyo con gusto con Angular y Tailwind — pero para la parte puramente gráfica suelo apoyarme en la IA, para concentrar mi energía donde más valor aporto: arquitectura, APIs y lógica de dominio.',
      p3: 'Estoy abierto tanto a nuevas oportunidades profesionales como a colaborar en proyectos e ideas que necesiten convertirse en soluciones concretas — un producto, una plataforma, un prototipo. Si crees que mis habilidades backend pueden aportar valor, estaré encantado de conversar.',
      factsRole: 'Rol actual',
      factsRoleValue: 'Software Developer @ Reply',
      factsLocation: 'Ubicación',
      factsLocationValue: 'Milán, Italia',
      factsFocus: 'Enfoque',
      factsFocusValue: 'Backend · Microservicios · Cloud',
      factsEducation: 'Formación',
      factsEducationValue: 'ITS Rizzoli · Polimi',
      languagesTitle: 'Idiomas',
      langNative: 'Nativo',
    },
    skills: {
      eyebrow: '02 · Habilidades',
      title: 'Lo que sé hacer',
      subtitle:
        'Un stack pensado para el backend enterprise, con bases full stack sólidas para construir y mantener un producto de principio a fin.',
      backendTitle: 'Backend',
      dbTitle: 'Base de datos & Cache',
      devopsTitle: 'DevOps & Infra',
      frontendTitle: 'Frontend',
      frontendNote: 'Cuidado con ayuda de la IA en la parte gráfica',
      architectureTitle: 'Arquitectura & Patrones',
      toolsTitle: 'Herramientas & Cloud',
    },
    experience: {
      eyebrow: '03 · Experiencia',
      title: 'Trayectoria profesional',
      items: [
        {
          role: 'Software Developer — Reply',
          company: '',
          period: 'Abr 2025 — actualidad',
          location: 'Milán, Italia',
          bullets: [
            'Análisis y resolución de bugs backend en Java / Spring Boot en microservicios bancarios (UAT y producción).',
            'Soporte de Application Maintenance (AMS) en sistemas críticos enterprise, garantizando continuidad operativa.',
            'Depuración y trazabilidad de peticiones frontend–backend–servicios externos vía REST, XML y JSON.',
            'Monitoreo de logs con Splunk y análisis de llamadas distribuidas con VMware Aria.',
            'Soporte en Oracle Database y gestión de tareas en Jira dentro de equipos multidisciplinares.',
          ],
        },
        {
          role: 'Full-Stack Developer — Proyecto personal, Cloud Storage',
          company: '',
          period: 'Abr 2025 — actualidad',
          location: 'Milán, Italia',
          description:
            'Plataforma cloud-like para almacenamiento de archivos y anuncios, inspirada en servicios S3, containerizada y desplegada en un VPS. Más detalles en la sección Proyectos.',
        },
        {
          role: 'Software Developer — Reply (a través de Dacomat)',
          company: '',
          period: 'Abr 2025 — Jun 2026',
          location: 'Milán, Italia',
          description:
            'Mi primera etapa en Reply, contratado como consultor a través de la agencia Dacomat, realizando las mismas tareas de análisis y mantenimiento backend descritas arriba. El contrato con Dacomat terminó en junio de 2026; desde entonces continúo directamente con Reply.',
        },
        {
          role: 'Junior Software Developer — Object Method',
          company: '',
          period: 'Oct 2024 — Feb 2025',
          location: 'Milán, Italia',
          bullets: [
            'Servicios RESTful con Spring Boot, mejorando la organización y escalabilidad del código.',
            'Optimización de queries MySQL, reduciendo los tiempos de respuesta.',
            'Interfaces dinámicas con Angular, Bootstrap y Tailwind CSS.',
            'Code review y debugging para reducir bugs en producción.',
          ],
        },
        {
          role: 'Desarrollador COBOL en Mainframe IBM z/OS — GruppoInfo',
          company: '',
          period: 'Mar 2025 — May 2025',
          location: 'Milán, Italia · Formación',
          description:
            'COBOL, JCL y entorno TSO/ISPF para desarrollo enterprise en mainframe: desde jobs batch hasta la modularización en copybooks y subprogramas.',
        },
        {
          role: 'Junior Software Developer — F2Informatica',
          company: '',
          period: 'Abr 2024 — Jul 2024',
          location: 'Milán, Italia',
          bullets: [
            'Aplicaciones full stack desde el análisis de requisitos hasta el despliegue.',
            'Autenticación y autorización JWT con RSA, páginas dinámicas con Thymeleaf.',
            'Autenticación de usuarios con AWS Cognito y gestión de datos NoSQL con DynamoDB.',
            'Interfaces reactivas con Angular y componentes reutilizables.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: '04 · Proyectos',
      title: 'Lo que estoy construyendo',
      subtitle:
        'Arquitectura full-stack autoalojada, inspirada en servicios S3, con backend, almacenamiento, base de datos y reverse proxy separados en contenedores independientes — simulando una infraestructura cloud distribuida real.',
      archBackendTitle: 'Arquitectura & Backend',
      archBullets: [
        'APIs REST para gestión de archivos, metadatos y operaciones de subida/descarga.',
        'Acceso seguro a archivos mediante signed URLs con caducidad temporal.',
        'Autenticación y autorización stateless basada en JWT.',
        'Almacenamiento object-based compatible con S3 vía RustFS / MinIO.',
        'Subida directa al almacenamiento sin pasar por el servidor de aplicación.',
      ],
      devopsTitle: 'DevOps & Infraestructura',
      devopsBullets: [
        'Containerización completa con Docker y orquestación con Docker Compose.',
        'Despliegue en un VPS en un entorno production-like.',
        'NGINX para routing, reverse proxy y HTTPS.',
        'MariaDB para datos y metadatos; Redis en desarrollo para caching y rate limiting.',
      ],
      stackTitle: 'Stack técnico',
      moreLink: 'Ver más proyectos en GitHub',
      danceBadge: 'En desarrollo',
      danceTitle: 'Un proyecto dedicado al baile',
      danceParagraph:
        'Nacido de una pasión por el baile descubierta hace poco, estoy construyendo una nueva plataforma pensada para bailarines y aficionados — todavía en las primeras fases de diseño y desarrollo.',
      danceNote: 'Más detalles a medida que el proyecto tome forma.',
    },
    contact: {
      eyebrow: '05 · Contacto',
      title: 'Hablemos de backend',
      subtitle:
        'Estoy abierto a nuevas oportunidades como Backend / Full Stack Developer. Escríbeme sin problema, siempre respondo con gusto.',
      emailCta: 'sidney1243@gmail.com',
      linkedinCta: 'Conectemos en LinkedIn',
      showEmail: 'Mostrar email',
      showPhone: 'Mostrar número',
      location: 'Milán, Italia',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      builtWith: 'Construido con Angular & Tailwind CSS',
    },
  },
};
