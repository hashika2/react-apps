import React from 'react';
import UserCreate from './userCreate'

class App extends React.Component{
    state={language:'english'}
    onLanguage=(language)=>{
      this.setState({language})
    }
    render(){
        return(
            <div className="ui container">Select Language:
                <i className="flag us" onClick={()=>this.onLanguage('English')}></i>
                <i className="flag nl" onClick={()=>this.onLanguage('dutch')}></i>
                <div><UserCreate/></div>
            </div>
        )
    }
}
export default App