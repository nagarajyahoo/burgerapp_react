import React, {Component} from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../../ui/button/Button'
import Spinner from '../../../ui/spinner/Spinner'
import classes from './CustomerData.css'
import axios from '../../../interceptors/axios/Axios'
import withErrorHandler from "../../../hoc/error/WithErrorHandler";
import {connect} from 'react-redux';
import * as OrderActions from '../../../model/store/actions/OrderActions'

class CustomerData extends Component {

    purchase = (event) => {
        event.preventDefault();
        this.props.processingOrder();

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Nagaraj M R',
                email: 'nmr@gmail.com',
                address: {
                    street: 'test street',
                    city: 'Washington'
                }
            }
        };

        this.props.createOrder(order);
    };

    render() {
        const content = this.props.processing ?
            <Spinner /> :
            <form>
                <div className={classes.CheckoutSummary}>
                    <h4>Please enter details below:</h4>
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Your E-Mail'/>
                    <input type="text" placeholder='Your Phone'/>
                    <textarea placeholder='Your Address'/>
                    <br/>
                    <Button type='Success' clicked={this.purchase}>Order</Button>
                </div>
            </form>;

        return (
            <Aux>
                {content}
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        processing: state.orders.processing
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder : (order) => dispatch(OrderActions.createOrder(order)),
        processingOrder : () => dispatch({type: OrderActions.PROCESSING})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CustomerData, axios));