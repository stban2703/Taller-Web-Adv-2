import React from 'react';
import "./Input.css";

interface InputProps {
    value: string;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ value, placeholder }) => {
    return (
        <input className="Input" type="text" placeholder={placeholder} value={value} />
    )
}