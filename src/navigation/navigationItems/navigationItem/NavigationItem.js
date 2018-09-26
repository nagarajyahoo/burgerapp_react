import React from 'react';
import {Link} from 'react-router-dom';

import classes from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/*<a href={props.url}>{props.label}</a>*/}
        <Link to={props.url}>{props.label}</Link>
    </li>
);

export default navigationItem;