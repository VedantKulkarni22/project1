import React from 'react'
import '../Styles/AnxietyTest.css'
import Navbar from './Navbar';
import { useState } from 'react';

export default function DepressionTest() {
    const [answers, setAnswers] = useState({
        que1: '',
        que2: '',
        que3: '',
        que4: '',
        que5: '',
        que6: '',
        que7: '',
        que8: '',
        que9: '',
        que10: '',
        que11: '',
        que12: '',
        que13: '',
        que14: '',
        que15: '',
        que16: '',
        que17: '',
        que18: '',
        que19: '',
        que20: '',
        que21: '',
        que22: '',
        que23: '',
        que24: '',
        que25: '',
        que26: '',
        que27: '',
        que28: '',
        que29: '',
        que30: '',
        que31: '',
        que32: '',
        que33: '',
        que34: '',
        que35: '',
        que36: '',
        que37: '',
        que38: '',
        que39: '',
        que40: '',
        que41: '',
        que42: '',
    });

    const [score, setScore] = useState(0);

    const handleAnswerChange = (question, value) => {
        setAnswers({
            ...answers,
            [question]: value
        });
    };

    const calculateScore = () => {
        let totalScore = 0;
        for (const answer in answers) {
            totalScore += parseInt(answers[answer]);
        }
        totalScore = totalScore / 42;
        setScore(totalScore);
    };

    const handleSubmit = () => {
        calculateScore();
    };
    return (
        <>
            <Navbar />
            <div className='rounded-3 crdtest d-flex flex-column mt-4 mb-3 p-2 shadow-lg'>
                <h1 className='mx-3'>Depression Anxiety Stress Scale Test (DASS Test)</h1>
                <ul>
                    <li>Use options as a scale from 0 to 3.</li>
                    <br />
                    <li>0 Did not apply to me at all</li>
                    <li>1 Applied to me to some degree, or some of the time</li>
                    <li>2 Applied to me to a considerate degree, or a good part of time</li>
                    <li>3 Applied to me very much, or most of the time</li>
                    <br />
                    <li>The extra details you write in the textarea below each question regarding that question will not directly affect your score but the information can be taken into consideration by the doctor which you consult if needed.</li>
                </ul>
            </div>
            {/* Question 1 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q1. I found myself getting upset by quite trivial things</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="0" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que1">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="1" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que1">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="2" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que1">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="3" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que1">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 2 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q2. I was aware of dryness of my mouth</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="0" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que2">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="1" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que2">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="2" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que2">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="3" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que2">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 3 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q3. I couldn't seem to experience any positive feeling at all</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="0" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que3">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="1" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que3">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="2" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que3">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="3" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que3">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 4 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q4. I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="0" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que4">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="1" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que4">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="2" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que4">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="3" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que4">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 5 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q5. I just couldn't seem to get going</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="0" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que5">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="1" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que5">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="2" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que5">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="3" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que5">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 6 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q6. I tended to over-react to situations</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="0" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que6">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="1" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que6">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="2" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que6">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="3" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que6">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 7 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q7. I had a feeling of shakiness (eg, legs going to give way)</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="0" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que7">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="1" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que7">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="2" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que7">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="3" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que7">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 8 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q8. I found it difficult to relax</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="0" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que8">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="1" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que8">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="2" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que8">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="3" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que8">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 9 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q9. I felt I was close to panic</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="0" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que9">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="1" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que9">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="2" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que9">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="3" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que9">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>{/* Question 10 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q10. I felt that I had nothing to look forward to</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="0" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que10">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="1" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que10">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="2" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que10">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="3" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que10">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 11 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q11. I found myself getting upset rather easily</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="0" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que11">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="1" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que11">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="2" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que11">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="3" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que11">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 12 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q12. I felt that I was using a lot of nervous energy</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="0" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que12">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="1" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que12">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="2" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que12">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="3" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que12">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 13 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q13. I felt sad and depressed</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="0" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que13">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="1" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que13">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="2" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que13">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="3" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que13">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 14 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q14. I found myself getting impatient when I was delayed in any way (eg, lifts, traffic lights, being kept waiting)</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="0" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que14">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="1" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que14">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="2" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que14">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="3" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que14">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 15 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q15. I had a feeling of faintness</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="0" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que15">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="1" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que15">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="2" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que15">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="3" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que15">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 16 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q16. I felt that I had lost interest in just about everything</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="0" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que16">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="1" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que16">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="2" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que16">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="3" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que17">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 17 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q17. I felt I wasn't worth much as a person</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="0" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que17">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="1" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que17">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="2" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que17">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="3" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que17">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 18 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q18. I felt that I was rather touchy</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="0" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que18">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="1" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que18">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="2" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que18">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="3" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que18">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 19 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q19. I perspired noticeably (eg, hands sweaty) in the absence of high temperatures or physical exertio</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="0" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que19">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="1" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que19">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="2" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que19">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="3" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que19">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 20 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q20. I felt scared without any good reason</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="0" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que20">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="1" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que20">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="2" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que20">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="3" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que20">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 21 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q21. I felt that life wasn't worthwhile</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que21" name="que21" value="0" onChange={(event) => handleAnswerChange("que21", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que21">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que21" name="que21" value="1" onChange={(event) => handleAnswerChange("que21", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que21">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que21" name="que21" value="2" onChange={(event) => handleAnswerChange("que21", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que21">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que21" name="que21" value="3" onChange={(event) => handleAnswerChange("que21", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que21">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 22 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q22. I found it hard to wind down</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que22" name="que22" value="0" onChange={(event) => handleAnswerChange("que22", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que22">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que22" name="que22" value="1" onChange={(event) => handleAnswerChange("que22", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que22">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que22" name="que22" value="2" onChange={(event) => handleAnswerChange("que22", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que22">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que22" name="que22" value="3" onChange={(event) => handleAnswerChange("que22", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que22">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 23 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q23. I had difficulty in swallowing</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que23" name="que23" value="0" onChange={(event) => handleAnswerChange("que23", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que23">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que23" name="que23" value="1" onChange={(event) => handleAnswerChange("que23", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que23">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que23" name="que23" value="2" onChange={(event) => handleAnswerChange("que23", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que23">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que23" name="que23" value="3" onChange={(event) => handleAnswerChange("que23", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que23">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 24 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q24. I couldn't seem to get any enjoyment out of the things I did</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que24" name="que24" value="0" onChange={(event) => handleAnswerChange("que24", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que24">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que24" name="que24" value="1" onChange={(event) => handleAnswerChange("que24", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que24">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que24" name="que24" value="2" onChange={(event) => handleAnswerChange("que24", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que24">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que24" name="que24" value="3" onChange={(event) => handleAnswerChange("que24", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que24">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 25 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q25. I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que25" name="que25" value="0" onChange={(event) => handleAnswerChange("que25", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que25">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que25" name="que25" value="1" onChange={(event) => handleAnswerChange("que25", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que25">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que25" name="que25" value="2" onChange={(event) => handleAnswerChange("que25", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que25">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que25" name="que25" value="3" onChange={(event) => handleAnswerChange("que25", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que25">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 26 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q26. I felt down-hearted and blue</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que26" name="que26" value="0" onChange={(event) => handleAnswerChange("que26", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que26">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que26" name="que26" value="1" onChange={(event) => handleAnswerChange("que26", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que26">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que26" name="que26" value="2" onChange={(event) => handleAnswerChange("que26", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que26">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que26" name="que26" value="3" onChange={(event) => handleAnswerChange("que26", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que26">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 27 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q27. I found that I was very irritable</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que27" name="que27" value="0" onChange={(event) => handleAnswerChange("que27", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que27">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que27" name="que27" value="1" onChange={(event) => handleAnswerChange("que27", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que27">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que27" name="que27" value="2" onChange={(event) => handleAnswerChange("que27", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que27">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que27" name="que27" value="3" onChange={(event) => handleAnswerChange("que27", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que27">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 28 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q28. I felt I was close to panic</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que28" name="que28" value="0" onChange={(event) => handleAnswerChange("que28", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que28">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que28" name="que28" value="1" onChange={(event) => handleAnswerChange("que28", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que28">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que28" name="que28" value="2" onChange={(event) => handleAnswerChange("que28", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que28">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que28" name="que28" value="3" onChange={(event) => handleAnswerChange("que28", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que28">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 29 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q29. I found it hard to calm down after something upset me</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que28" name="que29" value="0" onChange={(event) => handleAnswerChange("que29", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que29">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que29" name="que29" value="1" onChange={(event) => handleAnswerChange("que29", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que29">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que29" name="que29" value="2" onChange={(event) => handleAnswerChange("que29", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que29">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que29" name="que29" value="3" onChange={(event) => handleAnswerChange("que29", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que29">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 30 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q30. I fear that I would be "thrown" by some trivial but unfamiliar task</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que30" name="que30" value="0" onChange={(event) => handleAnswerChange("que30", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que30">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que30" name="que30" value="1" onChange={(event) => handleAnswerChange("que30", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que30">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que30" name="que30" value="2" onChange={(event) => handleAnswerChange("que30", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que30">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que30" name="que30" value="3" onChange={(event) => handleAnswerChange("que30", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que30">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 31 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q31. I was unable to become enthusiastic about anything</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que31" name="que31" value="0" onChange={(event) => handleAnswerChange("que31", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que31">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que31" name="que31" value="1" onChange={(event) => handleAnswerChange("que31", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que31">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que31" name="que31" value="2" onChange={(event) => handleAnswerChange("que31", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que31">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que31" name="que31" value="3" onChange={(event) => handleAnswerChange("que31", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que31">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 32 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q32. I found it difficult to tolerate interruptions to what I was doing</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que32" name="que32" value="0" onChange={(event) => handleAnswerChange("que32", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que32">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que32" name="que32" value="1" onChange={(event) => handleAnswerChange("que32", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que32">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que32" name="que32" value="2" onChange={(event) => handleAnswerChange("que32", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que32">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que32" name="que32" value="3" onChange={(event) => handleAnswerChange("que32", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que32">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 33 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q33. I was in a state of nervous tension</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que33" name="que33" value="0" onChange={(event) => handleAnswerChange("que33", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que33">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que33" name="que33" value="1" onChange={(event) => handleAnswerChange("que33", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que33">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que33" name="que33" value="2" onChange={(event) => handleAnswerChange("que33", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que33">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que33" name="que33" value="3" onChange={(event) => handleAnswerChange("que33", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que33">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 34 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q34. I felt I was pretty worthless</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que34" name="que34" value="0" onChange={(event) => handleAnswerChange("que34", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que34">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que34" name="que34" value="1" onChange={(event) => handleAnswerChange("que34", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que34">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que34" name="que34" value="2" onChange={(event) => handleAnswerChange("que34", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que34">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que34" name="que34" value="3" onChange={(event) => handleAnswerChange("que34", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que34">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 35 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q35. I was intolerant of anything that kept me from getting on with what I was doing</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que35" name="que35" value="0" onChange={(event) => handleAnswerChange("que35", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que35">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que35" name="que35" value="1" onChange={(event) => handleAnswerChange("que35", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que35">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que35" name="que35" value="2" onChange={(event) => handleAnswerChange("que35", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que35">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que35" name="que35" value="3" onChange={(event) => handleAnswerChange("que35", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que35">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 36 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q36. I felt terrified</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que36" name="que36" value="0" onChange={(event) => handleAnswerChange("que36", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que36">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que36" name="que36" value="1" onChange={(event) => handleAnswerChange("que36", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que36">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que36" name="que36" value="2" onChange={(event) => handleAnswerChange("que36", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que36">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que36" name="que36" value="3" onChange={(event) => handleAnswerChange("que36", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que36">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 37 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q37. I could see nothing in the future to be hopeful about</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que37" name="que37" value="0" onChange={(event) => handleAnswerChange("que37", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que37">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que37" name="que37" value="1" onChange={(event) => handleAnswerChange("que37", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que37">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que37" name="que37" value="2" onChange={(event) => handleAnswerChange("que37", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que37">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que37" name="que37" value="3" onChange={(event) => handleAnswerChange("que37", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que37">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 38 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q38. I felt that life was meaningless</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que38" name="que38" value="0" onChange={(event) => handleAnswerChange("que38", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que38">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que38" name="que38" value="1" onChange={(event) => handleAnswerChange("que38", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que38">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que38" name="que38" value="2" onChange={(event) => handleAnswerChange("que38", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que38">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que38" name="que38" value="3" onChange={(event) => handleAnswerChange("que38", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que38">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 39 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q39. I found myself getting agitated</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que39" name="que39" value="0" onChange={(event) => handleAnswerChange("que39", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que39">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que39" name="que39" value="1" onChange={(event) => handleAnswerChange("que39", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que39">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que39" name="que39" value="2" onChange={(event) => handleAnswerChange("que39", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que39">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que39" name="que39" value="3" onChange={(event) => handleAnswerChange("que39", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que39">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 40 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q40. I was worried about situations in which I might panic and make a fool of myself</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que40" name="que40" value="0" onChange={(event) => handleAnswerChange("que40", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que40">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que40" name="que40" value="1" onChange={(event) => handleAnswerChange("que40", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que40">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que40" name="que40" value="2" onChange={(event) => handleAnswerChange("que40", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que40">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que40" name="que40" value="3" onChange={(event) => handleAnswerChange("que40", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que40">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 41 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q41. I experienced trembling (eg, in the hands)</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que41" name="que41" value="0" onChange={(event) => handleAnswerChange("que41", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que41">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que41" name="que41" value="1" onChange={(event) => handleAnswerChange("que41", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que41">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que41" name="que41" value="2" onChange={(event) => handleAnswerChange("que41", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que41">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que41" name="que41" value="3" onChange={(event) => handleAnswerChange("que41", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que41">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            {/* Question 42 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q42. I found it difficult to work up the initiative to do things</h4>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que42" name="que42" value="0" onChange={(event) => handleAnswerChange("que42", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que42">0 Did not apply to me at all</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que42" name="que42" value="1" onChange={(event) => handleAnswerChange("que42", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que42">1 Applied to me to some degree, or some of the time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que42" name="que42" value="2" onChange={(event) => handleAnswerChange("que42", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que42">2 Applied to me to a considerate degree, or a good part of time</label><br />
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que42" name="que42" value="3" onChange={(event) => handleAnswerChange("que42", event.target.value)} />
                    <label className='p-1 m-1' htmlFor="que42">3 Applied to me very much, or most of the time</label><br />
                </div>
            </div>
            <button className='opt btn btn-outline-dark d-flex mx-auto my-3' type="submit" data-bs-toggle="modal" data-bs-target="#warning" onClick={handleSubmit}>Calculate</button>
            <div className="modal fade" id="warning" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Warning!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Check if you haven't selected any option of the above questions if it is so then you won't be able to submit the test
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2>score:{score}</h2> */}
            {!isNaN(score) && (
                <button className='opt btn btn-outline-dark d-flex mx-auto my-3' data-bs-toggle="modal" data-bs-target="#confirm" type="submit">Submit</button>
            )}
            <div className="modal fade" id="confirm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Wait!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to submit the test?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <a href={`/depressionresult/${score}`}>
                                <button type="button" className="btn btn-primary">Yes</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}