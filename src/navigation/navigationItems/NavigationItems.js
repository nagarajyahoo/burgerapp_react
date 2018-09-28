import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './navigationItem/NavigationItem'

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem label='Burger' url='/burger'/>
            <NavigationItem label='Orders' url='/orders'/>
            <NavigationItem label='Sign In' url='/signin'/>
        </ul>
    );
};

export default navigationItems;