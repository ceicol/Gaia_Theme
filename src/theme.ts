import './mui-types'; 
import { createTheme, ThemeOptions, responsiveFontSizes, Shadows } from '@mui/material/styles';
import { SwitchProps } from '@mui/material/Switch';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, glassEffect, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles, animations } from './tokens/animations'; // Importamos animations
import { ButtonProps } from '@mui/material';


// HELPER PARA LOS BOTONES DE MAPA (Radial + Etiqueta Hover)
const createMapButtonVariant = (
  variantName: ButtonProps['variant'], 
  config: {
    gradient: { center: string; edge: string };
    hover: { labelBg: string };
    active: { border: string; background: string };
  }
) => {
  return {
    props: { variant: variantName },
    style: {
      // --- BASE (Círculo) ---
      width: '50px',
      height: '50px',
      minWidth: '50px', 
      borderRadius: borderRadius.pill,
      padding: spacingConstants.min,
      
      
      position: 'relative' as const, 
      overflow: 'visible' as const, 

      // Gradiente Radial 
      background: `radial-gradient(
        54.15% 54.15% at 46% 46%,
        ${config.gradient.center} 76.92%,
        ${config.gradient.edge} 100%
      )`,
      border: '1px solid transparent', 
      boxShadow: 'none',
      color: brandColors.text.light, 
      
      '& .MuiSvgIcon-root, & svg': {
        color: 'inherit', // Hereda el color del padre (brandColors.text.light)
        fill: 'currentColor', // Asegura que el relleno use ese color
        width: '100%',  // Opcional: Asegura que el icono llene el espacio si es necesario
        height: '100%',
      },
      
      // =========================================================
      // 1. DEFINICIÓN BASE DE LOS PSEUDO-ELEMENTOS (Invisible)
      // =========================================================
      '&::after': {
        content: 'attr(data-label)',
        
        
        position: 'absolute' as const,
        
        left: '100%', 
        marginLeft: '0',
        top: '0',
        width: 'max-content',
        maxWidth: '160px',
        
        backgroundColor: config.hover.labelBg,
        color: brandColors.text.light,
        
        padding: '6px 12px',
        borderRadius: borderRadius.sm,
        borderBottomLeftRadius: 0,
        textWrap: 'balance' as const,
        overflowWrap: 'break-word' as const,
        textAlign: 'start' as const,
        pointerEvents: 'none' as const,

        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '18px',
        fontWeight: 400,
        
        boxShadow: shadows.sm,
        zIndex: 10,
        
        // ANIMACIÓN
        opacity: 0,
        transform: 'translateY(-100%) translateX(-10px)', 
        transition: `
          opacity ${animations.duration.standard}ms ${animations.easing.smart},
          transform ${animations.duration.standard}ms ${animations.easing.smart}
        `,
      },

      '&::before': {
        content: '""',
        position: 'absolute' as const,
        
        left: '100%',
        marginLeft: '2px',
        top: '6px',   
        
        borderTop: '6px solid transparent',
        borderBottom: '6px solid transparent',
        borderRight: `10px solid ${config.hover.labelBg}`,
        zIndex: 10,
        pointerEvents: 'none' as const,

        // ANIMACIÓN
        opacity: 0,
        transform: 'translateY(-100%) translateX(-10px)', 
        transition: `
          opacity ${animations.duration.standard}ms ${animations.easing.smart},
          transform ${animations.duration.standard}ms ${animations.easing.smart}
        `,
      },

      // =========================================================
      // 2. ESTADO HOVER (Visible)
      // =========================================================
      '&:hover': {
        boxShadow: shadows.sm,
        background: `radial-gradient(
          54.15% 54.15% at 46% 46%,
          ${config.gradient.center} 76.92%,
          ${config.gradient.edge} 100%
        )`,
        border: '1px solid transparent',

        '&::after': {
          opacity: 1,
          transform: 'translateY(-100%) translateX(0)', 
        },

        '&::before': {
          opacity: 1,
          transform: 'translateY(-100%) translateX(0)',
        }
      },

      // --- ACTIVE (Click / Selected) ---
      '&:active, &.Mui-active': {
        background: config.active.background,
        borderColor: config.active.border,
        boxShadow: 'none',
        
        '&::after, &::before': { 
          opacity: 0,
          transform: 'translateY(-100%) translateX(-5px)' 
        } 
      }
    }
  };
};

// --- HELPER PARA GENERAR SWITCHES CUSTOM ---
type SwitchColorProp = SwitchProps['color']; 

