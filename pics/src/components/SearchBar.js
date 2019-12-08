import React from 'react';
import './imageList.css'

class SearchBar extends React.Component{

     state={
         term:''
     }
     onFromSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
     }
    render(){
        return(
            <div className="ui segment" style={{backgroundColor:'rosybrown'}}>
                <form onSubmit={this.onFromSubmit} className="ui form" action="text">
                    <label style={{fontSize:'20px',color:'white'}}>Image Search</label>
                    <input type="text" name="" id="" value={this.state.term} onChange={e=>this.setState({term:e.target.value})}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;