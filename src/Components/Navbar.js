import React from 'react';
import '../Styles/Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light rounded-3">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-2" href="/"><span id='BrandName1'>Cogni</span><span id='BrandName2'>Test🧠</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="opt nav-link fs-6 rounded-3 m-1" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="opt nav-link fs-6 rounded-3 m-1" href="/howitworks">Test History</a>
                            </li>
                            <div className="btn-group">
                                <button className="nav-link dropdown-toggle fs-6 rounded-3 m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Treatments
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Ongoing Treatments</a></li>
                                    <li><a className="dropdown-item" href="/">Suggested Treatments</a></li>
                                    <li><a className="dropdown-item" href="/">Previous Treatments</a></li>
                                </ul>
                            </div>
                            <li className="nav-item">
                                <a className="opt nav-link fs-6 rounded-3 m-1" href="/about">Basic Remidies</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="opt btn btn-outline-dark" type="submit">Search</button>
                            </form>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="opt1 nav-item rounded-circle m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
