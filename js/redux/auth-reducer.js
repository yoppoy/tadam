import {createActions, createReducer} from 'reduxsauce';
import AsyncStorage from '@react-native-community/async-storage';
import authApi from '../config/authApi';

export const connectionTypes = {
    DEFAULT: 0,
    FACEBOOK: 1,
    GOOGLE: 2,
};

export const INITIAL_STATE = {
    api: authApi.create(),
    connectionType: null,
    token: null,
};

export const onConnected = (state, {connectionType, token}) => {
    return {...state, connectionType, token};
};

export const onDisconnected = state => {
    return {...state, connectionType: null, token: null};
};

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    onConnected: ['connectionType', 'token'],
    onDisconnected: [null],
});
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ON_CONNECTED]: onConnected,
    [Types.ON_DISCONNECTED]: onDisconnected,
});
/* ------------- Export Creators, Types, Selectors ---- */
export default Creators;
export const AuthTypes = Types;
export const AuthSelectors = {};
export const AuthPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['token', 'connectionType'],
};
