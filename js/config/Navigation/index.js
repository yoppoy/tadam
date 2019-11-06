import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import appNavigation from './appNavigation';
import authNavigation from './authNavigation';

const Navigation = createStackNavigator(
    {
        App: appNavigation,
        Auth: authNavigation,
    },
    {
        initialRouteName: 'Auth',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default createAppContainer(Navigation);
