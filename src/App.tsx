import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className='mx-14'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
