import React from 'react';
import { smart } from '@babel/template';
import {Link} from 'react-router-dom';


function Header(prop){
    const {hedding}=prop;
    return(
     <nav className="navbar navbar-expand-sm navbar=dark bg-danger mb-3 py-0">
         <div className="container">
    <Link to="/" className="navbar-brand"><i className="fa fa-home"></i>{hedding}</Link>
    <div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to="/input" className="navbar-brand"><i className="fa fa-plus"></i>Add</Link>
            </li>
            <li className="nav-item">
            <Link to="/About" className="navbar-brand"><i className="fa fa-question"></i>About</Link>
            </li>
        </ul>
    </div>
         </div>
     </nav>

    );
}
Header.defaultProps ={
    hedding:"HEADER"
}
const style={
    color:'red',fontSize:'50px'
}
export default Header;