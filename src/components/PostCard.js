import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaRegThumbsUp, FaRegThumbsDown, FaComments, FaEdit, FaRegTrashAlt, FaRegCalendarAlt } from "react-icons/fa";

class PostCard extends Component {
    render() {
        const { post } = this.props
        const {
            author, body, category, commentCount, id, timestamp, title, voteScore
        } = post
        return(
            <div className="post">
                <div className="tb">
                    <div className="td p-r-hdr">
                        <div className="p-u-info">
                            <Link to={`/posts/${id}`}>{title}</Link>
                        </div>
                        <div className="p-dt">
                            <FaRegCalendarAlt />
                            <span>{new Date(timestamp).toLocaleString()} by {author}</span>
                            <span className="vote">Vote: {voteScore}</span>
                            <span className="category-post">{category}</span>
                        </div>
                    </div>
                    <button className="td p-opt"><FaEdit />Edit</button>
                    <button className="td p-opt-delete" ><FaRegTrashAlt />Excluir</button>
                </div>
                    <p>{body}</p>
                <div>
                    <div className="p-acts">
                        <button className="p-act like" ><FaRegThumbsUp /></button>
                        <button className="p-act dislike" ><FaRegThumbsDown /></button>     <div className="comment"><FaComments /><span>{commentCount} comments</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ posts }, {id}) {
    let post = null
    if (Array.isArray(posts)) {
        post = posts.find(p => p.id === id)
    } else {
        post = posts
    }

    return {
        post
    }

}

export default connect(mapStateToProps)(PostCard)
