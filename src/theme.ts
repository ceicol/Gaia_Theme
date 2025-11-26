import { createTheme, responsiveFontSizes, } from '@mui/material/styles';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';



// ==========================================================
//  CREACIÓN DEL TEMA
// ==========================================================

let theme = createTheme({
  palette: {
    // Semánticos
    primary: { 
      main: brandColors.primary.main, 
      light: brandColors.primary.light,
      glass: brandColors.primary.glass 
    },
    secondary: { 
      main: brandColors.secondary.main,
      light: brandColors.secondary.light,
      glass: brandColors.secondary.glass
    },
    // Custom
    tertiary: { 
      main: brandColors.tertiary.main,
      light: brandColors.tertiary.light,
      glass: brandColors.tertiary.glass
    },
    cta: { 
      main: brandColors.cta.main,
      light: brandColors.cta.light 
    },
    green: {
      main: brandColors.green.main,
      light: brandColors.green.light,
      glass: brandColors.green.glass,
      button: brandColors.green.button
    },
    brown: {
      main: brandColors.brown.main,
      light: brandColors.brown.light,
      glass: brandColors.brown.glass
    },
    link: {
      main: brandColors.blue.main 
    },
    // Bases
    text: {
      primary: brandColors.text.dark,
      secondary: brandColors.text.light,
    },
    background: {
      default: brandColors.background.main, 
      paper: brandColors.background.light,  
    },
  },

  // Importamos la tipografía generada (con clamp y helpers)
  typography: typography as any,
  
  // Sombras nativas de MUI (array)
  shadows: Array(25).fill('none').map((_, i) => customShadowsArray[i] || 'none') as any,

  // Tokens Custom inyectados para acceso rápido via theme.token
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
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '18px',
          fontFamily: "'Barlow Condensed', sans-serif",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // Aseguramos que el HTML/Body tome la fuente base
        body: {
          fontFamily: "'Raleway', sans-serif",
        }
      }
    }
  },
});

// Hacemos responsive solo las variantes estándar h1-h6 (las custom ya tienen fluid typography)
theme = responsiveFontSizes(theme);

export default theme;