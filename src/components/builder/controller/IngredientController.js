import React from 'react';
import classes from './IngredientController.css'

const ingredientController = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.type}</div>
            <button
                className={classes.Less}
                onClick={props.removeIngredient}
                disabled={props.disabled}>Less</button>
            <button
                className={classes.More}
                onClick={props.addIngredient}>More</button>
        </div>
    );
};

export default ingredientController;