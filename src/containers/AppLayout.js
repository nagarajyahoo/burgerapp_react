import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import BurgerBuilderComponent from './burger/BurgerBuilderComponent'
import Toolbar from '../navigation/toolbar/Toolbar'
import SideDrawer from '../navigation/sideDrawer/SideDrawer'

import classes from './AppLayout.css'

class BurgerAppLayout extends Component {
    render() {
        return (
            <Aux>
                <SideDrawer/>
                <Toolbar/>
                <main className={classes.Content}>
                    <BurgerBuilderComponent/>
                </main>
            </Aux>
        );
    }
}

export default BurgerAppLayout;