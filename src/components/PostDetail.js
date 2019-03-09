import React, { Component, Fragment } from 'react'
import { LoadingBar } from 'react-redux-loading';
import { connect } from 'react-redux'

//Components
import Header from './Header';
import Footer from './Footer';
import PostCard from './PostCard';
import ComentList from './ComentsList';
import { handleInitialDataPost } from '../actions/Shared';
import Filter from './Filter';
import { sortCommentByVoteScore, sortCommentByTimestamp } from '../actions/PostActions';
import NotFound from './NotFound';

class PostDetail extends Component {
    state = {
        notFound: false
    }
    componentDidMount() {
        const postID = this.props.match.params.id
        this.props.dispatch(handleInitialDataPost(postID))

        if (this.props.post === undefined) {
            this.setState({ notFound: true })
        }
    }

    handleSortComments = (sort_value) => {
        const { dispatch, post } = this.props

        if (sort_value === "timestamp") {
            dispatch(sortCommentByTimestamp(sort_value, post.id))
        } else if (sort_value === "voteScore") {
            dispatch(sortCommentByVoteScore(sort_value, post.id))
        }
    }

    renderUI = () => {
        const { post } = this.props
        return(
            <Fragment>
                {this.state.notFound === true
                    ? <NotFound />
                    :    <Fragment>
                            <LoadingBar />
                            <Header />
                            <div id="main-content">
                                <div className="tb">
                                    <div className="tb" id="m-col">
                                        <div>
                                            <PostCard id={post.id} showPostBody={1} showCommentForm={1}/>
                                            <Filter sortFunction={this.handleSortComments} />
                                            <ComentList comments={post.postComments} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </Fragment>
                }
            </Fragment>
        )

    }
    render() {
        return(
            <main>
                {this.props.loading === true
                    ? <div>Loading...</div>
                    :this.renderUI()
                }
            </main>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        post:     posts[0],
        loading: posts[0] === undefined || posts[0].postComments === undefined
    }
}

export default connect(mapStateToProps)(PostDetail)
