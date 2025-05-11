# Site satellite - dynamic frontend platform

A flexible and configurable frontend platform built with Next.js App Router, designed to support dynamic routing, styling, and layout rendering from JSON config. The platform is suitable for white-label setups, marketplaces, or client-specific deployments with theming, SEO, and modular UI components.

## Installation

To get started, clone the repository and install dependencies:

```
git clone ...
cd satelite-frontend

npm install
```

## Getting Started

To start the development server:

```
npm run dev

open http://localhost:3000
```

## Build & Start

### To build the app for production:

```
npm run build
```

### This will:
 - Compile the Next.js app
 - Generate static files
 - Prepare dynamic routes based on the configuration

### To preview the production build locally:
```
npm run start
```

### This will serve the compiled version at:
```
http://localhost:3000
```

## Running Tests Locally

### To run unit tests locally:
```
npm run test
```
### or in watch mode:
```
npm run test:watch
```

The project uses Vitest for testing.
### Test files should follow the naming convention:
- `*.test.ts`
- `*.test.tsx`

## Linting

### To lint the project using ESLint:
```
npm run lint
```

Ensure your code passes lint checks before opening a pull request.


## Project Structure

The project is organized to maximize flexibility, maintainability, and separation of concerns.
Below is a simplified structure:

```
/app
  /[[...slug]]         // Catch-all dynamic page
    page.tsx           // Renders layout from config
    types.ts           // Types for route structure
    utils.ts           // Path matching and helpers
  favicon.ico
  globals.css          // Tailwind and base styles
  layout.tsx           // Root layout with fonts + variables
  utils.ts             // Global layout helpers

/components            // UI components (server/client split supported)
/public                // Static assets
/types                 // Global TS types

.env                   // 🔒 ignored
.env.local             // 🔒 ignored
.gitignore             // 🔒 ignored
README.md              // Project documentation
siteConfig.json        // Configuration for routing, theme, SEO

eslint.config.mjs      // Lint rules
next.config.ts         // Next.js setup
tsconfig.json          // TypeScript setup
next-env.d.ts          // Next.js ambient types
```

## Configuration System

The platform is driven by a centralized configuration file: siteConfig.json.

  ### This file defines:
  `` structure of config still in progress``
- Color palette (cssVariables)
- Dynamic routes and layouts (routes)
- SEO metadata per page (seo)
- Props for individual components


## CI/CD: GitHub Actions
This project uses GitHub Actions to automate the following steps on every pull request:

- Lint the codebase using ESLint
- Run unit tests with Vitest
- Build the project with Next.js

 ### The workflow is located at:
```
.github/workflows/ci.yml
```
