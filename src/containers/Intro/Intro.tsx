import React from 'react'
import { useHistory } from 'react-router';
import { Button } from '../../components/Button/Button'
import "./Intro.css";

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = ({}) => {

    const history = useHistory();

    const handleGoToLogin = () => {
        history.push("/login")
    }

    const handleGoToRegister = () => {
        history.push("/register")
    }

    return (
        <article className="Intro">
            <h1 className="Intro__title" >Cat creator</h1>
            <section className="Intro__section">
                <Button type="primary" action={handleGoToLogin} children={"Login"}></Button>
                <Button type="secondary" action={handleGoToRegister} children={"Register"}></Button>
            </section>
        </article>
    )
}