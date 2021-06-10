import React, { useState } from 'react';
import { EditPanel } from '../../components/EditPanel/EditPanel';
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
            <EditPanel currentTab={currentTab} onChangeCurrentTab={handleCurrentTab} />
        </article>
    )
}