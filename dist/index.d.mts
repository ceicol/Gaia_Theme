import React from 'react';
import * as _mui_material_styles from '@mui/material/styles';

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

declare const glassEffect: {
    background: string;
    backdropFilter: string;
    border: string;
};
declare const shadows: {
    sm: string;
    md: string;
    lg: string;
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
        effectShadows: typeof shadows;
    }
    interface ThemeOptions {
        customShape?: typeof borderRadius;
        customSpacing?: typeof spacingConstants;
        customTransitions?: typeof transitionStyles;
        effectShadows?: typeof shadows;
    }
    interface TypographyVariants {
        h1XxlBold: React.CSSProperties;
        h1XlBold: React.CSSProperties;
        h1LgBold: React.CSSProperties;
        h1Bold: React.CSSProperties;
        h2XxlSemibold: React.CSSProperties;
        h2XxlMedium: React.CSSProperties;
        h2LgMedium: React.CSSProperties;
        h2Bold: React.CSSProperties;
        h3XxlSemibold: React.CSSProperties;
        h3XlRegular: React.CSSProperties;
        h3XlSemibold: React.CSSProperties;
        h3XlMedium: React.CSSProperties;
        h3LgSemibold: React.CSSProperties;
        h3Medium: React.CSSProperties;
        bodyXxlRegular: React.CSSProperties;
        bodyXxlRegularSpacing: React.CSSProperties;
        bodyXxlSemiboldSpacing: React.CSSProperties;
        bodyXlBoldSpacing: React.CSSProperties;
        bodyXlBold: React.CSSProperties;
        bodyXlMedium: React.CSSProperties;
        bodyXlMediumSpacing: React.CSSProperties;
        bodyXlRegular: React.CSSProperties;
        bodyLgMedium: React.CSSProperties;
        bodyLgRegular: React.CSSProperties;
        bodyRegular: React.CSSProperties;
        bodyRegularSpacing: React.CSSProperties;
        bodyMedium: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        h1XxlBold?: React.CSSProperties;
        h1XlBold?: React.CSSProperties;
        h1LgBold?: React.CSSProperties;
        h1Bold?: React.CSSProperties;
        h2XxlSemibold?: React.CSSProperties;
        h2XxlMedium?: React.CSSProperties;
        h2LgMedium?: React.CSSProperties;
        h2Bold?: React.CSSProperties;
        h3XxlSemibold?: React.CSSProperties;
        h3XlRegular?: React.CSSProperties;
        h3XlSemibold?: React.CSSProperties;
        h3XlMedium?: React.CSSProperties;
        h3LgSemibold?: React.CSSProperties;
        h3Medium?: React.CSSProperties;
        bodyXxlRegular?: React.CSSProperties;
        bodyXxlRegularSpacing?: React.CSSProperties;
        bodyXxlSemiboldSpacing?: React.CSSProperties;
        bodyXlBoldSpacing?: React.CSSProperties;
        bodyXlBold?: React.CSSProperties;
        bodyXlMedium?: React.CSSProperties;
        bodyXlMediumSpacing?: React.CSSProperties;
        bodyXlRegular?: React.CSSProperties;
        bodyLgMedium?: React.CSSProperties;
        bodyLgRegular?: React.CSSProperties;
        bodyRegular?: React.CSSProperties;
        bodyRegularSpacing?: React.CSSProperties;
        bodyMedium?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1XxlBold: true;
        h1XlBold: true;
        h1LgBold: true;
        h1Bold: true;
        h2XxlSemibold: true;
        h2XxlMedium: true;
        h2LgMedium: true;
        h2Bold: true;
        h3XxlSemibold: true;
        h3XlRegular: true;
        h3XlSemibold: true;
        h3XlMedium: true;
        h3LgSemibold: true;
        h3Medium: true;
        bodyXxlRegular: true;
        bodyXxlRegularSpacing: true;
        bodyXxlSemiboldSpacing: true;
        bodyXlBoldSpacing: true;
        bodyXlBold: true;
        bodyXlMedium: true;
        bodyXlMediumSpacing: true;
        bodyXlRegular: true;
        bodyLgMedium: true;
        bodyLgRegular: true;
        bodyRegular: true;
        bodyRegularSpacing: true;
        bodyMedium: true;
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

export { theme as AppTheme, animations, borderRadius, brandColors, glassEffect, shadows, spacingConstants, transitionStyles };
