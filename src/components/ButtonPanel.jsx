import React from 'react';
import Button from './Button';
import './styles/ButtonPanel.css'

const ButtonPanel = () => {
    return (
        <div className="button-panel">
            <div className="row">
                <Button>AC</Button>
                <Button>+/-</Button>
                <Button>%</Button>
                <Button>÷</Button>
            </div>
            <div className="row">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>x</Button>
            </div>
            <div className="row">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>-</Button>
            </div>
            <div className="row">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
            </div>
            <div className="row">
                <Button>0</Button>
                <Button>.</Button>
                <Button className="side-panel">=</Button>
            </div>
        </div>
    );
};

export default ButtonPanel;