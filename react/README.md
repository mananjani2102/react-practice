# React Starter Boilerplate

A minimal React + Vite project used as a starting template for new experiments and learning exercises.

---

## Overview

This project serves as the foundational boilerplate for the `react-prep` repository. It contains a bare-minimum React setup with Vite, providing a fast development server and optimized build pipeline. The application renders a simple heading element using JSX and fragment syntax.

---

## Tech Stack

| Technology       | Version  | Purpose                          |
|:-----------------|:--------:|:---------------------------------|
| React            | 19.2     | Component-based UI library       |
| React DOM        | 19.2     | DOM rendering for React          |
| Vite             | 7.2      | Development server and bundler   |
| ESLint           | 9.x      | Static code analysis             |

---

## Project Structure

```
react/
|-- public/
|   +-- vite.svg
|-- src/
|   |-- assets/
|   |   +-- react.svg
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   +-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
+-- eslint.config.js
```

---

## Component Architecture

### App (App.jsx)

The root component of the application. Uses React fragment syntax (`<>...</>`) to render a basic heading element. Imports `App.css` for component-level styling and `useState` from React for future state management experiments.

---

## Key Concepts Demonstrated

- **JSX Syntax** -- Writing HTML-like markup inside JavaScript functions
- **Fragment Syntax** -- Using `<>...</>` to group multiple elements without adding extra DOM nodes
- **CSS Imports** -- Importing CSS files directly into React components
- **Vite Project Setup** -- Understanding the default scaffolding of a Vite + React project

---

## Getting Started

```bash
# Navigate to the project directory
cd react

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
