import React from 'react';
import { Briefcase, Calendar, Code2, Database, Layout, ShieldCheck, Mail, Monitor } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Experiencia = () => {

  const { t } = useLanguage();

  const estilos = [
    {
      icono: <Mail className="text-orange-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-orange-500/50",
      hoverBorder: "hover:border-orange-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(249,115,22,0.15)]",
      bgBadge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
    },
    {
      icono: <Database className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-blue-500/50",
      hoverBorder: "hover:border-blue-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]",
      bgBadge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    {
      icono: <Monitor className="text-indigo-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-indigo-500/50",
      hoverBorder: "hover:border-indigo-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(99,102,241,0.15)]",
      bgBadge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    },
    {
      icono: <Layout className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-cyan-500/50",
      hoverBorder: "hover:border-cyan-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]",
      bgBadge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      icono: <ShieldCheck className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-purple-500/50",
      hoverBorder: "hover:border-purple-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)]",
      bgBadge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
    {
      icono: <Code2 className="text-emerald-400 w-5 h-5 md:w-6 md:h-6" />,
      borde: "border-emerald-500/50",
      hoverBorder: "hover:border-emerald-500/50",
      sombra: "hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)]",
      bgBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
  ];

  const trabajos = t.experiencia.trabajos.map((trabajo, i) => ({
    ...trabajo,
    ...estilos[i],
  }));

 

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
            {t.experiencia.titulo}
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