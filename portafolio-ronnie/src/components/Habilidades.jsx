import React from 'react';
import { Code2, Server, LayoutTemplate, Database, BrainCircuit, Terminal, Wrench } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// Estilos por categoría (clases completas para que Tailwind las detecte)
const categorias = [
  {
    key: 'backend',
    Icon: Server,
    iconColor: 'text-cyan-400',
    card: 'hover:border-cyan-500/50 hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]',
    sweep: 'from-cyan-500/0 via-cyan-500/5 to-cyan-500/0',
    titleHover: 'group-hover:text-cyan-300',
    chip: 'hover:border-cyan-400 hover:bg-cyan-500/20',
  },
  {
    key: 'frontend',
    Icon: LayoutTemplate,
    iconColor: 'text-blue-400',
    card: 'hover:border-blue-500/50 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]',
    sweep: 'from-blue-500/0 via-blue-500/5 to-blue-500/0',
    titleHover: 'group-hover:text-blue-300',
    chip: 'hover:border-blue-400 hover:bg-blue-500/20',
  },
  {
    key: 'bd',
    Icon: Database,
    iconColor: 'text-emerald-400',
    card: 'hover:border-emerald-500/50 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)]',
    sweep: 'from-emerald-500/0 via-emerald-500/5 to-emerald-500/0',
    titleHover: 'group-hover:text-emerald-300',
    chip: 'hover:border-emerald-400 hover:bg-emerald-500/20',
  },
  {
    key: 'herramientas',
    Icon: Wrench,
    iconColor: 'text-purple-400',
    card: 'hover:border-purple-500/50 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)]',
    sweep: 'from-purple-500/0 via-purple-500/5 to-purple-500/0',
    titleHover: 'group-hover:text-purple-300',
    chip: 'hover:border-purple-400 hover:bg-purple-500/20',
  },
  {
    key: 'infra',
    Icon: Terminal,
    iconColor: 'text-orange-400',
    card: 'hover:border-orange-500/50 hover:shadow-[0_8px_25px_rgba(249,115,22,0.15)]',
    sweep: 'from-orange-500/0 via-orange-500/5 to-orange-500/0',
    titleHover: 'group-hover:text-orange-300',
    chip: 'hover:border-orange-400 hover:bg-orange-500/20',
  },
  {
    key: 'aptitudes',
    Icon: BrainCircuit,
    iconColor: 'text-rose-400',
    card: 'hover:border-rose-500/50 hover:shadow-[0_8px_25px_rgba(244,63,94,0.15)]',
    sweep: 'from-rose-500/0 via-rose-500/5 to-rose-500/0',
    titleHover: 'group-hover:text-rose-300',
    chip: 'hover:border-rose-400 hover:bg-rose-500/20',
  },
];

const Habilidades = () => {
  const { t } = useLanguage();
  const h = t.habilidades;

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

      {/* Resplandor de fondo central */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10">

        {/* Título y Logo Animado */}
        <div className="flex flex-col items-center justify-center mb-12 mt-4 text-center">
          <div className="animate-float-slow bg-blue-500/10 p-3.5 rounded-2xl mb-5 border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <Code2 className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="neon-text text-3xl sm:text-4xl md:text-5xl font-extrabold pb-3 tracking-wide">
            {h.titulo}
          </h2>
        </div>

        {/* Cuadrícula adaptativa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categorias.map(({ key, Icon, iconColor, card, sweep, titleHover, chip }) => (
            <div
              key={key}
              className={`group relative bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full ${card}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${sweep} translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none`}></div>

              <div className="relative z-10">
                <h3 className={`text-lg font-semibold text-slate-50 mb-5 flex items-center gap-2 transition-colors ${titleHover}`}>
                  <Icon className={`${iconColor} w-5 h-5`} /> {h[key].titulo}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {h[key].items.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 bg-slate-950/50 border border-slate-700/60 rounded-lg text-xs font-medium text-slate-300 hover:text-slate-50 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm ${chip}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;