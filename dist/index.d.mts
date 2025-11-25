import * as _mui_material_styles from '@mui/material/styles';

declare const glassEffect: {
    background: string;
    backdropFilter: string;
    border: string;
};
declare const semanticShadows: {
    sm: string;
    md: string;
    lg: string;
};

declare const borderRadius: {
    sm: string;
    md: string;
    lg: string;
    pill: string;
};
declare const spacingConstants: {
    min: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
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
    interface PaletteColor {
        glass?: string;
        button?: string;
    }
    interface SimplePaletteColorOptions {
        glass?: string;
        button?: string;
    }
    interface Palette {
        tertiary: PaletteColor;
        cta: PaletteColor;
        green: PaletteColor;
        brown: PaletteColor;
        link: PaletteColor;
    }
    interface PaletteOptions {
        tertiary?: SimplePaletteColorOptions;
        cta?: SimplePaletteColorOptions;
        green?: SimplePaletteColorOptions;
        brown?: SimplePaletteColorOptions;
        link?: SimplePaletteColorOptions;
    }
    interface Theme {
        customShape: typeof borderRadius;
        customSpacing: typeof spacingConstants;
        customTransitions: typeof transitionStyles;
        effectShadows: typeof semanticShadows;
    }
    interface ThemeOptions {
        customShape?: typeof borderRadius;
        customSpacing?: typeof spacingConstants;
        customTransitions?: typeof transitionStyles;
        effectShadows?: typeof semanticShadows;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
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
        glass: string;
    };
    jaguares: {
        main: string;
        light: string;
        glass: string;
    };
    gold: {
        main: string;
        light: string;
    };
    green: {
        main: string;
        light: string;
        glass: string;
        button: string;
    };
    blue: {
        main: string;
    };
    brown: {
        main: string;
        light: string;
        glass: string;
    };
    text: {
        dark: string;
        light: string;
    };
    background: {
        main: string;
        light: string;
    };
};

export { theme as AppTheme, animations, borderRadius, brandColors, glassEffect, spacingConstants, transitionStyles };
