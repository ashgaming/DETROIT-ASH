import './App.css';
import React from 'react';
//import Pages from './components/Layout/Pages';
import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom';
import Contact from './components/Element/Contact';
import Navbar from './components/Layout/Navbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      

    </div>
  );
}

export default App;
