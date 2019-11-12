import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Contact extends Component{
    render(){
        const {name,email,phone}=this.props
        return(
            <div className="card card-body mb-3">
                <h3>{name}</h3>
                <ul className="list-group">
                <li className="list-group-item">email :{email}</li>
                <li className="list-group-item">phone :{phone}</li>
                </ul>
                
            </div>
            
        )
    }
}
Contact.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired
};

export default Contact;