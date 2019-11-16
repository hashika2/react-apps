import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './component/Contacts';
import Header from './component/Header';
// import 'bootstrap/dist/css/bootstrap.min.js';

import {Provider} from './Context';

function App() {
  
  return (
    <Provider>
    <div className="App">
    <Header />
    <Contacts />
   
      {/* <label htmlFor="name">name</label> */}
    </div>
    </Provider>
  );
}

export default App;
