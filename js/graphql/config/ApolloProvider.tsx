import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {CachePersistor} from 'apollo-cache-persist';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider as Provider} from 'react-apollo';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {onError} from 'apollo-link-error';
import appConfig from '../../config/appConfig';
import {concat} from 'apollo-link';
import authMiddleware from './authMiddleware';
import {Text, View} from 'react-native';

const CACHE_VERSION: string = '0';
const CACHE_VERSION_KEY: string = 'apollo-cache-version';

const errorAfterware = onError((error) => {
    console.log(error);
});

const httpLink = new HttpLink({
    uri: appConfig.graphqlHost,
});
const cache = new InMemoryCache({});

type Props = {
    children: React.ReactElement;
};

export default function ApolloProvider({children}: Props) {
    const [client, setClient] = useState(undefined);

    async function setupApollo() {
        // @ts-ignore
        const persistor = new CachePersistor({cache, storage: AsyncStorage});
        const currentVersion = await AsyncStorage.getItem(CACHE_VERSION_KEY);

        if (currentVersion === CACHE_VERSION) {
            await persistor.restore();
        } else {
            await persistor.purge();
            await AsyncStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
        }
        const apolloClient = new ApolloClient({
            cache: cache,
            link: concat(authMiddleware, errorAfterware.concat(httpLink)),
            connectToDevTools: __DEV__,
        });
        setClient(apolloClient);
    }

    useEffect(() => {
        setupApollo()
            .then(() => {
                console.log('Done setting up apollo');
            })
            .catch((e) => {
                console.log('Error : Graphql ', e);
            });
    }, []);

    if (!client) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loading Graphql...</Text>
            </View>
        );
    }
    // @ts-ignore
    return <Provider client={client}>{children}</Provider>;
}
