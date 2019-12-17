import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../action'

class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render(){
        const user= this.props.users.find(user=>
            user.id===this.props.userId);
        if(!user){
            return null;
        }

        return<div>{user.name}</div>;
    }
}
const mapStateToProps=state=>{
    return {users:state.user}
}
export default connect(mapStateToProps,{fetchUser})(UserHeader);