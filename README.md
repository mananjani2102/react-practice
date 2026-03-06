<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/CSS_Modules-Scoped-blue?style=for-the-badge" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

# React Practice -- Learning Repository

A structured collection of React.js projects and experiments, each designed to master specific React concepts. The repository progresses from fundamentals like components and props to intermediate patterns including state management, event handling, and component composition.

---

## Repository Structure

```
react-prep/
|
|-- src/                              Root-level Bharat Clock application
|-- react/                            React starter boilerplate
|-- BootStrap/
|   +-- prec/                         Bootstrap integration with React
|-- Fragments/
|   +-- learning-fragment/            Props, lists, fragments, and CSS Modules
+-- projects/
    |-- Calculator-version-one/       Calculator UI with dynamic button rendering
    |-- bharat-clock-version-1/       Real-time clock with component composition
    |-- todo-app-version-one/         Todo app with useState and CRUD operations
    +-- todo-app-version-two/         Improved Todo app with refined styling
```

---

## Tech Stack

| Technology       | Version  | Purpose                          |
|:-----------------|:--------:|:---------------------------------|
| React            | 19.2     | Component-based UI library       |
| Vite             | 7.x      | Development server and bundler   |
| Bootstrap        | 5.3      | Pre-built CSS component library  |
| CSS Modules      | --       | Scoped, collision-free styling   |
| ESLint           | 9.x      | Static code analysis and linting |

---

## Projects Overview

### Bharat Clock (Root Project)

A real-time clock application that displays the current date and time in India. Built using three dedicated components -- `ClockHeading`, `ClockSlogan`, and `CurrentTime` -- demonstrating component composition and Bootstrap typography utilities.

**Concepts:** Component composition, Bootstrap integration, Date API

---

### React Starter

A minimal React + Vite boilerplate used as a starting point for new experiments. Contains a basic JSX structure with fragment syntax.

**Concepts:** Project scaffolding, JSX basics, Vite configuration

---

### Bootstrap Practice

Demonstrates the integration of Bootstrap 5 button variants (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Link) within a React application using Vite as the build tool.

**Concepts:** Third-party CSS framework integration, Bootstrap button classes, Fragment syntax

---

### Food Items -- Fragments and Lists

A food items display application that explores multiple React fundamentals at once. Renders a list of healthy food items using `.map()`, implements conditional rendering for an empty-state message, and uses CSS Modules for scoped component styling. Includes a reusable `Container` component with `props.children` and a `Buy` button with event handling.

**Concepts:** Props, `.map()` list rendering, Conditional rendering, CSS Modules, `props.children`, Event handling, Fragments

---

### Calculator Version One

A calculator user interface built entirely with CSS Modules for scoped styling. Features a `Display` component with a text input and a `ButtonsContainer` that dynamically renders all calculator buttons (digits 0-9, operators +, -, *, /, clear, equals, decimal) from an array using `.map()`.

**Concepts:** CSS Modules, Dynamic rendering with `.map()`, Component decomposition, Flexbox layout

---

### Todo App Version One

A fully functional todo application with complete CRUD operations. Supports adding new todos with a name and due date, displays a formatted date using `toLocaleDateString()`, and allows deletion of individual items. Features an empty-state message when no todos exist. Styled with CSS custom properties (variables) and includes slide-in animations for new items.

**Concepts:** `useState` hook, Form handling with `onSubmit`, Controlled inputs, `crypto.randomUUID()`, Conditional rendering, CSS variables, Keyframe animations, ARIA labels for accessibility

---

### Todo App Version Two

An enhanced iteration of the Todo application with identical functionality but refined styling and layout improvements. Both versions share the same component architecture (`AppName`, `AddTodo`, `TodoItem`) and state management patterns, demonstrating iterative development and UI polish.

**Concepts:** Iterative development, UI refinement, Component reuse across versions

---

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- npm version 9 or higher

### Installation and Running

Each project and sub-project has its own `package.json` and runs independently. Follow these steps for any project:

```bash
# Clone the repository
git clone https://github.com/mananjani2102/react-practice.git
cd react-practice

# To run the root project (Bharat Clock)
npm install
npm run dev

# To run any sub-project, navigate to its directory first
cd projects/todo-app-version-one
npm install
npm run dev
```

### Available Scripts

| Command           | Description                             |
|:------------------|:----------------------------------------|
| `npm run dev`     | Start the Vite development server       |
| `npm run build`   | Create an optimized production build    |
| `npm run preview` | Preview the production build locally    |
| `npm run lint`    | Run ESLint to check for code issues     |

---

## React Concepts Covered

This repository covers the following React concepts, organized by difficulty level:

### Fundamentals

- Functional components and JSX syntax
- Props and prop drilling between components
- Fragment syntax (`<>...</>`) for grouping elements
- Component composition using `props.children`

### Rendering Patterns

- List rendering with `.map()` and unique `key` attributes
- Conditional rendering with ternary operators and `&&` short-circuit
- Dynamic element generation from arrays

### State and Events

- State management with the `useState` hook
- Controlled form inputs with `value` and `onChange`
- Event handling (`onClick`, `onSubmit`)
- State updater functions with previous state access

### Styling Approaches

- CSS Modules for scoped, collision-free styles
- Bootstrap 5 integration in React projects
- CSS custom properties (variables) for theming
- Keyframe animations for UI transitions

---

## Author

**Manan Jani**
GitHub: [@mananjani2102](https://github.com/mananjani2102)

---

## License

This project is open source and available under the [MIT License](LICENSE).
