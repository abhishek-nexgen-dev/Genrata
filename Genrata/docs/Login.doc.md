# 📖 Login Page Documentation

## Overview

The **LoginPage** is the **Parent Component** of the authentication module.

Its responsibility is **not** to contain the login form or branding details directly. Instead, it combines multiple child components to build the complete page.

Following this approach keeps the code:

- Clean
- Reusable
- Easy to maintain
- Beginner friendly
- Scalable for large projects

---

# Component Hierarchy

```
App
│
└── LoginPage (Parent Component)
    │
    ├── LeftPanel (Child Component)
    │
    └── LoginForm (Child Component)
```

Think of it like this:

```
LoginPage
 ├── LeftPanel
 └── LoginForm
```

The parent only decides **what components appear on the page**.

The children decide **how each section looks.**

---

# Folder Structure

```
src
│
├── Components
│   ├── LeftPanel.jsx
│   └── LoginForm.jsx
│
├── Pages
│   └── LoginPage.jsx
│
└── App.jsx
```

Each file has only **one responsibility.**

---

# LoginPage.jsx

```jsx
import LeftPanel from "../Components/LeftPanel";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#0F0F17] flex items-center justify-center px-6 py-10">
      <section className="w-full max-w-6xl overflow-hidden rounded-2xl bg-[#18181B] shadow-2xl md:grid md:grid-cols-2">
        <LeftPanel />

        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
```

---

# Responsibilities of LoginPage

The LoginPage has only one responsibility.

It combines the child components together.

It does **NOT**

- handle login logic
- store form state
- display branding
- validate fields

Instead it only creates the page layout.

---

# Why LoginPage is the Parent Component?

Because it owns the page.

Every authentication page needs a layout.

For example

```
Login Page

Left Panel

Login Form
```

Signup Page

```
Left Panel

Signup Form
```

Forgot Password Page

```
Left Panel

Forgot Password Form
```

Since every page uses the same Left Panel, we simply reuse it.

---

# Understanding Every HTML Tag

## `<main>`

```
<main>
```

Represents the primary content of the webpage.

Only one main tag should exist per page.

Perfect for page layouts.

---

## `<section>`

```
<section>
```

Groups related content together.

In our project

The section is the Login Card.

Inside this card we have

```
LeftPanel

LoginForm
```

---

# Understanding Tailwind Classes

## min-h-screen

```
min-h-screen
```

Means

```
Minimum Height = 100vh
```

So the page always fills the browser.

---

## bg-[#0F0F17]

Sets the page background.

```
Dark Background
```

---

## flex

Turns the container into Flexbox.

```
display:flex;
```

---

## items-center

Centers children vertically.

```
align-items:center;
```

---

## justify-center

Centers children horizontally.

```
justify-content:center;
```

---

## px-6

Horizontal padding.

```
Left Padding

Right Padding
```

---

## py-10

Vertical padding.

```
Top Padding

Bottom Padding
```

---

# Login Card

```
<section>
```

Contains the entire login UI.

---

## w-full

Take full available width.

---

## max-w-6xl

Maximum width.

Even on a large monitor the card will not become too wide.

---

## overflow-hidden

Hides anything outside the rounded corners.

Useful when the LeftPanel contains an image.

Without it

```
Image
██████████
Rounded Card
```

The image may overflow.

---

## rounded-2xl

Large rounded corners.

---

## bg-[#18181B]

Card background.

Slightly lighter than the page.

Creates visual separation.

---

## shadow-2xl

Large shadow.

Makes the card float above the background.

---

## md:grid

On medium screens and larger

Turn the layout into Grid.

---

## md:grid-cols-2

Split the layout into

```
50%

50%
```

Result

```
+----------------------+----------------------+

Left Panel

Login Form

+----------------------+----------------------+
```

---

# Child Component 1

```
<LeftPanel />
```

Purpose

Displays

- Brand Logo
- Image
- Brand Name
- Tagline
- Company Information

It is completely independent.

It knows nothing about login.

---

# Passing Props

```
<LeftPanel
    imgUrl="https://..."
/>
```

Here

```
imgUrl
```

is called a Prop.

Props allow parents to send data to children.

Example

```
Parent

↓

imgUrl

↓

Child
```

Inside LeftPanel

```
const LeftPanel = ({ imgUrl }) => {

}
```

Now the child can display the image.

---

# Child Component 2

```
<LoginForm />
```

Purpose

Contains

- Heading
- Email Input
- Password Input
- Remember Me
- Forgot Password
- Login Button
- Social Login
- Footer

Everything related to login belongs here.

---

# Why Use Components?

Instead of writing

```
200 Lines
```

inside LoginPage

We divide it into

```
LoginPage

↓

LeftPanel

↓

LoginForm
```

Benefits

✔ Cleaner Code

✔ Easier Debugging

✔ Reusable Components

✔ Easy Maintenance

✔ Better Team Collaboration

---

# Responsive Layout

Desktop

```
+-------------------+-------------------+

Left Panel

Login Form

+-------------------+-------------------+
```

Tablet

```
+-------------------+

Login Form

+-------------------+
```

The LeftPanel can be hidden using

```
hidden md:flex
```

---

# Data Flow

```
App

↓

LoginPage

↓

LeftPanel

↓

Image

```

and

```
App

↓

LoginPage

↓

LoginForm

↓

Input Fields
```

React data flows from **Parent → Child** through props.

---

# Login Page Responsibilities

✅ Display page layout

✅ Arrange child components

✅ Pass props to children

✅ Maintain responsive structure

✅ Keep the UI organized

---

# What LoginPage Should NOT Do

❌ Form Validation

❌ API Calls

❌ Authentication Logic

❌ Password Visibility

❌ Input State Management

These responsibilities belong to the **LoginForm** component or other specialized hooks/services.

---

# Best Practices

- Keep one component responsible for one job.
- Use semantic HTML (`main`, `section`, `header`, `form`).
- Reuse components instead of duplicating code.
- Pass data from parent to child using props.
- Keep layouts in page components and business logic inside feature components.
- Use Tailwind utility classes to build responsive layouts.
- Write meaningful comments so beginners understand the code.
- Design components so they can be reused by Login, Signup, Forgot Password, and Reset Password pages.

---

# Final Architecture

```
App
│
├── LoginPage
│      │
│      ├── LeftPanel
│      │      │
│      │      ├── Image
│      │
│      │
│      │
│      │
│      └── LoginForm
│             │
│             ├── Heading
│             ├── Email Input
│             ├── Password Input
│             ├── Remember Me
│             ├── Forgot Password
│             ├── Login Button
│             ├── Social Login
│             └── Footer
│
└── Other Pages...
```

This architecture follows the React principle of **component composition**, where a parent assembles smaller, focused child components into a complete, maintainable user interface.
