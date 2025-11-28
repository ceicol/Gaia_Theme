import './mui-types'; 
import { createTheme, ThemeOptions, responsiveFontSizes, Shadows } from '@mui/material/styles';
import { SwitchProps } from '@mui/material/Switch';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles, animations } from './tokens/animations'; // Importamos animations

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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: transitionStyles.smooth, 
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '18px',
          fontFamily: "'Barlow Condensed', sans-serif",
        },
      },
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
          boxShadow: '0px 2px 4px rgba(0,0,0,0.25)', 
          
          // ANIMACIÓN SUAVE Y COMPLEJA (Figma Smart Animate)
          
          transition: `
            background-color ${transitionStyles.smooth}, 
            box-shadow ${transitionStyles.smooth}, 
            color ${transitionStyles.smooth},
            transform ${transitionStyles.smooth}
          `,
        },
        track: {
          borderRadius: 12 / 2,
          height: 12,
          opacity: 1,
          backgroundColor: '#fff',
          boxSizing: 'border-box',
          transition: `background-color ${transitionStyles.smooth}`,
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