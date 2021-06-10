import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import "./CreatorControl.css";

interface CreatorControlProps {

}

export const CreatorControl: React.FC<CreatorControlProps> = ({ }) => {
    return (
        <section className="CreatorControl">
            <Input value={""} placeholder={"Cat name"} />
            <div className="CreatorControl__section">
                <Button type="primary" action={() => { }}>
                    Guardar
                </Button>
                <div className="CreatorControl__subsection">
                    <Button type="tertiary" action={() => { }}>
                        Ver creados
                    </Button>
                    <Button type="secondary" action={() => { }}>
                        Salir
                    </Button>
                </div>
            </div>
        </section>
    )
}