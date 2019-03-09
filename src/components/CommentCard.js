import React, { Component } from 'react'
import { connect } from 'react-redux'

//icons
import { FaRegThumbsUp, FaRegThumbsDown, FaEdit, FaRegTrashAlt, FaRegTired } from "react-icons/fa";
import { handleUpVoteComment, handleDownVoteComment, handleDeleteComment } from '../actions/PostActions';
import NewCommentForm from './NewCommentForm';
import EditComment from './EditComment';

class CommentCard extends Component {
    state = {
        edit: 0,
    }
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

    handleEdit = (e) => {
        e.preventDefault()
        this.setState({ edit: 1})
    }

    toggleToNormal = () => {
        this.setState({
            edit: 0
        })
    }

    //Render UI methods

    renderCommentCard = () => {
        const { comment } = this.props
        const { author, body, timestamp, voteScore } = comment
        return (
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
                    <button className="td p-opt" onClick={this.handleEdit}><FaEdit />Edit</button>
                    <button className="td p-opt-delete" onClick={this.handleDeletePostComment}><FaRegTrashAlt />Excluir</button>
                </div>
                <div>
                    <div className="p-acts">
                        <button className="p-act like" onClick={this.handleUpVoteComment}><FaRegThumbsUp /></button>
                        <button className="p-act dislike" onClick={this.handleDownVoteComment}><FaRegThumbsDown /></button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.edit === 0
                    ? this.renderCommentCard()
                    : <EditComment
                        body={this.props.comment.body}
                        id={this.props.comment.id}
                        toggle={this.toggleToNormal}
                    />
                }
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
