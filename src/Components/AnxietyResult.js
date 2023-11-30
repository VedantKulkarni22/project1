import React from 'react';
import '../Styles/Result.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function AnxietyResult() {
    const { score } = useParams();
    const scoreValue = parseFloat(score).toFixed(2);

    let message;
    let condition;
    if (scoreValue <= 1) {
        condition = <span className='heading'>No</span>;
        message = <h5>Your report says you have no anxiety.</h5>;
    }
    if (scoreValue <= 2 && scoreValue >= 1) {
        condition = <span className='heading'>Mild</span>;
        message = <h5>Your report says you have mild anxiety and your anxiety lies within the normal range of variation in mood experienced by the majority of people in the course of their daily lives. A mild and transient response to minor life stresses. You can easily and quickly stop your anxious thoughts and feelings by turning your attention to other things, or these thoughts and feelings quickly come and go of their own accord. No signs of motor tension or autonomic hyperactivity are present.</h5>;
    }
    if (scoreValue <= 3 && scoreValue >= 2) {
        condition = <span className='heading'>Moderate</span>;
        message = <h5>Your report says you have moderate anxiety and you are able to exercise some control over your anxiety, and can reduce or put a stop to the anxiety by turning your attention to other things, but this requires a distinct and sustained effort. If signs of motor tension or autonomic hyperactivity are present these are mild or of very brief duration. </h5>;
    }
    if (scoreValue <= 4 && scoreValue >= 3) {
        condition = <span className='heading'>Marked</span>;
        message = <h5>Your report says you have marked anxiety and you have no control over the anxiety when it occurs and cannot turn your attention to other things, even when a distinct and sustained effort is made. At least one marked and persistent sign of motor tension or autonomic hyperactivity should accompany the anxiety. The anxiety has been present in this form on the minority of days in the last month.</h5>;
    }
    if (scoreValue === 4) {
        condition = <span className='heading'>Severe</span>;
        message = <h5>Your report says you have severe anxiety and you have no control over the anxiety when it occurs and cannot turn your attention to other things, even when a distinct and sustained effort is made. At least one marked and persistent sign of motor tension or autonomic hyperactivity should accompany the anxiety. The anxiety has been present in this form on the majority of days in the last month.</h5>;
    }

    return (
        <>
            <div className='rounded-3 w-50 d-flex flex-column justify-content-center mx-auto mt-4 mb-3 p-2'>
                <img src={process.env.PUBLIC_URL + '/Images/doc.jpg'} className='img-fluid rounded-3 mb-4' alt="doctor"></img>
                {/* <img src='Images/doc.jpg' className='img-fluid rounded-3 mb-4' alt="doctor"></img> */}
                <h1>{condition} Anxiety</h1>
                <h5 className='mb-3'>Your Score as per your responses is {scoreValue}</h5>
                <div className="progress mb-3" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-warning text-dark" style={{ width: `${(scoreValue / 4) * 100}%` }}>{scoreValue}</div>
                </div>
                <div>
                    {message}
                </div>
                <Link className='link' to="/comingsoon">
                    <button className='opt btn btn-outline-dark d-flex mx-auto my-3' type="submit">Consult</button>
                </Link>
            </div>
        </>
    )
}
