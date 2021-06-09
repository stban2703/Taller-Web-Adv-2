import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Intro } from '../Intro/Intro';
import "./App.css";

export const App = () => {
    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" exact render={() => <Intro />} />
                <Route path={["/register", "/login"]} />
            </HashRouter>
        </main>
    )
}