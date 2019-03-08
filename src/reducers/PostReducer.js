import {
    RECEIVE_POSTS, ADD_POST, UP_VOTE_POST, DOWN_VOTE_POST, DELETE_POST,
    SORT_POST_BY_TIMESTAMP,
    SORT_POST_BY_VOTESCORE,
    RECEIVE_POST_COMMENTS,
    UP_VOTE_POST_COMMENT,
    DOWN_VOTE_POST_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../actions/PostActions'

export default function posts (state=[], action){
    switch(action.type) {
        case RECEIVE_POSTS :
            return action.posts

        case ADD_POST :
            return [
                ...state,
                action.post
            ]

        case UP_VOTE_POST :
            return state.map(post => {
                if (post.id === action.id){
                    return {
                        ...post,
                        voteScore: post.voteScore + 1
                    }
                }
                return post
            })

        case DOWN_VOTE_POST :
            return state.map(post => {
                if (post.id === action.id){
                    return {
                        ...post,
                        voteScore: post.voteScore - 1
                    }
                }
                return post
            })

        case RECEIVE_POST_COMMENTS :
            return state.map(post => {
                return {
                    ...post,
                    postComments: action.comments
                }
            })

        case UP_VOTE_POST_COMMENT :
            return state.map(post => {
                if (post.id === action.post_id) {
                    let newPostComments = post.postComments;

                    newPostComments = newPostComments.map(pc => {
                        if (pc.id === action.comment_id) {
                            return {
                                ...pc,
                                voteScore: pc.voteScore + 1
                            }
                        }
                        return pc
                    })

                    return {
                        ...post,
                        postComments: newPostComments
                    }
                }
                return post
            })

        case DOWN_VOTE_POST_COMMENT :
            return state.map(post => {
                if (post.id === action.post_id) {
                    let newPostComments = post.postComments;

                    newPostComments = newPostComments.map(pc => {
                        if (pc.id === action.comment_id) {
                            return {
                                ...pc,
                                voteScore: pc.voteScore - 1
                            }
                        }
                        return pc
                    })

                    return {
                        ...post,
                        postComments: newPostComments
                    }
                }
                return post
            })

        case ADD_COMMENT :
            return state.map(post => {
                if (post.id === action.comment_info.parentId) {
                    let newPostComments = post.postComments
                    newPostComments = newPostComments.concat(action.comment_info)

                    return {
                        ...post,
                        postComments: newPostComments
                    }
                }
                return post
            })

        case DELETE_COMMENT :
            return state.map(post => {
                if (post.id === action.post_id) {
                    let newPostComments = post.postComments

                    newPostComments = newPostComments.filter(pc => pc.id !== action.comment_id)

                    return {
                        ...post,
                        postComments: newPostComments
                    }
                }
                return post
            })

        case DELETE_POST :
            return state.filter(post => post.id !== action.id)

        case SORT_POST_BY_TIMESTAMP :
            return state.slice().sort((a,b) => b.timestamp - a.timestamp)

        case SORT_POST_BY_VOTESCORE :
            return state.slice().sort((a,b) => b.voteScore - a.voteScore)

        default :
            return state
    }
}
