import React from 'react';
import { Code2, Server, LayoutTemplate, Database, BrainCircuit, Terminal, Wrench } from 'lucide-react';

const Habilidades = () => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Título Responsive */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 text-white flex items-center gap-2 sm:gap-3 drop-shadow-md">
        <Code2 className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" /> Ecosistema Tecnológico y Aptitudes
      </h2>
      
      {/* Grid: 1 col celular, 2 col tablet, 3 col PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        
        {/* Backend & Arquitectura */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
            <Server className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5" /> Backend & Arquitectura
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['C#', '.NET (Core/8/9)', 'Java', 'C/C++', 'ASP.NET Core', 'EF Core', 'CQRS (MediatR)', 'DDD', 'REST APIs', 'Arquitectura Limpia'].map(tech => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
            <LayoutTemplate className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" /> Frontend & UI
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Angular', 'React', 'Vue.js', 'Quasar Framework', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Base de Datos */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-emerald-300 transition-colors">
            <Database className="text-emerald-400 w-4 h-4 sm:w-5 sm:h-5" /> Bases de Datos
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['SQL Server', 'PostgreSQL', 'SQLite', 'T-SQL', 'Procedimientos Almacenados', 'Diseño Relacional', 'Vistas SQL', 'Optimización'].map(tech => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Herramientas e IDEs */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
            <Wrench className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" /> Herramientas & IDEs
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Visual Studio', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'SSMS', 'Postman', 'Git', 'GitHub', 'NVM'].map(tech => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Entornos e Infraestructura */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/40 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-orange-300 transition-colors">
            <Terminal className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" /> Infraestructura & SO
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Linux (Fedora)', 'Ubuntu', 'Linux Mint', 'Windows', 'Docker', 'Sistemas Multi-Tenant', 'Bash / Shell', 'Flatpak / DNF'].map(tech => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-orange-400 hover:bg-orange-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Aptitudes y Análisis */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-rose-500/10 hover:border-rose-500/40 transition-all duration-300">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-rose-300 transition-colors">
            <BrainCircuit className="text-rose-400 w-4 h-4 sm:w-5 sm:h-5" /> Aptitudes Analíticas
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Análisis de Requerimientos', 'Reglas de Negocio', 'Resolución de Problemas', 'Pensamiento Crítico', 'Sistemas Resilientes', 'Mantenibilidad'].map(tech => (
              <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-rose-400 hover:bg-rose-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Habilidades;