import axios from '../../../interceptors/axios/Axios';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DEL_INGREDIENT = 'DEL_INGREDIENT';
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const LOADING_INGREDIENTS_FAILED = 'LOADING_INGREDIENTS_FAILED';

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        ingredient: ingredient
    };
};

export const delIngredient = (ingredient) => {
    return {
        type: DEL_INGREDIENT,
        ingredient: ingredient
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const failedLoadingIngredients = () => {
    return {type: LOADING_INGREDIENTS_FAILED}
};

export const resetIngredients = () => {
    return (dispatch) => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data));
            })
            .catch(err => {
                dispatch(failedLoadingIngredients())
            })
    }
};