import React, { Component } from 'react'
import PostCard from './PostCard';

class PostList extends Component {
    render() {
        const { posts } = this.props
        return(
            posts.map((post) => (
                <PostCard id={post.id} key={post.id} />
            ))
        )
    }
}

export default PostList
