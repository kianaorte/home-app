import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Settings } from './components/Settings';
import Home from './pages/Home';
import Scene1 from './pages/Scene1';
import Scene2 from './pages/Scene2';

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
            {/* <Route path="/scene3" element={<Scene1 />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
