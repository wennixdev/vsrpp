import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Rules from './components/Rules';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Rules />
      <Updates />
      <Footer />
    </div>
  );
}

export default App;