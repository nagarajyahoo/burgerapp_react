import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import ingredientsReducer from './model/store/reducer/IngredientsReducer'
import ordersReducer from './model/store/reducer/OdersReducer'
import authReducer from "./model/store/reducer/AuthReducer";

const rootReducer = combineReducers({
    burger: ingredientsReducer,
    orders: ordersReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
