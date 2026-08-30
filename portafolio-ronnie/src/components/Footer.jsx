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
    <footer className="w-full bg-[#0d1117] border-t border-slate-800/60 pt-12 md:pt-16 pb-8 text-slate-300 mt-auto">
      {/* 
        Grid responsive: 
        - 1 columna por defecto (móviles)
        - 2 columnas en sm (tablets)
        - 4 columnas en lg (PC)
      */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 pb-1">
            Ing. Ronnie Acevedo
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Transformando reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.
          </p>
        </div>

        {/* Columna 2: Menú */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Menú</h3>
          <ul className="space-y-3">
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
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Redes Sociales</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                Facebook: Ronnie Acvdo
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                Instagram: ronnie_acvdo
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ronnie-acevedo-a33625262" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ronniestark" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          {/* Se eliminó invisible md:visible para que el título se vea en móviles */}
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400">Managua, Nicaragua</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400">+505 85098015</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400 break-all">ronniestark999@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="max-w-6xl mx-auto px-6 border-t border-slate-800/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-slate-500">
        <p>© {currentYear} Ing. Ronnie Acevedo. Todos los derechos reservados.</p>
        <p>Construido con React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;