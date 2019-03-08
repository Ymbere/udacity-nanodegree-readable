import { addPostToServer, voteOnPost, deletePostFromServer, voteOnPostComment, addCommentToServer, deleteCommentFromServer } from '../utils/API'

export const RECEIVE_POSTS                = 'RECEIVE_POSTS'
export const ADD_POST                     = 'ADD_POST'
export const UP_VOTE_POST                 = 'UP_VOTE_POST'
export const DOWN_VOTE_POST               = 'DOWN_VOTE_POST'
export const DELETE_POST                  = 'DELETE_POST'
export const SORT_POST_BY_TIMESTAMP       = 'SORT_POST_BY_TIMESTAMP'
export const SORT_POST_BY_VOTESCORE       = 'SORT_POST_BY_VOTESCORE'
export const RECEIVE_POST_COMMENTS        = 'RECEIVE_POST_COMMENTS'
export const UP_VOTE_POST_COMMENT         = 'UP_VOTE_POST_COMMENT'
export const DOWN_VOTE_POST_COMMENT       = 'DOWN_VOTE_POST_COMMENT'
export const ADD_COMMENT                  = 'ADD_COMMENT'
export const DELETE_COMMENT               = 'DELETE_COMMENT'

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

function addComment ( comment_info ) {
    return {
        type: ADD_COMMENT,
        comment_info
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

function deleteComment ({ comment_id, post_id, comment }) {
    return {
        type: DELETE_COMMENT,
        comment_id,
        post_id,
        comment
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

export function upVotePostComments ({ comment_id, post_id }) {
    return {
        type: UP_VOTE_POST_COMMENT,
        comment_id,
        post_id
    }
}

export function downVotePostComments ({ comment_id, post_id}) {
    return {
        type: DOWN_VOTE_POST_COMMENT,
        comment_id,
        post_id
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

export function handleAddComment(comment_info) {
    return (dispatch) => {
        return addCommentToServer(comment_info)
            .then((comment) => dispatch(addComment(comment)))
                .catch((e) => {
                    console.warn('Error in handleAddComent: ', e)
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

export function handleDeleteComment (comment_info) {
    return (dispatch) => {
        dispatch(deleteComment(comment_info))

        return deleteCommentFromServer (comment_info.comment_id)
            .catch((e) => {
                console.warn('Error in handleDeleteComment: ', e)
                dispatch(addComment(comment_info.comment))
                alert('Error ocurred in comment deletion try again later')
            })
    }
}

export function handleUpVoteComment (comment_info) {
    return (dispatch) => {
        dispatch(upVotePostComments(comment_info))

        return voteOnPostComment (comment_info.comment_id, 'upVote')
            .catch((e) => {
                console.warn('Error in handleUpVoteComment: ', e)
                dispatch(downVotePostComments(comment_info))
                alert('Error ocurred in Up Voating the Comment')
            })
    }
}

export function handleDownVoteComment (comment_info) {
    return (dispatch) => {
        dispatch(downVotePostComments(comment_info))

        return voteOnPostComment (comment_info.comment_id, 'downVote')
            .catch((e) => {
                console.log('Error in handleDownVoteComment: ', e)
                dispatch(upVotePostComments(comment_info))
                alert('Error ocurred in Down Voating the Comment')
            })
    }
}
