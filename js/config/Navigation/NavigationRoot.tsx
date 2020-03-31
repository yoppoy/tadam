import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationApp from './NavigationApp';
import NavigationAuth from './NavigationAuth';

const Stack = createStackNavigator();

export default function NavigationRoot() {
    return (
        <Stack.Navigator initialRouteName={'App'} headerMode={'none'} screenOptions={{header: undefined}}>
            <Stack.Screen name="App" component={NavigationApp}/>
            <Stack.Screen name="Auth" component={NavigationAuth}/>
        </Stack.Navigator>
    );
}
