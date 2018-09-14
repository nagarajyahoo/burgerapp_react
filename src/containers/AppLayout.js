import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import BurgerBuilderComponent from './burger/BurgerBuilderComponent'

import classes from './AppLayout.css'

class BurgerAppLayout extends Component {
    render() {
        return (
            <Aux>
                <div>toolbar</div>
                <main className={classes.Content}>
                    <BurgerBuilderComponent/>
                </main>
            </Aux>
        );
    }
}

export default BurgerAppLayout;