import React from 'react';
import { Mail, Smartphone, MessageSquare } from 'lucide-react';

// Se mantuvieron los SVG personalizados para asegurar 0 errores de importación
const GithubLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contacto = () => {
  return (
    <div className="relative animate-fade-in max-w-5xl mx-auto py-12 md:py-20 px-4 sm:px-6 text-center">
      
      {/* CSS inyectado para las animaciones del icono y el texto neón */}
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
            color: #e0f2fe; /* Un cyan súper claro al apagar levemente */
          }
        }
        .neon-text {
          animation: neon-pulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Efecto de resplandor de fondo general */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10">
        {/* Título con ícono animado */}
        <div className="flex flex-col items-center justify-center mb-8 mt-4">
          {/* El contenedor del icono ahora tiene la clase animate-float-slow */}
          <div className="animate-float-slow bg-blue-500/10 p-3.5 rounded-2xl mb-5 border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <MessageSquare className="w-8 h-8 text-blue-400" />
          </div>
          
          {/* El texto ahora usa la clase neon-text en lugar de bg-clip-text */}
          <h2 className="neon-text text-3xl sm:text-4xl md:text-5xl font-extrabold pb-3 tracking-wide">
            Iniciemos una conversación
          </h2>
        </div>
        
        {/* Párrafo de introducción (Estilo Glassmorphism) */}
        <p className="text-slate-300 mb-12 text-base sm:text-lg max-w-2xl mx-auto backdrop-blur-md bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-700/50 shadow-xl leading-relaxed">
          Abierto a conectar con profesionales de la industria, debatir sobre diseño de software y colaborar en retos tecnológicos que exijan soluciones robustas e innovadoras.
        </p>
        
        {/* Cuadrícula de Tarjetas de Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
          
          {/* Tarjeta LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/ronnie-acevedo-a33625262" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-5 sm:p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-[#0A66C2] hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(10,102,194,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/0 via-[#0A66C2]/5 to-[#0A66C2]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="bg-[#0A66C2]/10 p-3 rounded-xl text-[#0A66C2] group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
              <LinkedinLogo className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</span>
              <span className="block text-slate-200 font-medium text-sm sm:text-base">Ronnie Acevedo</span>
            </div>
          </a>

          {/* Tarjeta GitHub */}
          <a 
            href="https://github.com/ronniestark" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-5 sm:p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-400 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(148,163,184,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-slate-400/5 to-slate-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="bg-slate-700/30 p-3 rounded-xl text-slate-300 group-hover:scale-110 group-hover:bg-slate-200 group-hover:text-slate-900 transition-all duration-300">
              <GithubLogo className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">GitHub</span>
              <span className="block text-slate-200 font-medium text-sm sm:text-base">ronniestark</span>
            </div>
          </a>

          {/* Tarjeta Email */}
          <a 
            href="mailto:ronniestark999@gmail.com" 
            className="group relative flex items-center gap-4 p-5 sm:p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(6,182,212,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="bg-cyan-500/10 p-3 rounded-xl text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</span>
              <span className="block text-slate-200 font-medium text-sm sm:text-base truncate max-w-[180px] sm:max-w-[200px]">ronniestark999@gmail.com</span>
            </div>
          </a>

          {/* Tarjeta Teléfono */}
          <a 
            href="tel:+50585098015" 
            className="group relative flex items-center gap-4 p-5 sm:p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Teléfono / WhatsApp</span>
              <span className="block text-slate-200 font-medium text-sm sm:text-base">+505 85098015</span>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contacto;