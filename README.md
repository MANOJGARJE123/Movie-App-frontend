# React + Vite

# Movie Explorer (React + Vite)

A React app to browse popular movies from TMDB and manage a favorites list. Favorites are stored in localStorage so they persist across refreshes.

## Features

- Browse popular movies with posters and release dates
- Add/remove favorites using the ❤️ button
- Favorites page displayed in a grid layout
- LocalStorage persistence

## Tech Stack

- React
- Vite
- React Router
- TMDB API

## Getting Started

1) Install dependencies
   - npm install

2) Create a .env file in the project root
   - VITE_MOVIE_API=your_tmdb_api_key
   - VITE_BASE_URL=https://api.themoviedb.org/3

3) Start the dev server
   - npm run dev

## Scripts

- npm run dev: start dev server
- npm run build: build for production
- npm run preview: preview production build
- npm run lint: run ESLint

## Project Structure

- src/components: UI components (MovieCard, NavBar)
- src/page: pages (Home, Favorites)
- src/contexts: MovieContext for favorites
- src/services: TMDB API functions
- src/css: app styles# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
