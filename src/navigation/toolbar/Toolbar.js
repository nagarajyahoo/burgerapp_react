import React from 'react';
import Logo from '../../ui/logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems'
import Hamburger from '../../ui/hamburger/Hamburger'
import classes from './Toolbar.css'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Hamburger clicked={props.toggleSideDraw}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;