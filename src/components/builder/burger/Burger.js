import React from 'react';
import Ingredient from './ingredient/Ingredient'
import classes from './Burger.css'

const burger = (props) => {
    let selectedIngredients = Object.keys(props.ingredients).map(inkey => {
        return [...Array(props.ingredients[inkey])].map((_, i) => {
                return <Ingredient key={inkey + i} type={inkey}/>;
            }
        );
    });

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {selectedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
};


export default burger;