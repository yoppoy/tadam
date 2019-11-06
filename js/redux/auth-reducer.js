import {createActions, createReducer} from 'reduxsauce';
import AsyncStorage from '@react-native-community/async-storage';

const types = {
    DEFAULT: 0,
    FACEBOOK: 1,
    GOOGLE: 2,
};

export const INITIAL_STATE = {
    type: null,
    token: null,
};

export const connect = (state, {type, data}) => {
    if (type.DEFAULT) {
        return {...state, type: type};
    } else {
        return {...state, type: type};
    }
};

export const disconnect = state => {
    return {...state, type: null, token: null};
};

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    onConnected: ['type', 'data'],
    onDisconnected: [null],
});
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ON_CONNECTED]: connect,
    [Types.ON_DISCONNECTED]: disconnect,
});
/* ------------- Export Creators, Types, Selectors ---- */
export default Creators;
export const AuthTypes = Types;
export const AuthSelectors = {};
export const AuthPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: [],
};
