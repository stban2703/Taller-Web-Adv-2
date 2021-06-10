import React from 'react';
import { CreatorItem } from '../../components/CreatorItem/CreatorItem';
import "./Creator.css";

interface CreatorProps {

}

export const Creator: React.FC<CreatorProps> = ({}) => {
    return (
        <article className="Creator">
            <CreatorItem value={"eyes"} url="creatoritems/fur" checked={true} action={() => {}} />
        </article>
    )
}