<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/CSS_Modules-Scoped-blue?style=for-the-badge" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

# 🧮 Calculator — Version 1

> A clean **calculator UI** built with React, featuring dynamically rendered buttons and scoped styling using **CSS Modules**.

---

## 📖 About

This is the first version of a calculator application that focuses on building the **UI layer** with proper component architecture. Buttons are dynamically rendered from an array using `.map()`, and all styles are scoped using CSS Modules.

---

## ✨ Features

- 🔢 Dynamically rendered calculator buttons (0–9, operators, clear, equals)
- 📟 Clean display input field
- 🎨 Fully scoped styling with **CSS Modules**
- 📦 Modular component structure (`Display` + `ButtonsContainer`)
- ⚡ Vite-powered fast development

---

## 🚀 Getting Started

```bash
# Navigate to project directory
cd projects/Calculator-version-one

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📁 Project Structure

```
Calculator-version-one/
├── src/
│   ├── components/
│   │   ├── Display.jsx                  # Calculator display
│   │   ├── Display.module.css           # Display styles
│   │   ├── ButtonsContainer.jsx         # Button grid component
│   │   └── ButtonsContainer.module.css  # Button grid styles
│   ├── App.jsx                          # Root layout
│   ├── App.module.css                   # App-level styles
│   ├── assets/
│   │   └── react.svg
│   └── main.jsx
├── public/
│   └── vite.svg
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧠 Concepts Practiced

| Concept | Description |
|:--------|:------------|
| **CSS Modules** | Scoped styles per component (`.module.css`) |
| **Dynamic Rendering** | Rendering buttons from array with `.map()` |
| **Component Architecture** | Splitting UI into `Display` and `ButtonsContainer` |
| **Props** | Passing data between components |
| **Array Methods** | Using `.map()` for dynamic UI generation |

---

## 🔗 Part of [React Practice Repository](https://github.com/mananjani2102/react-practice)
