import React from 'react';
import '../Styles/Profile.css';

export default function Profile() {
    return (
        <div>
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
                                            <button className="opt btn btn-outline-dark m-1">Follow</button>
                                            <button className="opt btn btn-outline-dark m-1">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card h-100">
                                    <div className="card-body shadow-lg">
                                        <h6 className="d-flex align-items-center mb-3">Recent Tests</h6>
                                        <p>Depression Test<br></br>
                                            <a href="/"><small>See more...</small></a>
                                        </p>
                                        <p>Hallucination Test<br></br>
                                            <a href="/"><small>See more...</small></a>
                                        </p>
                                        <p>Delusion Test<br></br>
                                            <a href="/"><small>See more...</small></a>
                                        </p>
                                        <p>Anxiety Test<br></br>
                                            <a href="/"><small>See more...</small></a>
                                        </p>
                                        <p>Stability Test<br></br>
                                            <a href="/"><small>See more...</small></a>
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
                                            <a className="opt btn btn-outline-dark" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body shadow-lg">
                                            <h6 className="d-flex align-items-center mb-3">Ongoing Treatments</h6>
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
                                            <h6 className="d-flex align-items-center mb-3">Recent Treatments</h6>
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
