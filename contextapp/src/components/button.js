import React from 'react';
import LanguageContext from '../contexts/languageContext';


class Button extends React.Component{
    static contextType=LanguageContext;
    render(){
        const text=this.context==="English"?'Submit':'Smaaan'
        return(
            <button className="ui button primary">{text}</button>
        )
    }
}

export default Button;