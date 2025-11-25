// src/types.d.ts
import '@mui/material/styles';
import '@mui/material/Typography';
import '@mui/material/Button';
import React from 'react';




interface CustomShape {
  sm: string; md: string; lg: string; pill: string;
}
interface CustomSpacing {
  min: string; sm: string; base: string; md: string; lg: string; xl: string; xxl: string;
}
interface CustomAnimations {
  duration: { standard: number; complex: number };
  easing: { smart: string; backOut: string };
}
interface CustomTransitions {
  smooth: string; bounce: string;
}
interface CustomShadows {
  sm: string; md: string; lg: string;
}

// 2. AUGMENTATION
declare module '@mui/material/styles' {
  
  // Colores
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

  // Variables Globales
  interface Theme {
    customShape: CustomShape;
    customSpacing: CustomSpacing;
    customTransitions: CustomTransitions;
    effectShadows: CustomShadows; 
  }
  interface ThemeOptions {
    customShape?: CustomShape;
    customSpacing?: CustomSpacing;
    customTransitions?: CustomTransitions;
    effectShadows?: CustomShadows;
  }

  // Tipografía
  interface TypographyVariants {
    h1XxlBold: React.CSSProperties;
    h1XlBold: React.CSSProperties;
    h1LgBold: React.CSSProperties;
    h1Bold: React.CSSProperties;
    h2XxlSemibold: React.CSSProperties;
    h2XxlMedium: React.CSSProperties;
    h2LgMedium: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h3XxlSemibold: React.CSSProperties;
    h3XlRegular: React.CSSProperties;
    h3XlSemibold: React.CSSProperties;
    h3XlMedium: React.CSSProperties;
    h3LgSemibold: React.CSSProperties;
    h3Medium: React.CSSProperties;
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

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    cta: true;
    green: true;
    brown: true;
    link: true;
  }
}