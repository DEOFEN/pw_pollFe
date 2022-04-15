
import './App.css';
import Poll from './components/poll';
import Addpoll from './components/addpoll';

function App() {
  return (
    <div className="App">
      <div class="main-cover"><div class="cover">
        <h3>Polling System</h3>
      </div></div>
      <div className="section">
        <div className="left_div">
          <Poll />
        </div>
        <div className="right_div">
          <Addpoll />
        </div>
      </div>
    </div>
  );
}

export default App;
