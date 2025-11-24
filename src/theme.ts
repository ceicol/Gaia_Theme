import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';

// --- 1. TYPESCRIPT AUGMENTATION (Necesario para IntelliSense) ---
declare module '@mui/material/styles' {
  // Agregamos 'tertiary' a la paleta
  interface Palette {
    tertiary: Palette['primary'];
    cta: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    cta?: PaletteOptions['primary'];
  }
  
  // Agregamos tus variables de borde y animaciones al objeto Theme
  interface Theme {
    customShape: typeof borderRadius;
    customSpacing: typeof spacingConstants;
    customTransitions: typeof transitionStyles;
  }
  // Permitimos configurarlas en createTheme
  interface ThemeOptions {
    customShape?: typeof borderRadius;
    customSpacing?: typeof spacingConstants;
    customTransitions?: typeof transitionStyles;
  }
}

// --- 2. CREACIÓN DEL TEMA ---
let theme = createTheme({
  palette: {
    primary: { main: brandColors.amazonia.main, light: brandColors.amazonia.light },
    secondary: { main: brandColors.panamazonia.main },
    tertiary: { main: brandColors.jaguares.main }, 
    cta: { main: brandColors.gold.main },
    text: {
      primary: brandColors.text.dark,
      secondary: brandColors.text.light,
    },
    background: {
      default: brandColors.background.main,
      paper: brandColors.background.glass,
      
    },
  },
  typography: typography as any,
  shadows: Array(25).fill('none').map((_, i) => customShadows[i] || 'none') as any,


  // Inyectamos nuestros tokens customizados para acceso rápido
  customShape: borderRadius,
  customSpacing: spacingConstants,
  customTransitions: transitionStyles,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md, // 12px
          transition: transitionStyles.bounce, // Tu animación con rebote
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`, // 8px 24px
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;