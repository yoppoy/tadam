import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationApp from './NavigationApp';
import NavigationAuth from './NavigationAuth';

export type RootParamsList = {
    App: undefined;
    Auth: undefined;
};

const Stack = createStackNavigator<RootParamsList>();

export default function NavigationRoot() {
    return (
        <Stack.Navigator initialRouteName={'Auth'} headerMode={'none'} screenOptions={{header: undefined}}>
            <Stack.Screen name="App" component={NavigationApp}/>
            <Stack.Screen name="Auth" component={NavigationAuth}/>
        </Stack.Navigator>
    );
}
