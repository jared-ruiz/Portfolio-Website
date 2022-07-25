import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Nav />
            <Routes>
              <Route path='/' element={<Home /> } />
              <Route path='/about' element={<About />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
