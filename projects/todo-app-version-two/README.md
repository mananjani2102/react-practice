# Todo App Version Two

The second iteration of the Todo application, sharing the same component architecture and functionality as Version One while serving as the foundation for further UI refinements and feature additions.

---

## Overview

This is the improved version of the Todo application built during the React learning journey. It retains the same core functionality -- adding todos with a name and due date, displaying a formatted date, and deleting individual tasks -- while providing a separate codebase for experimenting with design improvements and additional features without modifying the original version.

Both versions share identical component architecture (`AppName`, `AddTodo`, `TodoItem`), state management patterns (`useState` with updater functions), and styling system (CSS custom properties with keyframe animations).

---

## Tech Stack

| Technology       | Version  | Purpose                                |
|:-----------------|:--------:|:---------------------------------------|
| React            | 19.2     | Component-based UI library             |
| React DOM        | 19.2     | DOM rendering for React                |
| Vite             | 7.2      | Development server and bundler         |
| ESLint           | 9.x      | Static code analysis                   |

---

## Project Structure

```
projects/todo-app-version-two/
|-- public/
|   +-- vite.svg
|-- src/
|   |-- Component/
|   |   |-- AddTodo.jsx
|   |   |-- AppName.jsx
|   |   +-- TodoItem.jsx
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
App (state management and layout)
|-- AppName (application title)
|-- AddTodo (form with text input, date picker, and submit button)
+-- TodoItem [x N] (individual task display with delete button)
```

### App (App.jsx)

Manages the todo list state with `useState`, initialized with two sample entries. Provides `handleAddTodo` (prepends new items using spread) and `handleDeleteTodo` (removes items using `.filter()`). Renders a conditional empty-state message when the list is empty.

### AppName (AppName.jsx)

Presentational component rendering the "TODO App" heading.

### AddTodo (AddTodo.jsx)

Controlled form component with `todoName` and `todoDate` state variables. Validates input, generates unique IDs via `crypto.randomUUID()`, defaults to today's date if none selected, and resets fields after submission. Includes ARIA labels for accessibility.

### TodoItem (TodoItem.jsx)

Displays individual todo items with formatted dates (`toLocaleDateString("en-GB")`), task names, and a delete button with ARIA label support.

---

## Styling Architecture

Styled with CSS custom properties for consistent theming:

| Variable               | Value      | Purpose                    |
|:-----------------------|:-----------|:---------------------------|
| `--color-bg`           | `#ffffff`  | Page background            |
| `--color-surface`      | `#ffffff`  | Input background           |
| `--color-border`       | `#d1d5db`  | Input and divider borders  |
| `--color-text`         | `#000000`  | Primary text color         |
| `--color-text-muted`   | `#6b7280`  | Placeholder and empty text |
| `--color-add`          | `#15803d`  | Add button background      |
| `--color-delete`       | `#dc2626`  | Delete button background   |
| `--radius-pill`        | `9999px`   | Button pill shape radius   |

Includes the `slideIn` keyframe animation for smooth list entry effects.

---

## Differences from Version One

| Aspect               | Version One              | Version Two              |
|:----------------------|:-------------------------|:-------------------------|
| Codebase              | Original implementation  | Separate iteration       |
| Component Structure   | Identical                | Identical                |
| State Management      | Identical                | Identical                |
| Styling System        | CSS custom properties    | CSS custom properties    |
| Purpose               | Reference implementation | Experimentation ground   |

Version Two exists as a parallel development branch for testing refinements and additions while preserving the original version as a stable reference.

---

## Key Concepts Demonstrated

- **Iterative Development** -- Maintaining multiple versions of the same application for progressive improvement
- **useState Hook** -- Array state management with updater functions
- **Controlled Forms** -- Two-way data binding with `value` and `onChange`
- **Unique ID Generation** -- Using `crypto.randomUUID()` for stable list keys
- **Conditional Rendering** -- Ternary operator for empty-state display
- **CSS Custom Properties** -- Centralized theming with `var()` references
- **Keyframe Animations** -- Smooth `slideIn` transition for new list items
- **Accessibility** -- ARIA labels on all interactive elements

---

## Getting Started

```bash
# Navigate to the project directory
cd projects/todo-app-version-two

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
