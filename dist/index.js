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
  tertiary: {
    main: "#314B46",
    light: "#89CFB8",
    glass: "rgba(49, 75, 70, 0.6)"
  },
  secondary: {
    main: "#798842",
    light: "#BED182",
    glass: "rgba(121, 136, 66, 0.6)"
  },
  primary: {
    main: "#44937A",
    light: "#89CFB8",
    glass: "rgba(68, 147, 122, 0.6)"
  },
  cta: {
    main: "#CE8D2A",
    light: "#F1C788"
  },
  green: {
    main: "#4D8748",
    light: "#6EB468",
    glass: "#A4D38E",
    button: "#357761"
  },
  link: {
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
    light: "#F8F7F5"
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
  h1xxlBold: header(WEIGHTS.bold, 64, 1.1),
  h1xlBold: header(WEIGHTS.bold, 52),
  h1lgBold: header(WEIGHTS.bold, 40),
  h1Bold: header(WEIGHTS.bold, 36),
  // H2 Group (Aquí solucionamos tu problema de repetición)
  // Misma función, diferente peso.
  h2xxlSemibold: header(WEIGHTS.semibold, 32),
  h2xxlMedium: header(WEIGHTS.medium, 32),
  h2lgMedium: header(WEIGHTS.medium, 28),
  h2Bold: header(WEIGHTS.bold, 28),
  // H3 Group
  h3xxlSemibold: header(WEIGHTS.semibold, 28),
  h3xlRegular: header(WEIGHTS.regular, 24),
  h3xlSemibold: header(WEIGHTS.semibold, 24),
  h3xlMedium: header(WEIGHTS.medium, 24),
  h3lgSemibold: header(WEIGHTS.semibold, 20, "26px"),
  // Line-height específico
  h3Medium: header(WEIGHTS.medium, 18),
  // ==========================================
  // BODY (Texts)
  // ==========================================
  // XXL Group (24px)
  bodyxxlRegular: text(WEIGHTS.regular, 24),
  bodyxxlRegularSpacing: text(WEIGHTS.regular, 24, "38.2px"),
  // Line-height específico
  bodyxxlSemiboldSpacing: text(WEIGHTS.semibold, 24, "38.2px"),
  // XL Group (18px)
  bodyxlBoldSpacing: text(WEIGHTS.bold, 18, "28.1px"),
  bodyxlSemibold: text(WEIGHTS.semibold, 18),
  bodyxlMedium: text(WEIGHTS.medium, 18),
  bodyxlMediumSpacing: text(WEIGHTS.medium, 18, "28.1px"),
  bodyxlRegular: text(WEIGHTS.regular, 18),
  // LG Group (16px)
  bodylgMedium: text(WEIGHTS.medium, 16),
  bodylgRegular: text(WEIGHTS.regular, 16),
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
var createMapButtonVariant = (variantName, config) => {
  return {
    props: { variant: variantName },
    style: {
      // --- BASE (Círculo) ---
      width: "50px",
      height: "50px",
      minWidth: "50px",
      borderRadius: borderRadius.pill,
      padding: spacingConstants.min,
      position: "relative",
      overflow: "visible",
      // Gradiente Radial 
      background: `radial-gradient(
        54.15% 54.15% at 46% 46%,
        ${config.gradient.center} 76.92%,
        ${config.gradient.edge} 100%
      )`,
      border: "1px solid transparent",
      boxShadow: "none",
      color: brandColors.text.light,
      "& .MuiSvgIcon-root, & svg": {
        color: "inherit",
        // Hereda el color del padre (brandColors.text.light)
        fill: "currentColor",
        // Asegura que el relleno use ese color
        width: "100%",
        // Opcional: Asegura que el icono llene el espacio si es necesario
        height: "100%"
      },
      // =========================================================
      // 1. DEFINICIÓN BASE DE LOS PSEUDO-ELEMENTOS (Invisible)
      // =========================================================
      "&::after": {
        content: "attr(data-label)",
        position: "absolute",
        left: "100%",
        marginLeft: "0",
        top: "0",
        width: "max-content",
        maxWidth: "160px",
        backgroundColor: config.hover.labelBg,
        color: brandColors.text.light,
        padding: "6px 12px",
        borderRadius: borderRadius.sm,
        borderBottomLeftRadius: 0,
        textWrap: "balance",
        overflowWrap: "break-word",
        textAlign: "start",
        pointerEvents: "none",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "18px",
        fontWeight: 400,
        boxShadow: shadows.sm,
        zIndex: 10,
        // ANIMACIÓN
        opacity: 0,
        transform: "translateY(-100%) translateX(-10px)",
        transition: `
          opacity ${animations.duration.standard}ms ${animations.easing.smart},
          transform ${animations.duration.standard}ms ${animations.easing.smart}
        `
      },
      "&::before": {
        content: '""',
        position: "absolute",
        left: "100%",
        marginLeft: "2px",
        top: "6px",
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderRight: `10px solid ${config.hover.labelBg}`,
        zIndex: 10,
        pointerEvents: "none",
        // ANIMACIÓN
        opacity: 0,
        transform: "translateY(-100%) translateX(-10px)",
        transition: `
          opacity ${animations.duration.standard}ms ${animations.easing.smart},
          transform ${animations.duration.standard}ms ${animations.easing.smart}
        `
      },
      // =========================================================
      // 2. ESTADO HOVER (Visible)
      // =========================================================
      "&:hover": {
        boxShadow: shadows.sm,
        background: `radial-gradient(
          54.15% 54.15% at 46% 46%,
          ${config.gradient.center} 76.92%,
          ${config.gradient.edge} 100%
        )`,
        border: "1px solid transparent",
        "&::after": {
          opacity: 1,
          transform: "translateY(-100%) translateX(0)"
        },
        "&::before": {
          opacity: 1,
          transform: "translateY(-100%) translateX(0)"
        }
      },
      // --- ACTIVE (Click / Selected) ---
      "&:active, &.Mui-active": {
        background: config.active.background,
        borderColor: config.active.border,
        boxShadow: "none",
        "&::after, &::before": {
          opacity: 0,
          transform: "translateY(-100%) translateX(-5px)"
        }
      }
    }
  };
};
var createSwitchVariant = (colorName, colors) => {
  return {
    props: { color: colorName },
    style: {
      // =================================================================
      // 1. ESTADO INACTIVO (OFF)
      // =================================================================
      "& .MuiSwitch-switchBase": {
        color: colors.thumbInactive,
        boxShadow: "none",
        // --- HOVER OFF ---
        "&:hover": {
          backgroundColor: "transparent",
          // ANIMACIÓN DE ANILLO (Thumb)
          "& .MuiSwitch-thumb": {
            backgroundColor: colors.main,
            // Se vuelve sólido
            // Inset: 3px de anillo + Sombra externa
            boxShadow: `inset 0 0 0 3px ${colors.ringColor}, 0px 2px 4px rgba(0, 0, 0, 0.25)`
          }
        }
      },
      "& .MuiSwitch-track": {
        backgroundColor: brandColors.background.main,
        border: `1px solid ${colors.main}`,
        opacity: 1,
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
      },
      // =================================================================
      // 2. ESTADO ACTIVO (ON)
      // =================================================================
      "& .MuiSwitch-switchBase.Mui-checked": {
        color: colors.main,
        "&:hover": {
          backgroundColor: "transparent",
          "& .MuiSwitch-thumb": {
            //  agregamos el anillo "inset"
            boxShadow: `inset 0 0 0 3px ${colors.ringColor}, 0px 4px 8px rgba(0, 0, 0, 0.35)`
          }
        },
        // Track Activo
        "& + .MuiSwitch-track": {
          backgroundColor: colors.ringColor,
          border: `1px solid ${colors.main}`,
          opacity: 1,
          boxShadow: "inset 0px 1px 3px rgba(0, 0, 0, 0.2)"
        }
      }
    }
  };
};
var themeOptions = {
  palette: {
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
      main: brandColors.link.main
    },
    text: {
      primary: brandColors.text.dark,
      secondary: brandColors.text.light
    },
    background: {
      default: brandColors.background.main,
      paper: brandColors.background.light
    }
  },
  typography,
  shadows: Array(25).fill("none").map((_, i) => customShadowsArray[i] || "none"),
  customShape: borderRadius,
  customSpacing: spacingConstants,
  customTransitions: transitionStyles,
  effectShadows: shadows,
  components: {
    // -----------------------------------------------------------------
    // 1. TOOLTIP GLOBAL (Requisito: Fondo Primary, Texto Secondary)
    // -----------------------------------------------------------------
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: brandColors.primary.main,
          color: brandColors.text.light,
          // Text Secondary (Light)
          fontSize: "0.75rem",
          borderRadius: borderRadius.sm
        },
        arrow: {
          color: brandColors.primary.main
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: `all ${animations.duration.standard}ms ${animations.easing.smart}`,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "18px",
          fontFamily: "'Barlow Condensed', sans-serif",
          lineHeight: 1
        }
      },
      variants: [
        // BOTÓN 1: Icon Glass (Redondo 36px)
        {
          props: { variant: "gaia-icon-glass" },
          style: {
            borderRadius: "50%",
            minWidth: "36px",
            width: "36px",
            height: "36px",
            padding: "8px",
            backgroundColor: brandColors.background.light,
            color: brandColors.primary.main,
            border: "1px solid transparent",
            "&:hover": {
              boxShadow: shadows.sm,
              backgroundColor: brandColors.background.light
            },
            "&:active, &.Mui-active": {
              ...glassEffect,
              color: brandColors.primary.glass,
              borderColor: brandColors.primary.main,
              boxShadow: "none"
            }
          }
        },
        // BOTÓN 2: Icon Outline (Redondo 40px)
        {
          props: { variant: "gaia-icon-outline" },
          style: {
            borderRadius: "50%",
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            backgroundColor: brandColors.background.light,
            color: brandColors.brown.main,
            border: `1px solid ${brandColors.primary.main}`,
            "&:hover": {
              boxShadow: shadows.sm,
              border: "1px solid transparent",
              backgroundColor: brandColors.background.light
            },
            "&:active, &.Mui-active": {
              backgroundColor: brandColors.background.main,
              color: brandColors.brown.light,
              border: "none",
              boxShadow: "none"
            }
          }
        },
        // BOTÓN 3: CTA Contained
        {
          props: { variant: "gaia-cta-contained" },
          style: {
            borderRadius: borderRadius.md,
            padding: `${spacingConstants.min} ${spacingConstants.md}`,
            border: "none",
            backgroundColor: brandColors.cta.main,
            color: brandColors.text.light,
            "&:hover": {
              boxShadow: shadows.sm,
              backgroundColor: brandColors.cta.main,
              filter: "brightness(1.05)"
            },
            "&:active, &.Mui-active": {
              backgroundColor: brandColors.cta.light,
              boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.1)"
            }
          }
        },
        // BOTÓN 4: CTA Outlined
        {
          props: { variant: "gaia-cta-outlined" },
          style: {
            borderRadius: borderRadius.md,
            padding: `${spacingConstants.min} ${spacingConstants.md}`,
            border: `1px solid ${brandColors.cta.main}`,
            backgroundColor: brandColors.background.main,
            color: brandColors.text.dark,
            "&:hover": {
              boxShadow: shadows.sm,
              backgroundColor: brandColors.background.main,
              border: "none"
            },
            "&:active, &.Mui-active": {
              backgroundColor: brandColors.background.light,
              color: brandColors.brown.light,
              borderColor: brandColors.cta.main
            }
          }
        },
        // 1. PANAMAZONIA (Verde Claro)
        createMapButtonVariant("gaia-panamazonia", {
          gradient: { center: "#6EB468", edge: "#5DA257" },
          // Extraído del screenshot
          hover: { labelBg: brandColors.green.light },
          active: {
            border: brandColors.green.light,
            background: brandColors.green.glass
          }
        }),
        // 2. AMAZONIA (Verde Oscuro / Primary)
        createMapButtonVariant("gaia-amazonia", {
          gradient: { center: "#44937A", edge: "#496C65" },
          // Extraído del screenshot
          hover: { labelBg: brandColors.primary.main },
          active: {
            border: brandColors.primary.main,
            background: brandColors.primary.glass
          }
        }),
        // 3. MACROTERRITORIO (Dorado / CTA)
        createMapButtonVariant("gaia-macroterritorio", {
          gradient: { center: "#CE8D2A", edge: "#A4772F" },
          // Extraído del screenshot
          hover: { labelBg: brandColors.cta.main },
          active: {
            border: brandColors.cta.main,
            background: brandColors.cta.light
            // Pedido explícito: cta.light (no glass)
          }
        })
      ]
    },
    // ----------------------------------------------------
    // SWITCH CONFIG
    // ----------------------------------------------------
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 18,
          padding: 0,
          display: "flex",
          alignItems: "center",
          overflow: "visible"
          // sombra no se corte
        },
        switchBase: {
          padding: 0,
          margin: 0,
          transitionDuration: `${animations.duration.standard}ms`,
          transform: "translateX(-2px)",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff"
          }
        },
        thumb: {
          width: 18,
          height: 18,
          boxShadow: "inset 0 0 0 0px transparent, 0px 2px 4px rgba(0,0,0,0.25)",
          // ANIMACIÓN SUAVE Y COMPLEJA (Figma Smart Animate)
          transition: `
            background-color ${animations.duration.complex}ms ${animations.easing.smart}, 
            box-shadow ${animations.duration.complex}ms ${animations.easing.smart}, 
            color ${animations.duration.complex}ms ${animations.easing.smart},
            transform ${animations.duration.complex}ms ${animations.easing.smart}
          `
        },
        track: {
          borderRadius: 12 / 2,
          height: 12,
          opacity: 1,
          backgroundColor: "#fff",
          boxSizing: "border-box",
          transition: `background-color ${animations.duration.complex}ms ${animations.easing.smart}`
        }
      },
      variants: [
        // GREEN -> Ring: GLASS
        createSwitchVariant("green", {
          main: brandColors.green.main,
          light: brandColors.green.light,
          ringColor: brandColors.green.glass,
          // GREEN usa GLASS          
          thumbInactive: brandColors.green.glass
        }),
        // PRIMARY -> Ring: LIGHT
        createSwitchVariant("primary", {
          main: brandColors.primary.main,
          light: brandColors.primary.light,
          ringColor: brandColors.primary.light,
          // PRIMARY usa LIGHT
          thumbInactive: brandColors.primary.light
        }),
        // CTA -> Ring: LIGHT
        createSwitchVariant("cta", {
          main: brandColors.cta.main,
          light: brandColors.cta.light,
          ringColor: brandColors.cta.light,
          // CTA usa LIGHT       
          thumbInactive: brandColors.cta.light
        })
      ]
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: brandColors.primary.main,
          height: 8
        },
        thumb: {
          height: 20,
          width: 20,
          backgroundColor: brandColors.primary.main,
          transition: `box-shadow ${animations.duration.standard}ms ${animations.easing.smart}`
        },
        track: {
          backgroundColor: "#25484D",
          border: "none"
        },
        rail: {
          color: brandColors.primary.light,
          opacity: 1
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Raleway', sans-serif"
        }
      }
    }
  }
};
var theme = (0, import_styles2.createTheme)(themeOptions);
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
