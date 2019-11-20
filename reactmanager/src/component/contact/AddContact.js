import React,{ Component } from "react"

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
    onSubmit=(e)=>{
        e.preventDefault();
        
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
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label><br></br>
                            <input type="text" name="name" className="from-control form-control-lg" placeholder="Enter Name ...."
                             defaultValue={name}
                            
                            ></input>
                           
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label><br></br>
                            <input type="email" name="email" className="from-control form-control-lg" placeholder="Enter Email ...."
                             defaultValue={email}
                             
                             ></input>
                            
                        </div>
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