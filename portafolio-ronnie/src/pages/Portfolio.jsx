import React, { useState } from 'react';
import { Home, Lightbulb, Code2, Layout, Phone, Briefcase } from 'lucide-react';

// Importaciones de los componentes modulares
import Inicio from '../components/Inicio';
import Filosofia from '../components/Filosofia';
import Habilidades from '../components/Habilidades';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Experiencia from '../components/Experiencia';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'ideologia', label: 'Mi Filosofía', icon: Lightbulb },
    { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
    { id: 'habilidades', label: 'Habilidades', icon: Code2 },
    { id: 'portafolio', label: 'Portafolio', icon: Layout },
    { id: 'contacto', label: 'Contacto', icon: Phone }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        // Corregido: se pasa la función correctamente, sin comillas
        return <Inicio setActiveTab={setActiveTab} />;
      case 'ideologia':
        return <Filosofia />;
      case 'experiencia':         
        return <Experiencia />;   
      case 'habilidades':
        return <Habilidades />;
      case 'portafolio':
        return <Proyectos />;
      case 'contacto':
        return <Contacto />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 relative overflow-hidden flex flex-col">
      
      {/* Efecto de Fondo Translúcido (Escalado responsivo para que no desborde en móviles) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-10%] w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute top-[30%] left-[50%] translate-x-[-50%] w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] bg-indigo-500/5 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* Navegación Responsive */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 shadow-sm">
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            {/* 
              Cambios clave para móviles:
              - lg:justify-center: Centra en PC, inicia desde la izquierda en móvil.
              - snap-x snap-mandatory: Añade una sensación magnética suave al hacer scroll táctil.
            */}
            <div className="flex justify-start lg:justify-center space-x-1.5 sm:space-x-2 overflow-x-auto py-3 md:py-4 scrollbar-hide snap-x snap-mandatory">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`snap-center flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-[0.8rem] sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === item.id
                        ? 'bg-blue-600/20 text-blue-400 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] border border-blue-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {/* El ícono se adapta ligeramente al tamaño de pantalla */}
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Contenido Dinámico Responsive (Padding ajustado para móviles) */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex-grow w-full">
          {renderContent()}
        </main>

        {/* Footer integrado */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Portfolio;