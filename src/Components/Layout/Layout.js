import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';
import Projects from '../../Containers/Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import {Switch, Route, Redirect} from 'react-router-dom';

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            <h1>Francisco Pontes</h1>
            <Switch>
                <Route path="/projects" exact component={Projects}/>
                <Route path="/" exact component={AboutMe}/>
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default Layout;