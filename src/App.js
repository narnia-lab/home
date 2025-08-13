import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Camps from './components/Camps';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Camps />
      </main>
      <Footer />
    </div>
  );
}

export default App;
