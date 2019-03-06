import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import posts from './PostReducer'
import categories from './CategoryReducer'

export default combineReducers({
    posts,
    categories,
    loadingBar: loadingBarReducer,
})
