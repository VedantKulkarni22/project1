import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-2" to="/home"><span id='BrandName1'>Cogni</span><span id='BrandName2'>Test🧠</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="opt nav-link fs-6 rounded-3 m-1" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="opt nav-link fs-6 rounded-3 m-1" to="/comingsoon">Test History</Link>
                            </li>
                            <div className="btn-group">
                                <button className="nav-link dropdown-toggle fs-6 rounded-3 m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Treatments
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/comingsoon">Ongoing Treatments</Link></li>
                                    <li><Link className="dropdown-item" to="/comingsoon">Suggested Treatments</Link></li>
                                    <li><Link className="dropdown-item" to="/comingsoon">Previous Treatments</Link></li>
                                </ul>
                            </div>
                            <li className="nav-item">
                                <Link className="opt nav-link fs-6 rounded-3 m-1" to="/comingsoon">Basic Remidies</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="opt btn btn-outline-dark" type="submit">Search</button>
                            </form>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="opt1 nav-item rounded-circle m-1">
                                <Link to="/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentcolor" className="prof bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
