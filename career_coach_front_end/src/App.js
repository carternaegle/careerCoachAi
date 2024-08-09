// Career Coach Ai
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/homePage/home';
import Header from './components/header/header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='app-main'>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>  
    </Router>
  );
}

export default App;
