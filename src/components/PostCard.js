import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaRegThumbsUp, FaRegThumbsDown, FaComments, FaEdit, FaRegTrashAlt, FaRegCalendarAlt } from "react-icons/fa";
import { handleDownVotePost, handleUpVotePost, handleDeletePost } from '../actions/PostActions';
import NewCommentForm from './NewCommentForm';
import EditPost from './EditPost';

class PostCard extends Component {
    state = {
        edit: 0,
    }
    handleDownVotePost = (e) => {
        e.preventDefault()

        const { dispatch, post } = this.props

        dispatch(handleDownVotePost({
            id: post.id
        }))
    }

    handleUpVotePost = (e) => {
        e.preventDefault()

        const { dispatch, post } = this.props

        dispatch(handleUpVotePost({
            id: post.id
        }))
    }

    handlePostDelete = (e) => {
        e.preventDefault()

        const { dispatch, post } = this.props

        dispatch(handleDeletePost({
            id: post.id,
            post: post
        }))

        this.props.history.push('/');
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

    //Render UI

    renderPostCard = () => {
        const { post, showPostBody, showCommentForm } = this.props
        const {
            author, body, category, commentCount, id, timestamp, title, voteScore
        } = post
        return (
            <div className="post">
                <div className="tb">
                    <div className="td p-r-hdr">
                        <div className="p-u-info">
                            <Link to={`/${category}/${id}`}>{title}</Link>
                        </div>
                        <div className="p-dt">
                            <FaRegCalendarAlt />
                            <span>{new Date(timestamp).toLocaleString()} by {author}</span>
                            <span className="vote">Vote: {voteScore}</span>
                            <span className="category-post">{category}</span>
                        </div>
                    </div>
                    <button className="td p-opt" onClick={this.handleEdit}><FaEdit />Edit</button>
                    <button className="td p-opt-delete" onClick={this.handlePostDelete}><FaRegTrashAlt />Excluir</button>
                </div>
                    {showPostBody && <p>{body}</p> }
                <div>
                    <div className="p-acts">
                        <button className="p-act like" onClick={this.handleUpVotePost}><FaRegThumbsUp /></button>
                        <button className="p-act dislike" onClick={this.handleDownVotePost}><FaRegThumbsDown /></button>     <div className="comment"><FaComments /><span>{commentCount} comments</span></div>
                    </div>
                </div>
                {showCommentForm &&
                    <NewCommentForm parentId={id} />
                }
            </div>
        )
    }
    render() {
        return(
            <>
                {this.state.edit === 0
                    ? this.renderPostCard()
                    : <EditPost
                        title={this.props.post.title}
                        body={this.props.post.body}
                        id={this.props.post.id}
                        toggle={this.toggleToNormal}
                    />
                }
            </>
        )
    }
}

function mapStateToProps ({ posts }, {id, showPostBody, showCommentForm}) {
    let post = null
    if (Array.isArray(posts)) {
        post = posts.find(p => p.id === id)
    } else {
        post = posts
    }

    return {
        post,
        showPostBody,
        showCommentForm
    }

}

export default withRouter(connect(mapStateToProps)(PostCard))
