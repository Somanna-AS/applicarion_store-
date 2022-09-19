import React from 'react';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>


 
</div>
  );
}

export default App;
