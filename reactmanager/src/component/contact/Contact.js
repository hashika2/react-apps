import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { constants } from 'crypto';
import {Link} from 'react-router-dom';


class Contact extends Component{

    // constructor(){
       
    //     super();
    //     this.state={}
    //     this.onShowCick =this.onShowCick.bind(this);
    // }
    state ={
        showContactInfo:false
    };
     deleteOnClick=()=>{
        this.props.deleteClickHandler();
     }
    render(){
        const {name,email,phone,id}=this.props;
        const {showContactInfo} =this.state;
        return(
            <div className="card card-body mb-3">
                <h3>{name} <i onClick={()=>{
                 this.setState({showContactInfo:!this.state.showContactInfo});
                 }} className="fa fa-sort-down"style={{cursor:'pointer'}}/><i className="fa fa-times"
                 style={{cursor:'pointer',float:'right',color:'red'}} 
                 onClick={this.deleteOnClick}></i>
                 
                 <Link to={`contact/edit/${id}`}>
                     <i className="fa fa-pencil-alt"
                     style={{
                         cursor:'pointer',
                         float:'right',
                         color:'black',
                         marginRight:'1rem'
                     }}></i>
                 </Link>
                 </h3>
                {showContactInfo?(<ul className="list-group">
                <li className="list-group-item">email :{email}</li>
                <li className="list-group-item">phone :{phone}</li> </ul>)
                :null }
                
            </div>
            
        );
    }
}
Contact.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
    deleteClickHandler:PropTypes.func.isRequired
};

export default Contact;