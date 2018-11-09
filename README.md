# react-ts-starter

[![Build Status](https://travis-ci.org/rjoydip/react-ts-starter.svg?branch=master)](https://travis-ci.org/rjoydip/react-ts-starter)
[![CircleCI](https://circleci.com/gh/rjoydip/react-ts-starter.svg?style=svg)](https://circleci.com/gh/rjoydip/react-ts-starter)
[![License](https://img.shields.io/npm/l/make-coverage-badge.svg)](https://github.com/rjoydip/react-ts-starter/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React typescript project starter.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Supported Browsers](#supported-browsers)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  .env
  .circleci/
    .circle.yml
  .vscode/
    launch.json
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  scripts/
    deploy.js
  src/
    App/
      App.css
      App.test.jsx
      App.tsx
      logo.svg
    index.css
    index.tsx
    setupTest.ts
    sw.ts
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.tsx` is the TypeScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any TS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run lint`

Check typescript linting.

### `npm run analyze`

Build analyze.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
