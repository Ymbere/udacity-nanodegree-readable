import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoadingBar } from 'react-redux-loading';
import Header from './Header';
import Footer from './Footer';

class NotFound extends Component {
  render() {
    return (
      <div>
        <LoadingBar />
        <Header />
        <h4>ERROR POST NOT FOUND 404</h4>
        <Footer />
      </div>
    )
  }
}

export default connect()(NotFound)
