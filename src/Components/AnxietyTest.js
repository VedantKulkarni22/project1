import React from 'react'
import '../Styles/AnxietyTest.css'

export default function TestPage() {
  return (
    <>
      <div className='rounded-3 crd d-flex flex-column justify-content-center mt-4 mb-3 p-2 shadow-lg'>
        <h1 className='mx-3'>Anxiety Test</h1>
        <ul>
        <li>Use options as a scale from 0 to 4.</li>
        <li>The extra details you write in the textarea below each question regarding that question will not directly affect your score but the information can be taken into consideration by the doctor which you consult if needed.</li>
        </ul>
      </div>
      {/* Question 1 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q1. Have you worried a lot in the last month?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="0" />
          <label className='p-1 m-1' for="que1">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="1" />
          <label className='p-1 m-1' for="que1">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="2" />
          <label className='p-1 m-1' for="que1">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="3" />
          <label className='p-1 m-1' for="que1">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que1" name="que1" value="4" />
          <label className='p-1 m-1' for="que1">4</label><br />
        </div>
        <div className='my-1'>( What do you worry about?</div>
        <div className='my-1'>What is it like when you worry?</div> 
        <div className='my-1'>Do unpleasant thoughts constantly go round and round in your mind?</div>
        <div className='my-1'>Can you stop them by turning your attention to something else?</div> 
        <div className='my-1'>How often have you worried like this in the last month? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 2 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q2. Have you had headaches or other aches and pains in the last month?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="0" />
          <label className='p-1 m-1' for="que2">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="1" />
          <label className='p-1 m-1' for="que2">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="2" />
          <label className='p-1 m-1' for="que2">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="3" />
          <label className='p-1 m-1' for="que2">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que2" name="que2" value="4" />
          <label className='p-1 m-1' for="que2">4</label><br />
        </div>
        <div className='my-1'>( What Kind? e.g. a band around the head, tightness in the scalp, ache in the back of the neck or shoulders? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 3 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q3. Have you been getting exhausted or worn out during the day or evening, even when you have not been working very hard?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="0" />
          <label className='p-1 m-1' for="que3">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="1" />
          <label className='p-1 m-1' for="que3">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="2" />
          <label className='p-1 m-1' for="que3">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="3" />
          <label className='p-1 m-1' for="que3">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que3" name="que3" value="4" />
          <label className='p-1 m-1' for="que3">4</label><br />
        </div>
        <div className='my-1'>(  Do you feel tired all the time for no apparent reason? Is it a feeling of tiredness or exhaustion? Do you have to take a rest during the day?  )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 4 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q4. Have you had difficulty relaxing in the last month?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="0" />
          <label className='p-1 m-1' for="que4">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="1" />
          <label className='p-1 m-1' for="que4">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="2" />
          <label className='p-1 m-1' for="que4">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="3" />
          <label className='p-1 m-1' for="que4">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que4" name="que4" value="4" />
          <label className='p-1 m-1' for="que4">4</label><br />
        </div>
        <div className='my-1'>( Do your muscles feel tensed up? Is it hard to get rid of the tension? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 5 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q5. Have you been so fidgety and restless that you couldn't sit still?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="0" />
          <label className='p-1 m-1' for="que5">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="1" />
          <label className='p-1 m-1' for="que5">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="2" />
          <label className='p-1 m-1' for="que5">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="3" />
          <label className='p-1 m-1' for="que5">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que5" name="que5" value="4" />
          <label className='p-1 m-1' for="que5">4</label><br />
        </div>
        <div className='my-1'>( Do you have to keep pacing up and down? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 6 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q6. Do you tend to worry over your physical health?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="0" />
          <label className='p-1 m-1' for="que6">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="1" />
          <label className='p-1 m-1' for="que6">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="2" />
          <label className='p-1 m-1' for="que6">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="3" />
          <label className='p-1 m-1' for="que6">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que6" name="que6" value="4" />
          <label className='p-1 m-1' for="que6">4</label><br />
        </div>
        <div className='my-1'>( What does your doctor say is wrong? What do you think may be wrong with you? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 7 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q7. Do you often feel on edge, or keyed up, or mentally tense?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="0" />
          <label className='p-1 m-1' for="que7">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="1" />
          <label className='p-1 m-1' for="que7">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="2" />
          <label className='p-1 m-1' for="que7">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="3" />
          <label className='p-1 m-1' for="que7">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que7" name="que7" value="4" />
          <label className='p-1 m-1' for="que7">4</label><br />
        </div>
        <div className='my-1'>( Do you generally suffer from your nerves? Do you suffer from nervous exhaustion? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 8 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q8. Have there been times lately when you have been very anxious or frightened?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="0" />
          <label className='p-1 m-1' for="que8">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="1" />
          <label className='p-1 m-1' for="que8">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="2" />
          <label className='p-1 m-1' for="que8">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="3" />
          <label className='p-1 m-1' for="que8">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que8" name="que8" value="4" />
          <label className='p-1 m-1' for="que8">4</label><br />
        </div>
        <div className='my-1'>( What was this like? Did you experience unpleasant bodily sensations like blushing, butterflies, choking, difficulty getting breath, dizziness, dry mouth, palpitations, sweating, tingling sensations, trembling? How often in the last month? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 9 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q9. Have you had the feeling that something terrible might happen?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="0" />
          <label className='p-1 m-1' for="que9">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="1" />
          <label className='p-1 m-1' for="que9">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="2" />
          <label className='p-1 m-1' for="que9">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="3" />
          <label className='p-1 m-1' for="que9">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que9" name="que9" value="4" />
          <label className='p-1 m-1' for="que9">4</label><br />
        </div>
        <div className='my-1'>( A feeling that some disaster might occur but not sure what? Have you been anxious about getting up in the morning because you are afraid to face the day? What did this feel like? Did you experience unpleasant bodily sensations? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 10 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q10. Have you had times when you felt shaky, or your heart pounded, or you felt sweaty and you simply had to do something about it?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="0" />
          <label className='p-1 m-1' for="que10">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="1" />
          <label className='p-1 m-1' for="que10">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="2" />
          <label className='p-1 m-1' for="que10">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="3" />
          <label className='p-1 m-1' for="que10">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que10" name="que10" value="4" />
          <label className='p-1 m-1' for="que10">4</label><br />
        </div>
        <div className='my-1'>( What was it like? What was happening at the time? How often in the last month? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 11 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q11. Have you tended to get anxious in certain situations, such as travelling, or in crowds, or being alone, or being in enclosed spaces?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="0" />
          <label className='p-1 m-1' for="que11">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="1" />
          <label className='p-1 m-1' for="que11">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="2" />
          <label className='p-1 m-1' for="que11">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="3" />
          <label className='p-1 m-1' for="que11">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que11" name="que11" value="4" />
          <label className='p-1 m-1' for="que11">4</label><br />
        </div>
        <div className='my-1'>(  What situations? Did you experience unpleasant bodily sensations? How often in the past month? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      {/* Question 12 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q12. What about meeting people e.g. going into a crowded room? Making conversation?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="0" />
          <label className='p-1 m-1' for="que12">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="1" />
          <label className='p-1 m-1' for="que12">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="2" />
          <label className='p-1 m-1' for="que12">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="3" />
          <label className='p-1 m-1' for="que12">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que12" name="que12" value="4" />
          <label className='p-1 m-1' for="que12">4</label><br />
        </div>
      </div>
      {/* Question 13 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q13. Do you have any special fears, like some people are scared of cats, spiders or birds?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="0" />
          <label className='p-1 m-1' for="que13">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="1" />
          <label className='p-1 m-1' for="que13">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="2" />
          <label className='p-1 m-1' for="que13">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="3" />
          <label className='p-1 m-1' for="que13">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que13" name="que13" value="4" />
          <label className='p-1 m-1' for="que13">4</label><br />
        </div>
      </div>
      {/* Question 14 */}
      <div className='w-50 p-3 crd my-2 shadow-lg rounded-3'>
        <h4 className='que'>Q14. Do you avoid any of these situations (specify as appropriate) because you know you will get anxious?</h4>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="0" />
          <label className='p-1 m-1' for="que14">0</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="1" />
          <label className='p-1 m-1' for="que14">1</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="2" />
          <label className='p-1 m-1' for="que14">2</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="3" />
          <label className='p-1 m-1' for="que14">3</label><br />
        </div>
        <div className='w-50 d-flex align-items-center'>
          <input className='p-1 m-1 rad' type="radio" id="que14" name="que14" value="4" />
          <label className='p-1 m-1' for="que14">4</label><br />
        </div>
        <div className='my-1'>(  How often have you found yourself doing this in the last month? How much does this affect your day to day life? )</div>
        <textarea className='txtarea'rows="5" cols="70"></textarea>
      </div>
      <button className='opt btn btn-outline-dark d-flex mx-auto my-3' type="submit">Submit</button>
    </>
  )
}