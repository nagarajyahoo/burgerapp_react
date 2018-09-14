import React from 'react';
import IngredientController from './controller/IngredientController'
import classes from './IngredientsBuilder.css'
import buttonCssClasses from './order/OrderButton.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const burgerBuilder = (props) => {
    const ingredientControllers = controls.map(ingKey => {
        return <IngredientController
            key={ingKey.type}
            type={ingKey.label}
            addIngredient={() => props.addIngredient(ingKey.type)}
            removeIngredient={() => props.removeIngredient(ingKey.type)}
            disabled={props.ingredients[ingKey.type] === 0}/>
    });

    return (
        <div className={classes.IngredientsBuilder}>
            <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {ingredientControllers}
            <button
                className={buttonCssClasses.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchasing}>ORDER NOW</button>
        </div>
    );
};

export default burgerBuilder;