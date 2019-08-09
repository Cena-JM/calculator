import React from "react";
import PropTypes from 'prop-types';
import './styles/Button.css';

const isOperator = val => ['÷', 'x', '-', '+', '='].includes(val);

const isZero = val => val === '0';

const Button = ({name, clickHandler}) => {
    const handleClick = () => clickHandler(name);
    return (
    <div 
    className={`button-wrapper ${
        isOperator(name) ? 'operator' : null
    } ${
        isZero(name) ? 'zero' : ''
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