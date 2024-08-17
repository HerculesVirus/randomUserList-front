# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Components](#components)
- [Context and State Management](#context-and-state-management)
- [Plugins](#plugins)
- [License](#license)

## Features

- **React and Vite**: Fast and optimized development with Vite and React.
- **HMR (Hot Module Replacement)**: Fast refresh using official Vite plugins.
- **ESLint Setup**: Includes basic ESLint rules to ensure code quality and consistency.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tooling for faster builds and development.
- **ESLint**: A static analysis tool for identifying and fixing problematic patterns in JavaScript code.
- **Tailwind CSS**: (Optional) Utility-first CSS framework for rapid UI development.

## Project Structure

```
src/
+-- components/ # Contains reusable React components
|   +-- Spinner.jsx # Displays a loading spinner while fetching data
|   +-- UserList.jsx # Displays the list of users and pagination controls
+-- hooks/
|   +-- UsersContext.jsx # Custom hook to get the list of users
+-- pages/
|   +--UsersPage.jsx # Main page component to fetch and display users
+-- App.jsx # Main App component, wraps the app with UsersProvider
+-- main.jsx # Entry point for the React app
```

# Getting Started

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install Dependencies**:
    ```bash
      npm install
    
3.**Running the Project**:
    ```bash
    npm run dev
```
