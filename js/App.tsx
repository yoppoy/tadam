import React from 'react';
import {Provider} from 'react-redux';
// @ts-ignore
import {NetworkProvider} from 'react-native-offline';
import ApolloProvider from './graphql/config/ApolloProvider';
import RootContainer from './containers/RootContainer';
import {createStore} from './redux';

const store = createStore();

/*type NetworkProps = {
    children: React.Node,
    pingTimeout?: number = 10000,
    pingServerUrl?: string = 'https://www.google.com/',
    shouldPing?: boolean = true,
    pingInterval?: number = 0,
    pingOnlyIfOffline?: boolean = false,
    pingInBackground?: boolean = false,
    httpMethod?: HTTPMethod = 'HEAD',
}*/
const App: React.FC<object> = () => {
    return (
        <NetworkProvider>
            <ApolloProvider>
                <Provider store={store}>
                    <RootContainer/>
                </Provider>
            </ApolloProvider>
        </NetworkProvider>
    );
};

export default App;
