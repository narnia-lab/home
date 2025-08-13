import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Camps from './components/Camps';
import Footer from './components/Footer';
import { RiKakaoTalkFill } from 'react-icons/ri';
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
      <a 
        href="http://pf.kakao.com/_DZhmn" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-kakao-button"
        aria-label="카카오톡 채널로 문의하기"
      >
        <RiKakaoTalkFill />
      </a>
    </div>
  );
}

export default App;