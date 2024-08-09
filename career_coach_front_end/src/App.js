// Career Coach Ai
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/homePage/home';
import Header from './components/header/header';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import CreateAccount from './components/createAccount/createAccount';
import Login from './components/Login/login'; // need to switch from Login to login

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
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>  
    </Router>
  );
}

export default App;
