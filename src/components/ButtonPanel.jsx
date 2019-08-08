import React from 'react';
import Button from './Button';
import './styles/ButtonPanel.css'

const ButtonPanel = ({clickHandler}) => {
    const handleClick = buttonName => clickHandler(buttonName);
    return (
        <div className="button-panel">
            <div className="row">
                <Button clickHandler={handleClick} name='AC'/>
                <Button clickHandler={handleClick} name='+/-'/>
                <Button clickHandler={handleClick} name='%'/>
                <Button clickHandler={handleClick} name='÷'/>
            </div>
            <div className="row">
                <Button clickHandler={handleClick} name='7'/>
                <Button clickHandler={handleClick} name='8'/>
                <Button clickHandler={handleClick} name='9'/>
                <Button clickHandler={handleClick} name='x'/>
            </div>
            <div className="row">
                <Button clickHandler={handleClick} name='4'/>
                <Button clickHandler={handleClick} name='5'/>
                <Button clickHandler={handleClick} name='6'/>
                <Button clickHandler={handleClick} name='-'/>
            </div>
            <div className="row">
                <Button clickHandler={handleClick} name='1'/>
                <Button clickHandler={handleClick} name='2'/>
                <Button clickHandler={handleClick} name='3'/>
                <Button clickHandler={handleClick} name='+'/>
            </div>
            <div className="row">
                <Button clickHandler={handleClick} name='0'/>
                <Button clickHandler={handleClick} name='.'/>
                <Button clickHandler={handleClick} name='='/>
            </div>
        </div>
    );
};

export default ButtonPanel;