import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Car from './components/pages/Car';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import './components/CnInfo.css';
import './components/ScrollToTop';
import ScrollToTop from './components/ScrollToTop';
import CnInfo from './components/CnInfo';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <NavBar />
      <CnInfo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Usługi' element={<Services />} />
        <Route path='/Auto' element={<Car />} />
        <Route path='/Kontakt' element={<Contact/>} />
        <Route path='/O-mnie' element={<AboutMe />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}
 
export default App;