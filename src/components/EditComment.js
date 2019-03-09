import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPostComments } from '../actions/PostActions';

class EditComment extends Component {
    state = {
        body: '',
        timestamp: Date.now()
    }

    componentDidMount() {
        const { body } = this.props

        this.setState({
            body: body
        })
    }

    checkInputs = () => {
        const { body } = this.state
        if ( body === '') {
            return true
        }
    }

    handleInputChange = (e) => {
        const text = e.target.value

        this.setState({
            body: text
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { body, timestamp } = this.state
        const { dispatch, id } = this.props

        dispatch(handleEditPostComments({
            id,
            timestamp,
            body
        }))

        this.setState(() => ({
            body: ''
        }))

        this.props.toggle()
    }

    render() {
        const { body } = this.state
        return (
            <form className="my-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <input type="text" className="form-control" id="body" required="" onChange={this.handleInputChange} placeholder="Enter Comment" value={body} />
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-lg btn-primary" id="btn-comment" disabled={this.checkInputs()}>Update</button>
                </div>
            </form>
        )
    }
}

export default connect()(EditComment)
