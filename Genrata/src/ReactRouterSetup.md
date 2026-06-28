# 🚀 React Router Setup (React + Vite)

This guide explains how to install and configure **React Router DOM** in a React + Vite project.

---

# What is React Router?

React Router is the standard routing library for React applications.

It allows you to:

- Navigate between pages
- Create multiple routes
- Handle dynamic URLs
- Protect private routes
- Build Single Page Applications (SPA)

Without React Router, your React application only renders a single page.

---

# Step 1: Install React Router

Install React Router DOM.

```bash
npm install react-router-dom
```

---

# Step 2: Project Structure

A clean folder structure is recommended.

```
src
│
├── App.jsx
├── main.jsx
│
├── features
│   ├── Auth
│   │   ├── Pages
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   └── Components
│   │
│   └── Dashboard
│       └── Pages
│           └── DashboardPage.jsx
│
└── components
```

---

# Step 3: Configure Routes

Open

```
src/App.jsx
```

Import React Router components.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./features/Auth/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

# Understanding the Code

## BrowserRouter

```jsx
<BrowserRouter>
```

- Wraps the entire application.
- Enables routing using the browser's history API.
- There should only be one `BrowserRouter` in your application.

---

## Routes

```jsx
<Routes>
```

- A container for all routes.
- It checks the current URL and renders the matching route.

---

## Route

```jsx
<Route
    path="/"
    element={<LoginPage />}
/>
```

Each route has two important properties.

### path

The URL.

```jsx
path="/"
```

Examples

```
/
```

```
/login
```

```
/dashboard
```

```
/profile
```

---

### element

The component to render.

```jsx
element={<LoginPage />}
```

When the URL matches the path, React renders this component.

---

# Adding Multiple Routes

Example:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./features/Auth/Pages/LoginPage";
import RegisterPage from "./features/Auth/Pages/RegisterPage";
import DashboardPage from "./features/Dashboard/Pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

# Route Table

| URL | Component |
|------|-----------|
| `/` | LoginPage |
| `/register` | RegisterPage |
| `/dashboard` | DashboardPage |

---

# Dynamic Routes

React Router supports dynamic parameters.

```jsx
<Route
    path="/user/:id"
    element={<UserPage />}
/>
```

Example URLs

```
/user/1
```

```
/user/25
```

```
/user/100
```

Inside the component:

```jsx
import { useParams } from "react-router-dom";

function UserPage() {
    const { id } = useParams();

    return <h1>User ID : {id}</h1>;
}
```

---

# 404 Page

Handle unknown routes using `*`.

```jsx
<Route
    path="*"
    element={<NotFoundPage />}
/>
```

If no route matches, React Router renders the 404 page.

---

# Navigation

Use `Link` instead of `<a>`.

```jsx
import { Link } from "react-router-dom";

<Link to="/">
    Login
</Link>
```

```jsx
<Link to="/dashboard">
    Dashboard
</Link>
```

Using `<Link>` prevents a full page reload.

---

# Programmatic Navigation

Navigate using JavaScript.

```jsx
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    const login = () => {
        navigate("/dashboard");
    };

    return (
        <button onClick={login}>
            Login
        </button>
    );
}
```

---

# Nested Routes

```jsx
<Routes>

    <Route
        path="/dashboard"
        element={<DashboardLayout />}
    >

        <Route
            index
            element={<HomePage />}
        />

        <Route
            path="settings"
            element={<SettingsPage />}
        />

    </Route>

</Routes>
```

Nested routes help organize layouts like dashboards or admin panels.

---

# Best Practices

✅ Keep pages inside the `Pages` folder.

✅ Group features into separate folders.

✅ Use `Link` instead of `<a>`.

✅ Use `useNavigate()` for redirects.

✅ Create a `NotFoundPage`.

✅ Organize routes for better scalability.

---

# Common Errors

## Error

```
useNavigate() may be used only in the context of a Router
```

### Solution

Wrap your application with:

```jsx
<BrowserRouter>
```

---

## Error

```
No routes matched location
```

### Solution

Make sure the `path` exists or add a fallback route.

```jsx
<Route
    path="*"
    element={<NotFoundPage />}
/>
```

---

## Error

```
Cannot find module react-router-dom
```

### Solution

Install the package.

```bash
npm install react-router-dom
```

---

# Complete Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./features/Auth/Pages/LoginPage";
import RegisterPage from "./features/Auth/Pages/RegisterPage";
import DashboardPage from "./features/Dashboard/Pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
```

---

# Quick Setup Summary

### Install

```bash
npm install react-router-dom
```

### Wrap App

```jsx
<BrowserRouter>
```

### Create Routes

```jsx
<Routes>
    <Route path="/" element={<HomePage />} />
</Routes>
```

### Navigate

```jsx
<Link to="/dashboard" />
```

or

```jsx
navigate("/dashboard");
```

---

# 🎉 Congratulations!

You have successfully configured **React Router** in your React + Vite application. You can now create multiple pages, navigate between routes, handle dynamic URLs, implement protected routes, and build scalable Single Page Applications (SPAs).
