import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component {
    static defaultProps = {
        title : 'Comportamento Padrao'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render(){
        return (
            <div>
                {this.props.title}
                {this.props.descricao}
                <button onClick = {this.props.press} >{this.props.children}</button>
            </div>
            
        );
    }
} 

export default Button;