import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Field extends React.Component{
    static contextType=LanguageContext;
    render(){
        const text=this.context==='English'?'Name':'Naaam';
        return(
            <div>
                <label>{text}</label>
            <input type="text"></input>
            </div>
        )
    }
}
export default Field;
