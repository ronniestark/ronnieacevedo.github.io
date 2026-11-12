import { Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-[0.8rem] sm:text-sm font-semibold text-cyan-400 border border-cyan-500/30 bg-slate-800/50 hover:bg-slate-800 hover:text-cyan-300 transition-all duration-300"
    >
      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;