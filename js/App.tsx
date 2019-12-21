import React from 'react';
import {Provider} from 'react-redux';
import ApolloProvider from './graphql/config/ApolloProvider';
import RootContainer from './containers/RootContainer';
import {createStore} from './redux';

const store = createStore();

const App: React.FC<object> = () => {
    return (
        <ApolloProvider>
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        </ApolloProvider>
    );
};

export default App;
