import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistConfig, updateReducers} from './config-persist';

export default (rootReducer, rootSaga) => {
    const middleware = [];

    /* ------------- Saga Middleware ------------- */
    const monitor = window['__SAGA_MONITOR_EXTENSION__'];
    let sagaMiddleware = createSagaMiddleware({sagaMonitor: monitor});
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;
    const enhancers = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(rootReducer, enhancers);

    if (persistConfig.active) {
        updateReducers(store);
    }

    let sagaManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagaManager,
        sagaMiddleware,
    };
};
