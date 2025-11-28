// src/mui-types.ts
import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/Button";

// src/theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
var createSwitchVariant = (colorName, colors) => {
  return {
    props: { color: colorName },
    style: {
      // ===========================
      // ESTADO INACTIVO (OFF)
      // ===========================
      "& .MuiSwitch-switchBase": {
        color: colors.thumbInactive,
        boxShadow: "none",
        // Quitamos sombras por defecto del wrapper
        // --- HOVER EFFECT ---
        "&:hover": {
          backgroundColor: "transparent",
          // Sin halo gris
          // Apuntamos al CIRCULO (Thumb)
          "& .MuiSwitch-thumb": {
            backgroundColor: colors.main,
            // El núcleo se vuelve sólido (Main)
            // INSET: 3px de anillo (RingColor) + Sombra externa suave
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
      // ===========================
      // ESTADO ACTIVO (ON)
      // ===========================
      "& .MuiSwitch-switchBase.Mui-checked": {
        color: colors.main,
        "&:hover": {
          backgroundColor: "transparent",
          // Hover en estado activo
          "& .MuiSwitch-thumb": {
            // Anillo + Sombra más profunda
            boxShadow: `inset 0 0  3px ${colors.ringColor}, 0px 2px 4px rgba(0, 0, 0, 0.25)`
          }
        },
        // Track Activo
        "& + .MuiSwitch-track": {
          backgroundColor: colors.ringColor,
          // Usamos el color del anillo para el fondo del track
          border: `1px solid ${colors.main}`,
          opacity: 1,
          boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)"
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: transitionStyles.smooth,
          // Animación suave en botones también
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "18px",
          fontFamily: "'Barlow Condensed', sans-serif"
        }
      }
    },
    // 2. SWITCH 
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 18,
          padding: 0,
          display: "flex",
          alignItems: "center",
          overflow: "visible"
        },
        switchBase: {
          padding: 0,
          margin: 0,
          transitionDuration: "600ms",
          // Movimiento izquierda-derecha
          transform: "translateX(-2px)",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff"
            // Fallback color
          }
        },
        thumb: {
          width: 18,
          height: 18,
          // Sombra por defecto (Sin hover)
          boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
          transition: "background-color 0.8s ease, box-shadow 0.8s ease, color 0.8s ease"
        },
        track: {
          borderRadius: 12 / 2,
          height: 12,
          opacity: 1,
          backgroundColor: "#fff",
          boxSizing: "border-box",
          transition: "background-color 0.8s ease, border 0.8s ease, box-shadow 0.8s ease"
        }
      },
      variants: [
        // GREEN
        createSwitchVariant("green", {
          main: brandColors.green.main,
          light: brandColors.green.light,
          ringColor: brandColors.green.glass,
          thumbInactive: brandColors.green.glass
        }),
        // PRIMARY
        createSwitchVariant("primary", {
          main: brandColors.primary.main,
          light: brandColors.primary.light,
          ringColor: brandColors.primary.light,
          thumbInactive: brandColors.primary.light
        }),
        // CTA
        createSwitchVariant("cta", {
          main: brandColors.cta.main,
          light: brandColors.cta.light,
          ringColor: brandColors.cta.light,
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
          transition: "box-shadow 0.3s ease"
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
var theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);
var theme_default = theme;
export {
  theme_default as AppTheme,
  animations,
  borderRadius,
  brandColors,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles
};
