import React from 'react';
import { smart } from '@babel/template';


function Header(prop){
    const {hedding}=prop;
    return(
    //  <nav className="navbar navbar-expand-sm navbar=dark bg-danger mb-3 py-0">
    //      <div className="container">
    // <a href="/" className="navbar-brand">{hedding}</a>
    //      </div>
    //  </nav>
<h1>{hedding}</h1>
    );
}
Header.defaultProps ={
    hedding:"my Page"
}
const style={
    color:'red',fontSize:'50px'
}
export default Header;