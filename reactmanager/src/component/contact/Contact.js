import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { constants } from 'crypto';


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
        const {name,email,phone}=this.props;
        const {showContactInfo} =this.state;
        return(
            <div className="card card-body mb-3">
                <h3>{name} <i onClick={()=>{
                 this.setState({showContactInfo:!this.state.showContactInfo});
                 }} className="fas fa-sort-down"style={{cursor:'pointer'}}/><i className="fas fa-times"style={{cursor:'pointer',float:'right',color:'red'}} 
                 onClick={this.deleteOnClick}></i></h3>
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