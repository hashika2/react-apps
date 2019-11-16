import React,{Component} from 'react';

const Context =React.createContext();

export class Provider extends Component{
    state={
        contacts:[
            {
                id:1,
                name:'hashika',
                email:'hashika@gamail.com',
                phone:'055-555-555'
            },
            {
                id:2,
                name:'karun',
                email:'karuna@gamail.com',
                phone:'055-3445-555'
            },
            {
                id:3,
                name:'kasun',
                email:'kasuna@gamail.com',
                phone:'0553-455-555'
            }

        ]
    }
    render(){
        return(
            <Context.Provider values={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;