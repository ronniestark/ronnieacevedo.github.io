import defaultColors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/*
 * Sistema de temas claro / oscuro
 * --------------------------------
 * Los componentes están diseñados en oscuro (bg-slate-900, text-blue-400, ...).
 * En lugar de añadir `dark:` a cada clase, ciertos tonos se leen desde
 * variables CSS que cambian según la clase `dark` en <html>:
 *
 *  - slate: la escala completa se invierte en tema claro
 *    (slate-950 = fondo casi blanco, slate-50 = texto casi negro).
 *  - colores de acento: los tonos 200/300/400 (pensados para leerse sobre
 *    fondo oscuro) se oscurecen en tema claro para mantener el contraste.
 *
 * Así las clases existentes siguen funcionando en ambos temas.
 */

const SLATE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const ACCENTS = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',
];

// En tema claro, cada tono claro de acento toma el valor de un tono más oscuro.
const ACCENT_LIGHT_MAP = { 200: 800, 300: 700, 400: 600 };

const toRgb = (hex) => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).join(' ');
};

const varColor = (name) => `rgb(var(--${name}) / <alpha-value>)`;

const colors = {
  slate: Object.fromEntries(SLATE_STEPS.map((s) => [s, varColor(`slate-${s}`)])),
};
for (const accent of ACCENTS) {
  colors[accent] = Object.fromEntries(
    Object.keys(ACCENT_LIGHT_MAP).map((s) => [s, varColor(`${accent}-${s}`)]),
  );
}

const lightVars = {};
const darkVars = {};
SLATE_STEPS.forEach((step, i) => {
  const inverted = SLATE_STEPS[SLATE_STEPS.length - 1 - i];
  lightVars[`--slate-${step}`] = toRgb(defaultColors.slate[inverted]);
  darkVars[`--slate-${step}`] = toRgb(defaultColors.slate[step]);
});
for (const accent of ACCENTS) {
  for (const [step, lightStep] of Object.entries(ACCENT_LIGHT_MAP)) {
    lightVars[`--${accent}-${step}`] = toRgb(defaultColors[accent][lightStep]);
    darkVars[`--${accent}-${step}`] = toRgb(defaultColors[accent][step]);
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': { ...lightVars, colorScheme: 'light' },
        ':root.dark': { ...darkVars, colorScheme: 'dark' },
      });
    }),
  ],
};
