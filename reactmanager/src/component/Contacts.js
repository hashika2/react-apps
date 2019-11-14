import React,{Component} from 'react';
import { constants } from 'crypto';
import Contact from './Contact';

class Contacts extends Component{
    constructor(){
        super();
        this.state={
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
    }
    deleteContact =(id)=>{
        const {contacts} =this.state
       const newContact = contacts.filter(contact=>
        contact.id!== id);

        this.setState({
            contacts: newContact
        });
    }
    render(){
        const { contacts} = this.state;
        return(
        <div>{contacts.map(contact =>
            <Contact 
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.email}
                contact={contact} deleteClickHandler ={this.deleteContact.bind(this,contact.id)}
            />
            )}</div>
            
        )
    }
}

export default Contacts;