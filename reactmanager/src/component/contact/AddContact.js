import React,{ Component } from "react"
import uuid from 'uuid';
import Contacts from '../Contacts';
import TextInputContact from '../layouts/TextInputGroup';

class AddComponent extends Component{
    constructor(props){
        super(props);

        this.nameInput =React.createRef();
        this.emailInput =React.createRef();
        this.phoneInput =React.createRef();    }
    state ={
       
        name:"",
        email:"",
        phone:""
    }
    onSubmit=(id,e)=>{
        e.preventDefault();

        const {name ,email,phone} =this.state;

        const newContact ={
            id:uuid(),
            name,
            email,
            phone
        }
       // dispatch({type:'Add_Contact',payload:newContac})
    }
    onChange=(e)=>this.setState({[e.target.name]:e.target.value});

    // static defaultProps={
    //     name:"hashika",
    //     email:"hashika@gmai.com",
    //     phone:"12324345"
    // }
       render(){
        const {email,phone,name} = this.props;
        return(
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                       <TextInputContact
                       label="Name"
                       name="name"
                       placeholder="Enter Name"
                       value={name}
                       onChange={this.onChange}
                       
                       />
                      <TextInputContact
                       label="Email"
                       name="email"
                       type="email"
                       placeholder="Enter Email"
                       value={email}
                       onChange={this.onChange}
                       
                       />
                        <div className="form-group">
                            <label htmlFor="name">Phone</label><br></br>
                            <input type="text" name="phone" className="from-control form-control-lg" placeholder="Enter Phone ...." 
                            defaultValue={phone}
                            
                            ></input>
                        </div>
                        <input className="btn btn-light btn-block" value="Add Contact" type="submit"></input> 
                    </form>
                </div>
            </div>
        );
    }
}
export default AddComponent; 