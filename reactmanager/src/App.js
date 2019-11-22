import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './component/Contacts';
import Header from './component/layouts/Header';
import AddContact from './component/contact/AddContact';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.js';



function App() {
  
  return (
    <Router>
      <div className="App">
    <Header />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/about/:id" component={About}/>
        <Route exact path="/input" component={AddContact}/>
        <Route component={NotFound}/>
      </Switch>
      
      </div>
      
   
      {/* <label htmlFor="name">name</label> */}
    </div>
    </Router>
    
    
  );
}

export default App;
