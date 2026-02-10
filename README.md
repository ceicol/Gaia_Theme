# Gaia UI Theme System

Sistema de diseño centralizado para el ecosistema de aplicaciones Gaia. Construido sobre **Material UI v7+**, este paquete provee una integración "Plug & Play" con tokens de diseño, tipografía fluida, paletas de colores extendidas y utilidades de animación.

## 📋 Requisitos

- React >= 17
- @mui/material >= 6.0.0
- @emotion/react
- @emotion/styled

## 🚀 Instalación y Actualización

Este paquete se distribuye a través de Git y se consume desde la versión compilada (`dist`). Debido a cómo NPM gestiona la caché de dependencias Git, es importante usar el siguiente comando específico.

### Instalar o Actualizar (Comando Recomendado)

Para instalar el paquete por primera vez **o para traer los últimos cambios** (ignorando la caché local), ejecuta:

```bash
npm install git+https://github.com/ceicol/Gaia_Theme.git#build --force
```

> **Nota:** El flag `--force` es necesario para asegurar que NPM descargue la última versión del código compilado, ya que a veces NPM no detecta cambios en repositorios Git si la versión del `package.json` no ha cambiado.

### Instalar dependencias Peer (Obligatorio)

El sistema depende de las librerías base de MUI. Asegúrate de tenerlas:

```bash
npm install @mui/material @emotion/react @emotion/styled 
```

---

### Tipografías (Requerido)

El sistema Gaia **no instala fuentes por NPM**.  
Las tipografías se cargan vía **Google Fonts** para garantizar consistencia visual entre proyectos.

Debes incluir el siguiente bloque en el `<head>` de tu `index.html`:

```tsx

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100..900;1,100..900&family=Barlow+Condensed:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet"
/>

```

📌 Sin este paso, el theme no se verá correctamente.

---

## ⚡ Quick Start

En tu archivo principal (`main.tsx` o `App.tsx`), envuelve tu aplicación con el `ThemeProvider` y `CssBaseline`.

```tsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppTheme } from 'theme-gaia';


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
| **`tertiary`** | tertiary | `.main`, `.light`, `.glass` |
| **`secondary`** | secondary | `.main`, `.light`, `.glass` |
| **`primary`** | primary | `.main`, `.light`, `.glass` |
| **`cta`** | cta | `.main`, `.light` |
| **`green`** | green | `.main`, `.light`, `.glass`, `.button` |
| **`brown`** | brown | `.main`, `.light`, `.glass` |
| **`link`** | link | `.main` |
| **`textPrimary`** | text | `.primary` |
| **`textSecondary`** | text | `.secondary` |

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
| `h1xxlBold` | 64px Bold |
| `h1xlBold` | 52px Bold |
| `h1lgBold` | 40px Bold |
| `h1Bold` | 36px Bold |
| `h2xxlSemibold` | 32px Semibold |
| `h2xxlMedium` | 32px Medium |
| `h2lgMedium` | 28px Medium |
| `h2Bold` | 28px Bold |
| `h3xxlSemibold` | 28px Semibold |
| `h3xlRegular` | 24px Regular |
| `h3xlSemibold` | 24px Semibold |
| `h3xlMedium` | 24px Medium |
| `h3lgSemibold` | 20px Semibold |
| `h3Medium` | 18px Medium |

#### Cuerpo (Body)

| Variante | Descripción |
| :--- | :--- |
| `bodyxxlRegular` | 24px Regular |
| `bodyxxlRegularSpacing` | 24px Regular (+ LineHeight) |
| `bodyxxlSemiboldSpacing`| 24px Semibold (+ LineHeight) |
| `bodyxlBoldSpacing` | 18px Bold (+ LineHeight) |
| `bodyxlBold` | 18px Bold |
| `bodyxlMedium` | 18px Medium |
| `bodyxlMediumSpacing` | 18px Medium (+ LineHeight) |
| `bodyxlRegular` | 18px Regular |
| `bodylgMedium` | 16px Medium |
| `bodylgRegular` | 16px Regular |
| `bodyRegular` | 14px Regular |
| `bodyRegularSpacing` | 14px Regular (+ Spacing) |
| `bodyMedium` | 14px Medium |

**Ejemplo de uso:**

```tsx
<Typography variant="h1xxlBold">Título Principal</Typography>
<Typography variant="bodyxxlRegularSpacing">Texto destacado</Typography>
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

---

### 6. Botones Estandarizados (Variants)

El tema incluye 4 variantes de botones prediseñadas para casos de uso específicos (Iconos y CTAs).

| Variante | Uso | Apariencia |
| :--- | :--- | :--- |
| **`gaia-icon-glass`** | Iconos de acción | Circular, fondo claro. **Active:** Efecto Glass + Borde Primary. |
| **`gaia-icon-outline`** | Iconos secundarios | Circular, borde Primary. **Active:** Fondo sólido, texto claro. |
| **`gaia-cta-contained`**| Acción Principal | Rectangular, fondo Gold. **Active:** Sombra interna (Inset). |
| **`gaia-cta-outlined`** | Acción Secundaria | Rectangular, borde Gold. **Active:** Fondo claro + Borde. |

**Ejemplo de uso:**

```tsx
// Botón Circular con Icono (Glass)
<Tooltip title="Descargar">
  <Button variant="gaia-icon-glass">
    <DownloadIcon />
  </Button>
</Tooltip>

// Botón de Llamada a la Acción (CTA)
<Button variant="gaia-cta-contained">
  Comenzar Ahora
</Button>
```

---

### 7. Botones de Mapa 

Botones circulares especializados para la navegación o selección de regiones en mapas. Tienen un fondo con gradiente radial, un estado activo sólido y una etiqueta flotante (tooltip) integrada que aparece suavemente al hacer hover.

| Variante | Tema de Color | Estado Active |
| :--- | :--- | :--- |
| **`gaia-panamazonia`** | Gradiente Verde Claro | Borde + Fondo green.light |
| **`gaia-amazonia`** | Gradiente Primary (Oscuro) | Borde primary.main + Fondo primary.light |
| **`gaia-macroterritorio`** | Gradiente Dorado (CTA) | Borde cta.main + Fondo cta.light |

#### Cómo usarlos

Estos botones requieren la propiedad `data-label` para generar la etiqueta de texto flotante.

**Características automáticas:**

- **Iconos:** Cualquier SVG o Icono dentro del botón se pintará automáticamente de color claro (text.light).
- **Etiqueta:** El texto en `data-label` se auto-balancea (text-wrap: balance) para evitar palabras huérfanas y crece hacia la derecha sin desplazar el botón.

```tsx
import { Button } from '@mui/material';
import { PanamazoniaIcon, JaguarIcon } from './icons'; // Tus iconos

// 1. Panamazonia
<Button 
  variant="gaia-panamazonia" 
  data-label="Panamazonia"
>
  <PanamazoniaIcon />
</Button>

// 2. Amazonia (Con texto largo)
<Button 
  variant="gaia-amazonia" 
  data-label="Amazonia colombiana"
>
  <AmazoniaIcon />
</Button>

// 3. Macroterritorio
<Button 
  variant="gaia-macroterritorio" 
  data-label="Macroterritorio Jaguares de Yuruparí"
>
  <JaguarIcon />
</Button>
```

---

## 🛠 Solución de Problemas

**Los cambios no se reflejan:**

Ejecuta de nuevo el comando de instalación con `--force` para limpiar la caché de Git en tu proyecto.

```bash
npm install git+https://github.com/ceicol/Gaia_Theme.git#build --force
```