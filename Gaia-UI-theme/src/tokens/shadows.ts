import { ThemeOptions } from '@mui/material/styles';

// Helper para el efecto Glassmorphism
export const glassEffect = {
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
};

// Sombras personalizadas mapeadas de Figma
// sm -> shadows[1], md -> shadows[4], lg -> shadows[8]
export const customShadows = [
  "none", 
  "0px 2px 4px rgba(0,0,0,0.1)", // sombra-sm
  "none", "none",
  "0px 4px 8px rgba(0,0,0,0.15)", // sombra-md
  "none", "none", "none",
  "0px 8px 16px rgba(0,0,0,0.2)", // sombra-lg
  // ... rellenar el resto con valores por defecto si es necesario
];