import React, {Component} from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../../ui/button/Button'
import Spinner from '../../../ui/spinner/Spinner'
import classes from './CustomerData.css'
import axios from '../../../interceptors/axios/Axios'
import withErrorHandler from "../../../hoc/error/WithErrorHandler";

class CustomerData extends Component {
    state = {
        ingredients: null,
        totalPrice: null,
        processing: false
    };

    componentDidMount = () => {
        this.setState({
            ingredients : this.props.ingredients,
            totalPrice: this.props.price
        });
    };

    purchase = (event) => {
        event.preventDefault();
        this.setState({processing: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Nagaraj M R',
                email: 'nmr@gmail.com',
                address: {
                    street: 'test street',
                    city: 'Washington'
                }
            }
        };

        axios.post('/orders.json', order)
            .then(res => {
                console.log("success", res.status);
            })
            .catch(err => {
                console.log("error", err);
            })
            .finally(() => {
                this.setState({processing: false});
            });
    };

    render() {
        const content = this.state.processing ?
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

export default withErrorHandler(CustomerData, axios);