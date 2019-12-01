import React from 'react';

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
            <div className="ui segment">
                <form onSubmit={this.onFromSubmit} className="ui form" action="text">
                    <label>Image Search</label>
                    <input type="text" name="" id="" value={this.state.term} onChange={e=>this.setState({term:e.target.value})}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;