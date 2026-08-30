import React from 'react';
import { Briefcase, Calendar, Code2, Database, Layout, ShieldCheck } from 'lucide-react';

const Experiencia = () => {
  const trabajos = [
    {
      empresa: "Universidad Nacional de Ingeniería (DTI)",
      puesto: "Analista de Sistemas",
      periodo: "Julio 2023 - Agosto 2026",
      icono: <Database className="text-blue-400" size={24} />,
      borde: "border-blue-500/50",
      sombra: "hover:shadow-blue-500/20",
      bgBadge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
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
      puesto: "Analista del Sistema SISNIC",
      periodo: "Julio 2022 - Agosto 2026",
      icono: <Layout className="text-cyan-400" size={24} />,
      borde: "border-cyan-500/50",
      sombra: "hover:shadow-cyan-500/20",
      bgBadge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      tecnologias: ["UX/UI", "Backend", "Automatización", "Reportes"],
      descripcion: [
        "Optimización de rendimiento y refactorización de código en el núcleo del sistema SISNIC.",
        "Desarrollo de módulos de automatización, incluyendo el envío automático de correos para notificar bajas y vencimientos de dominios.",
        "Implementación del sistema de asignación de corresponsales para clientes nacionales y desarrollo del reporte de Nota de Cobro.",
        "Rediseño enfocado en la Experiencia de Usuario (UX) tanto en la interfaz del sistema SISNIC como en la página web oficial de Nic.ni, creando nuevos componentes interactivos.",
        "Desarrollo total modulo de cuentas por cobrar,reporte y diseño de tablas.",
        "Desarrollo total modulo de Administración de segmentos, asi como tareas automatizadas de vencimientos de fechas expiration y procesos de bajas.",
        "Desarrollo total modulo de solicitudes de renovacion de dominios desde la Web Console.",
        "Desarrollo y diseño de correos automatizados para notificaciones de vencimientos, bajas y renovaciones de dominios por smtp.",
        "Soporte técnico y resolución de problemas en el sistema SISNIC."
      
      ]
    },
    {
      empresa: "Seguros Prisma",
      puesto: "Desarrollador de Software y Web Admin (Servicios Profesionales)",
      periodo: "Freelance",
      icono: <ShieldCheck className="text-purple-400" size={24} />,
      borde: "border-purple-500/50",
      sombra: "hover:shadow-purple-500/20",
      bgBadge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
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
      icono: <Code2 className="text-emerald-400" size={24} />,
      borde: "border-emerald-500/50",
      sombra: "hover:shadow-emerald-500/20",
      bgBadge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      tecnologias: ["PHP", "Laravel", "Microsoft Forms", "Soporte"],
      descripcion: [
        "Desarrollo y mantenimiento de aplicaciones web utilizando el framework Laravel con PHP.",
        "Implementación y gestión de sistemas de encuestas y recolección de datos integrando herramientas de Microsoft.",
        "Soporte técnico general a usuarios y sistemas internos de la institución."
      ]
    }
  ];

  return (
    <div className="animate-fade-in max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3 drop-shadow-md">
        <Briefcase className="text-blue-400" size={32} /> Trayectoria Profesional
      </h2>
      
      <div className="relative border-l-2 border-slate-700/50 ml-4 md:ml-6 space-y-12">
        {trabajos.map((trabajo, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            
            {/* Círculo en la línea de tiempo */}
            <div className={`absolute -left-[17px] top-1 bg-slate-900 border-2 ${trabajo.borde} w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <div className="scale-75">
                {trabajo.icono}
              </div>
            </div>

            {/* Tarjeta de Experiencia */}
            <div className={`bg-slate-900/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-700/50 ${trabajo.sombra} hover:-translate-y-1 transition-all duration-300 shadow-xl`}>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{trabajo.puesto}</h3>
                  <h4 className="text-lg font-medium text-slate-300 flex items-center gap-2">
                    {trabajo.empresa}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 w-fit">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{trabajo.periodo}</span>
                </div>
              </div>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {trabajo.tecnologias.map((tech, i) => (
                  <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-full border ${trabajo.bgBadge}`}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Lista de Responsabilidades */}
              <ul className="space-y-3">
                {trabajo.descripcion.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed text-sm md:text-base">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencia;