import React, { useState } from 'react';
import { 
  Terminal, Code2, Database, LayoutTemplate, Mail, 
  ChevronRight, Server, Layers, Smartphone, Home, 
  Lightbulb, Layout, Phone, GitBranch, BrainCircuit
} from 'lucide-react';

// Íconos SVG personalizados
const GithubLogo = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinLogo = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'ideologia', label: 'Mi Filosofía', icon: Lightbulb },
    { id: 'habilidades', label: 'Habilidades', icon: Code2 },
    { id: 'portafolio', label: 'Portafolio', icon: Layout },
    { id: 'contacto', label: 'Contacto', icon: Phone }
  ];

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

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return (
          <div className="animate-fade-in flex flex-col items-center justify-center space-y-6 text-center py-12">
            <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full p-1 shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Terminal size={48} className="text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight drop-shadow-sm pb-2 px-1">
            Ing. Ronnie Acevedo
            </h1>
            <h2 className="text-2xl text-blue-400 font-medium tracking-wide">
              Full Stack Developer | Aplicaciones Completas y Bases de Datos
            </h2>
            <p className="max-w-2xl text-slate-300 text-lg leading-relaxed">
              Con 4 años de experiencia, no me limito a escribir código; transformo reglas de negocio complejas en sistemas resilientes, escalables y de alto rendimiento.
            </p>
            <button 
              onClick={() => setActiveTab('portafolio')}
              className="mt-6 px-8 py-3 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-md text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 border border-blue-500/50"
            >
              Ver mis proyectos <ChevronRight size={20} />
            </button>
          </div>
        );

      case 'ideologia':
        return (
          <div className="animate-fade-in max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 drop-shadow-md">
              <Layers className="text-blue-400" /> Filosofía de Desarrollo
            </h2>
            <div className="grid gap-6">
              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Modelado Estratégico</h3>
                <p className="text-slate-300">Análisis profundo de los requerimientos y definición de las fronteras del negocio antes de abrir el IDE. La solución nace en el diseño, no en el teclado.</p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Domain-Driven Design (DDD)</h3>
                <p className="text-slate-300">Aislamiento estricto del núcleo de negocio. Diseño centrado en el dominio y uso de <i>Value Objects</i> para erradicar la obsesión por primitivos y garantizar la integridad de los datos.</p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Arquitectura Limpia y Evolutiva</h3>
                <p className="text-slate-300">Implementación de <i>Clean Architecture</i>, <i>Vertical Slices</i> y <i>CQRS</i> para construir sistemas con alta cohesión y bajo acoplamiento, preparados para el cambio.</p>
              </div>
            </div>
          </div>
        );

      case 'habilidades':
        return (
          <div className="animate-fade-in max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 drop-shadow-md">
              <Code2 className="text-blue-400" /> Ecosistema Tecnológico y Aptitudes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Server size={18} className="text-cyan-400" /> Backend & Arquitectura
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['C#', '.NET (Core/8/9)', 'Java', 'ASP.NET Core', 'EF Core', 'CQRS (MediatR)', 'DDD', 'REST API', 'Arquitectura Limpia'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <LayoutTemplate size={18} className="text-cyan-400" /> Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Angular', 'React', 'Vue.js', 'Quasar Framework', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Database size={18} className="text-cyan-400" /> Infraestructura & Datos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['SQL Server', 'PostgreSQL', 'SQLite', 'T-SQL', 'Docker', 'Sistemas Multi-Tenant', 'Linux (Fedora)'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BrainCircuit size={18} className="text-cyan-400" /> Aptitudes y Análisis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Análisis de Requerimientos', 'Traducción de Reglas de Negocio', 'Resolución de Problemas Complejos', 'Pensamiento Crítico', 'Diseño de Sistemas Resilientes', 'Mantenibilidad'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-600 rounded-full text-xs font-medium text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'portafolio':
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

      case 'contacto':
        return (
          <div className="animate-fade-in max-w-4xl mx-auto py-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-md">Iniciemos una conversación</h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto backdrop-blur-sm bg-slate-900/30 p-4 rounded-xl border border-slate-800/50">
              Abierto a conectar con profesionales de la industria, debatir sobre diseño de software y colaborar en retos tecnológicos que exijan soluciones robustas e innovadoras.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a 
                href="https://www.linkedin.com/in/ronnie-acevedo-a33625262" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0A66C2]/90 hover:bg-[#004182] backdrop-blur-md text-white rounded-xl font-medium transition-colors border border-[#0A66C2]/50 shadow-lg"
              >
                <LinkedinLogo size={24} /> LinkedIn
              </a>
              <a 
                href="https://github.com/ronniestark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md text-white rounded-xl font-medium border border-slate-600 transition-colors shadow-lg"
              >
                <GithubLogo size={24} /> GitHub
              </a>
              <a 
                href="mailto:ronniestark999@gmail.com" 
                className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-md text-white rounded-xl font-medium border border-blue-500/50 transition-colors shadow-lg"
              >
                <Mail size={24} /> ronniestark999@gmail.com
              </a>
              <a 
                href="tel:+50585098015" 
                className="flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600/80 hover:bg-emerald-500 backdrop-blur-md text-white rounded-xl font-medium border border-emerald-500/50 transition-colors shadow-lg"
              >
                <Smartphone size={24} /> +505 85098015
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      
      {/* Efecto de Fondo Translúcido (Glassmorphism Glow) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Contenido Principal con z-index superior para estar sobre el fondo */}
      <div className="relative z-10">
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

        <main className="max-w-6xl mx-auto px-6 py-12">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Portfolio;