import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Mariage from './components/pages/Mariage';
import Interieur from './components/pages/Interieur';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/interieur" element={<Interieur />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

