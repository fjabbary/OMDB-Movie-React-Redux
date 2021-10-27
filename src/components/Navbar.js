import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid container">
                <Link className="navbar-brand text-light" to="/">Movie API Redux</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <i className="fab fa-imdb fa-3x"></i>
                        </li>
                        <li className="nav-item">
                            <i className="fab fa-react fa-3x"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

