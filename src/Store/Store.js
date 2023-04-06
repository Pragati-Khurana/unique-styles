import { compose, createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger';
import { RootReducer } from "./Root-reducer"; 

const loggerMiddleWare = (Store) => (next) => (action) => {
    if(!action.type)
        return next(action);

    console.log('Type: ', action.type);
    console.log('Payload: ', action.payload);
    console.log('currentState: ', Store.getState());

    next(action);

    console.log('nextState: ', Store.getState());
}

const middleWares = [loggerMiddleWare];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const Store = createStore(RootReducer, undefined, composeEnhancers);