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
  spacingConstants: () => spacingConstants,
  transitionStyles: () => transitionStyles
});
module.exports = __toCommonJS(index_exports);

// src/theme.ts
var import_styles = require("@mui/material/styles");

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

// src/tokens/typography.ts
var FONT_HEADER = "'Barlow Condensed', sans-serif";
var FONT_BODY = "'Raleway', sans-serif";
var typography = {
  fontFamily: FONT_BODY,
  // Fuente por defecto para todo
  h1: {
    fontFamily: FONT_HEADER,
    fontWeight: 700,
    fontSize: "4rem",
    // Figma: titulo h1 xxl (64px)
    lineHeight: 1.1
  },
  h2: {
    fontFamily: FONT_HEADER,
    fontWeight: 600,
    fontSize: "3.25rem",
    // Figma: titulo h1 xl (52px)
    lineHeight: 1.2
  },
  h3: {
    fontFamily: FONT_HEADER,
    fontWeight: 600,
    fontSize: "2.25rem"
    // Figma: titulos h2 (36px)
  },
  h4: {
    fontFamily: FONT_HEADER,
    fontWeight: 500,
    fontSize: "2rem"
    // Figma: titulos h2 regular (32px)
  },
  h5: {
    fontFamily: FONT_BODY,
    // Figma: subtitulo (28px)
    fontWeight: 600,
    fontSize: "1.75rem"
  },
  h6: {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: "1.5rem"
  },
  subtitle1: {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: "1.125rem",
    // Figma: subtitulo semibold
    lineHeight: 1.5
  },
  subtitle2: {
    fontFamily: FONT_BODY,
    fontWeight: 500,
    fontSize: "1rem"
    // Variantes menores de subtítulos
  },
  body1: {
    fontFamily: FONT_BODY,
    fontSize: "1.5rem",
    // Figma: texto grande (24px) - Usado para párrafos destacados
    lineHeight: 1.5
  },
  body2: {
    fontFamily: FONT_BODY,
    fontSize: "1.125rem",
    // Figma: texto mediano (18px) - El estándar de lectura
    lineHeight: 1.6
  },
  caption: {
    fontFamily: FONT_BODY,
    fontSize: "1rem",
    // Figma: text pequeño (16px)
    lineHeight: 1.4
  },
  overline: {
    fontFamily: FONT_BODY,
    fontSize: "0.875rem",
    // Figma: microcopy (14px)
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 700
  },
  button: {
    fontFamily: FONT_HEADER,
    // Botones con Barlow suelen verse mejor
    fontWeight: 600,
    textTransform: "none"
    // Evita que todo sea mayúscula por defecto
  }
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
var semanticShadows = {
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
    standard: 300,
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
var theme = (0, import_styles.createTheme)({
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
    green: {
      // Mapeado desde 'green'
      main: brandColors.green.main,
      light: brandColors.green.light,
      glass: brandColors.green.glass,
      button: brandColors.green.button
    },
    brown: {
      // Mapeado desde 'brown'
      main: brandColors.brown.main,
      light: brandColors.brown.light,
      glass: brandColors.brown.glass
    },
    link: {
      // Mapeado desde 'blue'
      main: brandColors.blue.main
    },
    // Textos y Fondos
    text: {
      primary: brandColors.text.dark,
      secondary: brandColors.text.light
      // Usado en fondos oscuros
    },
    background: {
      default: brandColors.background.main,
      paper: brandColors.background.light
    }
  },
  typography,
  shadows: Array(25).fill("none").map((_, i) => customShadowsArray[i] || "none"),
  // Tokens Custom
  customShape: borderRadius,
  customSpacing: spacingConstants,
  customTransitions: transitionStyles,
  effectShadows: semanticShadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: transitionStyles.bounce,
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`
        }
      }
    }
  }
});
theme = (0, import_styles.responsiveFontSizes)(theme);
var theme_default = theme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppTheme,
  animations,
  borderRadius,
  brandColors,
  glassEffect,
  spacingConstants,
  transitionStyles
});
