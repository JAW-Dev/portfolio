import './App.css'
import React from 'react';
import Header from './components/layout/Header';
import Intro from './components/sections/Intro';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer';
import RotatingBrowserTitle from './components/common/RotatingBrowserTitle';

const App: React.FC = React.memo(() => {
  return (
    <>
      <RotatingBrowserTitle />
      <div className="App">
        <div className="px-8 py-4 bg-dark w-full">
          <Header />
        </div>
        <div className="px-8 py-4 w-full">
          <Intro />
          <Projects />
        </div>
        <div className="px-8 py-4 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
});

export default App
