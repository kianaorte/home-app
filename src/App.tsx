import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button } from './components/Button';
import Home from './pages/Home';
import Scene1 from './pages/Scene1';

function App() {
  return (
    <div className="App">
      <div className='background-container'>
        {/* <div>
          <h1 className='title'>Home!</h1>

        </div> */}

        <Router>
          <Button text="hello" link="/scene1" />
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/scene1" element={<Scene1 />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
