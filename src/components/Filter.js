import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
    state = {
        optionValue: ''
    }

    handleChangeOption = (e) => {
        e.preventDefault()
        const value = e.target.value

        this.setState({
            optionValue: value
        })

        this.props.sortFunction( value )
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
