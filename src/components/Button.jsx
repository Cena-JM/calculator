/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Button.css';

const isOperator = val => ['÷', 'x', '-', '+', '='].includes(val);

const isZero = val => val === '0';

const Button = ({name, clickHandler}) => {
    const handleClick = () => clickHandler(name);
    return (
    <div 
    className={
        `${
        isOperator(name) ? 'operator button-wrapper' : 
        isZero(name) ? 'zero button-wrapper' : 'button-wrapper'
    }`}
    onClick={handleClick}>{name}
    </div>
    );
};

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default Button;