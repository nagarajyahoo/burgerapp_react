import * as Actions from '../actions/OrderActions';

const initialState = {};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CREATE_ORDER:
            break;
        case Actions.FETCH_ALL_ORDERS:
            break;
        default:
            return {...state};
    }
};