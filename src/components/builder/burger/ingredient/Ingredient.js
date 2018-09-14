import React from 'react';
import classes from './Ingredient.css'

const ingredient = (props) => {
    let ingredientComponent = null;
    switch (props.type) {
        case ( 'bread-bottom' ):
            ingredientComponent = <div className={classes.BreadBottom}></div>;
            break;
        case ( 'bread-top' ):
            ingredientComponent = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredientComponent = <div className={classes.Meat}></div>
            break;
        case 'salad':
            ingredientComponent =  <div className={classes.Salad}></div>
            break;
        case 'cheese':
            ingredientComponent =  <div className={classes.Cheese}></div>
            break;
        case 'bacon':
            ingredientComponent =  <div className={classes.Bacon}></div>
            break;
        default:
            ingredientComponent = null;
    }
    return ingredientComponent;
};

export default ingredient;