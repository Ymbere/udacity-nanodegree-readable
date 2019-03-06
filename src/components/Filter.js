import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return(
            <div className="l-dropdown">
                <span className="custom-dropdown">
                    <select>
                        <option value="">Sort By</option>
                        <option>Date</option>
                        <option>Vote</option>
                    </select>
                </span>
            </div>
        )
    }
}

export default Filter
