import React,{Component} from 'react';
import { constants } from 'crypto';
import Contact from './contact/Contact';

//import {Consumer} from '../Context';
//import { validate } from '@babel/types';

class Contacts extends Component{

  state={
    contacts:[
        {
            id:1,
            name:'hashika',
            email:'hashika@gamail.com',
            phone:'055-555-555'
        },
        {
            id:2,
            name:'karun',
            email:'karuna@gamail.com',
            phone:'055-3445-555'
        },
        {
            id:3,
            name:'kasun',
            email:'kasuna@gamail.com',
            phone:'0553-455-555'
        }

    ]
}
deleteContact(id){
 const {contacts} =this.state;

 const newContacts =contacts.filter(contact =>
  contact.id !==id);
  this.setState({
    contacts:newContacts
  });
}
 addContact(id){
  const {contacts} =this.state;
  
 }  
    render(){
      const item = this.state.contacts.map((contact)=>{
        return(
          <React.Fragment><Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            contact={contact} deleteClickHandler={this.deleteContact.bind(this,contact.id)}
          /></React.Fragment>
        )
      })
      return(
       
       <div>
        <h1>{item}</h1> 
       
        </div>
        
      );
    }
  }
     

    

export default Contacts;
