export const borderRadius = {
  sm: 6,      // Figma: border-radius sm
  md: 12,     // Figma: border-radius md (default)
  lg: 24,     // Figma: border-radius lg
  pill: 9999, // Figma: border-radius full
};

// Como los espaciados son irregulares (8, 12, 16, 24...), 
// usaremos constantes específicas en lugar del factor multiplicador x8 de MUI.
export const spacingConstants = {
  min: 8,      // spacing-minimum
  sm: 12,      // spacing-default
  base: 16,    // spacing-xs (Figma tiene naming confuso, 16 es base usual)
  md: 24,      // spacing-sm 2
  lg: 48,      // spacing-md
  xl: 96,      // spacing-lg
  xxl: 198,    // spacing-xl
};
