import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Nav />
            <Routes>
              <Route path='/' element={<Home /> } />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/resume' element={<Resume />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
