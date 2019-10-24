import {createActions, createReducer} from 'reduxsauce';
import AsyncStorage from '@react-native-community/async-storage';

export const INITIAL_STATE = {
    splashScreenShown: false,
    rehydrated: false,
};

export const onRehydration = state => {
    return {...state, rehydrated: true};
};

export const onHideSplashScreen = state => {
    return {...state, splashScreenShown: true};
};

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    onRehydration: [null],
    onHideSplashScreen: [null],
});
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ON_REHYDRATION]: onRehydration,
    [Types.ON_HIDE_SPLASH_SCREEN]: onHideSplashScreen,
});
/* ------------- Export Creators, Types, Selectors ---- */
export default Creators;
export const AppTypes = Types;
export const AppSelectors = {
    rehydrated: state => state.app.rehydrated,
    splashScreenShown: state => state.app.splashScreenShown,
};
export const AppPersistConfig = {
    key: 'app',
    storage: AsyncStorage,
    whitelist: [],
};
