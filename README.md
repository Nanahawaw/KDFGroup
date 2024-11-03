# React + Vite

## Setup:

- git clone and go into the projects root directory "kdfg-frontend"

In order to keep consistency on the project, and avoid future deployment errors, we'll be building vite with **YARN** NOT **NPM**
I deleted package-lock.json, but we should keep package.json because yarn also uses it for dependency definitions.
**DO NOT DO** `npm install`

- `yarn install`
  (if `yarn install` not working, you might need to update the version of node)
  - `nvm install 18.18.0`
  - `nvm use 18.18.0`
  - `yarn install` should work now
- `yarn build`
- `yarn dev`
  This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
