import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, outlet } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import Booksearch from './book/Booksearch';

function App() {
  return (
    
      <BrowserRouter>
        <nav className='navbar'>
          <Link to="/calculator" >calculator</Link>
          <Link to="/booksearch">Book Search</Link>
        </nav>
        <Routes>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/booksearch" element={<Booksearch/>}></Route>
        </Routes>
      </BrowserRouter>
  


  )
}

export default App;
