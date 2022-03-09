import React from 'react';
import './Button.scss';

const Button = ({ onClick, children, className }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick ? onClick : null}>{children}</button>
    )
}

export default Button;