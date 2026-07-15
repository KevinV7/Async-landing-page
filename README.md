# Portafolio Neobrutalism — React + Tailwind CSS

Portafolio de desarrollador de software con estética **Neobrutalism**: bordes negros gruesos, sombras duras sin blur, colores saturados sobre fondo crema y tipografía chunky (Space Grotesk) para headings.

## Stack

- React 18 (componentes funcionales + hooks)
- Tailwind CSS 4 (plugin de Vite)
- Vite 6

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

## Estructura

```
src/
├── components/
│   ├── ui/            # componentes base reutilizables
│   │   ├── Button.jsx # variantes de color/tamaño, efecto "press"
│   │   ├── Card.jsx   # borde + sombra dura, variante interactiva (hover)
│   │   └── Badge.jsx  # chips con borde y sombra propia, opcionalmente enlace
│   ├── Navbar.jsx     # nav sticky con menú móvil
│   ├── Hero.jsx
│   ├── TechStack.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx    # formulario que abre mailto con el mensaje
│   └── Footer.jsx
├── data/portfolio.js  # todo el contenido editable (perfil, stack, proyectos…)
└── index.css          # tokens del design system (@theme) y reglas de a11y
```

## Personalización

Edita `src/data/portfolio.js`: nombre, rol, enlaces (GitHub/LinkedIn/CV), stack, proyectos y experiencia. Los colores y sombras del sistema viven en `src/index.css` (`@theme`).

## Accesibilidad

- Texto negro sobre fondos claros/saturados (contraste ≥ 4.5:1)
- `:focus-visible` con outline azul propio, distinto del borde decorativo
- `prefers-reduced-motion: reduce` desactiva los efectos de press/hover
- HTML semántico (`nav`, `main`, `section`, `footer`) con labels ARIA
