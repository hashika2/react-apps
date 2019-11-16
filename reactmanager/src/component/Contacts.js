import React,{Component} from 'react';
import { constants } from 'crypto';
import Contact from './Contact';

import {Consumer} from '../Context';
import { validate } from '@babel/types';

class Contacts extends Component{
    constructor(){
        super();
       
    }
    // deleteContact =(id)=>{
    //    const {contacts} =this.state
    //    const newContact = contacts.filter(contact=>
    //     contact.id!== id);

    //     this.setState({ 
    //         contacts: newContact
    //     });
    // }
    render(){
        return(
            <Consumer>
                {value =>{
                    const {contacts} = value;
                    return(
                        <React.Fragment>
                            
                            {contacts.map(contact =>(
                            <Contact 
                                key={contact.id}
                                name={contact.name}
                                email={contact.email}
                                phone={contact.email}
                                contact={contact} 
                                //deleteClickHandler ={this.deleteContact.bind(this,contact.id)}
                            />
                        ))}
                        
                        
                        </React.Fragment>
                    );
                }}
            </Consumer>
        )
        // const { contacts} = this.state;
        // return(
        // <div>{contacts.map(contact =>
        //     <Contact 
        //         key={contact.id}
        //         name={contact.name}
        //         email={contact.email}
        //         phone={contact.email}
        //         contact={contact} deleteClickHandler ={this.deleteContact.bind(this,contact.id)}
        //     />
        //     )}</div>
            
        
    }
}

export default Contacts;