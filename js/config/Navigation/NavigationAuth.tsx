import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenRegisterProfile from '../../containers/Auth/ScreenRegisterProfile';
import ScreenRegisterHome from '../../containers/Auth/ScreenRegisterHome';
import ScreenRegisterEmail from '../../containers/Auth/ScreenRegisterEmail';
import ScreenRegisterEmailConfirm from '../../containers/Auth/ScreenRegisterEmailConfirm';
import ScreenRegisterSuccess from '../../containers/Auth/ScreenRegisterSuccess';

/*const navigationAuth = createStackNavigator(
    {
        RegisterHome: ScreenRegisterHome,
        RegisterEmail: ScreenRegisterEmail,
        RegisterEmailConfirm: ScreenRegisterEmailConfirm,
        RegisterSuccess: ScreenRegisterSuccess,
        Register: ScreenRegisterProfile,
    },
    {
        initialRouteName: 'RegisterHome',
        defaultNavigationOptions: {
            header: null,
        },
    },
);*/

const Stack = createStackNavigator();

export default function NavigationAuth() {
    return (
        <Stack.Navigator initialRouteName={'RegisterHome'} headerMode="none" screenOptions={{header: undefined}}>
            <Stack.Screen name="RegisterHome" component={ScreenRegisterHome}/>
            <Stack.Screen name="RegisterEmail" component={ScreenRegisterEmail}/>
            <Stack.Screen name="RegisterEmailConfirm" component={ScreenRegisterEmailConfirm}/>
            <Stack.Screen name="ResgiterSuccess" component={ScreenRegisterSuccess}/>
            <Stack.Screen name="RegisterProfile" component={ScreenRegisterProfile}/>
        </Stack.Navigator>
    );
}
