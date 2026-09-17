import React from 'react';
import { Briefcase, Calendar, Code2, Database, Layout, ShieldCheck, Mail, Monitor } from 'lucide-react';

const Experiencia = () => {
  const trabajos = [
    {
      empresa: "Desarrollo Independiente",
      puesto: "Desarrollador Backend & Machine Learning",
      periodo: "Agosto 2026 - Septiembre 2026",
      icono: <Mail className="text-orange-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-orange-500/50",
      hoverBorder: "hover:border-orange-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(249,115,22,0.15)]",
      bgBadge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
      tecnologias: [".NET 10", ".NET 8", "ML.NET", "Gmail API", "EF Core", "JWT"],
      descripcion: [
        "Diseñe y desarrolle de una API RESTful para la sincronización y clasificación inteligente de correos electrónicos, utilizando .NET 8 y actualizando el ecosistema a .NET 10.",
        "Integración segura con la API de Gmail a través de Google Cloud Console, implementando el flujo de autorización OAuth 2.0.",
        "Entrenamiento e implementación de modelos de Machine Learning (ML.NET FastTree) para categorizar de forma predictiva el contenido de los mensajes.",
        "Diseño de arquitectura de datos con Entity Framework Core y SQL Server, protegiendo tokens y datos sensibles con ASP.NET Data Protection y seguridad de endpoints con JWT.",
        "Implementación de flujos de Integración Continua (CI) mediante GitHub Actions para automatizar las compilaciones del proyecto."
      ]
    },
    {
      empresa: "Universidad Nacional de Ingeniería (DTI)",
      puesto: "Analista de Sistemas",
      periodo: "Julio 2023 - Actualidad",
      icono: <Database className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-blue-500/50",
      hoverBorder: "hover:border-blue-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]",
      bgBadge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      tecnologias: ["C#", "React", "SQL Server", "FastReport", "iText 7"],
      descripcion: [
        "Desarrollo Full Stack y reportería para el Sistema Institucional HelpDesk utilizando C#, React y FastReport, consumiendo datos directamente de SQL Server.",
        "Implementación del módulo de Notas de Entrada y Salida para el Sistema de Bodega (SISBOD) utilizando iText 7, React y C#.",
        "Encargado del Sistema de Activos Fijos (SAF), liderando el mantenimiento de código, optimización de base de datos y migración de nomenclatura institucional.",
        "Diseño de reportes financieros y administrativos con FastReport para el sistema SIGFA.",
        "Soporte técnico avanzado y mantenimiento de múltiples sistemas institucionales: SIPSI (Planificación), SIFA (Financiero), SIPAD (Procesos), SISCOM (Compras) y Tesorería."
      ]
    },
    {
      empresa: "Nic.ni (Sistema Nacional de Dominios)",
      puesto: "Desarrollador Web Frontend (Rediseño Oficial)",
      periodo: "2025 - 2026",
      icono: <Monitor className="text-indigo-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-indigo-500/50",
      hoverBorder: "hover:border-indigo-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(99,102,241,0.15)]",
      bgBadge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      tecnologias: ["UX/UI", "Frontend", "Diseño Responsivo", "Web Optimization"],
      descripcion: [
        "Rediseño integral del portal web oficial de Nic.ni, migrando de una arquitectura visual tradicional hacia una interfaz moderna, vanguardista y altamente tecnológica.",
        "Desarrollo, estructuración y maquetación de las vistas principales del sistema: Inicio, Nosotros, motor de búsqueda Whois, catálogo de Dominios y portal de Contacto.",
        "Mejora significativa en la Experiencia de Usuario (UX) y la Interfaz de Usuario (UI), aplicando principios de diseño responsivo para garantizar una navegación fluida en dispositivos móviles y de escritorio.",
        "Optimización de la estructura frontend para agilizar los tiempos de carga y modernizar la imagen institucional del registro nacional de dominios."
      ]
    },
    {
      empresa: "Nic.ni (Sistema Nacional de Dominios)",
      puesto: "Analista del Sistema SISNIC",
      periodo: "Julio 2022 - Agosto 2026",
      icono: <Layout className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-cyan-500/50",
      hoverBorder: "hover:border-cyan-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]",
      bgBadge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      tecnologias: ["Backend", "Automatización", "SQL", "Reportes"],
      descripcion: [
        "Optimización de rendimiento y refactorización de código en el núcleo del sistema SISNIC.",
        "Desarrollo de módulos de automatización, incluyendo el envío automático de correos para notificar bajas y vencimientos de dominios.",
        "Implementación del sistema de asignación de corresponsales para clientes nacionales y desarrollo del reporte de Nota de Cobro.",
        "Rediseño enfocado en la Experiencia de Usuario (UX) tanto en la interfaz del sistema SISNIC como en la página web oficial de Nic.ni, creando nuevos componentes interactivos.",
        "Desarrollo total módulo de cuentas por cobrar, reporte y diseño de tablas.",
        "Desarrollo total módulo de Administración de segmentos, así como tareas automatizadas de vencimientos de fechas expiration y procesos de bajas.",
        "Desarrollo total módulo de solicitudes de renovación de dominios desde la Web Console.",
        "Desarrollo y diseño de correos automatizados para notificaciones de vencimientos, bajas y renovaciones de dominios por SMTP.",
        "Soporte técnico y resolución de problemas en el sistema SISNIC."
      ]
    },
    {
      empresa: "Seguros Prisma",
      puesto: "Desarrollador de Software y Web Admin",
      periodo: "Freelance",
      icono: <ShieldCheck className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-purple-500/50",
      hoverBorder: "hover:border-purple-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)]",
      bgBadge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      tecnologias: ["C#", "WPF", "Desktop Apps", "Web Admin"],
      descripcion: [
        "Diseño y desarrollo de una aplicación de escritorio (Desktop App) utilizando C# y WPF para la automatización de alertas de vencimientos de seguros obligatorios.",
        "Administración técnica, soporte y mantenimiento de la plataforma web de la compañía."
      ]
    },
    {
      empresa: "Instituto de Protección y Sanidad Agropecuaria (IPSA)",
      puesto: "Desarrollador Web",
      periodo: "Enero 2022 - Junio 2022",
      icono: <Code2 className="text-emerald-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-emerald-500/50",
      hoverBorder: "hover:border-emerald-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)]",
      bgBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      tecnologias: ["PHP", "Laravel", "Microsoft Forms", "Soporte"],
      descripcion: [
        "Desarrollo y mantenimiento de aplicaciones web utilizando el framework Laravel con PHP.",
        "Implementación y gestión de sistemas de encuestas y recolección de datos integrando herramientas de Microsoft.",
        "Soporte técnico general a usuarios y sistemas internos de la institución."
      ]
    }
  ];

  return (
    <div className="relative animate-fade-in max-w-5xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      
      {/* Estilos inyectados para las animaciones */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 3.5s ease-in-out infinite;
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 7px rgba(56,189,248,0.8),
              0 0 15px rgba(56,189,248,0.6),
              0 0 30px rgba(56,189,248,0.4);
            color: #ffffff;
          }
          50% {
            text-shadow: 
              0 0 4px rgba(56,189,248,0.4),
              0 0 10px rgba(56,189,248,0.3),
              0 0 20px rgba(56,189,248,0.2);
            color: #e0f2fe;
          }
        }
        .neon-text {
          animation: neon-pulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Resplandor de fondo central para el contenedor */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10">
        
        {/* Título y Logo Animado */}
        <div className="flex flex-col items-center justify-center mb-16 mt-4 text-center">
          <div className="animate-float-slow bg-blue-500/10 p-3.5 rounded-2xl mb-5 border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <Briefcase className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="neon-text text-3xl sm:text-4xl md:text-5xl font-extrabold pb-3 tracking-wide">
            Trayectoria Profesional
          </h2>
        </div>
        
        {/* Línea de tiempo con márgenes adaptativos */}
        <div className="relative border-l-2 border-slate-700/50 ml-3 sm:ml-4 md:ml-6 space-y-8 md:space-y-12">
          {trabajos.map((trabajo, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 md:pl-12 group">
              
              {/* Círculo en la línea de tiempo (z-20 para que no lo tape el hover) */}
              <div className={`absolute -left-[17px] top-1 bg-slate-900 border-2 ${trabajo.borde} w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20`}>
                <div className="scale-75 md:scale-100 flex items-center justify-center">
                  {trabajo.icono}
                </div>
              </div>

              {/* Tarjeta de Experiencia con Glassmorphism y Sweep Effect */}
              <div className={`relative bg-slate-900/50 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-700/50 ${trabajo.hoverBorder} ${trabajo.sombra} hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                
                {/* Efecto de barrido de luz (Sweep) en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-slate-400/5 to-slate-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none z-0"></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 sm:gap-4 mb-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight">{trabajo.puesto}</h3>
                      <h4 className="text-base sm:text-lg font-medium text-slate-300 flex items-center gap-2">
                        {trabajo.empresa}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400 bg-slate-950/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-700/60 w-fit h-fit flex-shrink-0 group-hover:border-slate-500 transition-colors">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{trabajo.periodo}</span>
                    </div>
                  </div>

                  {/* Tecnologías con diseño unificado */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {trabajo.tecnologias.map((tech, i) => (
                      <span key={i} className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${trabajo.bgBadge}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Lista de Responsabilidades */}
                  <ul className="space-y-2.5 sm:space-y-3">
                    {trabajo.descripcion.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-slate-300 leading-relaxed text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiencia;