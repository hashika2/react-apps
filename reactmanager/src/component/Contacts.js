import React,{Component} from 'react';
import { constants } from 'crypto';
import Contact from './contact/Contact';
import axios from 'axios';

//import {Consumer} from '../Context';
//import { validate } from '@babel/types';

// const reducer =(state,action)=>{
//   switch(action.type){
//     case 'Add_Contact':
//       return{
//         ...state,
//         contacts:[action.payload,
//         ...state.contacts]
//       };
//       default:
//         return state;
//   }
// }
class Contacts extends Component{

  state={
    contacts:[]
}
componentDidMount(){
  axios
  .get
  ('https://jsonplaceholder.typicode.com/users')
  .then(res=>this.setState({
    contacts:res.data
  }))
}
deleteContact(id){
 const {contacts} =this.state;

 const newContacts =contacts.filter(contact =>
  contact.id !==id);
  this.setState({
    contacts:newContacts
  });
}
//  addContact(id){
//   const {contacts} =this.state;

//  }  

    render(){
      const item = this.state.contacts.map((contact)=>{
        return(
          
          <React.Fragment>

            <Contact
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
