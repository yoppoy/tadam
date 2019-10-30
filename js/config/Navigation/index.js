import React from "react";
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import appNavigation from './appNavigation';
import authNavigation from './authNavigation';

const Navigation = createSwitchNavigator({
    App: appNavigation,
    Auth: authNavigation,
}, {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(Navigation);
