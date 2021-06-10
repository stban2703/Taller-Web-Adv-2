import React, { useState } from 'react';
import { CreatorNav } from '../../components/CreatorNav/CreatorNav';
import "./Creator.css";

interface CreatorProps {

}

export const Creator: React.FC<CreatorProps> = ({}) => {

    const [currentTab, setCurrentTab] = useState("fur");

    const handleCurrentTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return (
        <article className="Creator">
            <CreatorNav currentTab={currentTab} onChangeCurrentTab={handleCurrentTab} />
        </article>
    )
}