# Bharat Clock Version 1

A real-time clock application that displays the current date and time in India, built with React and styled using Bootstrap 5 typography utilities.

---

## Overview

Bharat Clock is a component-based clock application that demonstrates how to break down a UI into small, focused, reusable components. The application displays a bold heading, a descriptive slogan, and the current date and time using JavaScript's built-in `Date` API. All text styling is handled through Bootstrap utility classes such as `fw-bolder` and `lead`.

---

## Tech Stack

| Technology       | Version  | Purpose                                |
|:-----------------|:--------:|:---------------------------------------|
| React            | 19.2     | Component-based UI library             |
| React DOM        | 19.2     | DOM rendering for React                |
| Vite             | 7.2      | Development server and bundler         |
| Bootstrap        | 5.x      | Typography and utility styling classes |
| ESLint           | 9.x      | Static code analysis                   |

---

## Project Structure

```
projects/bharat-clock-version-1/
|-- public/
|   +-- vite.svg
|-- src/
|   |-- assets/
|   |   +-- react.svg
|   |-- Components/
|   |   |-- ClockHeading.jsx
|   |   |-- ClockSlogan.jsx
|   |   +-- CurrentTime.jsx
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
|-- ClockHeading  (bold title text)
|-- ClockSlogan   (descriptive subtitle)
+-- CurrentTime   (live date and time display)
```

### App (App.jsx)

The root component that composes three child components inside a `<center>` element. Imports Bootstrap CSS globally for typography utilities.

### ClockHeading (ClockHeading.jsx)

Renders the application title "Bharat Clock" as an `<h1>` element. Uses Bootstrap's `fw-bolder` class for extra bold font weight.

### ClockSlogan (ClockSlogan.jsx)

Displays a descriptive message: "This is the clock that shows the time in Bharat at all times." Uses Bootstrap's `lead` class for slightly larger, lighter paragraph styling.

### CurrentTime (CurrentTime.jsx)

Creates a new `Date` object on every render and displays both the locale-formatted date (`toLocaleDateString()`) and time (`toLocaleTimeString()`). Styled with Bootstrap's `lead` class for consistent typography.

**Output Format:**
```
This is the current time: 6/3/2026 - 10:30:45 AM
```

---

## Key Concepts Demonstrated

- **Component Composition** -- Breaking UI into small, single-responsibility components
- **JavaScript Date API** -- Using `new Date()`, `toLocaleDateString()`, and `toLocaleTimeString()`
- **Bootstrap Typography** -- Applying `fw-bolder` and `lead` utility classes for text styling
- **CSS Framework Import** -- Importing `bootstrap/dist/css/bootstrap.min.css` in a React project
- **Functional Components** -- Each component is a simple function that returns JSX

---

## Getting Started

```bash
# Navigate to the project directory
cd projects/bharat-clock-version-1

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
