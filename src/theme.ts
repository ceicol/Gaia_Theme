import { createTheme, responsiveFontSizes, } from '@mui/material/styles';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';

// ==========================================================
// 1. TYPESCRIPT AUGMENTATION (Extensión de Tipos)
// ==========================================================

declare module '@mui/material/styles' {
  
  // --- A. COLORES EXTENDIDOS ---
  interface PaletteColor {
    glass?: string;
    button?: string;
  }
  interface SimplePaletteColorOptions {
    glass?: string;
    button?: string;
  }

  interface Palette {
    tertiary: PaletteColor;
    cta: PaletteColor;
    green: PaletteColor;
    brown: PaletteColor;
    link: PaletteColor;
  }
  interface PaletteOptions {
    tertiary?: SimplePaletteColorOptions;
    cta?: SimplePaletteColorOptions;
    green?: SimplePaletteColorOptions;
    brown?: SimplePaletteColorOptions;
    link?: SimplePaletteColorOptions;
  }

  // --- B. VARIABLES GLOBALES DEL TEMA ---
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

  // --- C. TIPOGRAFÍA CUSTOM---
  interface TypographyVariants {
    // H1
    h1XxlBold: React.CSSProperties;
    h1XlBold: React.CSSProperties;
    h1LgBold: React.CSSProperties;
    h1Bold: React.CSSProperties;
    // H2
    h2XxlSemibold: React.CSSProperties;
    h2XxlMedium: React.CSSProperties;
    h2LgMedium: React.CSSProperties;
    h2Bold: React.CSSProperties;
    // H3
    h3XxlSemibold: React.CSSProperties;
    h3XlRegular: React.CSSProperties;
    h3XlSemibold: React.CSSProperties;
    h3XlMedium: React.CSSProperties;
    h3LgSemibold: React.CSSProperties;
    h3Medium: React.CSSProperties;
    // Body
    bodyXxlRegular: React.CSSProperties;
    bodyXxlRegularSpacing: React.CSSProperties;
    bodyXxlSemiboldSpacing: React.CSSProperties;
    bodyXlBoldSpacing: React.CSSProperties;
    bodyXlBold: React.CSSProperties;
    bodyXlMedium: React.CSSProperties;
    bodyXlMediumSpacing: React.CSSProperties;
    bodyXlRegular: React.CSSProperties;
    bodyLgMedium: React.CSSProperties;
    bodyLgRegular: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    bodyRegularSpacing: React.CSSProperties;
    bodyMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1XxlBold?: React.CSSProperties;
    h1XlBold?: React.CSSProperties;
    h1LgBold?: React.CSSProperties;
    h1Bold?: React.CSSProperties;
    h2XxlSemibold?: React.CSSProperties;
    h2XxlMedium?: React.CSSProperties;
    h2LgMedium?: React.CSSProperties;
    h2Bold?: React.CSSProperties;
    h3XxlSemibold?: React.CSSProperties;
    h3XlRegular?: React.CSSProperties;
    h3XlSemibold?: React.CSSProperties;
    h3XlMedium?: React.CSSProperties;
    h3LgSemibold?: React.CSSProperties;
    h3Medium?: React.CSSProperties;
    bodyXxlRegular?: React.CSSProperties;
    bodyXxlRegularSpacing?: React.CSSProperties;
    bodyXxlSemiboldSpacing?: React.CSSProperties;
    bodyXlBoldSpacing?: React.CSSProperties;
    bodyXlBold?: React.CSSProperties;
    bodyXlMedium?: React.CSSProperties;
    bodyXlMediumSpacing?: React.CSSProperties;
    bodyXlRegular?: React.CSSProperties;
    bodyLgMedium?: React.CSSProperties;
    bodyLgRegular?: React.CSSProperties;
    bodyRegular?: React.CSSProperties;
    bodyRegularSpacing?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
  }
}

// --- D. OVERRIDES EN COMPONENTES ---

// Habilitar las variantes de texto en el componente <Typography variant="...">
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1XxlBold: true;
    h1XlBold: true;
    h1LgBold: true;
    h1Bold: true;
    h2XxlSemibold: true;
    h2XxlMedium: true;
    h2LgMedium: true;
    h2Bold: true;
    h3XxlSemibold: true;
    h3XlRegular: true;
    h3XlSemibold: true;
    h3XlMedium: true;
    h3LgSemibold: true;
    h3Medium: true;
    bodyXxlRegular: true;
    bodyXxlRegularSpacing: true;
    bodyXxlSemiboldSpacing: true;
    bodyXlBoldSpacing: true;
    bodyXlBold: true;
    bodyXlMedium: true;
    bodyXlMediumSpacing: true;
    bodyXlRegular: true;
    bodyLgMedium: true;
    bodyLgRegular: true;
    bodyRegular: true;
    bodyRegularSpacing: true;
    bodyMedium: true;
  }
}

// Habilitar los colores en <Button color="...">
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    cta: true;
    green: true;
    brown: true;
    link: true;
  }
}

// ==========================================================
// 2. CREACIÓN DEL TEMA
// ==========================================================

let theme = createTheme({
  palette: {
    // Semánticos
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
    // Custom
    tertiary: { 
      main: brandColors.jaguares.main,
      light: brandColors.jaguares.light,
      glass: brandColors.jaguares.glass
    },
    cta: { 
      main: brandColors.gold.main,
      light: brandColors.gold.light 
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