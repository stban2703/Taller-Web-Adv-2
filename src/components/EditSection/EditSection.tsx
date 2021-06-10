import React from 'react';
import "./EditSection.css";

interface EditSectionProps {
    title: string;
}

export const EditSection: React.FC<EditSectionProps> = ({title, children}) => {
    return (
        <section className="EditSection">
            <h2 className="EditSection__title">{title}</h2>
            {children}
        </section>
    )
}