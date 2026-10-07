import { useState } from 'react'
import { ToastContainer} from 'react-toastify';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  

  return (
    <div>  
      <AnimatedCursor />
      <ToastContainer/>
    <Navbar/> 
    <Home />    
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
