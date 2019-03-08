import React, { Component } from 'react'
import { connect } from 'react-redux'

//icons
import { FaRegThumbsUp, FaRegThumbsDown, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { handleUpVoteComment, handleDownVoteComment, handleDeleteComment } from '../actions/PostActions';

class CommentCard extends Component {
    handleUpVoteComment = (e) => {
        e.preventDefault()

        const { dispatch, comment } = this.props

        dispatch(handleUpVoteComment({
            comment_id: comment.id,
            post_id: comment.parentId
        }))
    }

    handleDownVoteComment = (e) => {
        e.preventDefault()

        const { dispatch, comment } = this.props

        dispatch(handleDownVoteComment({
            comment_id: comment.id,
            post_id: comment.parentId
        }))
    }

    handleDeletePostComment = (e) => {
        e.preventDefault()

        const { dispatch, comment} = this.props

        dispatch(handleDeleteComment({
            comment_id: comment.id,
            post_id: comment.parentId,
            comment: comment
        }))
    }
    render() {
        const { comment } = this.props
        const { author, body, timestamp, voteScore } = comment
        return(
            <div>
                <div className="post">
                    <div className="tb">
                        <div className="td p-r-hdr">
                            <div className="p-u-info">
                                <span>{body}</span>
                            </div>
                            <div className="p-dt">
                                <span>commented by {author} / {new Date(timestamp).toLocaleString()}</span>
                                <span className="vote">Vote: {voteScore}</span>
                            </div>
                        </div>
                        <button className="td p-opt"><FaEdit />Edit</button>
                        <button className="td p-opt-delete" onClick={this.handleDeletePostComment}><FaRegTrashAlt />Excluir</button>
                    </div>
                    <div>
                        <div className="p-acts">
                            <button className="p-act like" onClick={this.handleUpVoteComment}><FaRegThumbsUp /></button>
                            <button className="p-act dislike" onClick={this.handleDownVoteComment}><FaRegThumbsDown /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ posts }, { parentId, id }) {
    let comment = null;

    comment = posts.find( p => p.id === parentId).postComments.find( c => c.id === id)

    return {
        comment
    }
}

export default connect(mapStateToProps)(CommentCard)
