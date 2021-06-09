import React from 'react'
import { Button } from '../../components/Button/Button'
import "./Intro.css";

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = ({}) => {
    return (
        <main className="Intro">
            <h1 className="Intro__title" >Cat creator</h1>
            <section className="Intro__section">
                <Button type="primary" children={"Login"}></Button>
                <Button type="secondary" children={"Register"}></Button>
            </section>
        </main>
    )
}