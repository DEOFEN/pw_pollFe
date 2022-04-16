import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from './../../src/config'

function Addpoll({change, setChange}) {

  // const [change, setChange] = useState(0)

  useEffect(() => {
      console.log(change);
  }, [change])

  const handleData = () => {

   let optionArray = [];
  let  checkArry = [];
    let question = document.getElementById('question_input').value;
    let option_a = document.getElementById('option_a').value;
    let option_b = document.getElementById('option_b').value;
    let option_c = document.getElementById('option_c').value;
    let option_d = document.getElementById('option_d').value;

    if(option_a){
      optionArray.push({option: option_a, votes: 0});
      checkArry.push(option_a)
    }
    if(option_b){
      optionArray.push({option: option_b, votes: 0})
      checkArry.push(option_b)
    }
    if(option_c){
      optionArray.push({option: option_c, votes: 0})
      checkArry.push(option_c)
    }
    if(option_d){
      optionArray.push({option: option_d, votes: 0})
      checkArry.push(option_d)
    }

    console.log("opt", optionArray)

    if(checkArry.length < 2){
      alert("Enter atleast 2 options to create poll")
      return true
    }


    let payload = {
      question: question,
      options: optionArray
    }

console.log("payload",payload)
axios.post(`${config.apiUrl}/v1/addNewPoll`, payload)
  .then(res => {
      console.log("erd",res.data);
      setChange(Math.floor(Math.random() * 1000))
      // setMsg(<h4 style={{color: "green"}}>Thankyou for your contribution</h4>)
    
  }).catch((error) => {
      // setMsg(<h4 style={{color: "red"}}>Failed to upload</h4>)
     console.log("error")
  })



    document.getElementById('option_b').value = "";
    document.getElementById('option_a').value = "";
    document.getElementById('option_c').value = "";
    document.getElementById('option_d').value = "";
  }


  return (
    <div><div className='box_cover'>
    <div className='box_in'>
    <h2>Create Poll</h2>
      <label>
      <span>Question : </span>
      <input type="text" id='question_input' />
      </label>

      <h3>Options</h3>

      <label>
      <span>Option A : </span>
      <input type="text" id='option_a' />
      </label>
      <br />
      <label> 
      <span>Option B : </span>
      <input type="text" id='option_b' />
      </label>
      
      <br />
      <label>
      <span>Option C : </span>
      <input type="text" id='option_c' />
      </label>
      <br />
      <label> 
      <span>Option D : </span>
      <input type="text" id='option_d' />
      </label>

      <input type="submit" value="submit" onClick={handleData} />
     
    </div>
     
    </div></div>
  )
}

export default Addpoll