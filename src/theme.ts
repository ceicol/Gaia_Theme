import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';

// --- 1. TYPESCRIPT AUGMENTATION ---
// Esto habilita el autocompletado mágico para "glass", "tertiary", etc.
declare module '@mui/material/styles' {
  
  // A. Permitimos propiedades extra dentro de cada color (ej: primary.glass)
  interface PaletteColor {
    glass?: string;
    button?: string;
  }
  interface SimplePaletteColorOptions {
    glass?: string;
    button?: string;
  }

  // B. Definimos los nuevos colores en la Paleta Global
  interface Palette {
    tertiary: PaletteColor;
    cta: PaletteColor;
    green: PaletteColor; // Para el 'green'
    brown: PaletteColor;  // Para el 'brown'
    link: PaletteColor;   // Para el 'blue'
  }
  interface PaletteOptions {
    tertiary?: SimplePaletteColorOptions;
    cta?: SimplePaletteColorOptions;
    green?: SimplePaletteColorOptions;
    brown?: SimplePaletteColorOptions;
    link?: SimplePaletteColorOptions;
  }

  // C. Definimos variables globales del tema (Spacing, Shape, etc)
  interface Theme {
    customShape: typeof borderRadius;
    customSpacing: typeof spacingConstants;
    customTransitions: typeof transitionStyles;
    effectShadows: typeof shadows; 
  }
  interface ThemeOptions {
    customShape?: typeof borderRadius;
    customSpacing?: typeof spacingConstants;
    customTransitions?: typeof transitionStyles;
    effectShadows?: typeof shadows;
  }
}

// Para que el Button acepte color="tertiary", "green", etc.
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    cta: true;
    green: true;
    brown: true;
    link: true;
  }
}

// --- 2. CREACIÓN DEL TEMA ---
let theme = createTheme({
  palette: {
    // Colores Principales (Semánticos)
    primary: { 
      main: brandColors.amazonia.main, 
      light: brandColors.amazonia.light,
      glass: brandColors.amazonia.glass 
    },
    secondary: { 
      main: brandColors.panamazonia.main,
      light: brandColors.panamazonia.light,
      glass: brandColors.panamazonia.glass
    },
    
    // Colores Custom (Extendidos)
    tertiary: { 
      main: brandColors.jaguares.main,
      light: brandColors.jaguares.light,
      glass: brandColors.jaguares.glass
    },

    cta: { 
      main: brandColors.gold.main,
      light: brandColors.gold.light 
    },

    green: { // Mapeado desde 'green'
      main: brandColors.green.main,
      light: brandColors.green.light,
      glass: brandColors.green.glass,
      button: brandColors.green.button
    },
    brown: { // Mapeado desde 'brown'
      main: brandColors.brown.main,
      light: brandColors.brown.light,
      glass: brandColors.brown.glass
    },
    link: { // Mapeado desde 'blue'
      main: brandColors.blue.main 
    },

    // Textos y Fondos
    text: {
      primary: brandColors.text.dark,
      secondary: brandColors.text.light, // Usado en fondos oscuros
    },
    background: {
      default: brandColors.background.main, 
      paper: brandColors.background.light,  
    },
  },

  typography: typography as any,
  
    shadows: Array(25).fill('none').map((_, i) => customShadowsArray[i] || 'none') as any,

  // Tokens Custom
  customShape: borderRadius,
  customSpacing: spacingConstants,
  customTransitions: transitionStyles,
  effectShadows: shadows,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: transitionStyles.bounce,
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;