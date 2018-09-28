import * as Actions from '../actions/OrderActions';

const initialState = {
    orders: [],
    error: false,
    processing: false
};

const orderReducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case Actions.SET_ORDERS:
            return {
                ...state,
                orders: action.orders,
                error: false,
                processing: false
            };
        case Actions.FETCH_ORDERS_FAILED:
        case Actions.CREATE_ORDER_FAILED:
            return {
                ...state,
                error: true,
                processing: false
            };
        case Actions.CREATE_ORDER_SUCCESSFUL:
            return {
                ...state,
                error: false,
                processing: false
            };
        case Actions.PROCESSING:
            return {
                ...state,
                processing: true
            };
        default:
            return {...state};
    }
};

export default orderReducer;