# Food Items -- Fragments, Props, and Lists

A React application that renders a list of healthy food items, demonstrating core React patterns including props, list rendering, conditional rendering, CSS Modules, and the Container component pattern with `props.children`.

---

## Overview

This project builds a "Healthy Food" display interface where food items are rendered dynamically from an array using `.map()`. Each item includes a styled label and a "Buy" button with a click event handler. The application also demonstrates conditional rendering for empty-state messages and uses a reusable `Container` component that wraps its children with consistent border and spacing styles.

---

## Tech Stack

| Technology       | Version  | Purpose                                 |
|:-----------------|:--------:|:----------------------------------------|
| React            | 19.2     | Component-based UI library              |
| React DOM        | 19.2     | DOM rendering for React                 |
| Vite             | 7.2      | Development server and bundler          |
| Bootstrap        | 5.3      | List group styling and button classes   |
| CSS Modules      | --       | Scoped, collision-free component styles |
| ESLint           | 9.x      | Static code analysis                    |

---

## Project Structure

```
Fragments/learning-fragment/
|-- public/
|   +-- vite.svg
|-- src/
|   |-- assets/
|   |   +-- react.svg
|   |-- components/
|   |   |-- Container.jsx
|   |   |-- Container.module.css
|   |   |-- ErrorMessage.jsx
|   |   |-- FoodItems.jsx
|   |   |-- item.jsx
|   |   +-- item.module.css
|   |-- App.css
|   |-- App.jsx
|   +-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
+-- eslint.config.js
```

---

## Component Architecture

```
App
|-- Container (wraps content with border and padding)
|   |-- ErrorMessage (conditional empty-state message)
|   +-- FoodItems (list container)
|       +-- item (individual food item with Buy button) [x5]
```

### App (App.jsx)

The root component that defines the food items array (`["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk"]`) and passes it as props to child components. Uses React fragment syntax (`<>...</>`) and wraps content inside the `Container` component. Imports Bootstrap CSS globally.

### Container (Container.jsx)

A reusable wrapper component that accepts `props.children` and renders them inside a styled `<div>`. Styled using CSS Modules with a border, rounded corners, responsive width (`min-width: 300px`, `width: 50%`), and consistent padding.

### ErrorMessage (ErrorMessage.jsx)

A conditional rendering component that displays "I am still hungry." when the `items` array is empty. Uses the `&&` short-circuit evaluation pattern for conditional rendering.

### FoodItems (FoodItems.jsx)

Receives the `items` array via props and renders each item inside a Bootstrap `list-group` using `.map()`. Each item receives a unique `key` prop (the item string itself) and the food item name is passed as the `foodItem` prop to the `item` component.

### item (item.jsx)

Renders an individual food item as a list element (`<li>`) styled with both CSS Modules and Bootstrap classes. Includes:

- A `<span>` displaying the food name with custom font weight and color
- A "Buy" `<button>` with a click handler that logs the purchase action to the console
- CSS Module classes for the item background, span styling, and button float positioning

---

## Key Concepts Demonstrated

- **Props** -- Passing data from parent to child components via attributes
- **List Rendering** -- Using `.map()` to dynamically generate UI from arrays
- **Conditional Rendering** -- Using `&&` short-circuit to show or hide elements
- **CSS Modules** -- Importing `.module.css` files for scoped, collision-free styling
- **props.children** -- Building reusable container components that wrap arbitrary content
- **Event Handling** -- Attaching `onClick` handlers to buttons with arrow functions
- **Fragment Syntax** -- Using `<>...</>` to avoid unnecessary wrapper elements
- **Bootstrap Integration** -- Combining Bootstrap utility classes with custom CSS Modules

---

## Getting Started

```bash
# Navigate to the project directory
cd Fragments/learning-fragment

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
