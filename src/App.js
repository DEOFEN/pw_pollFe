
import './App.css';
import Poll from './components/poll';
import Addpoll from './components/addpoll';
import { useState } from 'react';

function App() {
  const [change, setChange] = useState(0);
  return (
    <div className="App">
      <div class="main-cover"><div class="cover">
        <h3>Polling System</h3>
      </div></div>
      <div className="section">
        <div className="left_div">
          <Poll change = {change} setChange = {setChange}/>
        </div>
        <div className="right_div" >
          <Addpoll change = {change} setChange = {setChange}/>
        </div>
      </div>
    </div>
  );
}

export default App;
