import React, { useState } from 'react';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import { EditView } from '../../components/EditView/EditView';
import "./Creator.css";

interface CreatorProps {
    id?: string;
}

export const Creator: React.FC<CreatorProps> = ({ id }) => {

    const [currentTab, setCurrentTab] = useState("fur");

    const handleCurrentTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return (
        <article className="Creator">
            <EditView />
            <EditPanel currentTab={currentTab} onChangeCurrentTab={handleCurrentTab} />
        </article>
    )
}