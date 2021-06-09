import React from 'react';
import "./Button.css";

interface ButtonProps {
    type: "primary" | "secondary";
    action: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, action, children }) => {
    return (
        <button className={`Button Button--${type}`} onClick={action}>
            {children}
        </button>
    )
}