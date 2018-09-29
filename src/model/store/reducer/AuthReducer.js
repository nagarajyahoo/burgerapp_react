import * as Actions from '../actions/AuthActions';

const initialState = {
    processing: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.AUTH_STARTED:
            return {
                ...state,
                processing: true
            };
        case Actions.LOGIN_SUCCESSFUL:
        case Actions.LOGIN_FAILED:
        case Actions.SIGNUP_SUCCESSFUL:
        case Actions.SIGNUP_FAILED:
        default:
            return {
                ...state
            }
    }
};

export default authReducer;