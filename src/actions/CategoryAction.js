export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receive_categories (categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}
