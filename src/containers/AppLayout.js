import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import BurgerBuilderComponent from './burger/BurgerBuilderComponent'
import Toolbar from '../navigation/toolbar/Toolbar'
import SideDrawer from '../navigation/sideDrawer/SideDrawer'

import classes from './AppLayout.css'

class BurgerAppLayout extends Component {
    state = {
        showSideDrawer: false
    };

    toggleSideDraw = () => {
        this.setState({
            showSideDrawer: !this.state.showSideDrawer
        });
    };

    render() {
        return (
            <Aux>
                <SideDrawer
                    displaySideDrawer={this.state.showSideDrawer}
                    closed={this.toggleSideDraw}
                />
                <Toolbar
                    toggleSideDraw={this.toggleSideDraw}
                    showNavigation={!this.state.showSideDrawer}
                />
                <main className={classes.Content}>
                    <BurgerBuilderComponent/>
                </main>
            </Aux>
        );
    }
}

export default BurgerAppLayout;