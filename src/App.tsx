import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <div className='mx-14'>
        <Navbar />
        <Home />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
