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
      title: "EmailClassifierAPI",
      desc: "API RESTful integrada con Google Cloud y entrenada con ML.NET para la sincronización, análisis y clasificación predictiva de bandejas de correo.",
      tech: "C#",
      color: "bg-purple-500",
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
      desc: "Sistema empresarial diseñado para automatizar alertas de vencimiento, optimizar la administración de pólizas y agilizar la gestión de seguros obligatorios.",
      tech: "C#",
      color: "bg-purple-500",
      visibility: "Private"
    },
    {
      title: "TiendaImpresion3D",
      desc: "Arquitectura backend desarrollada para soportar la lógica de negocio, catálogo de piezas y procesamiento de órdenes de una plataforma de impresión 3D.",
      tech: "C#",
      color: "bg-purple-500",
      visibility: "Public"
    },
    {
      title: "tienda-3d",
      desc: "Interfaz web moderna y optimizada en UX/UI para un modelo de negocio B2C enfocado en la venta de productos manufacturados en 3D.",
      tech: "SCSS",
      color: "bg-pink-500",
      visibility: "Public"
    },
    {
      title: "SistemaGim",
      desc: "Plataforma administrativa orientada a centros de acondicionamiento físico, diseñada para gestionar membresías, perfiles de clientes y facturación de manera eficiente.",
      tech: "C#",
      color: "bg-purple-500",
      visibility: "Public"
    }
  ];

  return (
    <div className="relative animate-fade-in max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      
      {/* Estilos inyectados para las animaciones */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 3.5s ease-in-out infinite;
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 7px rgba(56,189,248,0.8),
              0 0 15px rgba(56,189,248,0.6),
              0 0 30px rgba(56,189,248,0.4);
            color: #ffffff;
          }
          50% {
            text-shadow: 
              0 0 4px rgba(56,189,248,0.4),
              0 0 10px rgba(56,189,248,0.3),
              0 0 20px rgba(56,189,248,0.2);
            color: #e0f2fe;
          }
        }
        .neon-text {
          animation: neon-pulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Resplandor de fondo central para el contenedor */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10">
        
        {/* Título y Logo Animado */}
        <div className="flex flex-col items-center justify-center mb-12 mt-4 text-center">
          <div className="animate-float-slow bg-blue-500/10 p-3.5 rounded-2xl mb-5 border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <FolderGit2 className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="neon-text text-3xl sm:text-4xl md:text-5xl font-extrabold pb-3 tracking-wide">
            Proyectos Destacados
          </h2>
        </div>
        
        {/* Cuadrícula adaptativa de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {repos.map((repo, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Efecto de barrido de luz (Sweep) en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-2 mb-5">
                  
                  {/* Título como Enlace */}
                  <a 
                    href={repo.visibility === 'Public' ? `https://github.com/ronniestark/${repo.title}` : '#'} 
                    target={repo.visibility === 'Public' ? "_blank" : "_self"} 
                    rel="noopener noreferrer" 
                    className={`font-bold text-lg flex items-start gap-2.5 transition-all ${repo.visibility === 'Public' ? 'text-slate-100 hover:text-blue-400' : 'text-slate-300 cursor-default'}`}
                    title={repo.visibility === 'Private' ? "Repositorio Privado" : "Ver en GitHub"}
                  >
                    <div className={`p-1.5 rounded-lg mt-0.5 transition-colors ${repo.visibility === 'Public' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-slate-800 text-slate-500'}`}>
                      {repo.visibility === 'Public' ? <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" /> : <Lock className="w-4 h-4 sm:w-5 sm:h-5"/>}
                    </div>
                    <span className="truncate max-w-[200px] sm:max-w-none leading-tight pt-1 group-hover:translate-x-0.5 transition-transform">{repo.title}</span>
                  </a>

                  {/* Badge Público/Privado */}
                  <span className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-full border font-semibold tracking-wide w-fit flex-shrink-0 mt-1 sm:mt-0 ${
                    repo.visibility === 'Public' 
                      ? 'border-blue-500/30 text-blue-300 bg-blue-500/10' 
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
              
              {/* Etiqueta de Tecnología Inferior */}
              <div className="relative z-10 flex items-center gap-2.5 text-[11px] sm:text-xs text-slate-300 font-semibold bg-slate-950/50 w-fit px-3 py-1.5 rounded-lg border border-slate-700/60 group-hover:border-slate-500 transition-colors">
                <span className={`w-2.5 h-2.5 rounded-full shadow-sm ${repo.color} group-hover:animate-pulse`}></span>
                {repo.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;