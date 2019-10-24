import {takeLatest, all} from 'redux-saga/effects';
//import Config from 'react-native-config';
//import FixtureAPI from '../Services/FixtureApi';
//import debugConfig from '../Config/DebugConfig';
//import API from '../services/api';

/* ------------- Sagas -------------
//import {hideSplashScreen, rehydrated} from './AppSagas'; */

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// let apiUrl = Config.API_URL.endsWith('/') ? Config.API_URL : Config.API_URL + '/';
// const Api = debugConfig.useFixtures ? FixtureAPI : API.create(apiUrl);

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield all([
        /* ------------- Startup -------------
        takeLatest(AppTypes.REHYDRATED, rehydrated),
        takeLatest(AppTypes.HIDE_SPLASH_SCREEN, hideSplashScreen, Api), */
    ]);
}
