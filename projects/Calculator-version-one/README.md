# Calculator Version One

A calculator user interface built with React, featuring dynamic button rendering from arrays and scoped styling with CSS Modules.

---

## Overview

This project implements a calculator UI with two primary components -- a display input field and a container of calculator buttons. All 17 buttons (digits 0-9, operators +, -, *, /, clear, equals, decimal) are rendered dynamically from a single array using `.map()`, eliminating repetitive JSX. The entire application uses CSS Modules for scoped, collision-free styling with a compact 200px-wide layout.

---

## Tech Stack

| Technology       | Version  | Purpose                                 |
|:-----------------|:--------:|:----------------------------------------|
| React            | 19.2     | Component-based UI library              |
| React DOM        | 19.2     | DOM rendering for React                 |
| Vite             | 7.3      | Development server and bundler          |
| CSS Modules      | --       | Scoped, collision-free component styles |
| ESLint           | 9.x      | Static code analysis                    |

---

## Project Structure

```
projects/Calculator-version-one/
|-- public/
|   +-- vite.svg
|-- src/
|   |-- assets/
|   |   +-- react.svg
|   |-- components/
|   |   |-- ButtonsContainer.jsx
|   |   |-- ButtonsContainer.module.css
|   |   |-- Display.jsx
|   |   +-- Display.module.css
|   |-- App.jsx
|   +-- App.module.css
|-- index.html
|-- package.json
|-- vite.config.js
+-- eslint.config.js
```

---

## Component Architecture

```
App (calculator wrapper with border)
|-- Display (text input for showing results)
+-- ButtonsContainer (grid of calculator buttons)
    +-- button [x17] (dynamically rendered from array)
```

### App (App.jsx)

The root component that wraps the calculator in a styled container with a solid border and rounded corners. Imports and renders the `Display` and `ButtonsContainer` components.

### Display (Display.jsx)

Renders a single text input element styled with CSS Modules. The input has a width of 170px with 25px font size, providing the calculator's display area where results would be shown.

### ButtonsContainer (ButtonsContainer.jsx)

Contains an array of all 17 button labels and renders them dynamically using `.map()`. The buttons are arranged in a flex-wrap layout with centered alignment. Each button is styled with CSS Modules to have uniform dimensions (45px x 45px) with consistent margin spacing.

**Button Layout:**

| Row | Buttons             |
|:----|:--------------------|
| 1   | C, 1, 2, +          |
| 2   | 3, 4, -, 5          |
| 3   | 6, *, 7, 8          |
| 4   | /, =, 9, 0          |
| 5   | .                   |

---

## Styling Details

All styles are implemented using CSS Modules with three separate module files:

- **App.module.css** -- Calculator container with 3px solid border, 200px width, and rounded corners
- **ButtonsContainer.module.css** -- Flexbox grid with wrap, centered alignment, and uniform 45px button sizing
- **Display.module.css** -- Input field with 170px width and large 25px font size

---

## Key Concepts Demonstrated

- **CSS Modules** -- Using `.module.css` files with `styles["class-name"]` syntax for scoped styling
- **Dynamic Rendering** -- Generating all calculator buttons from a single array using `.map()`
- **Component Decomposition** -- Separating display and buttons into independent, reusable components
- **Flexbox Layout** -- Using `display: flex`, `flex-wrap: wrap`, and `justify-content: center` for grid layout
- **Props Pattern** -- Components accept `props` parameter for future extensibility

---

## Getting Started

```bash
# Navigate to the project directory
cd projects/Calculator-version-one

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` by default.

---

## Available Scripts

| Command           | Description                             |
|:------------------|:----------------------------------------|
| `npm run dev`     | Start the Vite development server       |
| `npm run build`   | Create an optimized production build    |
| `npm run preview` | Preview the production build locally    |
| `npm run lint`    | Run ESLint to check for code issues     |
