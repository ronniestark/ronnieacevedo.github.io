import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  const currentYear = new Date().getFullYear();
  
  // Función para navegar desde el footer hacia arriba
  const handleNav = (tab) => {
    if (setActiveTab) {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#05080f] overflow-hidden border-t border-slate-800/80 pt-14 md:pt-20 pb-8 text-slate-300 mt-auto">
      
      {/* Efecto de resplandor (Glow) de fondo para modernizar el diseño */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
        
        {/* Columna 1: Marca */}
        <div className="space-y-5 sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            Ing. Ronnie Acevedo
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Transformando reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.
          </p>
        </div>

        {/* Columna 2: Menú */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-5 uppercase tracking-[0.15em] text-xs">Navegación</h3>
          <ul className="space-y-3.5">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'ideologia', label: 'Mi Filosofía' },
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'habilidades', label: 'Habilidades' },
              { id: 'portafolio', label: 'Portafolio' },
              { id: 'contacto', label: 'Contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNav(item.id)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 ease-out group"
                >
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1.5 transition-all duration-300" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-5 uppercase tracking-[0.15em] text-xs">Conecta Conmigo</h3>
          <ul className="space-y-3.5">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-500 transition-all duration-300 ease-out group">
                <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1.5 transition-all duration-300" />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Facebook: Ronnie Acvdo</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-pink-500 transition-all duration-300 ease-out group">
                <ChevronRight size={14} className="text-slate-600 group-hover:text-pink-500 group-hover:translate-x-1.5 transition-all duration-300" />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">Instagram: ronnie_acvdo</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ronnie-acevedo-a33625262" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-all duration-300 ease-out group">
                <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1.5 transition-all duration-300" />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ronniestark" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-300 ease-out group">
                <ChevronRight size={14} className="text-slate-600 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h3 className="text-slate-100 font-semibold mb-5 uppercase tracking-[0.15em] text-xs">Contacto</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group cursor-default">
              <MapPin size={20} className="text-slate-500 group-hover:text-cyan-400 group-hover:scale-110 flex-shrink-0 mt-0.5 transition-all duration-300" />
              <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">Managua, Nicaragua</span>
            </li>
            <li className="flex items-start gap-3 group cursor-default">
              <Phone size={20} className="text-slate-500 group-hover:text-cyan-400 group-hover:scale-110 flex-shrink-0 mt-0.5 transition-all duration-300" />
              <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">+505 85098015</span>
            </li>
            <li className="flex items-start gap-3 group cursor-pointer">
              <Mail size={20} className="text-slate-500 group-hover:text-cyan-400 group-hover:scale-110 flex-shrink-0 mt-0.5 transition-all duration-300" />
              <a href="mailto:ronniestark999@gmail.com" className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors break-all">
                ronniestark999@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs font-medium text-slate-500">
        <p>© {currentYear} Ing. Ronnie Acevedo. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1.5">
          Construido con 
          <span className="text-cyan-400 cursor-default hover:text-cyan-300 transition-colors">React</span> & 
          <span className="text-blue-400 cursor-default hover:text-blue-300 transition-colors">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;