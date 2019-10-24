import {call, put, select} from 'redux-saga/effects';
//import SplashScreen from 'react-native-splash-screen';
//import Navigator from '../Services/Navigator';
import AppActions, {AppSelectors} from './app-reducer';

export function* rehydrated() {
    yield put(AppActions.hideSplashScreen());
}

export function* hideSplashScreen(api) {
    const rehydrated = yield select(AppSelectors.rehydrated);

    if (rehydrated) {
        /*if (loggedIn === 'loggedIn') {
            const accessToken = yield select(AuthSelectors.accessToken);
            if (accessToken) {
                api.setAccessToken(accessToken.value);
            } else {
                yield put(AuthActions.accessTokenRequest());
            }
        }
        Navigator.reset((loggedIn === 'loggedIn') ? 'App' : 'Auth');
        SplashScreen.hide();*/
    }
}
