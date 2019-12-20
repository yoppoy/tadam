import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import navigationApp from './navigationApp';
import navigationAuth from './navigationAuth';

const navigationRoot = createStackNavigator(
    {
        App: navigationApp,
        Auth: navigationAuth,
    },
    {
        initialRouteName: 'Auth',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default navigationRoot;
