<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

# 🕰️ Bharat Clock — Version 1

> A real-time **digital clock** application built with React and styled with **Bootstrap 5**, demonstrating component composition and clean architecture.

---

## 📖 About

Bharat Clock is a beautifully designed clock application that displays the current time in real-time. It is composed of three modular React components:

- **ClockHeading** — Displays the application title
- **ClockSlogan** — Shows a motivational slogan
- **CurrentTime** — Renders the live, updating current time

---

## ✨ Features

- ⏱️ Real-time clock display that updates every second
- 🎨 Styled with **Bootstrap 5** for a polished look
- 📦 Clean component composition pattern
- 🏗️ Modular architecture with separate heading, slogan, and time components
- ⚡ Vite-powered blazing-fast development

---

## 🚀 Getting Started

```bash
# Navigate to project directory
cd projects/bharat-clock-version-1

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📁 Project Structure

```
bharat-clock-version-1/
├── src/
│   ├── Components/
│   │   ├── ClockHeading.jsx    # Clock title component
│   │   ├── ClockSlogan.jsx     # Slogan display component
│   │   └── CurrentTime.jsx     # Live time component
│   ├── App.css
│   ├── App.jsx                 # Root layout composing all components
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧠 Concepts Practiced

| Concept | Description |
|:--------|:------------|
| **Component Composition** | Combining `ClockHeading`, `ClockSlogan`, `CurrentTime` |
| **Bootstrap Integration** | Using Bootstrap CSS via npm in React |
| **Real-time Updates** | Live clock using JavaScript Date API |
| **Functional Components** | Simple, focused components |
| **Clean Architecture** | Separation of concerns in component design |

---

## 🔗 Part of [React Practice Repository](https://github.com/mananjani2102/react-practice)
