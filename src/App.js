import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, outlet } from 'react-router-dom';
import Booksearch from './book/Booksearch';
import Calci from "./calculator/Calci";

function App() {
  return (
    
      <BrowserRouter>
        <nav className='navbar'>
          <Link to="/booksearch">Book Search</Link>
          <Link to="/calci">Calculator</Link>
        </nav>
        <Routes>
          <Route path="/booksearch" element={<Booksearch/>}></Route>
          <Route path="/calci" element={<Calci/>}></Route>
        </Routes>
      </BrowserRouter>
  


  )
}

export default App;
