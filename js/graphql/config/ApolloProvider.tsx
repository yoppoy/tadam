import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {RetryLink} from 'apollo-link-retry';
import {getMainDefinition} from 'apollo-utilities';
import SerializingLink from 'apollo-link-serialize';
import QueueLink from 'apollo-link-queue';
import {onError} from 'apollo-link-error';
import {CachePersistor} from 'apollo-cache-persist';
import {PersistedData, PersistentStorage} from 'apollo-cache-persist/types';
import {ApolloProvider as Provider} from 'react-apollo';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState, useRef} from 'react';
import appConfig from '../../config/appConfig';
import authMiddleware from './authMiddleware';
import {Text, View} from 'react-native';

const CACHE_VERSION_KEY: string = 'apollo-cache-version';

const errorLink = onError((error) => {
    console.log(error);
});
const httpLink = new HttpLink({
    uri: appConfig.graphqlHost,
});
const queueLink = new QueueLink();
const retryLink = new RetryLink({
    delay: {
        initial: 300,
        max: 10000,
        jitter: true,
    },
    attempts: {
        max: 5,
    },
});
const serializingLink = new SerializingLink();
const cache = new InMemoryCache({});

const apolloClient = new ApolloClient({
    cache: cache,
    link: ApolloLink.from([
        queueLink,
        retryLink,
        serializingLink,
        errorLink,
        authMiddleware,
        httpLink,
    ]),
    connectToDevTools: __DEV__,
});

type Props = {
    children: React.ReactElement;
    isConnected: boolean;
};

export default function ApolloProvider({children, isConnected}: Props) {
    const [cachePersisted, setCachePersisted] = useState(false);
    const componentDidMountRef = useRef(false);
    const apolloQueueOpenedRef = useRef(false);

    async function loadCache() {
        const persistor = new CachePersistor({
            cache,
            storage: AsyncStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
        });
        const currentVersion = await AsyncStorage.getItem(CACHE_VERSION_KEY);

        if (currentVersion === appConfig.cacheVersion) {
            await persistor.restore();
        } else {
            await persistor.purge();
            await AsyncStorage.setItem(
                CACHE_VERSION_KEY,
                appConfig.cacheVersion,
            );
        }
    }

    useEffect(() => {
        if (!componentDidMountRef.current) {
            componentDidMountRef.current = true;
            loadCache().then(() => {
                setCachePersisted(true);
            });
        }
        if (!isConnected) {
            queueLink.open();
            apolloQueueOpenedRef.current = true;
        } else if (apolloQueueOpenedRef.current) {
            queueLink.close();
            apolloQueueOpenedRef.current = false;
        }
    }, [isConnected]);

    if (!cachePersisted) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loading Graphql...</Text>
            </View>
        );
    }
    return <Provider client={apolloClient}>{children}</Provider>;
}
