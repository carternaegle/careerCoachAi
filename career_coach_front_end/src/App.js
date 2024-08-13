// Career Coach Ai
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/homePage/home';
import Header from './components/header/header';
import About from './pages/about/about';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import CreateAccount from './pages/createAccount/createAccount';
import Login from './pages/Login/login';
import PasswordRecovery from './pages/passwordRecovery/passwordRecovery'
import Dashboard from './pages/dashboard/dashboard';

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
            <Route path="/passwordRecovery" element={<PasswordRecovery />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>  
    </Router>
  );
}

export default App;
