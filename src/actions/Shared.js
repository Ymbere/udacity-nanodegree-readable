import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData, getInitialDataCategory, getInitialDataPost } from '../utils/API'
import { receive_posts, receive_post_comments } from './PostActions'
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

export function handleInitialDataPost (post_id) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialDataPost(post_id)
            .then(([ posts, comments ]) => {
                dispatch(receive_posts([posts]))
                dispatch(receive_post_comments(comments))
                dispatch(hideLoading())
            })
    }
}
