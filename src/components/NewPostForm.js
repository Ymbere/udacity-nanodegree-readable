import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddPost } from '../actions/PostActions'

import { FaReact, FaAlignRight } from "react-icons/fa";

class NewPostForm extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
    }

    checkInputs = () => {
        const { title, body, author, category} = this.state
        if (title === '' || body === '' || author === '' || category === '') {
            return true
        }
    }

    handleInputChange = (e) => {
        const text  = e.target.value
        const field = e.target.id

        this.setState({
            [field]: text
        })
    }

    handleRadioButtonChange = (e) => {
        const value = e.target.value

        this.setState({
            category: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { title, body, author, category } = this.state

        const { dispatch } = this.props

        const timestamp = Date.now()

        dispatch(handleAddPost({
            title,
            body,
            author,
            category,
            timestamp
        }))

        this.setState(() => ({
            title: '',
            body: '',
            author: '',
        }))
    }

    render() {
        const { title, body, author, category } = this.state
        return(
            <div className="m-mrg" id="composer">
            <div id="c-tabs-cvr">
                <div className="tb" id="c-tabs">
                    <div className="td active"><FaAlignRight /><span>Make Post and Choose a Category</span></div>
                    <div className="td"><input type="radio" name="category" checked={"react" === category} value="react" onChange={this.handleRadioButtonChange} ></input><FaReact /><span>React</span></div>
                    <div className="td"><input type="radio" name="category" checked={"redux" === category} value="redux" onChange={this.handleRadioButtonChange}></input><span>Redux</span></div>
                    <div className="td"><input type="radio" name="category" checked={"udacity" === category} value="udacity" onChange={this.handleRadioButtonChange}></input><span>Udacity</span></div>
                </div>
            </div>
            <div id="c-c-main">
                <div className="tb">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" required="" onChange={this.handleInputChange} placeholder="Enter Title" value={title}></input>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea type="text" className="form-control" id="body" required="" onChange={this.handleInputChange} placeholder="Enter Content" value={body}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <textarea type="text" className="form-control" id="author" required="" onChange={this.handleInputChange} placeholder="Enter Author" value={author}></textarea>
                            </div>
                            <div className="mt-5">
                                <button className="btn btn-lg btn-primary" id="btn-submit" disabled={this.checkInputs()}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default connect()(NewPostForm)
