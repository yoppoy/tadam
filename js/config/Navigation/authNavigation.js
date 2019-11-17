import {createStackNavigator} from 'react-navigation-stack';
import ScreenRegister from '../../containers/Auth/ScreenRegister';
import ScreenRegisterHome from '../../containers/Auth/ScreenRegisterHome';
import ScreenRegisterEmail from '../../containers/Auth/ScreenRegisterEmail';
import ScreenRegisterEmailConfirm from '../../containers/Auth/ScreenRegisterEmailConfirm';

const authNavigation = createStackNavigator(
    {
        RegisterHome: ScreenRegisterHome,
        RegisterEmail: ScreenRegisterEmail,
        RegisterEmailConfirm: ScreenRegisterEmailConfirm,
        Register: ScreenRegister,
    },
    {
        initialRouteName: 'RegisterEmailConfirm',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default authNavigation;
