import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://ensolvers.com/es/home-espanol/" className="navbar-brand">Ensolvers</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">To-Do List</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent