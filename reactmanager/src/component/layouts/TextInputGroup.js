import React,{Component} from 'react';
import { placeholder } from '@babel/types';
import PropTypes from 'prop-types';
import { type } from 'os';

const TextInputGroup=({
    label,
    name,
    placeholder,
    type,
    onChange,
    value
})=>{
   return(
    <div className="form-group">
    <label htmlFor={name}>{label}</label><br></br>
    <input 
    type={type}
    name={name} className="from-control form-control-lg" 
    placeholder={placeholder}
    //  defaultValue={email}
    //  ref={this.emailInput}
    value={value}
    onChange={onChange}
     ></input>
    </div>
   )
};

TextInputGroup.propTypes ={
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,

}

TextInputGroup.defaultProps ={
    type:'text'
}
export default TextInputGroup;