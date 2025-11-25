Aquí tienes el **README.md** definitivo. Está diseñado para ser la "Biblia" del desarrollador que use tu librería, listando todos los tokens disponibles para que no tengan que adivinar los nombres.

Copia y pega esto en el archivo `README.md` de tu repositorio.

```markdown
# Gaia UI Theme System

Sistema de diseño centralizado para el ecosistema de aplicaciones Gaia. Construido sobre **Material UI v6+**, este paquete provee una integración "Plug & Play" con tokens de diseño, tipografía fluida, paletas de colores extendidas y utilidades de animación.

## 📋 Requisitos

- React >= 17
- @mui/material >= 6.0.0
- @emotion/react
- @emotion/styled

## 🚀 Instalación

### 1. Instalar el paquete
Instala la librería directamente desde el repositorio:

```bash
# Vía HTTPS
npm install git+https://github.com/Andrssnsdc/theme-Gaia.git

```

### 2. Instalar fuentes (Obligatorio)
El sistema depende de **Raleway** y **Barlow Condensed**.

```bash
npm install @fontsource/raleway @fontsource/barlow-condensed
```

---

## ⚡ Quick Start

En tu archivo principal (`main.tsx` o `App.tsx`), envuelve tu aplicación con el `ThemeProvider` y `CssBaseline`.

```tsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppTheme } from 'theme-gaia';

// Importación de estilos de fuentes
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/barlow-condensed/400.css'; 
import '@fontsource/barlow-condensed/500.css'; 
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <TuAplicacion />
    </ThemeProvider>
  );
};
```

---

## 🎨 Manual de Tokens

### 1. Paleta de Colores

Los colores son accesibles vía `color="..."` en componentes o `palette.nombre` en `sx`.

| Nombre Semántico | Token Figma | Propiedades Extra |
| :--- | :--- | :--- |
| **`primary`** | Amazonia | `.main`, `.light`, `.glass` |
| **`secondary`** | Panamazonia | `.main`, `.light`, `.glass` |
| **`tertiary`** | Jaguares | `.main`, `.light`, `.glass` |
| **`cta`** | Gold | `.main`, `.light` |
| **`green`** | Green | `.main`, `.light`, `.glass`, `.button` |
| **`brown`** | Brown | `.main`, `.light`, `.glass` |
| **`link`** | Blue | `.main` |

**Ejemplo de uso:**
```tsx
<Button variant="contained" color="tertiary">Botón Jaguares</Button>
<Box sx={{ bgcolor: 'green.glass', color: 'green.button' }}>Contenido</Box>
```

---

### 2. Tipografía (Figma Tokens)

Usamos **Fluid Typography** (`clamp`). El tamaño se ajusta automáticamente entre Móvil y Desktop.
Fuente Títulos: **Barlow Condensed** | Fuente Cuerpo: **Raleway**.

#### Títulos (Headers)
| Variante | Descripción |
| :--- | :--- |
| `h1XxlBold` | 64px Bold |
| `h1XlBold` | 52px Bold |
| `h1LgBold` | 40px Bold |
| `h1Bold` | 36px Bold |
| `h2XxlSemibold` | 32px Semibold |
| `h2XxlMedium` | 32px Medium |
| `h2LgMedium` | 28px Medium |
| `h2Bold` | 28px Bold |
| `h3XxlSemibold` | 28px Semibold |
| `h3XlRegular` | 24px Regular |
| `h3XlSemibold` | 24px Semibold |
| `h3XlMedium` | 24px Medium |
| `h3LgSemibold` | 20px Semibold |
| `h3Medium` | 18px Medium |

#### Cuerpo (Body)
| Variante | Descripción |
| :--- | :--- |
| `bodyXxlRegular` | 24px Regular |
| `bodyXxlRegularSpacing` | 24px Regular (+ LineHeight) |
| `bodyXxlSemiboldSpacing`| 24px Semibold (+ LineHeight) |
| `bodyXlBoldSpacing` | 18px Bold (+ LineHeight) |
| `bodyXlBold` | 18px Bold |
| `bodyXlMedium` | 18px Medium |
| `bodyXlMediumSpacing` | 18px Medium (+ LineHeight) |
| `bodyXlRegular` | 18px Regular |
| `bodyLgMedium` | 16px Medium |
| `bodyLgRegular` | 16px Regular |
| `bodyRegular` | 14px Regular |
| `bodyRegularSpacing` | 14px Regular (+ Spacing) |
| `bodyMedium` | 14px Medium |

**Ejemplo de uso:**
```tsx
<Typography variant="h1XxlBold">Título Principal</Typography>
<Typography variant="bodyXxlRegularSpacing">Texto destacado</Typography>
```

---

### 3. Layout (Espaciado y Bordes)

Importa las constantes para mantener la consistencia. Los valores son fijos en píxeles.

**Espaciado (`spacingConstants`):**
- `min`: 8px
- `sm`: 12px
- `base`: 16px
- `md`: 24px
- `lg`: 48px
- `xl`: 96px
- `xxl`: 198px

**Bordes (`borderRadius`):**
- `sm`: 6px
- `md`: 12px (Default)
- `lg`: 24px
- `pill`: 9999px

**Ejemplo de uso:**
```tsx
import { spacingConstants, borderRadius } from 'theme-gaia';

<Box sx={{ 
  p: spacingConstants.lg,       // Padding 48px
  gap: spacingConstants.sm,     // Gap 12px
  borderRadius: borderRadius.lg // Radio 24px
}}>
```

---

### 4. Efectos y Sombras

**Sombras (`shadows`):**
- `sm`: Sombra pequeña.
- `md`: Sombra mediana.
- `lg`: Sombra larga (elevación alta).

**Glassmorphism (`glassEffect`):**
Objeto helper que aplica background semi-transparente, blur y borde.

**Ejemplo de uso:**
```tsx
import { glassEffect, shadows } from 'theme-gaia';

<Box sx={{ 
  ...glassEffect,         // Aplica el efecto de vidrio
  boxShadow: shadows.md,  // Aplica sombra mediana
}}>
```

---

### 5. Animaciones

Transiciones sincronizadas con las curvas de Figma.

- **`transitionStyles.smooth`**: 800ms (Smart Animate). Ideal para hovers suaves o cambios de tamaño grandes.
- **`transitionStyles.bounce`**: 600ms (BackOut). Ideal para botones, modales o elementos que "rebotan" al aparecer.

**Ejemplo de uso:**
```tsx
import { transitionStyles } from 'theme-gaia';

<Button sx={{ 
  transition: transitionStyles.bounce, 
  '&:hover': { transform: 'scale(1.05)' } 
}}>
  Botón con Rebote
</Button>
```
```