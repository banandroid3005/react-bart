import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Pricing from './components/pages/Pricing';
import Car from './components/pages/Car';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import './components/ScrollToTop';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/car' element={<Car />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;