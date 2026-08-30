import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

const Inicio = ({ setActiveTab }) => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center space-y-6 text-center py-12">
      <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full p-1 shadow-lg shadow-blue-500/20">
        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Terminal size={48} className="text-cyan-400" />
        </div>
      </div>
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight drop-shadow-sm pb-2 px-1">
        Ing. Ronnie Acevedo
      </h1>
      <h2 className="text-2xl text-blue-400 font-medium tracking-wide">
        Full Stack Developer | Aplicaciones Completas y Bases de Datos
      </h2>
      <p className="max-w-2xl text-slate-300 text-lg leading-relaxed">
        Con 4 años de experiencia, no me limito a escribir código; transformo reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.
      </p>
      <button 
        onClick={() => setActiveTab('portafolio')}
        className="mt-6 px-8 py-3 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-md text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 border border-blue-500/50"
      >
        Ver mis proyectos <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Inicio;