import React from 'react';
import { GitBranch, Lock, FolderGit2 } from 'lucide-react';

const Proyectos = () => {
  const repos = [
    {
      title: "ronnieacevedo.github.io",
      desc: "Presentación de página web interactiva para perfil de LinkedIn (Este mismo portafolio).",
      tech: "JavaScript",
      color: "bg-yellow-400",
      visibility: "Public"
    },
    {
      title: "ProyectoRanchel",
      desc: "Sistema de escritorio para un minisuper. Gestiona entrada y salida de productos, punto de venta y administración general.",
      tech: "C#",
      color: "bg-purple-500",
      visibility: "Public"
    },
    {
      title: "PrismaProyecto",
      desc: "Sistema empresarial de automatización para la gestión de seguros obligatorios.",
      tech: "C#",
      color: "bg-purple-500",
      visibility: "Private"
    }
  ];

  return (
    <div className="animate-fade-in max-w-6xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Título Responsive */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-2 sm:gap-3 drop-shadow-md">
        <FolderGit2 className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" /> Proyectos Destacados
      </h2>
      
      {/* Cuadrícula adaptativa: 1 col celular, 2 col tablet, 3 col PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {repos.map((repo, idx) => (
          <div key={idx} className="bg-[#0d1117]/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between h-full group">
            <div>
              {/* Flex-col en celulares para evitar choque de textos, flex-row en tablets/PC */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2 mb-4">
                
                {/* Enlace dinámico con truncado en móviles si es muy largo */}
                <a 
                  href={repo.visibility === 'Public' ? `https://github.com/ronniestark/${repo.title}` : '#'} 
                  target={repo.visibility === 'Public' ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className={`font-semibold text-base sm:text-lg flex items-center gap-2 transition-colors ${repo.visibility === 'Public' ? 'text-blue-400 hover:underline' : 'text-slate-300 cursor-default'}`}
                  title={repo.visibility === 'Private' ? "Repositorio Privado" : "Ver en GitHub"}
                >
                  {repo.visibility === 'Public' ? <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : <Lock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-slate-500"/>}
                  <span className="truncate max-w-[220px] sm:max-w-none">{repo.title}</span>
                </a>

                {/* Etiquetas (Badges) escalables */}
                <span className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border font-medium tracking-wide w-fit ${
                  repo.visibility === 'Public' 
                    ? 'border-slate-600 text-slate-300 bg-slate-800/50' 
                    : 'border-red-900/50 text-red-400 bg-red-950/30'
                }`}>
                  {repo.visibility === 'Public' ? 'Público' : 'Privado'}
                </span>
              </div>
              
              {/* Descripción */}
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {repo.desc}
              </p>
            </div>
            
            {/* Etiqueta de Tecnología */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-medium bg-slate-900/50 w-fit px-3 py-1.5 rounded-lg border border-slate-800">
              <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shadow-sm ${repo.color}`}></span>
              {repo.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;