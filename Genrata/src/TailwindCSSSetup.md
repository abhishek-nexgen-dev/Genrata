# 🚀 Tailwind CSS Setup with React + Vite (Website & Tauri)

This guide shows how to install and configure **Tailwind CSS v4** in both a normal **React + Vite** project and a **Tauri + React + Vite** project.

---

# Step 1: Install Tailwind CSS

Open your terminal inside your React project and run:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# Step 2: Configure Vite

Import the Tailwind Vite plugin and add it to the `plugins` array.

---

## ✅ React + Vite (Website)

### vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

---

## ✅ React + Vite + Tauri

### vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Prevent Vite from clearing the terminal
  clearScreen: false,

  // Tauri development server configuration
  server: {
    port: 1420,
    strictPort: true,

    host: host || false,

    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,

    watch: {
      // Ignore Rust backend files
      ignored: ["**/src-tauri/**"],
    },
  },
}));
```

---

# Step 3: Configure CSS

Open

```
src/app.css
```

Delete everything inside the file and add:

```css
@import "tailwindcss";
```

That's it!

Unlike older versions of Tailwind, **Tailwind CSS v4** does **not** require:

* `tailwind.config.js`
* `postcss.config.js`
* `@tailwind base`
* `@tailwind components`
* `@tailwind utilities`

The single import is enough.

---

# Step 4: Import CSS

Open your `main.jsx` (or `main.tsx`) and make sure `app.css` is imported.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

# Step 5: Test Tailwind

Replace your `App.jsx` with:

```jsx
function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-900">
      <h1 className="text-5xl font-bold text-cyan-400">
        Tailwind CSS is Working 🚀
      </h1>
    </div>
  );
}

export default App;
```

Run the project:

```bash
npm run dev
```

If everything is configured correctly, you'll see a centered cyan heading on a dark background.

---

# Project Structure

```
my-project/
│
├── src/
│   ├── App.jsx
│   ├── app.css
│   ├── main.jsx
│
├── vite.config.js
├── package.json
└── node_modules/
```

---

# Common Errors & Fixes

## Error 1

```
Cannot find package '@tailwindcss/vite'
```

### Solution

Install the package:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Error 2

```
Unknown utility class
```

### Solution

Make sure your CSS file contains only:

```css
@import "tailwindcss";
```

---

## Error 3

Tailwind styles are not applied.

### Check these points:

* `app.css` is imported in `main.jsx`.
* `tailwindcss()` is added to the Vite plugins.
* You restarted the Vite development server after installation.

Restart the server:

```bash
npm run dev
```

---

## Error 4

```
Module not found
```

Delete dependencies and reinstall:

```bash
rm -rf node_modules package-lock.json

npm install
```

Then start the server again:

```bash
npm run dev
```

---

# Installation Summary

### Install

```bash
npm install tailwindcss @tailwindcss/vite
```

### Configure Vite

```javascript
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

### Configure CSS

```css
@import "tailwindcss";
```

### Start Development Server

```bash
npm run dev
```

---

# Congratulations 🎉

Your React + Vite (Website) or React + Vite + Tauri project is now fully configured with **Tailwind CSS v4**. You can start using Tailwind utility classes immediately without any additional configuration files.
