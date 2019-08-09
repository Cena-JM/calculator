import React from 'react';
import Button from './Button';
import './styles/ButtonPanel.css'

const ButtonPanel = ({clickHandler}) => {
    const handleClick = buttonName => clickHandler(buttonName);
    const buttons = [ 
                    'AC', '+/-', '%', '÷', '7', '8',
                    '9', 'x', '4', '5', '6', '-', '1',
                    '2', '3', '+', '0','.', '=',
                    ].map((value, i) => (
        <Button
          clickHandler={handleClick}
          name={value}
          key={`button-${value}`}
        />
      ));
    return (
        <div className='button-panel'>
            <div className='row'>
                {buttons.slice(0, 4)}
            </div>
            <div className='row'>
                {buttons.slice(4, 8)}
            </div>
            <div className='row'>
                {buttons.slice(8, 12)}
            </div>
            <div className='row'>
                {buttons.slice(12, 16)}
            </div>
            <div className='row'>
                {buttons.slice(16, 19)}
            </div>
        </div>
    );
};

export default ButtonPanel;