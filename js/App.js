import React from 'react';
import {createStore, apolloClient} from './redux/index';
import RootContainer from './containers/RootContainer';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from 'react-redux';

const store = createStore();

export default () => {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <RootContainer />
            </Provider>
        </ApolloProvider>
    );
};
