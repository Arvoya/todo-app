# Todo-App

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your
environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your
Editor (not mandatory).

### Install

    git clone git@github.com:Arvoya/todo-app.git
    cd PROJECT
    npm install

### Configure app

<!-- Any environment configuration steps. -->

### Start & watch

    npm run dev
    npm start

## Architecture

![uml](./public/uml.png)

```text
├── .DS_Store
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── .DS_Store
│   └── uml.png
├── src
│   ├── App.tsx
│   ├── Components
│   │   ├── Auth
│   │   │   └── index.tsx
│   │   ├── Footer
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   └── index.tsx
│   │   ├── List
│   │   │   └── index.tsx
│   │   ├── Login
│   │   │   ├── FloatingLabelInput.module.css
│   │   │   └── index.tsx
│   │   ├── Settings
│   │   │   └── index.tsx
│   │   └── Todo
│   │       ├── Todo.test.jsx
│   │       └── index.tsx
│   ├── Context
│   │   ├── Auth
│   │   │   └── index.tsx
│   │   ├── Items
│   │   │   └── index.tsx
│   │   └── Settings
│   │       ├── Settings.test.tsx
│   │       └── index.tsx
│   ├── hooks
│   │   ├── form.js
│   │   └── styles.js
│   └── main.jsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Change Log

1.0.0

## Collaborators

Brock Britton