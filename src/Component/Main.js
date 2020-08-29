import React from 'react';
import {Switch, Router} from 'react-router-dom';
import About from './About';
import Survey from './Survey';

const Main = (props) => {
    return (
        <main>
            <Switch exact path='/' compenent={Survey}></Switch>
            <Switch exact path='/about' compenent={About}></Switch>
        </main>
    );
}

export default Main;