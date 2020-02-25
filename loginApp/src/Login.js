import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
const Login=()=>{
    return(
        <div className="ui container">
            <form className="ui form">
                <div className="field">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="firstName"/>
                </div>
                <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password"/>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                    <input type="checkbox" tabIndex="0" class="hidden"/>
                    <label>Check</label>
                </div>
                <div className="field">
                   <Link to='/home' className="ui button">Submit</Link>
                </div>
                </div>
            </form>
            
        </div>
    )
}
export default Login;