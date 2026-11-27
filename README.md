# Furniro: práctica final de Diseño de Interfaces Web

## Autor

- [Sergio Fernández del Puerto]

## Asignatura

Diseño de Interfaces Web (DIW)

## Descripción

Página web responsive de una tienda de muebles llamada Furniro. El proyecto consta de dos páginas:

- **Landing (`index.html`):** cabecera con menú, sección principal (hero), categorías ("Browse The Range"), productos destacados con efecto al pasar el ratón y pie de página.
- **Contacto (`formulario.html`):** banner de página, datos de contacto y formulario con validación.

Se ha desarrollado con **Vite** y **SASS**, aplicando:

- **Variables** para colores, tipografía, medidas y breakpoints.
- **Anidamiento** con nomenclatura BEM.
- **Mixins** (`respond-to`, `button`, `flex-center`).
- **Media queries** con enfoque *mobile-first*.

## Estructura del proyecto

```
practicaFinal/
├── public/
├── src/
│   ├── assets/          # imágenes e iconos
│   ├── styles/
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   ├── globals.scss
│   │   ├── layout.scss
│   │   ├── components.scss
│   │   └── main.scss
│   └── main.js
├── index.html
├── formulario.html
├── vite.config.js
└── package.json
```

## Instrucciones de ejecución

Requisitos: [Node.js](https://nodejs.org/) 20 o superior.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Sergio3005-beep/ProyectoFinalDIW.git
   cd ProyectoFinalDIW
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Arranca el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La web se abre en la dirección que indica la terminal (por defecto `http://localhost:5173/ProyectoFinalDIW/`).
4. Para generar la versión de producción:
   ```bash
   npm run build
   ```
   El resultado se crea en la carpeta `dist`.

## Enlaces

- **Repositorio en GitHub:** https://github.com/Sergio3005-beep/ProyectoFinalDIW
- **Página desplegada en GitHub Pages:** https://sergio3005-beep.github.io/ProyectoFinalDIW/