import './mui-types'; 
import { createTheme, ThemeOptions, responsiveFontSizes, Shadows } from '@mui/material/styles';
import { SwitchProps } from '@mui/material/Switch';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';

// --- HELPER PARA GENERAR SWITCHES CUSTOM ---
type SwitchColorProp = SwitchProps['color']; 

const createSwitchVariant = ( 
  colorName: SwitchColorProp, 
  colors: { 
    main: string; 
    light: string; 
    ringColor: string; // Color del anillo (Glass o Light según el caso)
    thumbInactive: string 
  }
) => {
  return {
    props: { color: colorName },
    style: {
      // ===========================
      // ESTADO INACTIVO (OFF)
      // ===========================
      '& .MuiSwitch-switchBase': {
        color: colors.thumbInactive,
        boxShadow: 'none', // Quitamos sombras por defecto del wrapper
        
        // --- HOVER EFFECT (Aquí ocurre la magia) ---
        '&:hover': { 
          backgroundColor: 'transparent', // Sin halo gris
          
          // Apuntamos al CIRCULO (Thumb)
          '& .MuiSwitch-thumb': {
            backgroundColor: colors.main, // El núcleo se vuelve sólido (Main)
            // INSET: 3px de anillo (RingColor) + Sombra externa suave
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

      // ===========================
      // ESTADO ACTIVO (ON)
      // ===========================
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: colors.main, 
        '&:hover': { 
          backgroundColor: 'transparent',
          // Hover en estado activo
          '& .MuiSwitch-thumb': {
             // Anillo + Sombra más profunda
             boxShadow: `inset 0 0 0 3px ${colors.ringColor}, 0px 4px 8px rgba(0, 0, 0, 0.35)`,
          }
        }, 
        
        // Track Activo
        '& + .MuiSwitch-track': {
          backgroundColor: colors.ringColor, // Usamos el color del anillo para el fondo del track
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
          transition: transitionStyles.smooth, // Animación suave en botones también
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '18px',
          fontFamily: "'Barlow Condensed', sans-serif",
        },
      },
    },

    // 2. SWITCH 
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 18,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          overflow: 'visible', 
        },
        switchBase: {
          padding: 0,
          margin: 0,
          transitionDuration: '300ms', // Movimiento izquierda-derecha
          transform: 'translateX(-2px)', 
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff', // Fallback color
          },
        },
        thumb: {
          width: 18,
          height: 18,
          // Sombra por defecto (Sin hover)
          boxShadow: '0px 2px 4px rgba(0,0,0,0.25)', 
          
          // --- AQUÍ ESTÁ LA ANIMACIÓN SUAVE DEL EFECTO DE COLOR ---
          // Animamos background, shadow y color para que el "inset" aparezca suavemente
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
        },
        track: {
          borderRadius: 12 / 2,
          height: 12,
          opacity: 1,
          backgroundColor: '#fff',
          boxSizing: 'border-box',
          transition: 'background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
        },
      },
      
      variants: [
        // GREEN
        createSwitchVariant('green', {
          main: brandColors.green.main,
          light: brandColors.green.light,
          ringColor: brandColors.green.glass,          
          thumbInactive: brandColors.green.glass,
        }),

        // PRIMARY
        createSwitchVariant('primary', {
          main: brandColors.primary.main,
          light: brandColors.primary.light,
          ringColor: brandColors.primary.light, 
          thumbInactive: brandColors.primary.light,
        }),

        // CTA
        createSwitchVariant('cta', {
          main: brandColors.cta.main,
          light: brandColors.cta.light,
          ringColor: brandColors.cta.light,        
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
          transition: 'box-shadow 0.3s ease',
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