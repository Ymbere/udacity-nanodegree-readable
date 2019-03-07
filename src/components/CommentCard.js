import React, { Component } from 'react'
import { connect } from 'react-redux'

//icons
import { FaRegThumbsUp, FaRegThumbsDown, FaEdit, FaRegTrashAlt } from "react-icons/fa";

class CommentCard extends Component {
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
                        <button className="td p-opt-delete"><FaRegTrashAlt />Excluir</button>
                    </div>
                    <div>
                        <div className="p-acts">
                            <button className="p-act like"><FaRegThumbsUp /></button>
                            <button className="p-act dislike"><FaRegThumbsDown /></button>
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
