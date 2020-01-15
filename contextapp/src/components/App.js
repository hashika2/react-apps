import React from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../contexts/languageContext';

class App extends React.Component{
    state={language:'english'}
    onLanguage=(language)=>{
      this.setState({language})
      console.log(this.state.language)
    }
    render(){
        return(
            <div className="ui container">Select Language:
                <i className="flag us" onClick={()=>this.onLanguage('English')}></i>
                <i className="flag nl" onClick={()=>this.onLanguage('dutch')}></i>
                <div>
                    <LanguageContext.Provider value={this.state.language}/>
                    <UserCreate/>
                    <LanguageContext.Provider/>
                </div>
            </div>
        )
    }
}
export default App