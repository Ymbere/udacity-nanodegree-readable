export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receive_posts (posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}
