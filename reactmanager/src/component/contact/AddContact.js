import React,{ Component } from "react"

class AddComponent extends Component{

    state ={
        name:"",
        email:"",
        phone:""
    }
    render(){
        const {email,phone,name} = this.state;
        return(
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label><br></br>
                            <input type="text" name="name" className="from-control form-control-lg" placeholder="Enter Name ...."
                             value={name}></input>
                           
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label><br></br>
                            <input type="email" name="email" className="from-control form-control-lg" placeholder="Enter Email ...."
                             value={email}></input>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label><br></br>
                            <input type="text" name="phone" className="from-control form-control-lg" placeholder="Enter Phone ...." 
                            value={phone}></input>
                            
                        </div>
                        <input className="btn btn-light btn-block" value="Add Contact" name="submit"></input> 
                    </form>
                </div>
            </div>
        );
    }
}
export default AddComponent; 