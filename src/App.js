import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Nav />
            <Routes>
              <Route path='/' element={<About /> } />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
