import React from 'react';
import Navbar from './Navbar'
import '../Styles/Profile.css';
import { Link } from 'react-router-dom';


export default function Profile() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="main-body p-4">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body shadow-lg">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <Link to="/comingsoon">
                                            <button className="optprofile btn btn-outline-dark m-1">Follow</button>
                                            <button className="optprofile btn btn-outline-dark m-1">Message</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card h-100">
                                    <div className="card-body shadow-lg">
                                        <h6 className="d-flex align-items-center mb-3 fw-bold fs-5">Recent Tests</h6>
                                        <p>Depression Test<br></br>
                                            <Link to="/comingsoon" className='a'><small>See more...</small></Link>
                                        </p>
                                        <p>Hallucination Test<br></br>
                                            <Link to="/comingsoon" className='a'><small>See more...</small></Link>
                                        </p>
                                        <p>Delusion Test<br></br>
                                            <Link to="/comingsoon" className='a'><small>See more...</small></Link>
                                        </p>
                                        <p>Anxiety Test<br></br>
                                            <Link to="/comingsoon" className='a'><small>See more...</small></Link>
                                        </p>
                                        <p>Stability Test<br></br>
                                            <Link to="/comingsoon" className='a'><small>See more...</small></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body shadow-lg">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            John Tim Doe
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            john69@hotmail.com
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            +91 0000000000
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Raju heights, Shamsher galli, khatra mahal, Dharavi
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link className="a optprofile btn btn-outline-dark" target="__blank" to="/comingsoon">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body shadow-lg">
                                            <h6 className="d-flex align-items-center mb-3 fw-bold fs-5">Ongoing Treatments</h6>
                                            {/* <p>Web Design</p>
                                                <p>Website Markup</p>
                                                <p>One Page</p>                                               
                                                <p>Mobile Template</p>                                               
                                                <p>Backend API</p>
                                                <p>Backend API</p>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body shadow-lg">
                                            <h6 className="d-flex align-items-center mb-3 fw-bold fs-5">Recent Treatments</h6>
                                            {/* <p>Web Design</p>
                                                <p>Website Markup</p>
                                                <p>One Page</p>
                                                <p>Mobile Template</p>
                                                <p>Backend API</p>
                                                <p>Backend API</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
