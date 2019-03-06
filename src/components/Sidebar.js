import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        const { categories } = this.props
        return(
            <div className="td" id="l-col">
                <div className="l-cnt">
                    <div className="cnt-label">
                        <span>Categorys</span>
                    </div>
                </div>
                <div className="i-box">
                    {categories.map((categorie) => (
                        <div key={categorie.name}>
                            <Link to={`/${categorie.path}`} style={{ textDecoration: 'none', color : 'black'}}>
                                {categorie.name}
                            </Link><br/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Sidebar
