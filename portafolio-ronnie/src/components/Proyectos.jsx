import React from 'react';
import { GitBranch, Lock } from 'lucide-react';

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
    <div className="animate-fade-in max-w-6xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Proyectos Destacados</h2>
      
      {/* Cuadrícula ajustada a 3 columnas para que los 3 proyectos queden en una sola fila */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, idx) => (
          <div key={idx} className="bg-[#0d1117]/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center justify-between mb-4">
                
                {/* Lógica para deshabilitar el enlace si el repo es Privado */}
                <a 
                  href={repo.visibility === 'Public' ? `https://github.com/ronniestark/${repo.title}` : '#'} 
                  target={repo.visibility === 'Public' ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className={`font-semibold text-lg flex items-center gap-2 transition-colors ${repo.visibility === 'Public' ? 'text-blue-400 hover:underline' : 'text-slate-300 cursor-default'}`}
                  title={repo.visibility === 'Private' ? "Repositorio Privado" : "Ver en GitHub"}
                >
                  {repo.visibility === 'Public' ? <GitBranch size={18} /> : <Lock size={16} className="text-slate-500"/>}
                  {repo.title}
                </a>

                {/* Etiquetas (Badges) dinámicas para Público / Privado */}
                <span className={`text-xs px-3 py-1 rounded-full border font-medium tracking-wide ${
                  repo.visibility === 'Public' 
                    ? 'border-slate-600 text-slate-300 bg-slate-800/50' 
                    : 'border-red-900/50 text-red-400 bg-red-950/30'
                }`}>
                  {repo.visibility === 'Public' ? 'Público' : 'Privado'}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {repo.desc}
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium bg-slate-900/50 w-fit px-3 py-1.5 rounded-lg border border-slate-800">
              <span className={`w-2.5 h-2.5 rounded-full shadow-sm ${repo.color}`}></span>
              {repo.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;