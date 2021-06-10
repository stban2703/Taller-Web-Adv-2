import React, { useState } from 'react';
import { CreatorItem } from '../CreatorItem/CreatorItem';
import "./CreatorNav.css";

interface CreatorNavProps {
    currentTab: string;
    onChangeCurrentTab: (tab: string) => void;
}

export const CreatorNav: React.FC<CreatorNavProps> = ({ currentTab, onChangeCurrentTab}) => {

    return (
        <nav className="CreatorNav">
            <CreatorItem value={"fur"} url="creatoritems/fur" currentTab={currentTab} action={() => {onChangeCurrentTab("fur")}} />
            <CreatorItem value={"eyes"} url="creatoritems/eyes" currentTab={currentTab} action={() => {onChangeCurrentTab("eyes")}} />
            <CreatorItem value={"necklace"} url="creatoritems/necklace" currentTab={currentTab} action={() => {onChangeCurrentTab("necklace")}} />
            <CreatorItem value={"hat"} url="creatoritems/hat" currentTab={currentTab} action={() => {onChangeCurrentTab("hat")}} />
            <CreatorItem value={"scene"} url="creatoritems/scene" currentTab={currentTab} action={() => {onChangeCurrentTab("scene")}} />
        </nav>
    )
}