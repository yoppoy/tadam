import AsyncStorage from '@react-native-community/async-storage';
import {persistStore} from 'redux-persist';
import AppActions from '../app-reducer';

export const persistConfig = {
    active: true,
    reducerVersion: '2.0',
    storeConfig: {
        key: 'primary',
        storage: AsyncStorage,
        blacklist: [],
        whitelist: [],
    },
};

export const updateReducers = store => {
    const reducerVersion = persistConfig.reducerVersion;
    const rehydrated = () => store.dispatch(AppActions.onRehydration());

    AsyncStorage.getItem('reducerVersion')
        .then(localVersion => {
            if (localVersion !== reducerVersion) {
                persistStore(store, null, rehydrated).purge();
                AsyncStorage.setItem('reducerVersion', reducerVersion);
            } else {
                persistStore(store, null, rehydrated);
            }
        })
        .catch(() => {
            persistStore(store, null, rehydrated);
            AsyncStorage.setItem('reducerVersion', reducerVersion);
        });
};
