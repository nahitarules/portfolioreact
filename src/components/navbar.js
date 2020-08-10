import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState(
            {isOpen: !this.state.isOpen}
        )
    }

    handleOpening = () => {
        this.setState({isOpen: false})
    }

    
    render() {  
        return (
            <header>
                <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <i class="fas fa-bars" />
                </button>
                <nav className={this.state.isOpen ? "nav open-nav" : "nav"}> 
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link onClick={this.handleOpening} className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.handleOpening} className="nav-link" to="/products">Projects</Link>
                        </li>
                        <li className="nav-right nav-item">
                            <Link onClick={this.handleOpening} className="nav-link" to="/aboutme">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
