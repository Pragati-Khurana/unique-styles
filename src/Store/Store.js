import { compose, createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger';
import { RootReducer } from "./Root-reducer";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const Store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(Store);