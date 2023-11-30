import React from 'react';
import '../Styles/TestCard.css';
import { Link } from 'react-router-dom';


export default function Test() {
    return (
        <>
            <div id="TestCard">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="Images/Anxiety.png" className="card-img cimg" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title ct rounded-3 p-1">Anxiety Test</h5>
                                <p className="card-text ctxt rounded-3 p-1">This test typically consist of a series of questions that aim to understand the severity and nature of the anxiety symptoms.</p>
                                <Link to="/anxietytest" className="btn btn-outline-dark">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="Images/Depression.jpeg" className="card-img cimg" alt="..." width="345.73px" height="241.89px" />
                            <div className="card-img-overlay">
                                <h5 className="card-title ct rounded-3 p-1">Depression Test</h5>
                                <p className="card-text ctxt rounded-3 p-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/depressiontest" className="btn btn-outline-dark">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="Images/Hallucinations.jfif" className="card-img cimg" alt="..." width="345.73px" height="241.89px" />
                            <div className="card-img-overlay">
                                <h5 className="card-title ct rounded-3 p-1">DASS Test</h5>
                                <p className="card-text ctxt rounded-3 p-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/dasstest" className="btn btn-outline-dark">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-dark">
                            <img src="Images/Delusions.jfif" className="card-img cimg" alt="..." width="345.73px" height="241.89px" />
                            <div className="card-img-overlay">
                                <h5 className="card-title ct rounded-3 p-1">Delusions Test</h5>
                                <p className="card-text ctxt rounded-3 p-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/anxietytest" className="btn btn-outline-dark">Take Test</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
