export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const CREATE_ORDER = 'CREATE_ORDER';

export const fetchAllOrders = () => {
    return {type: FETCH_ALL_ORDERS}
};

export const createOrder = (order) => {
    return {type: CREATE_ORDER, order: order}
};