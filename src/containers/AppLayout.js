import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import BurgerBuilderComponent from './burger/BurgerBuilderComponent'
import Toolbar from '../navigation/toolbar/Toolbar'
import SideDrawer from '../navigation/sideDrawer/SideDrawer'
import {Route, Switch} from 'react-router-dom'

import classes from './AppLayout.css'
import CheckoutSummary from "../components/checkout/summary/CheckoutSummary";
import Orders from "../components/orders/Orders";

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
                    <Switch>
                        <Route path='/burger' component={BurgerBuilderComponent}/>
                        <Route path='/checkout' component={CheckoutSummary}/>
                        <Route path='/orders' component={Orders}/>
                        <Route path='/' component={BurgerBuilderComponent}/>
                    </Switch>
                </main>
            </Aux>
        );
    }
}

export default BurgerAppLayout;