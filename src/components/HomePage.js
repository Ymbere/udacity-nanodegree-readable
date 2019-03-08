import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/Shared'

import NewPostForm from './NewPostForm';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Filter from './Filter';
import PostList from './PostList';
import { sortPostByTimestamp, sortPostByVoteScore } from '../actions/PostActions';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    handleSortPosts = (sort_value) => {
        const { dispatch } = this.props

        if (sort_value === "timestamp") {
            dispatch(sortPostByTimestamp( sort_value ))
        } else if (sort_value === "voteScore") {
            dispatch(sortPostByVoteScore( sort_value ))
        }
    }

    renderUI = () =>  {
        const { posts, categories } = this.props
        return (
            <Fragment>
                <LoadingBar />
                <Header />
                <div id="main-content">
                    <div className="tb">
                        <Sidebar categories={categories} />
                        <div className="td" id="m-col">
                            <NewPostForm />
                            <Filter sortFunction={this.handleSortPosts} />
                            <PostList posts={posts} />
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }

    render() {
        return(
            <main>
                {this.props.loading === true
                    ? <div>Loading...</div>
                    : this.renderUI()
                }

            </main>
        );
    }
}

const mapStateToProps = ({posts, categories, loadingBar}) => {

    return {
        posts,
        categories,
        loading: loadingBar.default !== 0 || loadingBar.default === {}
    }
}

export default connect(mapStateToProps)(HomePage)
