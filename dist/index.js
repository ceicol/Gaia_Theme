"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AppTheme: () => theme_default,
  animations: () => animations,
  borderRadius: () => borderRadius,
  brandColors: () => brandColors,
  glassEffect: () => glassEffect,
  shadows: () => shadows,
  spacingConstants: () => spacingConstants,
  transitionStyles: () => transitionStyles
});
module.exports = __toCommonJS(index_exports);

// src/mui-types.ts
var import_styles = require("@mui/material/styles");
var import_Typography = require("@mui/material/Typography");
var import_Button = require("@mui/material/Button");

// src/theme.ts
var import_styles2 = require("@mui/material/styles");

// src/tokens/colors.ts
var brandColors = {
  amazonia: {
    main: "#314B46",
    // Reemplazar con hex real de "Escala-Amazonia"
    light: "#89CFB8",
    // "Escala-Amazonia-light"
    glass: "rgba(49, 75, 70, 0.6)"
  },
  panamazonia: {
    main: "#798842",
    // "Escala-Panamazonia"
    light: "#BED182",
    glass: "rgba(121, 136, 66, 0.6)"
  },
  jaguares: {
    main: "#44937A",
    // "Escala-Macroterritorio-jaguares"
    light: "#89CFB8",
    glass: "rgba(68, 147, 122, 0.6)"
  },
  gold: {
    main: "#CE8D2A",
    // "Cta" 
    light: "#F1C788"
  },
  green: {
    main: "#4D8748",
    light: "#6EB468",
    glass: "#A4D38E",
    button: "#357761"
  },
  blue: {
    main: "#005bb0"
    // links
  },
  brown: {
    main: "#392E29",
    light: "#6B5B4D",
    glass: "#B6A593"
  },
  text: {
    dark: "#392E29",
    light: "#FCF8F0"
  },
  background: {
    main: "#F8F5EE",
    // Background-solid
    light: "#F8F7F5"
    // Background-solid-ligth
  }
};

// src/utils/fluidTypography.ts
var fluid = (maxPx, minPx) => {
  const minSize = minPx || Math.round(maxPx * 0.7);
  const minWidth = 375;
  const maxWidth = 1440;
  const root = 16;
  const slope = (maxPx - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;
  const minRem = `${(minSize / root).toFixed(4)}rem`;
  const maxRem = `${(maxPx / root).toFixed(4)}rem`;
  const preferred = `${(yAxisIntersection / root).toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw`;
  return `clamp(${minRem}, ${preferred}, ${maxRem})`;
};

// src/tokens/typography.ts
var FONT_HEADER = "'Barlow Condensed', sans-serif";
var FONT_BODY = "'Raleway', sans-serif";
var WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};
var header = (weight, size, lineHeight = 1.2) => ({
  fontFamily: FONT_HEADER,
  fontWeight: weight,
  fontSize: fluid(size),
  // Aplica clamp automático
  lineHeight
});
var text = (weight, size, lineHeight) => ({
  fontFamily: FONT_BODY,
  fontWeight: weight,
  fontSize: size > 16 ? fluid(size) : `${size}px`,
  // Clamp solo si es > 16px, sino fijo
  lineHeight: lineHeight || 1.5
  // 1.5 es un buen "Auto" para lectura
});
var typography = {
  fontFamily: FONT_BODY,
  // ==========================================
  // HEADERS (H1 - H3)
  // ==========================================
  // H1 Group
  h1XxlBold: header(WEIGHTS.bold, 64, 1.1),
  h1XlBold: header(WEIGHTS.bold, 52),
  h1LgBold: header(WEIGHTS.bold, 40),
  h1Bold: header(WEIGHTS.bold, 36),
  // H2 Group (Aquí solucionamos tu problema de repetición)
  // Misma función, diferente peso.
  h2XxlSemibold: header(WEIGHTS.semibold, 32),
  h2XxlMedium: header(WEIGHTS.medium, 32),
  h2LgMedium: header(WEIGHTS.medium, 28),
  h2Bold: header(WEIGHTS.bold, 28),
  // H3 Group
  h3XxlSemibold: header(WEIGHTS.semibold, 28),
  h3XlRegular: header(WEIGHTS.regular, 24),
  h3XlSemibold: header(WEIGHTS.semibold, 24),
  h3XlMedium: header(WEIGHTS.medium, 24),
  h3LgSemibold: header(WEIGHTS.semibold, 20, "26px"),
  // Line-height específico
  h3Medium: header(WEIGHTS.medium, 18),
  // ==========================================
  // BODY (Texts)
  // ==========================================
  // XXL Group (24px)
  bodyXxlRegular: text(WEIGHTS.regular, 24),
  bodyXxlRegularSpacing: text(WEIGHTS.regular, 24, "38.2px"),
  // Line-height específico
  bodyXxlSemiboldSpacing: text(WEIGHTS.semibold, 24, "38.2px"),
  // XL Group (18px)
  bodyXlBoldSpacing: text(WEIGHTS.bold, 18, "28.1px"),
  bodyXlBold: text(WEIGHTS.bold, 18),
  bodyXlMedium: text(WEIGHTS.medium, 18),
  bodyXlMediumSpacing: text(WEIGHTS.medium, 18, "28.1px"),
  bodyXlRegular: text(WEIGHTS.regular, 18),
  // LG Group (16px)
  bodyLgMedium: text(WEIGHTS.medium, 16),
  bodyLgRegular: text(WEIGHTS.regular, 16),
  // Regular/Base Group (14px)
  bodyRegular: text(WEIGHTS.regular, 14),
  bodyRegularSpacing: text(WEIGHTS.regular, 14, "20.4px"),
  bodyMedium: text(WEIGHTS.medium, 14)
};

