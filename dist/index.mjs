// src/theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// src/tokens/colors.ts
var brandColors = {
  amazonia: {
    main: "#2E5C55",
    // Reemplazar con hex real de "Escala-Amazonia"
    light: "#5C8A82",
    // "Escala-Amazonia-light"
    glass: "rgba(46, 92, 85, 0.5)"
  },
  panamazonia: {
    main: "#7C8A45",
    // "Escala-Panamazonia"
    light: "#A4B568"
  },
  jaguares: {
    main: "#3A7CA5",
    // "Escala-Macroterritorio-jaguares"
    light: "#6FB1D9"
  },
  gold: {
    main: "#D4AF37"
    // "subtitulos" (parece dorado/ocre)
  },
  neutral: {
    bgDefault: "#FFFFFF",
    // Background-solid
    bgPaper: "#F5F5F5",
    // Background-solid-ligth
    textDark: "#333333",
    textLight: "#FAFAFA"
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
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
};
var customShadows = [
  "none",
  "0px 2px 4px rgba(0,0,0,0.1)",
  // sombra-sm
  "none",
  "none",
  "0px 4px 8px rgba(0,0,0,0.15)",
  // sombra-md
  "none",
  "none",
  "none",
  "0px 8px 16px rgba(0,0,0,0.2)"
  // sombra-lg
  // ... rellenar el resto con valores por defecto si es necesario
];

// src/tokens/layout.ts
var borderRadius = {
  sm: 6,
  // Figma: border-radius sm
  md: 12,
  // Figma: border-radius md (default)
  lg: 24,
  // Figma: border-radius lg
  pill: 9999
  // Figma: border-radius full
};
var spacingConstants = {
  min: 8,
  // spacing-minimum
  sm: 12,
  // spacing-default
  base: 16,
  // spacing-xs (Figma tiene naming confuso, 16 es base usual)
  md: 24,
  // spacing-sm 2
  lg: 48,
  // spacing-md
  xl: 96,
  // spacing-lg
  xxl: 198
  // spacing-xl
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
var theme = createTheme({
  palette: {
    primary: { main: brandColors.amazonia.main, light: brandColors.amazonia.light },
    secondary: { main: brandColors.panamazonia.main },
    tertiary: { main: brandColors.jaguares.main },
    // Ahora TS lo permite
    text: {
      primary: brandColors.neutral.textDark,
      secondary: brandColors.neutral.textLight
    },
    background: {
      default: brandColors.neutral.bgDefault,
      paper: brandColors.neutral.bgPaper
    }
  },
  typography,
  shadows: Array(25).fill("none").map((_, i) => customShadows[i] || "none"),
  // Configuración de bordes base de MUI
  shape: {
    borderRadius: borderRadius.md
    // Por defecto 12px
  },
  // Inyectamos nuestros tokens customizados para acceso rápido
  customShape: borderRadius,
  customSpacing: spacingConstants,
  customTransitions: transitionStyles,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          // 12px
          transition: transitionStyles.bounce,
          // Tu animación con rebote
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`
          // 8px 24px
        }
      }
    },
    // Ejemplo: Tarjetas con el borde grande
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg
          // 24px
        }
      }
    }
  }
});
theme = responsiveFontSizes(theme);
var theme_default = theme;
export {
  theme_default as AppTheme,
  animations,
  borderRadius,
  brandColors,
  glassEffect,
  spacingConstants,
  transitionStyles
};
