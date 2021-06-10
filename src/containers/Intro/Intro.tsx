import React from 'react'
import { useHistory } from 'react-router';
import { Button } from '../../components/Button/Button'
import "./Intro.css";

export const Intro = () => {

    const history = useHistory();

    const handleGoToCreator = () => {
        history.push("/new-cat")
    }

    const handleGoToCreatedCats = () => {
        history.push("/register")
    }

    return (
        <article className="Intro">
            <h1 className="Intro__title" >Cat creator</h1>
            <section className="Intro__section">
                <Button type="primary" action={handleGoToCreator} children={"Create new"}></Button>
                <Button type="secondary" action={handleGoToCreatedCats} children={"Created cats"}></Button>
            </section>
        </article>
    )
}