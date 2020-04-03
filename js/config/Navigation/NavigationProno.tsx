import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from '../../containers/Pronostic/ScreenHome';
import ScreenMatch from '../../containers/Pronostic/ScreenMatch';
import ScreenSubscription from '../../containers/Pronostic/ScreenSubscription';

export type PronoParamsList = {
    Home: undefined;
    Match: undefined;
    Subscribe: undefined;
};

const Stack = createStackNavigator<PronoParamsList>();

export default function NavigationProno() {
    return (
        <Stack.Navigator initialRouteName={'Home'} headerMode="none" screenOptions={{header: undefined}}>
            <Stack.Screen name="Home" component={ScreenHome}/>
            <Stack.Screen name="Match" component={ScreenMatch}/>
            <Stack.Screen name="Subscribe" component={ScreenSubscription}/>
        </Stack.Navigator>
    );
}
