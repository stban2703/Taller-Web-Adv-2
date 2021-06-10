import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import "./CreatorItem.css";

interface CreatorItemProps {
    value: string;
    url: string;
    currentTab: string;
    action: () => void;
}

export const CreatorItem: React.FC<CreatorItemProps> = ({ value, url, currentTab, action }) => {
    const imageSrc = getImageSrcFromUrl(url);
    return (
        <div className={`CreatorItem${currentTab === value ? " CreatorItem--selected" : ""}`} onClick={action}>
            <img className="CreatorItem__image" src={imageSrc} alt={value} />
        </div>
    )
}