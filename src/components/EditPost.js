import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/PostActions';

class EditPost extends Component {
    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        const { title, body } = this.props

        this.setState({
            title: title,
            body: body
        })
    }

    checkInputs = () => {
        const { body, title } = this.setState
        if ( title === '' || body === '') {
            return true
        }
    }

    handleInputChange = (e) => {
        e.preventDefault()

        const text = e.target.value
        const field = e.target.id

        this.setState({
            [field]: text
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { title, body } = this.state
        const { dispatch, id } = this.props

        const timestamp = Date.now()

        dispatch(handleEditPost({
            id,
            timestamp,
            title,
            body
        }))

        this.setState(() => ({
            title: '',
            body: ''
        }))

        this.props.toggle()
    }

    render() {
        const { body, title } = this.state
        return (
            <form className="my-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Title</label>
                    <input type="text" className="form-control" id="title" required="" onChange={this.handleInputChange} placeholder="Enter Comment" value={title} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Body</label>
                    <input type="text" className="form-control" id="body" required="" onChange={this.handleInputChange} placeholder="Enter Author" value={body} />
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-lg btn-primary" id="btn-comment" disabled={this.checkInputs()}>Update Post</button>
                </div>
            </form>
        )
    }
}

export default connect()(EditPost)
