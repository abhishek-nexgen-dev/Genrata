# 🎨 Prettier Setup (React + Vite)

This guide explains how to install and configure **Prettier** in a React + Vite project to automatically format your code and maintain a consistent coding style.

---

# What is Prettier?

Prettier is an opinionated code formatter.

It automatically formats:

- JavaScript
- TypeScript
- React (JSX)
- HTML
- CSS
- JSON
- Markdown
- YAML

Instead of worrying about formatting, Prettier keeps your code clean and consistent.

---

# Why Use Prettier?

✅ Consistent code style

✅ Automatically formats code

✅ Improves readability

✅ Saves development time

✅ Reduces unnecessary Git changes

✅ Works with VS Code

---

# Step 1: Install Prettier

Open the terminal inside your project.

```bash
npm install --save-dev prettier
```

---

# Step 2: Create a Prettier Configuration

Create a file in the project root.

```
.prettierrc.json
```

Add the following configuration:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto"
}
```

---

# Step 3: Ignore Files

Create another file.

```
.prettierignore
```

Add:

```text
node_modules
dist
build
coverage
package-lock.json
pnpm-lock.yaml
yarn.lock

```

Prettier will ignore these files and folders.

---

# Step 4: Install the VS Code Extension

Open **VS Code**.

Go to:

```
Extensions (Ctrl + Shift + X)
```

Search for:

```
Prettier - Code Formatter
```

Install the extension by:

```
Prettier
by Prettier
```

---

# Step 5: Enable Format on Save

Open VS Code Settings.

Search:

```
Format On Save
```

Enable it.

Or add this to your VS Code settings (`settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Now every time you save a file (`Ctrl + S`), Prettier will automatically format it.

---

# Step 6: Format the Entire Project

Run:

```bash
npx prettier . --write
```

This formats all supported files in your project.

---

# Before Formatting

```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
```

---

# After Formatting

```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
```

---

# Useful Commands

### Format a Single File

```bash
npx prettier src/App.jsx --write
```

---

### Check Formatting

```bash
npx prettier . --check
```

---

### Format Everything

```bash
npx prettier . --write
```

---

# Recommended Project Files

```
my-project
│
├── .prettierrc
├── .prettierignore
├── package.json
├── vite.config.js
│
└── src
```

---

# Recommended `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto"
}
```

---

# Common Errors

## Error

```
prettier: command not found
```

### Solution

Install Prettier:

```bash
npm install --save-dev prettier
```

---

## Error

VS Code is not formatting files.

### Solution

Make sure:

- Prettier extension is installed.
- `editor.formatOnSave` is enabled.
- Prettier is the default formatter.

---

## Error

Formatting is different on another computer.

### Solution

Commit your `.prettierrc` and `.prettierignore` files to your repository so the entire team uses the same formatting rules.

---

# Best Practices

✅ Enable **Format on Save**

✅ Commit `.prettierrc`

✅ Commit `.prettierignore`

✅ Format before committing code

✅ Use the same formatting rules across the entire project

---

# Quick Setup Summary

### Install

```bash
npm install --save-dev prettier
```

### Create Configuration

```
.prettierrc
```

### Ignore Files

```
.prettierignore
```

### Enable Format on Save

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Format Project

```bash
npx prettier . --write
```

---

# 🎉 Congratulations!

You have successfully configured **Prettier** in your React + Vite project. Your code will now be automatically formatted with a consistent style, making it cleaner, easier to read, and simpler to maintain.
