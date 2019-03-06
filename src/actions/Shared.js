import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData, getInitialDataCategory } from '../utils/API'
import { receive_posts } from './PostActions'
import { receive_categories } from './CategoryAction'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(([ categories, posts ]) =>{
                dispatch(receive_posts(posts))
                dispatch(receive_categories(categories.categories))
                dispatch(hideLoading())
            })
    }
}

export function handleInitialDataCategory (category) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialDataCategory(category)
            .then(([ categories, posts ]) =>{
                dispatch(receive_posts(posts))
                dispatch(receive_categories(categories.categories))
                dispatch(hideLoading())
            })
    }
}
