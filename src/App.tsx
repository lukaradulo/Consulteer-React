import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <div className='ml-16 mr-16'>
        <Navbar />
        <Home />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
