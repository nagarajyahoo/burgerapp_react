import * as actions from '../actions/IngredientActions';

const initialState = {
    ingredients: {},
    totalPrice: 4,
    error: false
};

const INGREDIENTS_PRICE = {
    meat: 0.2,
    salad: 0.3,
    cheese: 0.4,
    bacon: 0.5
};

const ingredientsReducer = (state = initialState, action) => {
    console.log(action);
    const currIngredients = {...state.ingredients};
    const currCount = currIngredients[action.ingredient];

    switch (action.type) {
        case actions.ADD_INGREDIENT:
            currIngredients[action.ingredient] = currCount + 1;
            return {
                ingredients: {...currIngredients},
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredient]
            };
        case actions.DEL_INGREDIENT:
            currIngredients[action.ingredient] = currCount - 1;
            return {
                ingredients: {...currIngredients},
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredient]
            };
        case actions.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false
            };
        case actions.LOADING_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return {...state};
    }
};

export default ingredientsReducer;