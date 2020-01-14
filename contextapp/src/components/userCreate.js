import React from 'react';
import Field from './field';
import Button from './button';

const createUser=()=>{
    return(
        <div className="ui form">
            <Field/>
            <Button/>
        </div>
    )
}
export default createUser;