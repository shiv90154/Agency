// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Loader from './Components/Loader';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="App">
      {isLoading && <Loader />}
      
      {!isLoading && (
        <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
         )}
    </div>
    </>
  );
}

export default App;

