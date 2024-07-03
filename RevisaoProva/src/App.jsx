import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Busca from './components/Busca'
import Home from './pages/Home';
import './App.css'


function App() {
  return (
    <Router>
      <div>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Busca" element={<Busca />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
