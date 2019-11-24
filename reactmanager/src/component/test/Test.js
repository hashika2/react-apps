import React,{Component} from 'react';

class Test extends Component{

    state={
        name:"",
        body:""
    }
    componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/comments/1')
        .then(response => response.json())
        .then(data => this.setState(
          {
              name:data.name,
              body:data.body
          }
        ))
    }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate..');
    // }
        
    // componentWillMount(){
    //     console.log('componentWimout...');
    // }
    render(){
        const {body,name} =this.state;
        return(
        <div><h1>{name}</h1>    
             <p>{body}</p>
        </div>
        );
    }
}
export default Test;