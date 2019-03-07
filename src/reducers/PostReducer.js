import {
    RECEIVE_POSTS, ADD_POST, UP_VOTE_POST, DOWN_VOTE_POST, DELETE_POST,
    SORT_POST_BY_TIMESTAMP,
    SORT_POST_BY_VOTESCORE,
    RECEIVE_POST_COMMENTS,
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
                        post.voteScore += 1
                    }
                }
                return post
            })

        case DOWN_VOTE_POST :
            return state.map(post => {
                if (post.id === action.id){
                    return {
                        post.voteScore -= 1
                    }
                }
                return post
            })

        case RECEIVE_POST_COMMENTS :
            return state.map(post => {
                return {
                    ...post,
                    loading: false,
                    postComments: action.comments
                }
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