const createSwitchVariant = ( 
  colorName: SwitchColorProp, 
  colors: { 
    main: string; 
    light: string; 
    ringColor: string; 
    thumbInactive: string 
  }
) => {
  return {
    props: { color: colorName },
    style: {
      // =================================================================
      // 1. ESTADO INACTIVO (OFF)
      // =================================================================
      '& .MuiSwitch-switchBase': {
        color: colors.thumbInactive,
        boxShadow: 'none', 
        
        // --- HOVER OFF ---
        '&:hover': { 
          backgroundColor: 'transparent', 
          
          // ANIMACIÓN DE ANILLO (Thumb)
          '& .MuiSwitch-thumb': {
            backgroundColor: colors.main, // Se vuelve sólido
            // Inset: 3px de anillo + Sombra externa
            boxShadow: `inset 0 0 0 3px ${colors.ringColor}, 0px 2px 4px rgba(0, 0, 0, 0.25)`,
          }
        },
      },

      '& .MuiSwitch-track': {
        backgroundColor: brandColors.background.main, 
        border: `1px solid ${colors.main}`,
        opacity: 1, 
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', 
      },

      // =================================================================
      // 2. ESTADO ACTIVO (ON)
      // =================================================================
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: colors.main, 
        
        
        '&:hover': { 
          backgroundColor: 'transparent',
          
          
          '& .MuiSwitch-thumb': {
             //  agregamos el anillo "inset"
             
             boxShadow: `inset 0 0 0 3px ${colors.ringColor}, 0px 4px 8px rgba(0, 0, 0, 0.35)`,
          }
        }, 
        
        // Track Activo
        '& + .MuiSwitch-track': {
          backgroundColor: colors.ringColor, 
          border: `1px solid ${colors.main}`, 
          opacity: 1,
          boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.2)', 
        },
      },
    },
  };
};

// ==========================================================
//  CREACIÓN DEL TEMA
// ==========================================================

