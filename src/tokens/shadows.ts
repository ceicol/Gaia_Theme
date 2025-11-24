// Helper para el efecto Glassmorphism
export const glassEffect = {
  background: 'rgba(248, 245, 238, 0.6)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 245, 238, 0.7)',
};


// sm -> shadows[1], md -> shadows[4], lg -> shadows[8]
export const customShadows = [
  "none", 
  "0px 8px 9px 0px rgba(0, 0, 0, 0.25)", // sombra-sm
  "none", "none",
  "0px 12px 12px 0px rgba(0, 0, 0, 0.25)", // sombra-md
  "none", "none", "none",
  "0px 18px 18px 0px rgba(0, 0, 0, 0.25)", // sombra-lg
  
];