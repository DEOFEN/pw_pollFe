import {React, useEffect, useState} from 'react'
import config from "../config"
import axios from "axios"

function Poll({change, setChange}) {
    const [data, setData] = useState([]);
    // const [change, setChange] = useState(0);

useEffect(() => {

    function check(){
        axios.get(`${config.apiUrl}/v1/getAllPolls`)
        .then((res) => {
            console.log("res", res.data.data);
            if(res.status === 200){
                setData(res.data.data)
                console.log("data",data);
            }
        })
    };

    check();
   
}, [change])

const handlePoll = (e) => {
    console.log("loigId",e.target.id);
    let optionIdArr = [];
    let optionArray = document.getElementsByName(e.target.id);
    console.log("array", optionArray)
    for(let i=0;i<optionArray.length;i++){
        console.log("array", optionArray[i].checked)
        if(optionArray[i].checked){
            optionArray[i].checked = false;
           optionIdArr.push(optionArray[i].value)
        }
       
    }
    console.log("value", optionIdArr)

    if(!optionIdArr.length){ 
        console.log("select atleast one option") 
        return 0 
    }

    let payload = {
            questionId: e.target.id,
            optionIds: optionIdArr
    }
    console.log("payload",payload)
     axios.post(`${config.apiUrl}/v1/givePoll`, payload)
        .then(res => {
            console.log("erd",res.data);
            setChange(Math.floor(Math.random() * 1000))
            // setMsg(<h4 style={{color: "green"}}>Thankyou for your contribution</h4>)
          
        }).catch((error) => {
            // setMsg(<h4 style={{color: "red"}}>Failed to upload</h4>)
           console.log("error")
        })


}



    return (
        <div>
            <h1 style={{textAlign: "center", marginTop: "2rem"}}>Poll</h1>
            <div className="cardCover">

            {data.length ? data.map((item) => {
                    return(
                <div className="card">
                <div className="question">
                <h3>{item.question}</h3>
                <input type="hidden" value={item._id}/>
                    <ul>
                    {item.options.map((tile) => {
                      return (<li><input type="checkbox" value={tile._id} name={item._id} />{tile.option}</li>)
                    })}
                    </ul>
                    <input type="submit" onClick={handlePoll} value="submit" id={item._id} class="submit_btn"/>
                </div>
                <div className="result">
                <h3>Results</h3>
                  <table>
                  <tr><th>option</th><th>Votes</th></tr>
                  {item.options.map((tile) => {
                      return (<tr><td>{tile.option}</td><td>{tile.votes}</td></tr>)
                    })}
                  
                  </table>
                </div>
                </div>)
                }) : "NO POLLS CREATED YET"}

            </div>
        </div>
    )
}

export default Poll