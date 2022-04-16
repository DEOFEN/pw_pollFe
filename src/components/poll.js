import {React, useEffect, useState} from 'react'
import config from "../config"
import axios from "axios"

function Poll() {
    const [data, setData] = useState([]);

useEffect(() => {

    function check(){
        axios.get("http://localhost:3001/v1/getAllPolls")
        .then((res) => {
            console.log("res", res);
            if(res.status === 200){
                setData(res.data)
                console.log("dat",data);
            }
        })
    };

    check();
   
}, [data])

    return (
        <div>
            <h3>Poll</h3>
            <div className="cardCover">

            {data.length ? [] : data.map((item) => {
                    return(
                <div className="card">
                <div className="question">
                <h4>{item.question}</h4>
                    <ul>
                    {item.options.map((tile) => {
                      return (<li>{tile.option}</li>)
                    })}
                    </ul>
                </div>
                <div className="result">
                  <table>
                  <tr><th>option</th><th>Votes</th></tr>
                  <tr><td>option1</td><td>10</td></tr>
                  </table>
                </div>
                </div>)
                })}

            </div>
        </div>
    )
}

export default Poll