// src/tokens/shadows.ts
var glassEffect = {
  background: "rgba(248, 245, 238, 0.6)",
  backdropFilter: "blur(2px)",
  border: "1px solid rgba(255, 245, 238, 0.7)"
};
var customShadowsArray = [
  "none",
  "0px 8px 9px 0px rgba(0, 0, 0, 0.25)",
  // [1] -> sm
  "none",
  "none",
  "0px 12px 12px 0px rgba(0, 0, 0, 0.25)",
  // [4] -> md
  "none",
  "none",
  "none",
  "0px 18px 18px 0px rgba(0, 0, 0, 0.25)"
  // [8] -> lg
];
var shadows = {
  sm: customShadowsArray[1],
  md: customShadowsArray[4],
  lg: customShadowsArray[8]
};

// src/tokens/layout.ts
var borderRadius = {
  sm: "6px",
  md: "12px",
  lg: "24px",
  pill: "9999px"
};
var spacingConstants = {
  min: "8px",
  sm: "12px",
  base: "16px",
  md: "24px",
  lg: "48px",
  xl: "96px",
  xxl: "198px"
};

// src/tokens/animations.ts
var animations = {
  // Tiempos
  duration: {
    standard: 500,
    complex: 800
    // Figma: 800ms
  },
  // Curvas de aceleración
  easing: {
    // Curva "Smart Animate" suave (aproximación estándar)
    smart: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    // Curva con "retroceso" (backOut) para el efecto de rebote
    backOut: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  }
};
var transitionStyles = {
  smooth: `all ${animations.duration.complex}ms ${animations.easing.smart}`,
  bounce: `all ${animations.duration.standard}ms ${animations.easing.backOut}`
};

// src/theme.ts
var theme = (0, import_styles2.createTheme)({
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
      secondary: brandColors.text.light
    },
    background: {
      default: brandColors.background.main,
      paper: brandColors.background.light
    }
  },
  // Importamos la tipografía generada (con clamp y helpers)
  typography,
  // Sombras nativas de MUI (array)
  shadows: Array(25).fill("none").map((_, i) => customShadowsArray[i] || "none"),
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
          textTransform: "none",
          fontWeight: 500,
          fontSize: "18px",
          fontFamily: "'Barlow Condensed', sans-serif"
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        // Aseguramos que el HTML/Body tome la fuente base
        body: {
          fontFamily: "'Raleway', sans-serif"
        }
      }
    }
  }
});
theme = (0, import_styles2.responsiveFontSizes)(theme);
var theme_default = theme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppTheme,
  animations,
  borderRadius,
  brandColors,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles
});
