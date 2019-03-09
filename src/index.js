import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import middleware from './middleware'

import App from './components/App';

//css
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/home.css'
import '../src/assets/css/post.css'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
