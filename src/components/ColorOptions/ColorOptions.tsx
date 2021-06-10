import React, { useState } from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import "./ColorOptions.css";


interface ColorOptionsProps {
    colorList: string[];
}

export const ColorOptions: React.FC<ColorOptionsProps> = ({ colorList }) => {

    const [color, setColor] = useState("#FFFFFF");

    return (
        <TwitterPicker className="ColorOptions" color={color} colors={colorList} />
    )
}