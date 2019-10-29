import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider as Provider} from 'react-apollo';
import React from 'react';
import {onError} from 'apollo-link-error';
import appConfig from '../../config/appConfig';
import { ApolloLink, concat } from 'apollo-link';
import authMiddleware from './authMiddleware';

const errorAfterware = onError((error) => {
    console.log(error);
});

const httpLink = new HttpLink({
    uri: appConfig.graphqlHost,
});

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(errorAfterware.concat(httpLink), authMiddleware),
    connectToDevTools: __DEV__,
});

export default function ApolloProvider({children}) {
    return (
        <React.Fragment>
            <Provider client={apolloClient}>
                {children}
            </Provider>
        </React.Fragment>
    );
}
