import React, {Component} from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../../ui/button/Button'
import Burger from '../../builder/burger/Burger'
import {Link, Route} from 'react-router-dom'

import classes from './CheckoutSummary.css'
import CustomerData from "../customerdata/CustomerData";

class CheckoutSummary extends Component {
    state = {
        ingredients: {},
        price: 0
    };

    cancelAction = (event) => {
        event.preventDefault();
        console.log("cancelling action", this.props);
        this.props.history.push('/');
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    orderBurger = (event) => {
        event.preventDefault();
        this.props.history.push('/checkout/customerdata');
    };

    render() {
        return (
            <Aux>
                <div className={classes.BurgerDiv}>
                    <Burger ingredients={this.state.ingredients}/>
                    <Link to='/customerdata'>
                        <Button type='Success' clicked={this.orderBurger}>Continue</Button>
                    </Link>
                    <Button type='Danger' clicked={this.cancelAction}>Cancel</Button>
                </div>

                <Route
                    path={this.props.match.path + '/customerdata'}
                    render={(props) => (<CustomerData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </Aux>
        );
    }
}

export default CheckoutSummary;