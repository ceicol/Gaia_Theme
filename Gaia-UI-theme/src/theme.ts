import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { animations, transitionStyles } from './tokens/animations';

// --- 1. TYPESCRIPT AUGMENTATION (Necesario para IntelliSense) ---
declare module '@mui/material/styles' {
  // Agregamos 'tertiary' a la paleta
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
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
    tertiary: { main: brandColors.jaguares.main }, // Ahora TS lo permite
    text: {
      primary: brandColors.neutral.textDark,
      secondary: brandColors.neutral.textLight,
    },
    background: {
      default: brandColors.neutral.bgDefault,
      paper: brandColors.neutral.bgPaper,
    },
  },
  typography: typography as any,
  shadows: Array(25).fill('none').map((_, i) => customShadows[i] || 'none') as any,
  
  // Configuración de bordes base de MUI
  shape: {
    borderRadius: borderRadius.md, // Por defecto 12px
  },

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
    // Ejemplo: Tarjetas con el borde grande
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg, // 24px
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;