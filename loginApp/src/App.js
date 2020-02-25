import React from 'react';
import{ Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import Login from './Login'
import Home from './Home';

const App=()=>{
    return(
        <div>
          
           <Router>
               <Switch>
                   <Route path='/' exact component={Login}></Route>
                   <Route path="/home" exact component={Home}></Route>
               </Switch>
           </Router>
        </div>
    )
}
export default App;