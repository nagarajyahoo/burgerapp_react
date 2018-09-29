import axios from 'axios';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const AUTH_STARTED = 'AUTH_STARTED';
const API_KEY = 'AIzaSyARy5WQbcpdU3NEYR2YVha5zP_gDYRyRak';

export const authStarted = () => {
    return {type: AUTH_STARTED}
};

export const signupSuccessful = (authData) => {
    return {
        type: SIGNUP_SUCCESSFUL,
        data: authData
    }
};

export const signupFailed = () => {
    return {
        type: SIGNUP_FAILED
    }
};

export const loginSuccessful = (authData) => {
    return {
        type: LOGIN_SUCCESSFUL,
        data: authData
    }
};

export const login = (email, password) => {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + API_KEY;
    return (dispatch) => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        axios.post(url, authData)
            .then(res => {
                dispatch(loginSuccessful(authData))
            })
            .catch(err => {
                dispatch(loginFailed())
            });
    }
};

export const signup = (email, password) => {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + API_KEY;
    return (dispatch) => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        axios.post(url, authData)
            .then(res => {
                dispatch(signupSuccessful(authData))
            })
            .catch(err => {
                dispatch(signupFailed())
            });
    }
};

export const loginFailed = () => {
    return {
        type: LOGIN_FAILED
    }
};