import React from 'react';
import {createStore} from './redux/index';
import ApolloProvider from './graphql/config/ApolloProvider';
import RootContainer from './containers/RootContainer';
import {Provider} from 'react-redux';

const store = createStore();

export default () => {
    return (
        <ApolloProvider>
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        </ApolloProvider>
    );
};
