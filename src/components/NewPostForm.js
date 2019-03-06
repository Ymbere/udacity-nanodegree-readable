import React, { Component } from 'react'

import { FaReact, FaAlignRight } from "react-icons/fa";

class NewPostForm extends Component {
    render() {
        return(
            <div className="m-mrg" id="composer">
            <div id="c-tabs-cvr">
                <div className="tb" id="c-tabs">
                    <div className="td active"><FaAlignRight /><span>Make Post and Choose a Category</span></div>
                    <div className="td"><input type="radio" name="category" value="react" ></input><FaReact /><span>React</span></div>
                    <div className="td"><input type="radio" name="category" value="redux" ></input><span>Redux</span></div>
                    <div className="td"><input type="radio" name="category" value="udacity" ></input><span>Udacity</span></div>
                </div>
            </div>
            <div id="c-c-main">
                <div className="tb">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" required="" placeholder="Enter Title" value="{title}"></input>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea type="text" className="form-control" id="body" required="" placeholder="Enter Content" value="{body}"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <textarea type="text" className="form-control" id="author" required="" placeholder="Enter Author" value="{author}"></textarea>
                            </div>
                            <div className="mt-5">
                                <button className="btn btn-lg btn-primary" id="btn-submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default NewPostForm;
