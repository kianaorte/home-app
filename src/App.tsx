import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Settings } from './components/Settings';
import Home from './pages/Home';
import Scene1 from './pages/Scene1';
import Scene2 from './pages/Scene2';
import Scene3 from './pages/Scene3';
import Bedroom from './pages/Bedroom';
import LivingRoom from './pages/LivingRoom';
import Bathroom from './pages/Bathroom';
import Outside from './pages/Outside';
import End from './pages/End';

function App() {
  return (
    <div className="App">
      <div className='background-container'>
        <Router>
          <Settings />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scene1" element={<Scene1 />} />
            <Route path="/scene2" element={<Scene2 />} />
            <Route path="/scene3" element={<Scene3 />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/livingroom" element={<LivingRoom />} />
            <Route path="/bathroom" element={<Bathroom />} />
            <Route path="/outside" element={<Outside />} />
            <Route path="/outside/end" element={<End />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
