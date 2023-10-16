import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Scene1 from './pages/Scene1';

function App() {
  return (
    <div className="App">
      <div className='background-container'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scene1" element={<Scene1 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
