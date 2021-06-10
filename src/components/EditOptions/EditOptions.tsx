import React from 'react';
import { eyesColors, furColors, hatColors, necklaceColors } from '../../containers/Creator/initialCreatorColor';
import { eyesOptions, furOptions, hatOptions, necklaceOptions, sceneOptions } from '../../containers/Creator/initialCreatorOptions';
import { ColorOptions } from '../ColorOptions/ColorOptions';
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
            
            {
                currentTab === "fur" && 
                <EditSection title="Fur color">
                    <ColorOptions colorList={furColors} />
                </EditSection>
            }
            {
                currentTab === "eyes" && 
                <EditSection title="Eye color">
                    <ColorOptions colorList={eyesColors} />
                </EditSection>
            }
            {
                currentTab === "necklace" && 
                <EditSection title="Necklace color">
                    <ColorOptions colorList={necklaceColors} />
                </EditSection>
            }
            {
                currentTab === "hat" && 
                <EditSection title="Hat color">
                    <ColorOptions colorList={hatColors} />
                </EditSection>
            }
        </section>
    )
}