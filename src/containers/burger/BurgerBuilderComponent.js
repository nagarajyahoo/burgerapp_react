import React, {Component} from 'react';
import Burger from '../../components/builder/burger/Burger'
import IngredientsBuilder from '../../components/builder/IngredientsBuilder'

const INGREDIENTS_PRICE = {
    meat: 0.2,
    salad: 0.3,
    cheese: 0.4,
    bacon: 0.5
};

class BurgerBuilderComponent extends Component {
    state = {
        ingredients: {
            meat: 1,
            salad: 1,
            cheese: 1,
            bacon: 1
        },
        totalPrice: 4,
        purchasable: false
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

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <IngredientsBuilder
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}/>
            </div>
        );
    }
}

export default BurgerBuilderComponent;