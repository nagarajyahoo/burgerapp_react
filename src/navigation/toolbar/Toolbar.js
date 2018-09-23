import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems'

import classes from './Toolbar.css'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;