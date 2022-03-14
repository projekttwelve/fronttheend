# Komodo

## brief overview/Description

This repository contains the code for the REST front-end web application of project [Komodo](https://safe-fjord-62405.herokuapp.com/).
Komodo is a website for a company that want's to hire seasonal workers. Peopole can send their applications and recruiters can sift through applications and accept/reject them.
This is done part of a course. The code for the server side, backend application is [here](https://github.com/Pho333nix/komodo).

## Project overview & structue

### Redux with @redux/tookit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
This React web application uses [Redux](https://redux.js.org/) for state managment. 
We use the library @redux/toolkit which helps with the boilerplate code immensly.
Almost all of the redux logic should be in files called xxxSlice.js. 
We export the Redux action creators, the reducers and functions from the Slice files. The root reducer is in src/app/store. There, all reducers are combined and a store created which is then provided to App.js (the root component).

### components

All the views (components) are placed in a folder of their own within the src/features folder and any view that needs redux logic
gets a slice file in that same folder. The components are all function components and use react hooks to handle local states, react life-cycles etc. 

### services

All request to server are handled with axios. The folder "services" reflect the services found in the back-end application. src/services should contain asychrounous request code used to handle communications with the server. The services should be imported into the relevant slice file and be executed there using 
thunk-middleware. 

### tests

The src/test folder contains jest tests written to test the code, that folder should have the exact same structure as the src folder (minus the tests folder itself). 

### documentation

We use [JSdocs](https://jsdoc.app/) to document the code and all the documentation
needed is in the "docs" folder. therin lies an html file that shows documentation and links between dependencies. This file need to be built, use:
`npm run docs`


### Guides & Further reading

Refer to these websites to implement some of patterns correctly.

* We followed the official [redux tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) and did not deviate from it. Following it will show you exactly how to keep building on this code.

* [Formik tutorial](https://formik.org/docs/tutorial): The forms we use in the application use Formik components.

* [Yup documentation](https://www.npmjs.com/package/yup): we used yup for form validation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


