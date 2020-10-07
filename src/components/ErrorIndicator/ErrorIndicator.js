import React from 'react';
import'./ErrorIndicator.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={icon} alt="error icon"/>
            <span className='boom'> BOOM! </span>
            <span>Something has gone terribly wrong.</span>
            <span>(But we already send droids to fix it.)</span>
        </div>
    );
};

export default ErrorIndicator;