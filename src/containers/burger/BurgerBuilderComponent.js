import React, {Component} from 'react';
import Burger from '../../components/builder/burger/Burger'
import IngredientsBuilder from '../../components/builder/IngredientsBuilder'
import Modal from '../../ui/modal/Modal'
import OrderSummary from '../../components/builder/order/ordersummary/OrderSummary'
import axios from '../../interceptors/axios/Axios'
import Spinner from '../../ui/spinner/Spinner'

const INGREDIENTS_PRICE = {
    meat: 0.2,
    salad: 0.3,
    cheese: 0.4,
    bacon: 0.5
};

class BurgerBuilderComponent extends Component {
    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        processing: false
    };

    updatePurchasable = (currIngredients) => {
        const sum = Object.keys(currIngredients)
            .map(inKey => {
                return currIngredients[inKey]
            })
            .reduce((eleSum, ele) => {
                eleSum += ele;
                return eleSum;
            }, 0);

        this.setState({
            purchasable: (sum > 0)
        });
    };

    addIngredient = (type) => {
        const currIngredients = {...this.state.ingredients};
        const currCount = this.state.ingredients[type];

        currIngredients[type] = currCount + 1;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];

        this.setState({
            ingredients: currIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasable(currIngredients);
    };

    removeIngredient = (type) => {
        const currCount = this.state.ingredients[type];
        if (currCount > 0) {
            const currIngredients = {...this.state.ingredients};
            currIngredients[type] = currCount - 1;
            const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];

            this.setState({
                ingredients: currIngredients,
                totalPrice: newPrice
            });

            this.updatePurchasable(currIngredients);
        }
    };

    updatePurchasing = () => {
        this.setState({purchasing : true});
    };

    cancelPurchase = () => {
        this.setState({purchasing : false});
    };

    continuePurchase = () => {
        this.setState({processing : true});

        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name : 'Nagaraj M R',
                email: 'nmr@gmail.com',
                address : {
                    street : 'test street',
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
                this.setState({purchasing: false, processing: false});
            });
    };

    render() {
        const modalContent = this.state.processing ?
            <Spinner/> :
            <OrderSummary
                ingredients={this.state.ingredients}
                purchasing={this.state.purchasing}/>;

        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <Modal show={this.state.purchasing}
                       cancelPurchase={this.cancelPurchase}
                       continuePurchase={this.continuePurchase}>
                    {modalContent}
                </Modal>
                <IngredientsBuilder
                    totalPrice={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    purchasable={this.state.purchasable}
                    purchasing={this.updatePurchasing}/>
            </div>
        );
    }
}

export default BurgerBuilderComponent;