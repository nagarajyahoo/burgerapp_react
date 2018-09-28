import axios from '../../../interceptors/axios/Axios';

export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESSFUL = 'CREATE_ORDER_SUCCESSFUL';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const SET_ORDERS = 'SET_ORDERS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';
export const PROCESSING = 'PROCESSING';

export const setOrders = (orders) => {
    return {type: SET_ORDERS, orders: orders};
};

export const fetchingOrdersFailed = () => {
    return {type: FETCH_ORDERS_FAILED};
};

export const fetchAllOrders = () => {
    return (dispatch) => {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(setOrders(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchingOrdersFailed());
            });
    }
};

export const createOrderFailed = () => {
    return {type: CREATE_ORDER_FAILED}
};

export const createOrderSuccessful = () => {
    return {type: CREATE_ORDER_SUCCESSFUL}
};

export const createOrder = (order) => {
    return (dispatch) => {
        axios.post('/orders.json', order)
            .then(res => {
                dispatch(createOrderSuccessful());
            })
            .catch(err => {
                dispatch(createOrderFailed());
            })
    }
};