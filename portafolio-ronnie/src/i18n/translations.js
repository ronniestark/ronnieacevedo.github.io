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