import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './component/Contacts';
import Header from './component/Header';
// import 'bootstrap/dist/css/bootstrap.min.js';

function App() {
  
  return (
    <div className="App">
    <Header />
    <Contacts />
   
      {/* <label htmlFor="name">name</label> */}
    </div>
  );
}

export default App;
