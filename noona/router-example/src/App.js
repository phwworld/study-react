import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
