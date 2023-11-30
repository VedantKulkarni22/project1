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
        totalScore = totalScore / 20;
        setScore(totalScore);
    };

    const handleSubmit = () => {
        calculateScore();
    };
    return (
        <>
            <Navbar />
            <div className='rounded-3 crdtest d-flex flex-column mt-4 mb-3 p-2 shadow-lg'>
                <h1 className='mx-3'>Depression Test</h1>
                <ul>
                    <li>Use options as a scale from 0 to 4.</li>
                    <li>You should first click on Calculate button and then on Submit button.</li>
                    <li>The extra details you write in the textarea below each question regarding that question will not directly affect your score but the information can be taken into consideration by the doctor which you consult if needed.</li>
                </ul>
            </div>
            {/* Question 1 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q1. What has your concentration been like recently?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="0" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' for="que1">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="1" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' for="que1">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="2" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' for="que1">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="3" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' for="que1">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="4" onChange={(event) => handleAnswerChange("que1", event.target.value)} />
                    <label className='p-1 m-1' for="que1">4</label><br />
                </div>
                <div className='my-1'>( Can you read an article in the paper or watch a TV. programme right through?</div>
                <div className='my-1'>Do your thoughts drift so that you don't take things in? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 2 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q2.  Do you tend to brood on things?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="0" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' for="que2">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="1" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' for="que2">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="2" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' for="que2">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="3" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' for="que2">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="4" onChange={(event) => handleAnswerChange("que2", event.target.value)} />
                    <label className='p-1 m-1' for="que2">4</label><br />
                </div>
                <div className='my-1'>( So much that you neglect things like your work, or eating, or housework, or looking after yourself? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 3 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q3. What about your interests, have they changed at all?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="0" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' for="que3">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="1" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' for="que3">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="2" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' for="que3">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="3" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' for="que3">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="4" onChange={(event) => handleAnswerChange("que3", event.target.value)} />
                    <label className='p-1 m-1' for="que3">4</label><br />
                </div>
                <div className='my-1'>( Have you lost interest in work, or hobbies, or recreations? Have you let your appearance go? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 4 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q4. Do you keep reasonably cheerful, or have you been very depressed or low spirited recently?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="0" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' for="que4">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="1" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' for="que4">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="2" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' for="que4">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="3" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' for="que4">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="4" onChange={(event) => handleAnswerChange("que4", event.target.value)} />
                    <label className='p-1 m-1' for="que4">4</label><br />
                </div>
                <div className='my-1'>( Have you cried at all, or wanted to cry? When did you last really enjoy doing anything? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 5 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q5.  Is the depression worse at any particular time of day?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="0" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' for="que5">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="1" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' for="que5">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="2" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' for="que5">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="3" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' for="que5">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="4" onChange={(event) => handleAnswerChange("que5", event.target.value)} />
                    <label className='p-1 m-1' for="que5">4</label><br />
                </div>
            </div>
            {/* Question 6 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q6. How do you see the future?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="0" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' for="que6">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="1" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' for="que6">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="2" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' for="que6">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="3" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' for="que6">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="4" onChange={(event) => handleAnswerChange("que6", event.target.value)} />
                    <label className='p-1 m-1' for="que6">4</label><br />
                </div>
                <div className='my-1'>( Has life seemed quite hopeless? Can you see any future? Have you given up, or does there still seem some reason for trying? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 7 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q7. Have you ever wanted to stay away from other people?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="0" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' for="que7">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="1" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' for="que7">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="2" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' for="que7">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="3" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' for="que7">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="4" onChange={(event) => handleAnswerChange("que7", event.target.value)} />
                    <label className='p-1 m-1' for="que7">4</label><br />
                </div>
                <div className='my-1'>( Have you been suspicious of their intentions? Afraid of actual harm? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 8 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q8. What is your opinion of yourself compared with other people?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="0" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' for="que8">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="1" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' for="que8">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="2" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' for="que8">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="3" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' for="que8">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="4" onChange={(event) => handleAnswerChange("que8", event.target.value)} />
                    <label className='p-1 m-1' for="que8">4</label><br />
                </div>
                <div className='my-1'>( Do you feel better, or not as good, or about the same as most? Do you feel inferior or even worthless? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 9 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q9. How confident do you feel in yourself?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="0" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' for="que9">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="1" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' for="que9">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="2" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' for="que9">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="3" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' for="que9">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="4" onChange={(event) => handleAnswerChange("que9", event.target.value)} />
                    <label className='p-1 m-1' for="que9">4</label><br />
                </div>
                <div className='my-1'>( For example when talking to others, or in managing your relations with other people? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 10 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q10. Are you self-conscious in public?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="0" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' for="que10">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="1" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' for="que10">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="2" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' for="que10">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="3" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' for="que10">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="4" onChange={(event) => handleAnswerChange("que10", event.target.value)} />
                    <label className='p-1 m-1' for="que10">4</label><br />
                </div>
                <div className='my-1'>( Do you get the feeling that other people are taking notice of you in the street, or a bus, or a restaurant? Do they ever seem to laugh at you or talk about you critically? Are people really looking at you or is it perhaps the way you feel about it? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 11 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q11. Do you have the feeling that you are being blamed for something, or even being accused?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="0" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' for="que11">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="1" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' for="que11">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="2" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' for="que11">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="3" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' for="que11">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="4" onChange={(event) => handleAnswerChange("que11", event.target.value)} />
                    <label className='p-1 m-1' for="que11">4</label><br />
                </div>
                <div className='my-1'>( What about? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 12 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q12.  Do you tend to blame yourself at all?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="0" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' for="que12">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="1" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' for="que12">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="2" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' for="que12">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="3" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' for="que12">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="4" onChange={(event) => handleAnswerChange("que12", event.target.value)} />
                    <label className='p-1 m-1' for="que12">4</label><br />
                </div>
                <div className='my-1'>( If people are critical at all, do you think you deserve it? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 13 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q13. What has your appetite been like recently?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="0" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' for="que13">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="1" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' for="que13">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="2" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' for="que13">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="3" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' for="que13">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="4" onChange={(event) => handleAnswerChange("que13", event.target.value)} />
                    <label className='p-1 m-1' for="que13">4</label><br />
                </div>
                <div className='my-1'>( Have you lost any weight in the last three months? Have you been trying to lose weight? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 14 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q14. Have you had any trouble getting off to sleep recently?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="0" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' for="que14">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="1" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' for="que14">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="2" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' for="que14">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="3" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' for="que14">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="4" onChange={(event) => handleAnswerChange("que14", event.target.value)} />
                    <label className='p-1 m-1' for="que14">4</label><br />
                </div>
                <div className='my-1'>( How much has it affected you? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 15 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q15. Do you seem to be slowed down in your movements, or have too little energy recently?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="0" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' for="que15">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="1" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' for="que15">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="2" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' for="que15">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="3" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' for="que15">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que15" name="que15" value="4" onChange={(event) => handleAnswerChange("que15", event.target.value)} />
                    <label className='p-1 m-1' for="que15">4</label><br />
                </div>
                <div className='my-1'>( How much has it affected you? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 16 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q16.  Do you wake early in the morning?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="0" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' for="que16">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="1" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' for="que16">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="2" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' for="que16">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="3" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' for="que16">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que16" name="que16" value="4" onChange={(event) => handleAnswerChange("que16", event.target.value)} />
                    <label className='p-1 m-1' for="que16">4</label><br />
                </div>
                <div className='my-1'>( What time do you wake? Can you get back off to sleep, or do you lie awake? How often has this happened in the last month? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 17 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q17. Has there been any change in your interest in sex?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="0" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' for="que17">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="1" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' for="que17">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="2" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' for="que17">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="3" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' for="que17">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que17" name="que17" value="4" onChange={(event) => handleAnswerChange("que17", event.target.value)} />
                    <label className='p-1 m-1' for="que17">4</label><br />
                </div>
            </div>
            {/* Question 18 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q18. Have you been much more irritable than usual recently? </h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="0" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' for="que18">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="1" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' for="que18">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="2" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' for="que18">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="3" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' for="que18">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que18" name="que18" value="4" onChange={(event) => handleAnswerChange("que18", event.target.value)} />
                    <label className='p-1 m-1' for="que18">4</label><br />
                </div>
                <div className='my-1'>( How do you show it? Do you keep it to yourself, or shout/hit people? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 19 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q19. Do you feel as if you have committed a crime, or sinned greatly, or deserve punishment?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="0" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' for="que19">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="1" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' for="que19">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="2" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' for="que19">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="3" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' for="que19">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que19" name="que19" value="4" onChange={(event) => handleAnswerChange("que19", event.target.value)} />
                    <label className='p-1 m-1' for="que19">4</label><br />
                </div>
                <div className='my-1'>( Have you felt that your presence might contaminate or ruin other people? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            {/* Question 20 */}
            <div className='w-50 p-3 crdtest my-2 shadow-lg rounded-3'>
                <h4 className='que'>Q20. Are there any concerns or issues with your body?</h4>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="0" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' for="que20">0</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="1" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' for="que20">1</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="2" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' for="que20">2</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="3" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' for="que20">3</label><br />
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <input className='p-1 m-1 rad' type="radio" id="que20" name="que20" value="4" onChange={(event) => handleAnswerChange("que20", event.target.value)} />
                    <label className='p-1 m-1' for="que20">4</label><br />
                </div>
                <div className='my-1'>( Do you think you have some kind of serious physical illness? Have you told your doctor about this? )</div>
                <textarea className='txtarea' rows="5" cols="70"></textarea>
            </div>
            <button className='opt btn btn-outline-dark d-flex mx-auto my-3' type="submit" data-bs-toggle="modal" data-bs-target="#warning" onClick={handleSubmit}>Calculate</button>
            <div class="modal fade" id="warning" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Warning!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Check if you haven't selected any option of the above questions if it is so then you won't be able to submit the test
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {!isNaN(score) && (
                <button className='opt btn btn-outline-dark d-flex mx-auto my-3' data-bs-toggle="modal" data-bs-target="#confirm" type="submit">Submit</button>
            )}
            <div class="modal fade" id="confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Wait!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure to submit the test?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <a href={`/depressionresult/${score}`}>
                                <button type="button" class="btn btn-primary">Yes</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}