import React from 'react';
import { eyesOptions, furOptions, hatOptions, necklaceOptions, sceneOptions } from '../../containers/Creator/initialCreatorOptions';
import { EditSection } from '../EditSection/EditSection';
import { OptionList } from '../OptionList/OptionList';
import "./EditOptions.css";

interface EditOptionsProps {
    currentTab: string;
}

export const EditOptions: React.FC<EditOptionsProps> = ({ currentTab }) => {
    return (
        <section className="EditOptions">
            <h2 className="EditOptions__title">Test Title</h2>
            {
                currentTab === "fur" && 
                <EditSection title="Pattern">
                    <OptionList currentValue="" itemList={furOptions}/>
                </EditSection>
            }
            {
                currentTab === "eyes" && 
                <EditSection title="Pupil">
                    <OptionList currentValue="" itemList={eyesOptions}/>
                </EditSection>
            }
            {
                currentTab === "necklace" && 
                <EditSection title="Accesory">
                    <OptionList currentValue="" itemList={necklaceOptions}/>
                </EditSection>
            }
            {
                currentTab === "hat" && 
                <EditSection title="Type">
                    <OptionList currentValue="" itemList={hatOptions}/>
                </EditSection>
            }
            {
                currentTab === "scene" && 
                <EditSection title="Background">
                    <OptionList currentValue="" itemList={sceneOptions}/>
                </EditSection>
            }
        </section>
    )
}