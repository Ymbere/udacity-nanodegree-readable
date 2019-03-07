import React, { Component } from 'react'
import CommentCard from './CommentCard';

class ComentList extends Component {
    render() {
        const { comments } = this.props
        return(
            comments.map((comment) => (
                <CommentCard id={comment.id} parentId={comment.parentId}  key={comment.id} />
            ))
        )
    }
}

export default ComentList
