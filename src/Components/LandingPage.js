import '../Styles/LandingPage.css';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


export default function LandingPage() {
    const [multitext] = useTypewriter({
        words: ["Take a test according to your issue!", "Get your score!", "Seek help from professionals if you wish to!", "Also get some common solutions to try to cure it on your own!", "Only on Cognitest signup now!"],
        loop: {},
        typeSpeed: 8,
        deleteSpeed: 8
    });
    return (
        <>
            <div id="Landing" className="w-75 shadow-lg bg-body mx-auto rounded-3">
                <nav className="navbar navbar-expand-lg navbar-light rounded-3">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold fs-2" href="/"><span className='BrandName1'>Cogni</span><span className="BrandName2">Test🧠</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="opt nav-link fs-6 rounded-3 m-1" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="opt nav-link fs-6 rounded-3 m-1" href="#howitworks">How it works?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="opt nav-link fs-6 rounded-3 m-1" href="#about">About</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item">
                                    <button type="button" className="opt btn btn-outline-dark m-2" href="/">SignUp</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="opt btn btn-outline-dark m-2" href="/">Login</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="crd row g-0">
                    <div className="col-md-5 p-5 d-flex flex-column justify-content-center">
                        <h5 className="card-title fw-bolder fs-1">Mental <span style={{ color: "rgb(0, 26, 255)" }}>Health</span> Tests</h5>
                        <p></p>
                        <p className="card-text fs-5">Are you facing some mental health issues???</p>
                        <p className="card-text fs-5"><span className='Multitext rounded-3'>{multitext}</span><Cursor cursorStyle="🧠" cursorBlinking={false} /></p>
                        <div>
                            <button type="button" className="opt btn btn-outline-dark" href="/">SignUp</button>
                            <button type="button" className="opt btn btn-outline-dark m-2" href="/">Login</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body LandingImg">
                            <img src="Images/landingpage.png" className="brainimg rounded-3" alt="Brain and other cognitive components which depicts test and treating brian" height="450px" width="700px" />
                        </div>
                    </div>
                    {/* <svg className='wave position-absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#b8d9ec" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,240C480,267,600,277,720,261.3C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg> */}
                </div>
                <h4 className='howtext d-flex justify-content-center fw-bolder' id="howitworks">How it works?</h4>
                <div className='d-flex flex-row justify-content-around p-3'>
                    <div className="how shadow-lg card mt-3" style={{ width: "16rem" }}>
                        <img src="Images/tests.png" className="card-img-top" alt="..." height="238px" width="238px" />
                        <div className="card-body">
                            <h5 class="card-title">Mental Health Tests</h5>
                            <p className="card-text">Use CogniTest to find most common mental health check tests use them to check your test score.</p>
                        </div>
                    </div>
                    <div className="how shadow-lg card mt-3" style={{ width: "16rem" }}>
                        <img src="Images/scores.png" className="card-img-top" alt="..." height="238px" width="238px" />
                        <div className="card-body">
                            <h5 class="card-title">Accurate Scores</h5>
                            <p className="card-text">After tests you will find out your score and analysis of your test.</p>
                        </div>
                    </div>
                    <div className="how shadow-lg card mt-3" style={{ width: "16rem" }}>
                        <img src="Images/professionals.png" className="card-img-top" alt="..." height="238px" width="254px" />
                        <div className="card-body">
                            <h5 class="card-title">Professional help</h5>
                            <p className="card-text">If you wish seek help of professionals and get your mental health stabilized.</p>
                        </div>
                    </div>
                    <div className="how shadow-lg card mt-3" style={{ width: "16rem" }}>
                        <img src="Images/solutions.png" className="card-img-top" alt="..." height="238px" width="238px" />
                        <div className="card-body">
                            <h5 class="card-title">Basic solutions</h5>
                            <p className="card-text">Based on your score some basic and most common solutions to cure your problems will be provided to you using which you might try to cure yourself at your own.</p>
                        </div>
                    </div>
                </div>
                {/* <h4 className='howtext d-flex justify-content-center fw-bolder' id="about">Team</h4>
                <div className="row d-flex justify-content-center p-3">
                    <div className="col-lg-3 col-md-6 my-3">
                        <div className="member" data-aos-delay="100">
                            <div className="pic"><img src="..." height="306" width="306" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Madhukrishna Nipankar</h4>
                                <span>Full Stack Developer</span>
                                <div className="social">
                                    <a href="https://www.instagram.com/lets__growtogether/?hl=en" target="blank"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/madhukrishna-nipankar-666771213/" target="blank"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-3">
                        <div className="member" data-aos-delay="100">
                            <div className="pic"><img src="Images/Vedant.png" height="306" width="306" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Vedant Kulkarni</h4>
                                <span>Front End Developer/Software Tester</span>
                                <div className="social">
                                    <a href="https://instagram.com/_.vedantt.fy?igshid=YmMyMTA2M2Y/" target="blank"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/vedant-kulkarni-406798213/" target="blank"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6 my-3">
                        <div className="member" data-aos-delay="200">
                            <div className="pic"><img src="..." height="306" width="306" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Amit Sali</h4>
                                <span>Front End Developer</span>
                                <div className="social">
                                    <a href="https://www.instagram.com/amit_sali/?hl=en" target="blank"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/amit-sali-52a307193" target="blank"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6  my-3">
                        <div className="member" data-aos-delay="300">
                            <div className="pic"><img src="..." height="306" width="306" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Yadhnesh Gangurde</h4>
                                <span>Front End Developer</span>
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/yadhnesh-gangurde-7842251b8" target="blank"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
