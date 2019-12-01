import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';


const Index=()=>{
    return(
        <div><App/></div>
    )
}
ReactDom.render(<Index/>,document.querySelector('#root'));