import { addPostToServer, voteOnPost, deletePostFromServer } from '../utils/API'

export const RECEIVE_POSTS                = 'RECEIVE_POSTS'
export const ADD_POST                     = 'ADD_POST'
export const UP_VOTE_POST                 = 'UP_VOTE_POST'
export const DOWN_VOTE_POST               = 'DOWN_VOTE_POST'
export const DELETE_POST                  = 'DELETE_POST'
export const SORT_POST_BY_TIMESTAMP       = 'SORT_POST_BY_TIMESTAMP'
export const SORT_POST_BY_VOTESCORE       = 'SORT_POST_BY_VOTESCORE'
export const RECEIVE_POST_COMMENTS        = 'RECEIVE_POST_COMMENTS'

export function receive_posts (posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function receive_post_comments (comments) {
    return {
        type: RECEIVE_POST_COMMENTS,
        comments
    }
}

function addPost ( post ) {
    return {
        type: ADD_POST,
        post
    }
}

function upVotePost ({ id }) {
    return {
        type: UP_VOTE_POST,
        id
    }
}

function downVotePost ({ id }) {
    return {
        type: DOWN_VOTE_POST,
        id
    }
}

function deletePost ({ id, post }) {
    return {
        type: DELETE_POST,
        id,
        post
    }
}

export function sortPostByTimestamp ( optionValue ) {
    return {
        type: SORT_POST_BY_TIMESTAMP,
        optionValue
    }
}

export function sortPostByVoteScore ( optionValue ){
    return {
        type: SORT_POST_BY_VOTESCORE,
        optionValue
    }
}

export function handleAddPost(post_info) {
    return (dispatch) => {
        return addPostToServer (post_info)
            .then((post) => dispatch(addPost(post)))
                .catch((e) => {
                    console.warn('Error in handleAddPost: ', e)
                })
    }
}

export function handleUpVotePost (post_info) {
    return (dispatch) => {
        dispatch(upVotePost(post_info))

        return voteOnPost(post_info.id, 'upVote')
            .catch((e) => {
                console.warn('Error in handleUpVotePost: ', e)
                dispatch(downVotePost(post_info))
                alert('Error ocurred in Up Voating the post try again later')
            })
    }
}

export function handleDownVotePost (post_info) {
    return (dispatch) => {
        dispatch(downVotePost(post_info))

        return voteOnPost(post_info.id, 'downVote')
            .catch((e) => {
                console.warn('Error in handleDownVotePost: ', e)
                dispatch(upVotePost(post_info))
                alert('Error ocurred in Down Voating the post try again later')
            })
    }
}

export function handleDeletePost (post_info) {
    return (dispatch) => {
        dispatch(deletePost(post_info))

        return deletePostFromServer (post_info.id)
            .catch((e) => {
                console.warn('Error in handleDeletePost: ', e)
                dispatch(addPost(post_info.post))
                alert('Error ocurred in post deletion try again later')
            })
    }
}
