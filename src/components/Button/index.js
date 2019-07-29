import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Button = (props) => {

    return (
        
        <button onClick = {props.press} >{props.children}</button>
        
    );

}


export default Button;