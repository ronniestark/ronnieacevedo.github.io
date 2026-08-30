import React from 'react';
import { Code2, Server, LayoutTemplate, Database, BrainCircuit } from 'lucide-react';

const Habilidades = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 drop-shadow-md">
        <Code2 className="text-blue-400" /> Ecosistema Tecnológico y Aptitudes
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Server size={18} className="text-cyan-400" /> Backend & Arquitectura
          </h3>
          <div className="flex flex-wrap gap-2">
            {['C#', '.NET (Core/8/9)', 'Java', 'ASP.NET Core', 'EF Core', 'CQRS (MediatR)', 'DDD', 'REST API', 'Arquitectura Limpia'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <LayoutTemplate size={18} className="text-cyan-400" /> Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Angular', 'React', 'Vue.js', 'Quasar Framework', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Database size={18} className="text-cyan-400" /> Infraestructura & Datos
          </h3>
          <div className="flex flex-wrap gap-2">
            {['SQL Server', 'PostgreSQL', 'SQLite', 'T-SQL', 'Docker', 'Sistemas Multi-Tenant', 'Linux (Fedora)'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BrainCircuit size={18} className="text-cyan-400" /> Aptitudes y Análisis
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Análisis de Requerimientos', 'Traducción de Reglas de Negocio', 'Resolución de Problemas Complejos', 'Pensamiento Crítico', 'Diseño de Sistemas Resilientes', 'Mantenibilidad'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;