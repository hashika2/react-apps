import React from 'react';

export default(props)=>{
    return(
        <div>
            <h1 className="display-4">{props.match.params.id}</h1>
            <h1 className="display-4">About Contact</h1>
            <p className="lead">Simple App to Contacts</p>
            <p className="text-secondary">Version :1.0.0.0</p>
        </div>
    )
}