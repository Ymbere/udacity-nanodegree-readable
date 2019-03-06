import { RECEIVE_CATEGORIES } from '../actions/CategoryAction'

export default function categories (state=[], action) {
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories
        default :
            return state
    }
}
