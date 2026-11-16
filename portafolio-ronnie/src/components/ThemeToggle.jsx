import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = theme === 'dark' ? t.tema.claro : t.tema.oscuro;

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex-shrink-0 flex items-center justify-center p-2 rounded-full text-cyan-400 border border-cyan-500/30 bg-slate-800/50 hover:bg-slate-800 hover:text-cyan-300 transition-all duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      ) : (
        <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
