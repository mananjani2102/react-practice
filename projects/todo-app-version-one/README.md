# Todo App Version One

A fully functional task management application with complete CRUD operations, built using React functional components and the `useState` hook.

---

## Overview

This Todo application allows users to create, view, and delete tasks with associated due dates. It features a clean, minimal interface with CSS custom properties for theming, slide-in animations for new items, and an empty-state placeholder when no tasks exist. Each new task is assigned a unique identifier using `crypto.randomUUID()`, and dates are formatted using `toLocaleDateString()` with the `en-GB` locale.

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
projects/todo-app-version-one/
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

The root component that manages the application state using `useState`. Initializes with two sample todos ("Buy Milk" and "Go to College"). Provides two handler functions:

- **handleAddTodo** -- Prepends a new todo to the beginning of the list using the spread operator
- **handleDeleteTodo** -- Filters out the todo with the matching ID using `.filter()`

Renders a conditional empty-state message ("No todos yet. Add one above!") when the list is empty.

### AppName (AppName.jsx)

A simple presentational component that renders the "TODO App" heading as an `<h1>` element.

### AddTodo (AddTodo.jsx)

A controlled form component with two state variables (`todoName` and `todoDate`). On submission:

1. Prevents default form behavior with `e.preventDefault()`
2. Validates that the todo name is not empty after trimming whitespace
3. Creates a new todo object with `crypto.randomUUID()` as the unique ID
4. Falls back to today's date if no date is selected
5. Resets both input fields after successful submission

Both inputs include `aria-label` attributes for accessibility compliance.

### TodoItem (TodoItem.jsx)

Renders a single todo item in a horizontal row layout with:

- The task name displayed in a `<span>` element
- A formatted due date using `toLocaleDateString("en-GB")` with day/month/year format
- A "Delete" button that calls the `onDelete` callback with the todo's ID
- An `aria-label` on the delete button for screen reader support

---

## Styling Architecture

All styles are defined in `App.css` using CSS custom properties (variables) for maintainability:

| Variable               | Value      | Purpose                    |
|:-----------------------|:-----------|:---------------------------|
| `--color-bg`           | `#ffffff`  | Page background            |
| `--color-surface`      | `#ffffff`  | Input background           |
| `--color-border`       | `#d1d5db`  | Input and divider borders  |
| `--color-text`         | `#000000`  | Primary text color         |
| `--color-text-muted`   | `#6b7280`  | Placeholder and empty text |
| `--color-add`          | `#15803d`  | Add button background      |
| `--color-delete`       | `#dc2626`  | Delete button background   |
| `--radius-input`       | `6px`      | Input border radius        |
| `--radius-pill`        | `9999px`   | Button pill shape radius   |

**Animations:**

The `slideIn` keyframe animation is applied to each todo list item, providing a smooth fade-in and upward slide effect when new items are added to the list.

---

## Key Concepts Demonstrated

- **useState Hook** -- Managing an array of todos in component state
- **Controlled Inputs** -- Binding input values to state with `value` and `onChange`
- **Form Handling** -- Using `onSubmit` with `e.preventDefault()` for form processing
- **State Updater Functions** -- Using `(prev) => ...` pattern to safely update state based on previous values
- **crypto.randomUUID()** -- Generating unique identifiers for list items
- **Array Methods** -- Using `.filter()` for deletion and spread operator for insertion
- **Conditional Rendering** -- Ternary operator for empty-state vs. populated list
- **Date Formatting** -- `toLocaleDateString("en-GB")` with named format options
- **CSS Custom Properties** -- Using `var()` for consistent theming across components
- **Keyframe Animations** -- `slideIn` animation for smooth list entry effects
- **Accessibility** -- ARIA labels on interactive elements for screen reader support

---

## Getting Started

```bash
# Navigate to the project directory
cd projects/todo-app-version-one

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