const themeOptions: ThemeOptions = {
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
      secondary: brandColors.text.light,
    },
    background: {
      default: brandColors.background.main, 
      paper: brandColors.background.light,  
    },
  },

  typography: typography,
  shadows: Array(25).fill('none').map((_, i) => customShadowsArray[i] || 'none') as Shadows,
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
          color: brandColors.text.light, // Text Secondary (Light)
          fontSize: '0.75rem',
          borderRadius: borderRadius.sm,
        },
        arrow: {
          color: brandColors.primary.main,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          
          transition: `all ${animations.duration.standard}ms ${animations.easing.smart}`,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '18px',
          fontFamily: "'Barlow Condensed', sans-serif",
          lineHeight: 1,
         },
      },
      variants: [
        // BOTÓN 1: Icon Glass (Redondo 36px)
        {
          props: { variant: 'gaia-icon-glass' },
          style: {
            borderRadius: '50%',
            minWidth: '36px', width: '36px', height: '36px',
            padding: '8px',
            backgroundColor: brandColors.background.light,
            color: brandColors.primary.main,
            border: '1px solid transparent', 
            '&:hover': {
              boxShadow: shadows.sm,
              backgroundColor: brandColors.background.light,
            },
            '&:active, &.Mui-active': {
              ...glassEffect, 
              color: brandColors.primary.glass,
              borderColor: brandColors.primary.main,
              boxShadow: 'none',
            },
          },
        },
        // BOTÓN 2: Icon Outline (Redondo 40px)
        {
          props: { variant: 'gaia-icon-outline' },
          style: {
            borderRadius: '50%',
            minWidth: '40px', width: '40px', height: '40px',
            padding: '8px',
            backgroundColor: brandColors.background.light,
            color: brandColors.brown.main,
            border: `1px solid ${brandColors.primary.main}`,
            '&:hover': {
              boxShadow: shadows.sm,
              border: '1px solid transparent',
              backgroundColor: brandColors.background.light,
            },
            '&:active, &.Mui-active': {
              backgroundColor: brandColors.background.main,
              color: brandColors.brown.light,
              border: 'none',
              boxShadow: 'none',
            },
          },
        },
        // BOTÓN 3: CTA Contained
        {
          props: { variant: 'gaia-cta-contained' },
          style: {
            borderRadius: borderRadius.md,
            padding: `${spacingConstants.min} ${spacingConstants.md}`,
            border: 'none',
            backgroundColor: brandColors.cta.main,
            color: brandColors.text.light,
            '&:hover': {
              boxShadow: shadows.sm,
              backgroundColor: brandColors.cta.main,
              filter: 'brightness(1.05)',
            },
            '&:active, &.Mui-active': {
              backgroundColor: brandColors.cta.light,
              boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.1)',
            },
          },
        },
        // BOTÓN 4: CTA Outlined
        {
          props: { variant: 'gaia-cta-outlined' },
          style: {
            borderRadius: borderRadius.md,
            padding: `${spacingConstants.min} ${spacingConstants.md}`,
            border: `1px solid ${brandColors.cta.main}`,
            backgroundColor: brandColors.background.main,
            color: brandColors.text.dark,
            '&:hover': {
              boxShadow: shadows.sm,
              backgroundColor: brandColors.background.main,
              border: 'none',
            },
            '&:active, &.Mui-active': {
              backgroundColor: brandColors.background.light,
              color: brandColors.brown.light,
              borderColor: brandColors.cta.main, 
            },
          },
        },
        // 1. PANAMAZONIA (Verde Claro)
        createMapButtonVariant('gaia-panamazonia', {
          gradient: { center: '#6EB468', edge: '#5DA257' }, // Extraído del screenshot
          hover: { labelBg: brandColors.green.light },
          active: { 
            border: brandColors.green.light, 
            background: brandColors.green.glass 
          }
        }),

        // 2. AMAZONIA (Verde Oscuro / Primary)
        createMapButtonVariant('gaia-amazonia', {
          gradient: { center: '#44937A', edge: '#496C65' }, // Extraído del screenshot
          hover: { labelBg: brandColors.primary.main },
          active: { 
            border: brandColors.primary.main, 
            background: brandColors.primary.glass 
          }
        }),

        // 3. MACROTERRITORIO (Dorado / CTA)
        createMapButtonVariant('gaia-macroterritorio', {
          gradient: { center: '#CE8D2A', edge: '#A4772F' }, // Extraído del screenshot
          hover: { labelBg: brandColors.cta.main },
          active: { 
            border: brandColors.cta.main, 
            background: brandColors.cta.light // Pedido explícito: cta.light (no glass)
          }
        }),
      ],
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
          display: 'flex',
          alignItems: 'center',
          overflow: 'visible', // sombra no se corte
        },
        switchBase: {
          padding: 0,
          margin: 0,
          
          transitionDuration: `${animations.duration.standard}ms`, 
          transform: 'translateX(-2px)', 
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff', 
          },
        },
        thumb: {
          width: 18,
          height: 18,
          boxShadow: 'inset 0 0 0 0px transparent, 0px 2px 4px rgba(0,0,0,0.25)', 
          
          // ANIMACIÓN SUAVE Y COMPLEJA (Figma Smart Animate)
          transition: `
            background-color ${animations.duration.complex}ms ${animations.easing.smart}, 
            box-shadow ${animations.duration.complex}ms ${animations.easing.smart}, 
            color ${animations.duration.complex}ms ${animations.easing.smart},
            transform ${animations.duration.complex}ms ${animations.easing.smart}
          `,
        },
        track: {
          borderRadius: 12 / 2,
          height: 12,
          opacity: 1,
          backgroundColor: '#fff',
          boxSizing: 'border-box',
          transition: `background-color ${animations.duration.complex}ms ${animations.easing.smart}`,
        },
      },
      
      variants: [
        // GREEN -> Ring: GLASS
        createSwitchVariant('green', {
          main: brandColors.green.main,
          light: brandColors.green.light,
          ringColor: brandColors.green.glass, // GREEN usa GLASS          
          thumbInactive: brandColors.green.glass,
        }),

        // PRIMARY -> Ring: LIGHT
        createSwitchVariant('primary', {
          main: brandColors.primary.main,
          light: brandColors.primary.light,
          ringColor: brandColors.primary.light, // PRIMARY usa LIGHT
          thumbInactive: brandColors.primary.light,
        }),

        // CTA -> Ring: LIGHT
        createSwitchVariant('cta', {
          main: brandColors.cta.main,
          light: brandColors.cta.light,
          ringColor: brandColors.cta.light, // CTA usa LIGHT       
          thumbInactive: brandColors.cta.light,
        }),
      ],
    },


    MuiSlider: {
      styleOverrides: {
        root: {
          color: brandColors.primary.main, 
          height: 8, 
        },
        thumb: {
          height: 20,
          width: 20,
          backgroundColor: brandColors.primary.main, 
          transition: `box-shadow ${animations.duration.standard}ms ${animations.easing.smart}`,
        },
        track: {
          backgroundColor: '#25484D', 
          border: 'none',
        },
        rail: {
          color: brandColors.primary.light, 
          opacity: 1, 
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Raleway', sans-serif",
        }
      }
    }
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;