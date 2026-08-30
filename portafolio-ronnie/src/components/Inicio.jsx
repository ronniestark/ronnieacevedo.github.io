import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

const Inicio = ({ setActiveTab }) => {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center py-8 md:py-16 px-4">
      
      {/* Contenedor del Icono - Escala en celular y PC */}
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full p-1 shadow-lg shadow-blue-500/20">
        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center backdrop-blur-sm">
          {/* Uso de clases w y h para que sea responsive en lugar de size estático */}
          <Terminal className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
        </div>
      </div>
      
      {/* Título Principal - Ajuste de tamaño fluido */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight drop-shadow-sm pb-2 px-1">
        Ing. Ronnie Acevedo
      </h1>
      
      {/* Subtítulo - Limitado en ancho y tamaño de fuente adaptable */}
      <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-medium tracking-wide max-w-3xl">
        Full Stack Developer | Aplicaciones Completas y Bases de Datos
      </h2>
      
      {/* Párrafo de Descripción - Reducción en celulares */}
      <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed px-2">
        Con 5 años de experiencia, no me limito a escribir código; transformo reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.
      </p>
      
      {/* Botón de Acción - Padding y texto ajustable */}
      <button 
        onClick={() => setActiveTab('portafolio')}
        className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-md text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 border border-blue-500/50 text-sm md:text-base"
      >
        Ver mis proyectos <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      
    </div>
  );
};

export default Inicio;