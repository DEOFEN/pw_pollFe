import React from 'react'

function Poll() {
    return (
        <div>
            <h3>Poll</h3>
            <div className="cardCover">
                <div className="card">
                <div className="question">
                <h4>Poll Question</h4>
                    <ul>
                        <li>options</li>
                    </ul>
                </div>
                <div className="result">
                  <table>
                  <tr><th>option</th><th>Votes</th></tr>
                  <tr><td>option1</td><td>10</td></tr>
                  </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Poll