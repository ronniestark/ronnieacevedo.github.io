import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-slate-800/60 mt-12 py-6 backdrop-blur-md bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
        <p>© {currentYear} Ing. Ronnie Acevedo. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Construido con React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;