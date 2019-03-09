# Readable Project
Readable is the second project for the React Udacity Nanodegree program
# Documentation

## How to use

### Run the frontend

* Clone the frontend repository  `https://github.com/Ymbere/udacity-nanodegree-readable.git`.
* Go to the app folder  `cd udacity-nanodegree-readable`
* Install the dependencies `npm install`
* Open the app on your browser on (http://localhost:3000/)

### Run the backend server

* Clone the backend server from this link `https://github.com/udacity/reactnd-project-readable-starter.git`
* Go to the server folder `cd reactnd-project-readable-starter/api-server`
* Install the depenencies `npm install`
* Run the server `node server`

---
__Note__
The API is configure to run in http://localhost:3001 but you can change it on API.js file on line 1

____

## What You're Gettng
```bash

├── node_modules
├── public
├── src
│    ├── actions
│    │    ├── CategoryActions.js #Contains the action creator for the categorys
│    │    ├── PostActions.js    #Contains the action creator for post
│    │    └── Shared.js #Contains shared actions creator
│    │
│    ├── assets
│    │   └── css #Contains the css used in the app
│    │       ├──bootstrap.min.css
│    │       ├── home.css
│    │       └── post.css
│    │
│    ├── components
│    │   ├── App.js
│    │   ├── ComentsList.js
│    │   ├── CommentCard.js #Component that render a comment
│    │   ├── EditComment.js
│    │   ├── EditPost.js
│    │   ├── Filter.js #Component that render the filter of posts and comments
│    │   ├── Footer.js #Component that render the footer of the page
│    │   ├── Header.js #Component that render the header of the page
│    │   ├── HomePage.js
│    │   ├── HomePageCategory.js
│    │   ├── NewCommentForm.js #Component tha render a form to add a commment
│    │   ├── NotFound.js #Component that render the not found page
│    │   ├── PostCard.js #Component that render one post
│    │   ├── PostDetails.js #Component that render the post detail page
│    │   ├── PostList.js #Component that render a list os posts
│    │   └── Sidebar.js #Component that render the sidebar with the categories
│    │
│    ├── middleware
│    │   ├── index.js # This is where Redux 'applyMiddleware' is stored, it mix all middlewares used for this React-Redux Project
│    │   └── logger.js # Redux Middleware to log all actions
│    │
│    ├── reducers
│    │   ├── CategoryReducer.js # Contains the category reducer
│    │   ├── index.js # This is where Redux 'combineReducers' is stored, it mix all reducers used for this React-Redux Project
│    │   └── PostReducer.js # Contains the post reducer
│    │
│    ├── utils
│    │   └── API.js # Contains the methods to connect with the backend API
│    │
│    ├── index.js
│    └──
├── .gitignore
├──  package.lock.json
├──  package.json
├──  README.md
└──
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
