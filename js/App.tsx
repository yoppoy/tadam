import React from 'react';
import {Provider} from 'react-redux';
// @ts-ignore
import {NetworkProvider, NetworkConsumer} from 'react-native-offline';
import ApolloProvider from './graphql/config/ApolloProvider';
import RootContainer from './containers/RootContainer';
import {createStore} from './redux';

const store = createStore();

type NetworkProps = {
    isConnected: boolean;
};
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
            <NetworkConsumer>
                {({isConnected}: NetworkProps) => (
                    <ApolloProvider isConnected={isConnected}>
                        <Provider store={store}>
                            <RootContainer/>
                        </Provider>
                    </ApolloProvider>
                )}
            </NetworkConsumer>
        </NetworkProvider>
    );
};

export default App;
