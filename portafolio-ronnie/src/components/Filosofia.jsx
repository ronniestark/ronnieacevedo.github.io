import React from 'react';
import { Layers, Database, Box, ShieldCheck, Monitor, BrainCircuit } from 'lucide-react';

const Filosofia = () => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Título Responsive */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 text-white flex items-center gap-2 sm:gap-3 drop-shadow-md">
        <BrainCircuit className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" /> Filosofía de Desarrollo
      </h2>
      
      {/* Grid: 1 columna en celular, 2 columnas desde tablet (md) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        
        {/* Diseño y Modelado Previo */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
            <Database className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> 
            <span>Modelado Estratégico y Datos</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            La solución nace en el diseño, no en el teclado. Antes de abrir el IDE, utilizo herramientas como <strong className="text-slate-200">draw.io</strong> para maquetar la arquitectura y diseñar el modelo relacional de la base de datos, garantizando bases sólidas y escalables.
          </p>
        </div>

        {/* DDD */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-purple-400 transition-colors">
            <Box className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> 
            <span>Domain-Driven Design (DDD)</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Aislamiento estricto del núcleo de negocio. Diseño centrado en el dominio y uso intensivo de <i className="text-slate-200">Value Objects</i> para erradicar la obsesión por primitivos y garantizar la integridad absoluta de los datos.
          </p>
        </div>

        {/* Arquitectura Limpia */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
            <Layers className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> 
            <span>Arquitectura Limpia y Evolutiva</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Implementación de arquitecturas modernas como <strong className="text-slate-200">Clean Architecture, Vertical Slices y CQRS</strong>. El objetivo es construir sistemas con alta cohesión y bajo acoplamiento, altamente mantenibles y preparados para el cambio.
          </p>
        </div>

        {/* Testing y Resiliencia */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-700/50 hover:border-red-500/50 hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-red-400 transition-colors">
            <ShieldCheck className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> 
            <span>Seguridad, Rendimiento y Testing</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            El software debe ser robusto bajo estrés. Escribo <strong className="text-slate-200">pruebas unitarias</strong> exhaustivas, audito la seguridad del código, y realizo simulaciones de rendimiento y <strong className="text-slate-200">concurrencia</strong> para evitar cuellos de botella en producción.
          </p>
        </div>

        {/* Multiplataforma y UI/UX */}
        <div className="group bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl md:col-span-2">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-start sm:items-center gap-2 group-hover:text-cyan-400 transition-colors">
            <Monitor className="text-cyan-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 sm:mt-0" /> 
            <span>Experiencia de Usuario (UI/UX) y Multiplataforma</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:w-5/6">
            Como Full Stack, comprendo que el backend más potente no sirve si la interfaz es confusa. Me enfoco en el diseño e implementación de <strong className="text-slate-200">páginas web modernas y aplicaciones de escritorio (Desktop Apps)</strong> intuitivas, estéticas y altamente responsivas, poniendo siempre la usabilidad en primer lugar.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Filosofia;