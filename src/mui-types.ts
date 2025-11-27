import '@mui/material/styles';
import '@mui/material/Typography';
import '@mui/material/Button';
import React from 'react';

// Importamos los objetos reales para obtener sus tipos
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';
import { shadows } from './tokens/shadows';

// --- DEFINICIÓN DE TIPOS ---

declare module '@mui/material/styles' {

   interface SimplePaletteColorOptions {
    glass?: string;
    button?: string;
  }
  
  // Esto permite usar theme.palette.primary.glass 
  interface PaletteColor {
    glass?: string;
    button?: string;
  }

  // 1. AGREGAR NUEVOS COLORES A LA PALETA
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

  // 2. VARIABLES GLOBALES
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

  // 3. TIPOGRAFÍA (Todas tus variantes)
  interface TypographyVariants {
    h1xxlBold: React.CSSProperties;
    h1xlBold: React.CSSProperties;
    h1lgBold: React.CSSProperties;
    h1Bold: React.CSSProperties;
    h2xxlSemibold: React.CSSProperties;
    h2xxlMedium: React.CSSProperties;
    h2lgMedium: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h3xxlSemibold: React.CSSProperties;
    h3xlRegular: React.CSSProperties;
    h3xlSemibold: React.CSSProperties;
    h3xlMedium: React.CSSProperties;
    h3lgSemibold: React.CSSProperties;
    h3Medium: React.CSSProperties;
    bodyxxlRegular: React.CSSProperties;
    bodyxxlRegularSpacing: React.CSSProperties;
    bodyxxlSemiboldSpacing: React.CSSProperties;
    bodyxlBoldSpacing: React.CSSProperties;
    bodyxlSemibold: React.CSSProperties;
    bodyxlMedium: React.CSSProperties;
    bodyxlMediumSpacing: React.CSSProperties;
    bodyxlRegular: React.CSSProperties;
    bodylgMedium: React.CSSProperties;
    bodylgRegular: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    bodyRegularSpacing: React.CSSProperties;
    bodyMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1xxlBold?: React.CSSProperties;
    h1xlBold?: React.CSSProperties;
    h1lgBold?: React.CSSProperties;
    h1Bold?: React.CSSProperties;
    h2xxlSemibold?: React.CSSProperties;
    h2xxlMedium?: React.CSSProperties;
    h2lgMedium?: React.CSSProperties;
    h2Bold?: React.CSSProperties;
    h3xxlSemibold?: React.CSSProperties;
    h3xlRegular?: React.CSSProperties;
    h3xlSemibold?: React.CSSProperties;
    h3xlMedium?: React.CSSProperties;
    h3lgSemibold?: React.CSSProperties;
    h3Medium?: React.CSSProperties;
    bodyxxlRegular?: React.CSSProperties;
    bodyxxlRegularSpacing?: React.CSSProperties;
    bodyxxlSemiboldSpacing?: React.CSSProperties;
    bodyxlBoldSpacing?: React.CSSProperties;
    bodyxlSemibold?: React.CSSProperties;
    bodyxlMedium?: React.CSSProperties;
    bodyxlMediumSpacing?: React.CSSProperties;
    bodyxlRegular?: React.CSSProperties;
    bodylgMedium?: React.CSSProperties;
    bodylgRegular?: React.CSSProperties;
    bodyRegular?: React.CSSProperties;
    bodyRegularSpacing?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
  }
}

// 4. COMPONENTES
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1xxlBold: true;
    h1xlBold: true;
    h1lgBold: true;
    h1Bold: true;
    h2xxlSemibold: true;
    h2xxlMedium: true;
    h2lgMedium: true;
    h2Bold: true;
    h3xxlSemibold: true;
    h3xlRegular: true;
    h3xlSemibold: true;
    h3xlMedium: true;
    h3lgSemibold: true;
    h3Medium: true;
    bodyxxlRegular: true;
    bodyxxlRegularSpacing: true;
    bodyxxlSemiboldSpacing: true;
    bodyxlBoldSpacing: true;
    bodyxlSemibold: true;
    bodyxlMedium: true;
    bodyxlMediumSpacing: true;
    bodyxlRegular: true;
    bodylgMedium: true;
    bodylgRegular: true;
    bodyRegular: true;
    bodyRegularSpacing: true;
    bodyMedium: true;
  }

  interface TypographyPropsColorOverrides {
    tertiary: true;
    cta: true;
    green: true;
    brown: true;
    link: true;
    
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    cta: true;
    green: true;
    brown: true;
    link: true;
  }
}


export {};