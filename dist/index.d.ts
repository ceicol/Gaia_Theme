import * as _mui_material_styles from '@mui/material/styles';

declare const borderRadius: {
    sm: number;
    md: number;
    lg: number;
    pill: number;
};
declare const spacingConstants: {
    min: number;
    sm: number;
    base: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};

declare const animations: {
    duration: {
        standard: number;
        complex: number;
    };
    easing: {
        smart: string;
        backOut: string;
    };
};
declare const transitionStyles: {
    smooth: string;
    bounce: string;
};

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
    }
    interface PaletteOptions {
        tertiary?: PaletteOptions['primary'];
    }
    interface Theme {
        customShape: typeof borderRadius;
        customSpacing: typeof spacingConstants;
        customTransitions: typeof transitionStyles;
    }
    interface ThemeOptions {
        customShape?: typeof borderRadius;
        customSpacing?: typeof spacingConstants;
        customTransitions?: typeof transitionStyles;
    }
}
declare let theme: _mui_material_styles.Theme;

declare const brandColors: {
    amazonia: {
        main: string;
        light: string;
        glass: string;
    };
    panamazonia: {
        main: string;
        light: string;
    };
    jaguares: {
        main: string;
        light: string;
    };
    gold: {
        main: string;
    };
    neutral: {
        bgDefault: string;
        bgPaper: string;
        textDark: string;
        textLight: string;
    };
};

declare const glassEffect: {
    background: string;
    backdropFilter: string;
    border: string;
    boxShadow: string;
};

export { theme as AppTheme, animations, borderRadius, brandColors, glassEffect, spacingConstants, transitionStyles };
