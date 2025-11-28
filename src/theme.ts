import './mui-types'; 
import { createTheme, ThemeOptions, responsiveFontSizes, } from '@mui/material/styles';
import { SwitchProps } from '@mui/material/Switch';
import { brandColors } from './tokens/colors';
import { typography } from './tokens/typography';
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';
import { Shadows } from '@mui/material/styles';

// --- HELPER PARA GENERAR SWITCHES CUSTOM ---
type SwitchColorProp = SwitchProps['color']; 
const createSwitchVariant = ( colorName: SwitchColorProp, 
  colors: { 
    main: string; 
    light: string; 
    glass?: string; 
    thumbInactive: string 
  }
) => {
  return {
    props: { color: colorName },
    style: {
      // --- ESTADO INACTIVO (OFF) ---
      '& .MuiSwitch-switchBase': {
        color: colors.thumbInactive, // Circulo inactivo
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', 
        '&:hover': { backgroundColor: `${colors.main}15`},
      },

      '& .MuiSwitch-thumb': {
            backgroundColor: colors.main, // El núcleo de 12px
            // Inset de 3px crea el anillo exterior de 18px
            // Además mantenemos la sombra externa suave (drop shadow)
            boxShadow: `inset 0 0 0 3px ${ colors.glass || colors.light}, 0px 2px 4px rgba(0, 0, 0, 0.2)`,
      },   

      '& .MuiSwitch-track': {
        backgroundColor: brandColors.background.main, // Track blanco
        border: `1px solid ${colors.main}`, // Borde color Main
        opacity: 1, // MUI por defecto le baja la opacidad, la forzamos a 1
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', 
      },

      // --- ESTADO ACTIVO (ON) ---
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: colors.main, // Circulo activo
        '&:hover': { backgroundColor: `${colors.main}15` }, 
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.35)',
        // El track cuando está activo
        '& + .MuiSwitch-track': {
          backgroundColor: colors.glass || colors.light, // Track activo (Glass o Light)
          border: `1px solid ${colors.main}`, 
          opacity: 1,
          boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.33)', 
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
    // Semánticos
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
    // Custom
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
    // Bases
    text: {
      primary: brandColors.text.dark,
      secondary: brandColors.text.light,
    },
    background: {
      default: brandColors.background.main, 
      paper: brandColors.background.light,  
    },
  },

  // Importamos la tipografía generada (con clamp y helpers)
  typography: typography,
  
  // Sombras nativas de MUI (array)
  shadows: Array(25).fill('none').map((_, i) => customShadowsArray[i] || 'none') as Shadows,

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
          transition: transitionStyles.smooth,
          padding: `${spacingConstants.min}px ${spacingConstants.md}px`,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '18px',
          fontFamily: "'Barlow Condensed', sans-serif",
        },
      },
    },
      // 2. SWITCH (Personalización Estructural + Colores)
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
          transitionDuration: '300ms',
          transform: 'translateX(-2px)', 
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: brandColors.background.main,
          },
        },
        thumb: {
          width: 18,
          height: 18,
          boxShadow: 'none',
        },
        track: {
          borderRadius: 12 / 2,
          height: 12,
          opacity: 1,
          backgroundColor: brandColors.background.main,
          boxSizing: 'border-box',
        },
      },
      
      variants: [
        createSwitchVariant('green', {
          main: brandColors.green.main,
          light: brandColors.green.light,
          glass: brandColors.green.glass,
          thumbInactive: brandColors.green.glass,
        }),
        createSwitchVariant('primary', {
          main: brandColors.primary.main,
          light: brandColors.primary.light,
          glass: brandColors.primary.glass,
          thumbInactive: brandColors.primary.light,
        }),
        createSwitchVariant('cta', {
          main: brandColors.cta.main,
          light: brandColors.cta.light,
          thumbInactive: brandColors.cta.light,
        }),
      ],
    },

     MuiSlider: {
      styleOverrides: {
        root: {
          // Por defecto usa el color primary
          color: brandColors.primary.main, 
          height: 8, // Altura del track general
        },
        thumb: {
          height: 20,
          width: 20,
          backgroundColor: brandColors.primary.main, // Circulo Primary Main
        },
        track: {
          // La parte activa (Izquierda del circulo)
          backgroundColor: '#25484D', 
          border: 'none',
        },
        rail: {
          // La parte inactiva (Derecha del circulo)
          color: brandColors.primary.light, 
          opacity: 1, // Forzamos opacidad 1 para ver el color real
        },
      },
    },


    MuiCssBaseline: {
      styleOverrides: {
        // Aseguramos que el HTML/Body tome la fuente base
        body: {
          fontFamily: "'Raleway', sans-serif",
        }
      }
    }
  },
};

// Hacemos responsive solo las variantes estándar h1-h6 (las custom ya tienen fluid typography)
let theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme);

export default theme;