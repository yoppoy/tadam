import React from 'react';
import {createStore} from './redux/index';
import ApolloProvider from './graphql/config/ApolloProvider';
import {Provider} from 'react-redux';
import RootContainer from './containers/RootContainer';

// eslint-disable-next-line no-undef
//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

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
