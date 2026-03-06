# Bootstrap Integration Practice

A hands-on project demonstrating how to integrate Bootstrap 5 CSS framework into a React application built with Vite.

---

## Overview

This project showcases the usage of Bootstrap 5 button variants inside a React component. It renders nine different Bootstrap button styles -- Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, and Link -- to demonstrate how pre-built CSS classes from Bootstrap work within the React component model.

---

## Tech Stack

| Technology       | Version  | Purpose                          |
|:-----------------|:--------:|:---------------------------------|
| React            | 19.2     | Component-based UI library       |
| React DOM        | 19.2     | DOM rendering for React          |
| Vite             | 7.2      | Development server and bundler   |
| Bootstrap        | 5.3      | CSS component framework          |
| ESLint           | 9.x      | Static code analysis             |

---

## Project Structure

```
BootStrap/prec/
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

The main component renders all nine Bootstrap button variants using standard HTML `<button>` elements with Bootstrap CSS classes. The component uses React fragment syntax (`<>...</>`) and demonstrates the `useState` hook import for future interactivity.

**Bootstrap Button Classes Used:**

| Class              | Visual Style            |
|:-------------------|:------------------------|
| `btn btn-primary`  | Blue primary button     |
| `btn btn-secondary`| Grey secondary button   |
| `btn btn-success`  | Green success button    |
| `btn btn-danger`   | Red danger button       |
| `btn btn-warning`  | Yellow warning button   |
| `btn btn-info`     | Cyan info button        |
| `btn btn-light`    | Light background button |
| `btn btn-dark`     | Dark background button  |
| `btn btn-link`     | Link-styled button      |

---

## Key Concepts Demonstrated

- **Bootstrap in React** -- Importing Bootstrap CSS into a React application
- **CSS Class Usage** -- Applying Bootstrap utility classes using the `class` attribute
- **Fragment Syntax** -- Grouping multiple button elements without a wrapper div
- **Third-Party Libraries** -- Installing and configuring external CSS frameworks with npm

---

## Getting Started

```bash
# Navigate to the project directory
cd BootStrap/prec

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
