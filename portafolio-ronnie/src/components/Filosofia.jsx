import React from 'react';
import { Layers, Database, Box, ShieldCheck, Monitor, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// Convierte **negrita** y __cursiva__ en etiquetas con el estilo original
const Rich = ({ text }) =>
  text.split(/(\*\*.+?\*\*|__.+?__)/g).map((part, i) => {
    if (part.startsWith('**'))
      return <strong key={i} className="text-slate-200">{part.slice(2, -2)}</strong>;
    if (part.startsWith('__'))
      return <i key={i} className="text-slate-200">{part.slice(2, -2)}</i>;
    return part;
  });

const Filosofia = () => {
  const { t } = useLanguage();
  const f = t.filosofia;

  return (
    <div className="relative animate-fade-in max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6">

      {/* Estilos inyectados para las animaciones (Consistentes con las otras secciones) */}
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
            <BrainCircuit className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="neon-text text-3xl sm:text-4xl md:text-5xl font-extrabold pb-3 tracking-wide">
            {f.titulo}
          </h2>
        </div>

        {/* Grid: 1 columna en celular, 2 columnas desde tablet (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {/* Diseño y Modelado Previo */}
          <div className="group relative bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)] overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 group-hover:text-emerald-400 transition-colors">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <span>{f.modelado.titulo}</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                <Rich text={f.modelado.texto} />
              </p>
            </div>
          </div>

          {/* DDD */}
          <div className="group relative bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)] overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 group-hover:text-purple-400 transition-colors">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Box className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <span>{f.ddd.titulo}</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                <Rich text={f.ddd.texto} />
              </p>
            </div>
          </div>

          {/* Arquitectura Limpia */}
          <div className="group relative bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <span>{f.arquitectura.titulo}</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                <Rich text={f.arquitectura.texto} />
              </p>
            </div>
          </div>

          {/* Testing y Resiliencia */}
          <div className="group relative bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-red-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(239,68,68,0.15)] overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 group-hover:text-red-400 transition-colors">
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <span>{f.seguridad.titulo}</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                <Rich text={f.seguridad.texto} />
              </p>
            </div>
          </div>

          {/* Multiplataforma y UI/UX */}
          <div className="group relative bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] overflow-hidden h-full md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
                  <Monitor className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {f.ux.titulo}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base md:w-11/12">
                  <Rich text={f.ux.texto} />
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Filosofia;