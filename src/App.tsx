import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button } from './components/Button';
import Home from './pages/Home';
import Scene1 from './pages/Scene1';
import { Settings } from './components/Settings';
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      {showMenu &&
        <div>
          <div className='background-container'>
            <div className='space'>
              <h1 className='title'>Happy Birthday! </h1>
              <Router>
                <Button text="Start game" link="/scene1" />
                <Settings />
                <div>
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/scene1" element={<Scene1 />} />
                  </Routes>
                </div>
              </Router>
            </div>
          </div>

        </div>
      }
    </div>
  );
}

export default App;
