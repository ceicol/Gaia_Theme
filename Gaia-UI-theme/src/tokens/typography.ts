import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

// Definimos las fuentes constantes para evitar errores de dedo
const FONT_HEADER = "'Barlow Condensed', sans-serif";
const FONT_BODY = "'Raleway', sans-serif";

export const typography: TypographyStyleOptions = {
  fontFamily: FONT_BODY, // Fuente por defecto para todo
  h1: {
    fontFamily: FONT_HEADER,
    fontWeight: 700,
    fontSize: '4rem', // Figma: titulo h1 xxl (64px)
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: FONT_HEADER,
    fontWeight: 600,
    fontSize: '3.25rem', // Figma: titulo h1 xl (52px)
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: FONT_HEADER,
    fontWeight: 600,
    fontSize: '2.25rem', // Figma: titulos h2 (36px)
  },
  h4: {
    fontFamily: FONT_HEADER,
    fontWeight: 500,
    fontSize: '2rem', // Figma: titulos h2 regular (32px)
  },
  h5: {
    fontFamily: FONT_BODY, // Figma: subtitulo (28px)
    fontWeight: 600,
    fontSize: '1.75rem', 
  },
  h6: {
    fontFamily: FONT_BODY, 
    fontWeight: 600,
    fontSize: '1.5rem', 
  },
  subtitle1: {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: '1.125rem', // Figma: subtitulo semibold
    lineHeight: 1.5,
  },
  subtitle2: {
    fontFamily: FONT_BODY,
    fontWeight: 500,
    fontSize: '1rem', // Variantes menores de subtítulos
  },
  body1: {
    fontFamily: FONT_BODY,
    fontSize: '1.5rem', // Figma: texto grande (24px) - Usado para párrafos destacados
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: FONT_BODY,
    fontSize: '1.125rem', // Figma: texto mediano (18px) - El estándar de lectura
    lineHeight: 1.6,
  },
  caption: {
    fontFamily: FONT_BODY,
    fontSize: '1rem', // Figma: text pequeño (16px)
    lineHeight: 1.4,
  },
  overline: {
    fontFamily: FONT_BODY,
    fontSize: '0.875rem', // Figma: microcopy (14px)
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: 700,
  },
  button: {
    fontFamily: FONT_HEADER, // Botones con Barlow suelen verse mejor
    fontWeight: 600,
    textTransform: 'none', // Evita que todo sea mayúscula por defecto
  },
};