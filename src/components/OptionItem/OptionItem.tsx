import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import "./OptionItem.css";

interface OptionItemProps {
    value: string;
    url: string;
    currentValue: string;
}

export const OptionItem: React.FC<OptionItemProps> = ({value, url, currentValue}) => {
    const imageSrc = getImageSrcFromUrl(url);
    return (
        <div className="OptionItem">
            <img className="OptionItem__image" src={imageSrc} />
            <img className={`OptionItem__check`} src={getImageSrcFromUrl("others/checked")} alt={"Checked"} />
        </div>
    )
}