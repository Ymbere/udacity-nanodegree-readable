const api = "https://reactnd-forum-api.herokuapp.com"

let token = localStorage.token

if  (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
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
