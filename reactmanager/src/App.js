import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './component/Contacts';
import Header from './component/layouts/Header';
import AddContact_ref from './component/contact/AddContact_ref'
// import 'bootstrap/dist/css/bootstrap.min.js';



function App() {
  
  return (
    
    <div className="App">
    <Header />
    <AddContact_ref/>
    <Contacts />
   
      {/* <label htmlFor="name">name</label> */}
    </div>
    
  );
}

export default App;
