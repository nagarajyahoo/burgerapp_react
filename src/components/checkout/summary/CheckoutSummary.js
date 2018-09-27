import React, {Component} from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../../ui/button/Button'
import Burger from '../../builder/burger/Burger'
import {Link, Route} from 'react-router-dom'

import classes from './CheckoutSummary.css'
import CustomerData from "../customerdata/CustomerData";
import {connect} from 'react-redux';

class CheckoutSummary extends Component {
    cancelAction = (event) => {
        event.preventDefault();
        console.log("cancelling action", this.props);
        this.props.history.push('/');
    };

    orderBurger = (event) => {
        event.preventDefault();
        this.props.history.push('/checkout/customerdata');
    };

    render() {
        return (
            <Aux>
                <div className={classes.BurgerDiv}>
                    <Burger ingredients={this.props.ingredients}/>
                    <Link to='/customerdata'>
                        <Button type='Success' clicked={this.orderBurger}>Continue</Button>
                    </Link>
                    <Button type='Danger' clicked={this.cancelAction}>Cancel</Button>
                </div>

                <Route
                    path={this.props.match.path + '/customerdata'}
                    // render={(props) => (<CustomerData ingredients={this.props.ingredients} price={this.props.totalPrice} {...props} />)} />
                    component={CustomerData}/>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice
    }
};

export default connect(mapStateToProps, null)(CheckoutSummary);