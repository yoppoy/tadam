import {createStackNavigator} from 'react-navigation-stack';
import ScreenRegisterProfile from '../../containers/Auth/ScreenRegisterProfile';
import ScreenRegisterHome from '../../containers/Auth/ScreenRegisterHome';
import ScreenRegisterEmail from '../../containers/Auth/ScreenRegisterEmail';
import ScreenRegisterEmailConfirm from '../../containers/Auth/ScreenRegisterEmailConfirm';
import ScreenRegisterSuccess from '../../containers/Auth/ScreenRegisterSuccess';

const navigationAuth = createStackNavigator(
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
);

export default navigationAuth;
