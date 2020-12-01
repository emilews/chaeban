# Chaeban Evaluation Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Yarn](https://classic.yarnpkg.com/en/docs/install/).\
It also uses Material-UI for most components.

## How to run

In the project directory, you need to run:

### `yarn install`

Installs all the dependencies for the project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Builds the app for production to the `build` folder.

## Source code directories explanation

All the code is located at the `src` directory, except for the `index.js` and `App.js` files, which are only wrappers with no functions written for them.

### `src/components`

All the rendered components are in this directory, including the transition and theme wrappers.

### `src/routes`

Both routes are in this directory, using React Router V5.

### `src/utils`

The utilities directory, saving and retrieving data from localStorage for the components to use, and a URI verifier for the `/output` route.
