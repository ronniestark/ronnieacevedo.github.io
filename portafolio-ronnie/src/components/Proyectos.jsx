import React from 'react';
import { GitBranch } from 'lucide-react';

const Proyectos = () => {
  const repos = [
    {
      title: "Proyecto Rancho",
      desc: "Sistema de administración de compra y ventas.",
      tech: "C#",
      color: "bg-purple-500"
    },
    {
      title: "Plantilla_Bodega",
      desc: "Plantilla Bodega con React y un poco de Next.js.",
      tech: "JavaScript",
      color: "bg-yellow-400"
    },
    {
      title: "Curso Angular",
      desc: "Práctica de un curso de YouTube de Angular.",
      tech: "TypeScript",
      color: "bg-blue-400"
    },
    {
      title: "práctica-web-api-1",
      desc: "Desarrollo y estructuración de API REST.",
      tech: "C#",
      color: "bg-purple-500"
    },
    {
      title: "PrácticasProgramacionC-",
      desc: "Este repositorio contiene códigos básicos que simplemente son para practicar.",
      tech: "C#",
      color: "bg-purple-500"
    },
    {
      title: "ronnieacevedo.github.io",
      desc: "Presentación de página web para LinkedIn.",
      tech: "HTML/CSS/JS",
      color: "bg-orange-400"
    }
  ];

  return (
    <div className="animate-fade-in max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Repositorios Populares</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {repos.map((repo, idx) => (
          <div key={idx} className="bg-[#0d1117]/80 backdrop-blur-md rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <a href={`https://github.com/ronniestark/${repo.title}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold text-lg hover:underline flex items-center gap-2">
                  <GitBranch size={16} />
                  {repo.title}
                </a>
                <span className="text-xs px-2 py-1 rounded-full border border-slate-600 text-slate-400 bg-slate-800/50">Público</span>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
                {repo.desc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className={`w-3 h-3 rounded-full ${repo.color}`}></span>
              {repo.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;