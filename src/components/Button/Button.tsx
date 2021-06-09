import React from 'react';
import "./Button.css";

interface ButtonProps {
    type: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
    return (
        <button className={`Button Button--${type}`}>
            {children}
        </button>
    )
}