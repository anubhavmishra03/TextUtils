import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const togglemode = ()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
        <Routes>
              <Route exact path="/about" element={<About mode={mode} />} />
              <Route exact path="/" element={<TextForm mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
