import React from 'react';
import classes from './Toolbar.module.css';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <NavLink to="/projects" activeClassName={classes.active} exact><ListAltIcon fontSize="large"/></NavLink>
            <NavLink to="/" activeClassName={classes.active} exact>
                <HomeIcon fontSize="large"/>
            </NavLink>
        </div>
    );
};

export default Toolbar;