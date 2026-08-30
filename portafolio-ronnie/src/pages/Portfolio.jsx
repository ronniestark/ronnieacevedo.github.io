import React, { useState } from 'react';
import { Home, Lightbulb, Code2, Layout, Phone } from 'lucide-react';

// Importaciones de los componentes modulares
import Inicio from '../components/Inicio';
import Filosofia from '../components/Filosofia';
import Habilidades from '../components/Habilidades';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'ideologia', label: 'Mi Filosofía', icon: Lightbulb },
    { id: 'habilidades', label: 'Habilidades', icon: Code2 },
    { id: 'portafolio', label: 'Portafolio', icon: Layout },
    { id: 'contacto', label: 'Contacto', icon: Phone }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Inicio setActiveTab={setActiveTab} />;
      case 'ideologia':
        return <Filosofia />;
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
      
      {/* Efecto de Fondo Translúcido */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Contenedor principal con flex-grow para empujar el footer hacia abajo */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Navegación */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/80 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-start sm:justify-center space-x-2 overflow-x-auto py-4 scrollbar-hide">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === item.id
                        ? 'bg-blue-600/20 text-blue-400 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] border border-blue-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Contenido Dinámico */}
        <main className="max-w-6xl mx-auto px-6 py-12 flex-grow w-full">
          {renderContent()}
        </main>

        {/* Footer integrado */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;