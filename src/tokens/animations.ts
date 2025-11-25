export const animations = {
  // Tiempos
  duration: {
    standard: 600,
    complex: 800, // Figma: 800ms
  },
  // Curvas de aceleración
  easing: {
    // Curva "Smart Animate" suave (aproximación estándar)
    smart: 'cubic-bezier(0.4, 0.0, 0.2, 1)', 
    // Curva con "retroceso" (backOut) para el efecto de rebote
    backOut: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  },
};

// Helper pre-armado para usar directamente en sx={{ transition: ... }}
export const transitionStyles = {
  smooth: `all ${animations.duration.complex}ms ${animations.easing.smart}`,
  bounce: `all ${animations.duration.standard}ms ${animations.easing.backOut}`,
};