// @flow
import {combineReducers} from 'redux';
import configureStore from './config/config-store';
import rootSaga from './config/config-saga';
import {persistReducer} from 'redux-persist';
import {persistConfig} from './config/config-persist';
import {AppPersistConfig} from './app-reducer';

export const reducers = combineReducers({
    app: persistReducer(AppPersistConfig, require('./app-reducer').reducer),
});

export const createStore = () => {
    let finalReducers = reducers;

    if (persistConfig.active) {
        finalReducers = persistReducer(persistConfig.storeConfig, reducers);
    }

    let {store, sagasManager, sagaMiddleware} = configureStore(
        finalReducers,
        rootSaga,
    );

    if (module.hot) {
        module.hot.accept(() => {
            let nextRootReducer = require('./').reducers;
            if (persistConfig.active) {
                nextRootReducer = persistReducer(
                    persistConfig.storeConfig,
                    reducers,
                );
            }
            store.replaceReducer(nextRootReducer);
            const newYieldedSagas = require('./config/config-saga').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas);
            });
        });
    }
    return store;
};
