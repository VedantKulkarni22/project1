import React from 'react';
import '../Styles/Result.css';

export default function Result() {
    return (
        <>
            <div className='rounded-3 w-50 d-flex flex-column justify-content-center mx-auto mt-4 mb-3 p-2'>
                <img src='Images/doc.jpg' className='img-fluid rounded-3 mb-4' alt="doctor"></img>
                {/* <img src='Images/doc.jpg' className='img-fluid rounded-3 mb-4' alt="doctor"></img> */}
                <h1><span className='heading'>Marked</span> Anxiety</h1>
                <h5 className='mb-3'>Your Score as per your responses...</h5>
                <div className="progress mb-3" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-warning text-dark" style={{ width: "75%" }}>3</div>
                </div>
                <h5 className=''>Your report says you have a marked anxiety and we suggest you to consult to a doctor.</h5>
                <button className='opt btn btn-outline-dark d-flex mx-auto my-3' type="submit">Consult</button>
            </div>
        </>
    )
}
