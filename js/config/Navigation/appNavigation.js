import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import HomeScreen from '../../containers/Home/index';

const TabBarComponent = props => <BottomTabBar {...props} />;

const appNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        VIP: {
            screen: HomeScreen,
        },
        Pronos: {
            screen: HomeScreen,
        },
        Notification: {
            screen: HomeScreen,
        },
        Menu: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Pronos',
        tabBarComponent: props => {
            return (
                <TabBarComponent {...props} style={{borderTopColor: '#605F60'}}/>
            );
        },
    },
);

export default appNavigation;
