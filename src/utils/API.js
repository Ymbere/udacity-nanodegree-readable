const api = "https://reactnd-forum-api.herokuapp.com"

let token = localStorage.token

if  (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

const generateID = () => {
    return Math.random().toString(36).substr(2, 9)
}

export const getInitialData = () => {
    return Promise.all([
        fetchCategories(),
        fetchPosts(),
    ])
}

export const getInitialDataCategory = (category) => {
    return Promise.all([
        fetchCategories(),
        fetchPostsCategorie(category),
    ])
}

export const getInitialDataPost = (post_id) => {
    return Promise.all([
        fetchPostByID(post_id),
        fetchPostComments(post_id)
    ])
}

export const voteOnPost = (post_id, option) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json())

export const voteOnPostComment = (comment_id, option) =>
    fetch(`${api}/comments/${comment_id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json())

export const addPostToServer = (post_data) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: generateID(),
            ...post_data
        })
    }).then(res => res.json())

export const deletePostFromServer = (post_id) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())

const fetchPosts = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

const fetchCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

const fetchPostsCategorie = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

const fetchPostByID = (post_id) =>
    fetch(`${api}/posts/${post_id}`, { headers })
    .then(res => res.json())
    .then(data => data)

const fetchPostComments = (post_id) =>
    fetch(`${api}/posts/${post_id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
