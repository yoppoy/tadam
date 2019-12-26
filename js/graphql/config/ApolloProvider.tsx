import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {RetryLink} from 'apollo-link-retry';
import {setContext} from 'apollo-link-context';
import SerializingLink from 'apollo-link-serialize';
import QueueLink from 'apollo-link-queue';
import {onError} from 'apollo-link-error';
import {CachePersistor} from 'apollo-cache-persist';
import {PersistedData, PersistentStorage} from 'apollo-cache-persist/types';
import {ApolloProvider as Provider} from 'react-apollo';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState, useRef} from 'react';
import appConfig from '../../config/appConfig';
import Loading from '../../components/Loading';

const CACHE_VERSION_KEY: string = 'apollo-cache-version';

const serializingLink = new SerializingLink();
const cache = new InMemoryCache({});
const queueLink = new QueueLink();
const httpLink = new HttpLink({uri: appConfig.graphqlHost});
const errorLink = onError(error => {
    console.log(error);
});
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
const authLink = setContext(async (_, {headers}) => {
    const token = await AsyncStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token ? token : 'hey'}`,
        },
    };
});

const apolloClient = new ApolloClient({
    cache: cache,
    link: ApolloLink.from([
        retryLink,
        //queueLink,
        serializingLink,
        errorLink,
        authLink,
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
        console.log("Loading cache...");
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
            console.log("QUEUE STARTED");
            queueLink.open();
            apolloQueueOpenedRef.current = true;
        } else if (apolloQueueOpenedRef.current) {
            console.log("QUEUE CLOSED");
            queueLink.close();
            apolloQueueOpenedRef.current = false;
        }
    }, [isConnected]);

    if (!cachePersisted) {
        return (
            <Loading/>
        );
    }
    return <Provider client={apolloClient}>{children}</Provider>;
}
