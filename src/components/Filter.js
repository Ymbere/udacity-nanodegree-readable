import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortPostByTimestamp, sortPostByVoteScore } from '../actions/PostActions';

class Filter extends Component {
    state = {
        optionValue: ''
    }
    handleChangeOption = (e) => {
        e.preventDefault()
        const value = e.target.value

        const { dispatch } = this.props

        this.setState({
            optionValue: value
        })

        if (value === "timestamp") {
            dispatch(sortPostByTimestamp( value ))
        } else if (value === "voteScore") {
            dispatch(sortPostByVoteScore( value ))
        }

    }
    render() {
        const { optionValue } = this.state
        return(
            <div className="l-dropdown">
                <span className="custom-dropdown">
                    <select value={optionValue} onChange={this.handleChangeOption}>
                        <option value="" hidden>Sort By</option>
                        <option value="timestamp">Date</option>
                        <option value="voteScore">Vote</option>
                    </select>
                </span>
            </div>
        )
    }
}

export default connect()(Filter)
