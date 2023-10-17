import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Settings } from './components/Settings';
import Home from './pages/Home';
import Scene1 from './pages/Scene1';
import Scene2 from './pages/Scene2';
import Scene3 from './pages/Scene3';
import Bedroom from './pages/Bedroom';

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
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
