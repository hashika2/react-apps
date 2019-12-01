import React from 'react';
import { importDeclaration } from '@babel/types';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{

    async onSearchSubmit(term){
      const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{ query:term },
            headers:{
                Authorization :'Client-ID ddf2190ccf17f5223950452c547e987db72a63b4b4a88d1be6f32aaa3cdc07b1'
            }
        });
        console.log(response.data.results);
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                
            </div>)
    }
   
}

export default App;