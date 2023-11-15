import React from 'react';
import '../Styles/TestCard.css';

export default function Test() {
    return (
        <div id="TestCard">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                <div className="col">
                    <div class="card text-bg-dark">
                        <img src="Images/Anxiety.png" class="card-img" alt="..." />
                        <div class="card-img-overlay">
                            <h5 class="card-title rounded-3 p-1">Anxiety Test</h5>
                            <p class="card-text rounded-3 p-1">This test typically consist of a series of questions that aim to understand the severity and nature of the anxiety symptoms.</p>
                            <a href="#" class="btn btn-outline-dark">Take Test</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-bg-dark">
                        <img src="Images/Depression.jpeg" class="card-img" alt="..." width="345.73px" height="241.89px"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title rounded-3 p-1">Depression Test</h5>
                            <p class="card-text rounded-3 p-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-outline-dark">Take Test</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-bg-dark">
                        <img src="Images/Hallucinations.jfif" class="card-img" alt="..." width="345.73px" height="241.89px"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title rounded-3 p-1">Hallucinations Test</h5>
                            <p class="card-text rounded-3 p-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-outline-dark">Take Test</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-bg-dark">
                        <img src="Images/Delusions.jfif" class="card-img" alt="..." width="345.73px" height="241.89px"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title rounded-3 p-1">Delusions Test</h5>
                            <p class="card-text rounded-3 p-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-outline-dark">Take Test</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
