
import './App.css'
import Header from './components/layout/Header';
import Intro from './components/sections/Intro';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer';
import RotatingBrowserTitle from './components/common/RotatingBrowserTitle';

function App() {


  return (
    <>
      <RotatingBrowserTitle />
      <div className="App">
        <div className="px-8 py-4 bg-dark w-full">
          <Header />
        </div>
        <div className="px-8 py-4 bg-white w-full">
          <Intro />
          <Projects />
        </div>
        <div className="px-8 py-4 bg-white w-full">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
