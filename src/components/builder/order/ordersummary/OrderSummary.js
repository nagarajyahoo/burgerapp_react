import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] : update');
    }

    render() {
        console.log('[OrderSummary] : render');
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
            </Aux>
        );
    }
}

export default OrderSummary;