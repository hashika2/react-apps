import React,{Component} from 'react';


class Contact extends Component{
    render(){
        const {name,email,phone}=this.props
        return(
            <div>
                <h3>{name}</h3>
                <ul>
                <li>email :{email}</li>
                <li>phone :{phone}</li>
                </ul>
                
            </div>
            
        )
    }
}

export default Contact;