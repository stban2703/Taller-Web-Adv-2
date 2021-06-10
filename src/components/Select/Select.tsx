import React from 'react';
import "./Select.css";

interface SelectProps {
    catFilter: string;
}

export const Select: React.FC<SelectProps> = ({ catFilter }) => {
    return (
        <select className="Select" >
            <option value="none">
                Ninguno
               </option>
            <option value="grayscale">
                Escala de grises
               </option>
            <option value="invert">
                Invertido
               </option>
            <option value="sepia">
                Sepia
               </option>
        </select>
    )
}