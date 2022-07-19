import logo from './logo.svg';
import './App.css';
import {Routes as Router, Route, Link} from 'react-router-dom';
import Home from './comps/Home.js';

function App() {
  return (
    <div className="App">
     <Router>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/store" element={} /> */}
      </Router>

    </div>
  );
}

export default App;
