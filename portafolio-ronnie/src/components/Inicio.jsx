import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

// Componente para el efecto de fondo de código flotante
const FloatingCode = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const symbols = ['{', '}', '</>', '()', '=>', '[]', ';', 'const', 'let', 'import', '&&', '||', '!='];
    
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 15}s`,
      animationDelay: `${Math.random() * 15}s`,
      fontSize: `${Math.random() * 1.5 + 0.8}rem`,
      opacity: Math.random() * 0.15 + 0.05,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes float-up {
          /* Inician ligeramente abajo de la pantalla */
          0% { transform: translateY(10vh) rotate(0deg); opacity: 0; }
          /* Aparecen rápidamente */
          10% { opacity: var(--max-opacity); }
          /* Se mantienen visibles casi hasta llegar arriba */
          90% { opacity: var(--max-opacity); }
          /* Desaparecen mucho más arriba del límite superior de la pantalla */
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-blue-500/30 font-mono select-none"
          style={{
            left: p.left,
            bottom: '-10%',
            fontSize: p.fontSize,
            '--max-opacity': p.opacity,
            animation: `float-up ${p.animationDuration} linear infinite`,
            animationDelay: p.animationDelay,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
};

// Componente para el efecto de Máquina de Escribir
const TypeWriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);
    
    return () => clearInterval(typingInterval);
  }, [text, startTyping]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse border-r-2 border-blue-400 ml-1 pr-1 text-transparent">|</span>
    </span>
  );
};

const Inicio = ({ setActiveTab }) => {
  return (
    <div className="relative overflow-hidden w-full min-h-[80vh] flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center py-8 md:py-16 px-4">
      
      {/* CSS inyectado para las animaciones */}
      <style>{`
        @keyframes slide-up-fade {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up-fade 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes console-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-console-blink {
          animation: console-blink 1s step-end infinite;
        }
      `}</style>

      {/* Componente del efecto de fondo */}
      <FloatingCode />
      
      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 w-full">
        
        {/* Contenedor del Icono de Consola */}
        <div 
          className="animate-slide-up w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl md:rounded-[2rem] p-1 shadow-lg shadow-blue-500/20"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-full h-full bg-slate-900 rounded-[1.4rem] md:rounded-[1.9rem] flex items-center justify-center backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 flex items-center">
              &gt;<span className="animate-console-blink">_</span>
            </div>
          </div>
        </div>
        
        {/* Título Principal */}
        <h1 
          className="animate-slide-up text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight drop-shadow-sm pb-2 px-1"
          style={{ animationDelay: '0.3s' }}
        >
          Ing. Ronnie Acevedo
        </h1>
        
        {/* Subtítulo con efecto de máquina de escribir */}
        <h2 
          className="animate-slide-up text-lg sm:text-xl lg:text-2xl text-blue-400 font-medium tracking-wide max-w-3xl min-h-[2rem]"
          style={{ animationDelay: '0.5s' }}
        >
          <TypeWriter text="Full Stack Developer | Aplicaciones Completas y Bases de Datos" delay={800} />
        </h2>
        
        {/* Párrafo de Descripción */}
        <p 
          className="animate-slide-up max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed px-2"
          style={{ animationDelay: '0.7s' }}
        >
          Con 5 años de experiencia, no me limito a escribir código; transformo reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.
        </p>
        
        {/* Botón de Acción */}
        <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <button 
            onClick={() => setActiveTab('portafolio')}
            className="mt-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-md text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 border border-blue-500/50 text-sm md:text-base group"
          >
            Ver mis proyectos 
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Inicio;