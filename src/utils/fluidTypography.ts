// src/utils/fluidTypography.ts

/**
 * Genera un string CSS clamp() para tipografía fluida.
 * 
 * @param maxPx - Tamaño Desktop, ej: 1440px)
 * @param minPx - (Opcional) Tamaño deseado en Móvil (ej: 375px). Si no se da, usa el 70% del max.
 * @returns string ej: "clamp(1.75rem, 1.5rem + 1.2vw, 2.5rem)"
 */
export const fluid = (maxPx: number, minPx?: number, minOffset = 0) => {
  
  const baseMin = minPx ?? Math.round(maxPx * 0.7);
  const minSize = Math.max(baseMin + minOffset, 16)
  
  // Configuraciones de Viewport (Ancho de pantalla)
  const minWidth = 375;  // Móvil estándar
  const maxWidth = 1440; // Desktop estándar
  const root = 16;
  
  // Matemáticas de interpolación lineal (Slope)
  const slope = (maxPx - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;
  
  const minRem = `${(minSize / root).toFixed(4)}rem`;
  const maxRem = `${(maxPx / root).toFixed(4)}rem`;
  const preferred = `${(yAxisIntersection / root).toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw`;

  return `clamp(${minRem}, ${preferred}, ${(maxPx / root).toFixed(4)}rem)`;
};