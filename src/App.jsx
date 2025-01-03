import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faqs from './Pages/Faqs';
import './index.css';

function App() {
  return (
    // <div>
    //   <Header/>
    //   <Navbar/>
    //   <Footer/>
    //  </div>
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/glossaire" element={<Glossaire/>} />
        <Route path="/ressources" element={<Ressources />} />*/}
        <Route path="/faq" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
