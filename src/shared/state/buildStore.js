/* istanbul ignore file */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createPersistReducer, createStorePersistor } from './persist';

const reducers = {
    app: (state = {}) => state,
};

const initialState = {};

const modules = {};

const buildStore = (reducerFn = combineReducers) => {
    const middlewares = [
        thunkMiddleware.withExtraArgument(modules),
    ];
    const enhancer = composeWithDevTools(
        applyMiddleware(...middlewares),
    );
    const rootReducer = reducerFn(reducers);
    const store = createStore(rootReducer, initialState, enhancer);

    return store;
};

const buildPersistStore = () => {
    const store = buildStore(createPersistReducer);

    return {
        ...store,
        persistor: createStorePersistor(store),
    };
};

export default buildPersistStore;
