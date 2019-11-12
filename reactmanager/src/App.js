import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.js';

function App() {
  
  return (
    <div className="App">
    <Header />
    <Contact name="hashika" email="hashika@gmail.com" phone="0771229223"/>
    <Contact name="Sunanda" email="sunundaa@gmail.com" phone="0771224656"/>
   
      {/* <label htmlFor="name">name</label> */}
    </div>
  );
}

export default App;
