import React from 'react';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
      
 
</div>
  );
}

export default App;
