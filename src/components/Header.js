import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div className="device-bar-1">
                <Link to='/'><h4>Forum Bere</h4></Link>
            </div>
        )
    }
}

export default Header
