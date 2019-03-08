import React, { Component } from 'react'
import { handleAddComment } from '../actions/PostActions';
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    state = {
        author: '',
        body: '',
        timestamp: Date.now()
    }
    checkInputs = () => {
        const { author, body } = this.state
        if ( author === '' || body === ''){
            return true
        }
    }
    handleInputChange = (e) => {
        const text = e.target.value
        const field = e.target.id

        this.setState({
            [field]: text
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { author, body, timestamp } = this.state
        const { dispatch, parentId } = this.props

        dispatch(handleAddComment({
            author,
            body,
            parentId,
            timestamp
        }))

        this.setState(() => ({
            author: '',
            body: '',
        }))
    }
    render() {
        const { author, body } = this.state
        return(
            <form className="my-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <input type="text" className="form-control" id="body" required="" onChange={this.handleInputChange} placeholder="Enter Comment" value={body} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" required="" onChange={this.handleInputChange} placeholder="Enter Author" value={author} />
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-lg btn-primary" id="btn-comment" disabled={this.checkInputs()}>Add Comment</button>
                </div>
            </form>
        )
    }
}

export default connect()(NewCommentForm)
