import React from 'react'
import NavBar from './components/navbar';
import Footer from './components/footer';
import Contact from './screens/contact';
import About from './screens/about';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
        <Router>
          <NavBar/> 
          <Routes >
            <Route exact path="/" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes >
          <Footer/>
     </Router>
    </div>
  )
}

export default App
