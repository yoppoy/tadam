import {createStackNavigator} from 'react-navigation-stack';
import AuthHome from '../../containers/Auth/AuthHome';
import AuthLogin from '../../containers/Auth/AuthLogin';
import ScreenRegister from '../../containers/Auth/ScreenRegister';
import ScreenRegisterHome from '../../containers/Auth/ScreenRegisterHome';
import ScreenRegisterEmail from '../../containers/Auth/ScreenRegisterEmail';

const authNavigation = createStackNavigator(
    {
        RegisterHome: ScreenRegisterHome,
        RegisterEmail: ScreenRegisterEmail,
        Register: ScreenRegister,
    },
    {
        initialRouteName: 'RegisterHome',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default authNavigation;
