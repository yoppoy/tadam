import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import AuthLogin from '../../containers/Auth/AuthLogin';

const TabBarComponent = props => <BottomTabBar {...props} />;

const appNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: AuthLogin
        },
        VIP: {
            screen: AuthLogin
        },
        Chat: {
            screen: AuthLogin
        },
        Notification: {
            screen: AuthLogin
        },
        Menu: {
            screen: AuthLogin
        },
    },
    {
        tabBarComponent: props => {
            return (
                <TabBarComponent {...props} style={{borderTopColor: '#605F60'}}/>
            )
        },
    },
);

export default appNavigation;
