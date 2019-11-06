import {createStackNavigator} from 'react-navigation-stack';
import AuthHome from '../../containers/Auth/AuthHome';
import AuthLogin from '../../containers/Auth/AuthLogin';
import AuthRegister from '../../containers/Auth/AuthRegister';

const authNavigation = createStackNavigator(
    {
        Home: AuthHome,
        Login: AuthLogin,
        Register: AuthRegister,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default authNavigation;
