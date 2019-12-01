import React from 'react';
import { importDeclaration } from '@babel/types';
import SearchBar from './SearchBar';

const App=()=>{
    return(
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar/>
    </div>)
}

export default App;