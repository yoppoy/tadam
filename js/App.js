import React from 'react';
import {createStore} from './redux/index';
import ApolloProvider from './graphql/config/ApolloProvider';
import Navigation from './config/Navigation';
import {Provider} from 'react-redux';

const store = createStore();

export default () => {
    return (
        <ApolloProvider>
            <Provider store={store}>
                <Navigation />
            </Provider>
        </ApolloProvider>
    );
};
