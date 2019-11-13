import {createStackNavigator} from 'react-navigation-stack';
import AuthHome from '../../containers/Auth/AuthHome';
import AuthLogin from '../../containers/Auth/AuthLogin';
import AuthRegister from '../../containers/Auth/AuthRegister';
import AuthSignUpHome from '../../containers/Auth/AuthSignUpHome';

const authNavigation = createStackNavigator(
    {
        Home: AuthHome,
        SignUpHome: AuthSignUpHome,
        Login: AuthLogin,
        Register: AuthRegister,
    },
    {
        initialRouteName: 'SignUpHome',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default authNavigation;
