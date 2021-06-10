import React from 'react';
import { CreatorNav } from '../CreatorNav/CreatorNav';
import "./EditPanel.css"

interface EditPanelProps {
    currentTab: string;
    onChangeCurrentTab: (tab: string) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ currentTab, onChangeCurrentTab }) => {
    return (
        <section className="EditPanel">
            <CreatorNav currentTab={currentTab} onChangeCurrentTab={onChangeCurrentTab} />
        </section>
    )
}