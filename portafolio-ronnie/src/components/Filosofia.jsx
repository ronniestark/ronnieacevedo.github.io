import React from 'react';
import { Layers } from 'lucide-react';

const Filosofia = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 drop-shadow-md">
        <Layers className="text-blue-400" /> Filosofía de Desarrollo
      </h2>
      <div className="grid gap-6">
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-3">Modelado Estratégico</h3>
          <p className="text-slate-300">Análisis profundo de los requerimientos y definición de las fronteras del negocio antes de abrir el IDE. La solución nace en el diseño, no en el teclado.</p>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-3">Domain-Driven Design (DDD)</h3>
          <p className="text-slate-300">Aislamiento estricto del núcleo de negocio. Diseño centrado en el dominio y uso de <i>Value Objects</i> para erradicar la obsesión por primitivos y garantizar la integridad de los datos.</p>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-3">Arquitectura Limpia y Evolutiva</h3>
          <p className="text-slate-300">Implementación de <i>Clean Architecture</i>, <i>Vertical Slices</i> y <i>CQRS</i> para construir sistemas con alta cohesión y bajo acoplamiento, preparados para el cambio.</p>
        </div>
      </div>
    </div>
  );
};

export default Filosofia;