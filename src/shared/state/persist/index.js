/* istanbul ignore file */

import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import config from './config';

export const createPersistReducer = (reducers) => persistReducer(
    { key: 'root', storage: AsyncStorage, ...config.root },
    combineReducers(
        Object.entries(reducers).reduce((reducers, [key, reducer]) => ({
            ...reducers,
            [key]: config[key] ?
                persistReducer({ ...config[key], key, storage: AsyncStorage }, reducer) :
                reducer,
        }), {}),
    ),
);

export const createStorePersistor = (store) => persistStore(store);
