import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import About from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Navbar from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <div className="content"> */}
          <Routes>
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/resume"
              element={<Resume />}
            />
        </Routes>
        <Footer />
      {/* </div> */}
    </div>
  </Router>
  );
}

export default App;
