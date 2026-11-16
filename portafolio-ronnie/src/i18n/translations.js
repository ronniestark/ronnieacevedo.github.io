export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      ideologia: 'Mi Filosofía',
      experiencia: 'Experiencia',
      habilidades: 'Habilidades',
      portafolio: 'Portafolio',
      contacto: 'Contacto',
    },
    tema: {
      claro: 'Cambiar a tema claro',
      oscuro: 'Cambiar a tema oscuro',
    },
    inicio: {
      titulo: 'Ing. Ronnie Acevedo',
      subtitulo: 'Soluciones Tecnológicas Integrales',
      descripcion:
        'Ingeniero en Computación con 5 años de experiencia diseñando ecosistemas de software escalables. Traduzco necesidades empresariales complejas en soluciones tecnológicas integrales, especializándome en la automatización de procesos críticos y la optimización de bases de datos para garantizar el máximo rendimiento.',
      perfiles: [
        'Desarrollador Full Stack',
        'Analista de Sistemas',
        'Arquitecto Backend',
        'Administrador de Bases de Datos',
        'Desarrollador Web & Frontend',
        'Diseño de Landing Pages',
        'Soporte Técnico IT',
        'Mantenimiento y Reparación de PC',
        'Analista de Datos',
      ],
      boton: 'Ver mis proyectos',
    },

        habilidades: {
      titulo: 'Ecosistema Tecnológico',
      backend: {
        titulo: 'Backend & Arquitectura',
        items: ['C#', '.NET (Core/8/9)', 'Java', 'C/C++', 'ASP.NET Core', 'ASP.NET MVC', 'EF Core', 'CQRS (MediatR)', 'DDD', 'REST APIs', 'Arquitectura Limpia', 'Arquitectura en Capas', 'JWT / Seguridad'],
      },
      frontend: {
        titulo: 'Frontend & UI',
        items: ['Angular', 'React', 'Vue.js', 'Quasar Framework', 'Vuetify', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'SCSS'],
      },
      bd: {
        titulo: 'Bases de Datos',
        items: ['SQL Server', 'PostgreSQL', 'SQLite', 'T-SQL', 'Procedimientos Almacenados', 'Diseño Relacional', 'Vistas SQL', 'Optimización'],
      },
      herramientas: {
        titulo: 'Herramientas & IDEs',
        items: ['Visual Studio', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'SSMS', 'Postman', 'Git', 'GitHub', 'GitLab', 'CI/CD', 'NVM'],
      },
      infra: {
        titulo: 'Infraestructura & SO',
        items: ['Linux (Fedora)', 'Ubuntu', 'Linux Mint', 'Windows', 'Docker', 'Sistemas Multi-Tenant', 'Bash / Shell', 'Flatpak / DNF'],
      },
      aptitudes: {
        titulo: 'Aptitudes Analíticas',
        items: ['Análisis de Requerimientos', 'Reglas de Negocio', 'Resolución de Problemas', 'Pensamiento Crítico', 'Sistemas Resilientes', 'Mantenibilidad'],
      },
    },
    proyectos: {
      titulo: 'Proyectos Destacados',
      publico: 'Público',
      privado: 'Privado',
      tooltipPrivado: 'Repositorio Privado',
      tooltipPublico: 'Ver en GitHub',
      descripciones: [
        'Presentación de página web interactiva para perfil de LinkedIn (Este mismo portafolio).',
        'API RESTful integrada con Google Cloud y entrenada con ML.NET para la sincronización, análisis y clasificación predictiva de bandejas de correo.',
        'Sistema de escritorio para un minisuper. Gestiona entrada y salida de productos, punto de venta y administración general.',
        'Sistema empresarial diseñado para automatizar alertas de vencimiento, optimizar la administración de pólizas y agilizar la gestión de seguros obligatorios.',
        'Arquitectura backend desarrollada para soportar la lógica de negocio, catálogo de piezas y procesamiento de órdenes de una plataforma de impresión 3D.',
        'Interfaz web moderna y optimizada en UX/UI para un modelo de negocio B2C enfocado en la venta de productos manufacturados en 3D.',
        'Plataforma administrativa orientada a centros de acondicionamiento físico, diseñada para gestionar membresías, perfiles de clientes y facturación de manera eficiente.',
      ],
    },
    footer: {
      tagline: 'Transformando reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.',
      navegacion: 'Navegación',
      conecta: 'Conecta Conmigo',
      contacto: 'Contacto',
      derechos: 'Todos los derechos reservados.',
      construido: 'Construido con',
    },

        filosofia: {
      titulo: 'Filosofía de Desarrollo',
      modelado: {
        titulo: 'Modelado Estratégico y Datos',
        texto:
          'La solución nace en el diseño, no en el teclado. Antes de abrir el IDE, utilizo herramientas como **draw.io** para maquetar la arquitectura y diseñar el modelo relacional de la base de datos, garantizando bases sólidas y escalables.',
      },
      ddd: {
        titulo: 'Domain-Driven Design (DDD)',
        texto:
          'Aislamiento estricto del núcleo de negocio. Diseño centrado en el dominio y uso intensivo de __Value Objects__ para erradicar la obsesión por primitivos y garantizar la integridad absoluta de los datos.',
      },
      arquitectura: {
        titulo: 'Arquitectura Limpia y Evolutiva',
        texto:
          'Implementación de arquitecturas modernas como **Clean Architecture, Vertical Slices y CQRS**. El objetivo es construir sistemas con alta cohesión y bajo acoplamiento, altamente mantenibles y preparados para el cambio.',
      },
      seguridad: {
        titulo: 'Seguridad, Rendimiento y Testing',
        texto:
          'El software debe ser robusto bajo estrés. Escribo **pruebas unitarias** exhaustivas, audito la seguridad del código, y realizo simulaciones de rendimiento y **concurrencia** para evitar cuellos de botella en producción.',
      },
      ux: {
        titulo: 'Experiencia de Usuario (UI/UX) y Multiplataforma',
        texto:
          'Como Full Stack, comprendo que el backend más potente no sirve si la interfaz es confusa. Me enfoco en el diseño e implementación de **páginas web modernas y aplicaciones de escritorio (Desktop Apps)** intuitivas, estéticas y altamente responsivas, poniendo siempre la usabilidad en primer lugar.',
      },
    },

        contacto: {
      titulo: 'Iniciemos una conversación',
      intro:
        'Abierto a conectar con profesionales de la industria, debatir sobre diseño de software y colaborar en retos tecnológicos que exijan soluciones robustas e innovadoras.',
      telefono: 'Teléfono / WhatsApp',
    },

        experiencia: {
      titulo: 'Trayectoria Profesional',
      trabajos: [
        {
          empresa: 'Desarrollo Independiente',
          puesto: 'Desarrollador Backend & Machine Learning',
          periodo: 'Agosto 2026 - Septiembre 2026',
          tecnologias: ['.NET 10', '.NET 8', 'ML.NET', 'Gmail API', 'EF Core', 'JWT'],
          descripcion: [
            'Diseñé y desarrollé una API RESTful para la sincronización y clasificación inteligente de correos electrónicos, utilizando .NET 8 y actualizando el ecosistema a .NET 10.',
            'Integración segura con la API de Gmail a través de Google Cloud Console, implementando el flujo de autorización OAuth 2.0.',
            'Entrenamiento e implementación de modelos de Machine Learning (ML.NET FastTree) para categorizar de forma predictiva el contenido de los mensajes.',
            'Diseño de arquitectura de datos con Entity Framework Core y SQL Server, protegiendo tokens y datos sensibles con ASP.NET Data Protection y seguridad de endpoints con JWT.',
            'Implementación de flujos de Integración Continua (CI) mediante GitHub Actions para automatizar las compilaciones del proyecto.',
          ],
        },
        {
          empresa: 'Universidad Nacional de Ingeniería (DTI)',
          puesto: 'Analista de Sistemas',
          periodo: 'Julio 2023 - Actualidad',
          tecnologias: ['C#', 'React', 'SQL Server', 'FastReport', 'iText 7'],
          descripcion: [
            'Desarrollo Full Stack y reportería para el Sistema Institucional HelpDesk utilizando C#, React y FastReport, consumiendo datos directamente de SQL Server.',
            'Implementación del módulo de Notas de Entrada y Salida para el Sistema de Bodega (SISBOD) utilizando iText 7, React y C#.',
            'Encargado del Sistema de Activos Fijos (SAF), liderando el mantenimiento de código, optimización de base de datos y migración de nomenclatura institucional.',
            'Diseño de reportes financieros y administrativos con FastReport para el sistema SIGFA.',
            'Soporte técnico avanzado y mantenimiento de múltiples sistemas institucionales: SIPSI (Planificación), SIFA (Financiero), SIPAD (Procesos), SISCOM (Compras) y Tesorería.',
          ],
        },
        {
          empresa: 'Nic.ni (Sistema Nacional de Dominios)',
          puesto: 'Desarrollador Web Frontend (Rediseño Oficial)',
          periodo: '2025 - 2026',
          tecnologias: ['UX/UI', 'Frontend', 'Diseño Responsivo', 'Web Optimization'],
          descripcion: [
            'Rediseño integral del portal web oficial de Nic.ni, migrando de una arquitectura visual tradicional hacia una interfaz moderna, vanguardista y altamente tecnológica.',
            'Desarrollo, estructuración y maquetación de las vistas principales del sistema: Inicio, Nosotros, motor de búsqueda Whois, catálogo de Dominios y portal de Contacto.',
            'Mejora significativa en la Experiencia de Usuario (UX) y la Interfaz de Usuario (UI), aplicando principios de diseño responsivo para garantizar una navegación fluida en dispositivos móviles y de escritorio.',
            'Optimización de la estructura frontend para agilizar los tiempos de carga y modernizar la imagen institucional del registro nacional de dominios.',
          ],
        },
        {
          empresa: 'Nic.ni (Sistema Nacional de Dominios)',
          puesto: 'Analista del Sistema SISNIC',
          periodo: 'Julio 2022 - Agosto 2026',
          tecnologias: ['Backend', 'Automatización', 'SQL', 'Reportes'],
          descripcion: [
            'Optimización de rendimiento y refactorización de código en el núcleo del sistema SISNIC.',
            'Desarrollo de módulos de automatización, incluyendo el envío automático de correos para notificar bajas y vencimientos de dominios.',
            'Implementación del sistema de asignación de corresponsales para clientes nacionales y desarrollo del reporte de Nota de Cobro.',
            'Rediseño enfocado en la Experiencia de Usuario (UX) tanto en la interfaz del sistema SISNIC como en la página web oficial de Nic.ni, creando nuevos componentes interactivos.',
            'Desarrollo total del módulo de cuentas por cobrar, reportes y diseño de tablas.',
            'Desarrollo total del módulo de Administración de segmentos, así como tareas automatizadas de fechas de expiración y procesos de bajas.',
            'Desarrollo total del módulo de solicitudes de renovación de dominios desde la Web Console.',
            'Desarrollo y diseño de correos automatizados para notificaciones de vencimientos, bajas y renovaciones de dominios por SMTP.',
            'Soporte técnico y resolución de problemas en el sistema SISNIC.',
          ],
        },
        {
          empresa: 'Seguros Prisma',
          puesto: 'Desarrollador de Software y Web Admin',
          periodo: 'Freelance',
          tecnologias: ['C#', 'WPF', 'Desktop Apps', 'Web Admin'],
          descripcion: [
            'Diseño y desarrollo de una aplicación de escritorio (Desktop App) utilizando C# y WPF para la automatización de alertas de vencimientos de seguros obligatorios.',
            'Administración técnica, soporte y mantenimiento de la plataforma web de la compañía.',
          ],
        },
        {
          empresa: 'Instituto de Protección y Sanidad Agropecuaria (IPSA)',
          puesto: 'Desarrollador Web',
          periodo: 'Enero 2022 - Junio 2022',
          tecnologias: ['PHP', 'Laravel', 'Microsoft Forms', 'Soporte'],
          descripcion: [
            'Desarrollo y mantenimiento de aplicaciones web utilizando el framework Laravel con PHP.',
            'Implementación y gestión de sistemas de encuestas y recolección de datos integrando herramientas de Microsoft.',
            'Soporte técnico general a usuarios y sistemas internos de la institución.',
          ],
        },
      ],
    },
    
  },
  en: {
    nav: {
      inicio: 'Home',
      ideologia: 'My Philosophy',
      experiencia: 'Experience',
      habilidades: 'Skills',
      portafolio: 'Portfolio',
      contacto: 'Contact',
    },
    tema: {
      claro: 'Switch to light theme',
      oscuro: 'Switch to dark theme',
    },
    inicio: {
      titulo: 'Eng. Ronnie Acevedo',
      subtitulo: 'Comprehensive Technology Solutions',
      descripcion:
        'Computer Engineer with 5 years of experience designing scalable software ecosystems. I translate complex business needs into comprehensive technology solutions, specializing in automating critical processes and optimizing databases to ensure maximum performance.',
      perfiles: [
        'Full Stack Developer',
        'Systems Analyst',
        'Backend Architect',
        'Database Administrator',
        'Web & Frontend Developer',
        'Landing Page Design',
        'IT Technical Support',
        'PC Maintenance & Repair',
        'Data Analyst',
      ],
      boton: 'View my projects',
    },

        habilidades: {
      titulo: 'Technology Ecosystem',
      backend: {
        titulo: 'Backend & Architecture',
        items: ['C#', '.NET (Core/8/9)', 'Java', 'C/C++', 'ASP.NET Core', 'ASP.NET MVC', 'EF Core', 'CQRS (MediatR)', 'DDD', 'REST APIs', 'Clean Architecture', 'Layered Architecture', 'JWT / Security'],
      },
      frontend: {
        titulo: 'Frontend & UI',
        items: ['Angular', 'React', 'Vue.js', 'Quasar Framework', 'Vuetify', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'SCSS'],
      },
      bd: {
        titulo: 'Databases',
        items: ['SQL Server', 'PostgreSQL', 'SQLite', 'T-SQL', 'Stored Procedures', 'Relational Design', 'SQL Views', 'Optimization'],
      },
      herramientas: {
        titulo: 'Tools & IDEs',
        items: ['Visual Studio', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'SSMS', 'Postman', 'Git', 'GitHub', 'GitLab', 'CI/CD', 'NVM'],
      },
      infra: {
        titulo: 'Infrastructure & OS',
        items: ['Linux (Fedora)', 'Ubuntu', 'Linux Mint', 'Windows', 'Docker', 'Multi-Tenant Systems', 'Bash / Shell', 'Flatpak / DNF'],
      },
      aptitudes: {
        titulo: 'Analytical Skills',
        items: ['Requirements Analysis', 'Business Rules', 'Problem Solving', 'Critical Thinking', 'Resilient Systems', 'Maintainability'],
      },
    },
    proyectos: {
      titulo: 'Featured Projects',
      publico: 'Public',
      privado: 'Private',
      tooltipPrivado: 'Private Repository',
      tooltipPublico: 'View on GitHub',
      descripciones: [
        'Interactive web page presentation for my LinkedIn profile (this very portfolio).',
        'RESTful API integrated with Google Cloud and trained with ML.NET for the synchronization, analysis and predictive classification of email inboxes.',
        'Desktop system for a minimarket. Manages product inflow and outflow, point of sale and general administration.',
        'Enterprise system designed to automate expiration alerts, optimize policy administration and streamline the management of mandatory insurance.',
        'Backend architecture built to support the business logic, parts catalog and order processing of a 3D printing platform.',
        'Modern, UX/UI-optimized web interface for a B2C business model focused on selling 3D-manufactured products.',
        'Administrative platform for fitness centers, designed to efficiently manage memberships, client profiles and billing.',
      ],
    },
    footer: {
      tagline: 'Turning complex business rules into resilient, scalable and high-performance systems.',
      navegacion: 'Navigation',
      conecta: 'Connect With Me',
      contacto: 'Contact',
      derechos: 'All rights reserved.',
      construido: 'Built with',
    },

        filosofia: {
      titulo: 'Development Philosophy',
      modelado: {
        titulo: 'Strategic Modeling & Data',
        texto:
          'The solution is born in design, not at the keyboard. Before opening the IDE, I use tools like **draw.io** to sketch the architecture and design the relational database model, ensuring solid and scalable foundations.',
      },
      ddd: {
        titulo: 'Domain-Driven Design (DDD)',
        texto:
          'Strict isolation of the business core. Domain-centered design and intensive use of __Value Objects__ to eradicate primitive obsession and guarantee absolute data integrity.',
      },
      arquitectura: {
        titulo: 'Clean & Evolutionary Architecture',
        texto:
          'Implementation of modern architectures such as **Clean Architecture, Vertical Slices and CQRS**. The goal is to build systems with high cohesion and low coupling, highly maintainable and ready for change.',
      },
      seguridad: {
        titulo: 'Security, Performance & Testing',
        texto:
          'Software must be robust under stress. I write thorough **unit tests**, audit code security, and run performance and **concurrency** simulations to avoid bottlenecks in production.',
      },
      ux: {
        titulo: 'User Experience (UI/UX) & Cross-Platform',
        texto:
          'As a Full Stack developer, I understand that the most powerful backend is useless if the interface is confusing. I focus on designing and building intuitive, aesthetic and highly responsive **modern web pages and desktop applications (Desktop Apps)**, always putting usability first.',
      },
    },
    
        contacto: {
      titulo: "Let's start a conversation",
      intro:
        'Open to connecting with industry professionals, discussing software design and collaborating on technology challenges that demand robust and innovative solutions.',
      telefono: 'Phone / WhatsApp',
    },

        experiencia: {
      titulo: 'Professional Experience',
      trabajos: [
        {
          empresa: 'Independent Development',
          puesto: 'Backend & Machine Learning Developer',
          periodo: 'August 2026 - September 2026',
          tecnologias: ['.NET 10', '.NET 8', 'ML.NET', 'Gmail API', 'EF Core', 'JWT'],
          descripcion: [
            'Designed and developed a RESTful API for the synchronization and intelligent classification of emails using .NET 8, and upgraded the ecosystem to .NET 10.',
            'Secure integration with the Gmail API through Google Cloud Console, implementing the OAuth 2.0 authorization flow.',
            'Trained and deployed Machine Learning models (ML.NET FastTree) to predictively categorize message content.',
            'Designed the data architecture with Entity Framework Core and SQL Server, protecting tokens and sensitive data with ASP.NET Data Protection and securing endpoints with JWT.',
            'Implemented Continuous Integration (CI) workflows with GitHub Actions to automate project builds.',
          ],
        },
        {
          empresa: 'National University of Engineering (DTI)',
          puesto: 'Systems Analyst',
          periodo: 'July 2023 - Present',
          tecnologias: ['C#', 'React', 'SQL Server', 'FastReport', 'iText 7'],
          descripcion: [
            'Full Stack development and reporting for the institutional HelpDesk System using C#, React and FastReport, reading data directly from SQL Server.',
            'Implemented the Goods Receipt and Issue Notes module for the Warehouse System (SISBOD) using iText 7, React and C#.',
            'In charge of the Fixed Assets System (SAF), leading code maintenance, database optimization and the migration of institutional naming conventions.',
            'Designed financial and administrative reports with FastReport for the SIGFA system.',
            'Advanced technical support and maintenance of multiple institutional systems: SIPSI (Planning), SIFA (Finance), SIPAD (Processes), SISCOM (Procurement) and Treasury.',
          ],
        },
        {
          empresa: 'Nic.ni (National Domain Name System)',
          puesto: 'Frontend Web Developer (Official Redesign)',
          periodo: '2025 - 2026',
          tecnologias: ['UX/UI', 'Frontend', 'Responsive Design', 'Web Optimization'],
          descripcion: [
            'Complete redesign of the official Nic.ni web portal, moving from a traditional visual architecture to a modern, cutting-edge and highly technological interface.',
            'Development, structuring and layout of the main views of the system: Home, About Us, Whois search engine, Domains catalog and Contact portal.',
            'Significant improvement of User Experience (UX) and User Interface (UI), applying responsive design principles to ensure smooth navigation on mobile and desktop devices.',
            'Optimized the frontend structure to speed up load times and modernize the institutional image of the national domain registry.',
          ],
        },
        {
          empresa: 'Nic.ni (National Domain Name System)',
          puesto: 'SISNIC System Analyst',
          periodo: 'July 2022 - August 2026',
          tecnologias: ['Backend', 'Automation', 'SQL', 'Reporting'],
          descripcion: [
            'Performance optimization and code refactoring in the core of the SISNIC system.',
            'Developed automation modules, including automatic emails to notify domain cancellations and expirations.',
            'Implemented the correspondent assignment system for national clients and developed the Billing Note report.',
            'User Experience (UX)-focused redesign of both the SISNIC system interface and the official Nic.ni website, creating new interactive components.',
            'Full development of the accounts receivable module, including reports and table design.',
            'Full development of the Segment Management module, as well as automated tasks for expiration dates and cancellation processes.',
            'Full development of the domain renewal request module from the Web Console.',
            'Development and design of automated emails for expiration, cancellation and renewal notifications of domains via SMTP.',
            'Technical support and troubleshooting for the SISNIC system.',
          ],
        },
        {
          empresa: 'Seguros Prisma',
          puesto: 'Software Developer & Web Admin',
          periodo: 'Freelance',
          tecnologias: ['C#', 'WPF', 'Desktop Apps', 'Web Admin'],
          descripcion: [
            'Designed and developed a desktop application using C# and WPF to automate expiration alerts for mandatory insurance policies.',
            'Technical administration, support and maintenance of the company web platform.',
          ],
        },
        {
          empresa: 'Agricultural Health and Protection Institute (IPSA)',
          puesto: 'Web Developer',
          periodo: 'January 2022 - June 2022',
          tecnologias: ['PHP', 'Laravel', 'Microsoft Forms', 'Support'],
          descripcion: [
            'Development and maintenance of web applications using the Laravel framework with PHP.',
            'Implementation and management of survey and data collection systems integrating Microsoft tools.',
            'General technical support for users and internal systems of the institution.',
          ],
        },
      ],
    },
  },
};