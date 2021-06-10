import React from 'react'
import { OptionItem } from '../OptionItem/OptionItem';
import "./OptionList.css";

interface OptionListProps {
    itemList: { value: string, url: string }[];
    currentValue: string
}

export const OptionList: React.FC<OptionListProps> = ({ itemList, currentValue }) => {
    return (
        <div className="OptionList">
            {itemList.map(({ value, url }) => {
                /*const intermediateEditType = () => {
                    onEditAttributeType(value);
                }*/
                return <OptionItem key={value} value={value} url={url} currentValue={currentValue} />
            })}
        </div>
    )
}