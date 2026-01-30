import '../../mui-types'; 
import { ThemeOptions } from '@mui/material/styles'; 
import { fluid } from "../utils/fluidTypography";


// --- CONSTANTES ---
const FONT_HEADER = "'Barlow Condensed', sans-serif";
const FONT_BODY = "'Raleway', sans-serif";

const WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

// --- HELPER FUNCTIONS (Generadores) ---

/**
 * Genera estilo para Títulos (Barlow)
 * @param weight - Peso (400, 500, 600, 700)
 * @param size - Tamaño en px (se convertirá a clamp)
 * @param lineHeight - (Opcional) Altura de línea
 */
const headerH1 = (weight: number, size: number, lineHeight: number | string = 1.2) => ({
  fontFamily: FONT_HEADER,
  fontWeight: weight,
  fontSize: fluid(size, undefined, 4),
  lineHeight,
});

// Para H2/H3: mínimo +8px
const headerH2H3 = (weight: number, size: number, lineHeight: number | string = 1.2) => ({
  fontFamily: FONT_HEADER,
  fontWeight: weight,
  fontSize: fluid(size, undefined, 8),
  lineHeight,
});

/**
 * Genera estilo para Cuerpo (Raleway)
 * @param weight - Peso
 * @param size - Tamaño en px
 * @param lineHeight - (Opcional) 
 */
const text = (weight: number, size: number, lineHeight?: number | string) => ({
  fontFamily: FONT_BODY,
  fontWeight: weight,
  fontSize: size > 16 ? fluid(size) : `${size}px`, // Clamp solo si es > 16px, sino fijo
  lineHeight: lineHeight || 1.5, // 1.5 es un buen "Auto" para lectura
});


// --- DEFINICIÓN DE TOKENS ---

export const typography: ThemeOptions ['typography'] = {
  fontFamily: FONT_BODY,

  // ==========================================
  // HEADERS (H1 - H3)
  // ==========================================

  // H1 Group
  h1xxlBold: headerH1(WEIGHTS.bold, 64, 1.1),
  h1xlBold:  headerH1(WEIGHTS.bold, 52),
  h1lgBold:  headerH1(WEIGHTS.bold, 40),
  h1Bold:    headerH1(WEIGHTS.bold, 36),

  // H2 Group (Aquí solucionamos tu problema de repetición)
  // Misma función, diferente peso.
  h2xxlSemibold: headerH2H3(WEIGHTS.semibold, 32),
  h2xxlMedium:    headerH2H3(WEIGHTS.medium, 32), 
  h2lgMedium:    headerH2H3(WEIGHTS.medium, 28),
  h2Bold:        headerH2H3(WEIGHTS.bold, 28),   

  // H3 Group
  h3xxlSemibold: headerH2H3(WEIGHTS.semibold, 28),
  h3xlRegular:   headerH2H3(WEIGHTS.regular, 24),
  h3xlSemibold:  headerH2H3(WEIGHTS.semibold, 24), 
  h3xlMedium:    headerH2H3(WEIGHTS.medium, 24),   
  
  h3lgSemibold:  headerH2H3(WEIGHTS.semibold, 20, '26px'), // Line-height específico
  h3Medium:      headerH2H3(WEIGHTS.medium, 18),
  // ==========================================
  // BODY (Texts)
  // ==========================================

  // XXL Group (24px)
  bodyxxlRegular:         text(WEIGHTS.regular, 24),
  bodyxxlRegularSpacing:  text(WEIGHTS.regular, 24, '38.2px'), // Line-height específico
  bodyxxlSemiboldSpacing: text(WEIGHTS.semibold, 24, '38.2px'),

  // XL Group (18px)
  bodyxlBoldSpacing:      text(WEIGHTS.bold, 18, '28.1px'),
  bodyxlSemibold:         text(WEIGHTS.semibold, 18),
  bodyxlMedium:           text(WEIGHTS.medium, 18),
  bodyxlMediumSpacing:    text(WEIGHTS.medium, 18, '28.1px'),
  bodyxlRegular:          text(WEIGHTS.regular, 18),

  // LG Group (16px)
  bodylgMedium:           text(WEIGHTS.medium, 16),
  bodylgRegular:          text(WEIGHTS.regular, 16),

  // Regular/Base Group (14px)
  bodyRegular:            text(WEIGHTS.regular, 14),
  bodyRegularSpacing:     text(WEIGHTS.regular, 14, '20.4px'),
  bodyMedium:             text(WEIGHTS.medium, 14),
};