import React from "react";
import './styles/Button.css';

const isOperator = val => ['÷', 'x', '-', '+', '='].includes(val);

const isZero = val => val === '0';

const Button = props => (
    <div 
    className={`button-wrapper ${
        isOperator(props.children) ? 'operator' : null
    } ${
        isZero(props.children) ? 'zero' : ''
    }`}>
    {props.children}
    </div>
);

export default Button;