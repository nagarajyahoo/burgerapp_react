import React from 'react';
import IngredientController from './controller/IngredientController'
import classes from './IngredientsBuilder.css'

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
            removeIngredient={() => props.removeIngredient(ingKey.type)}/>
    });

    return (
        <div className={classes.IngredientsBuilder}>
            {ingredientControllers}
        </div>
    );
};

export default burgerBuilder;