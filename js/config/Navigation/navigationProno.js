import {createStackNavigator} from 'react-navigation-stack';
import ScreenHome from '../../containers/Pronostic/ScreenHome';
import ScreenMatch from '../../containers/Pronostic/ScreenMatch';
import ScreenSubscription from '../../containers/Pronostic/ScreenSubscription';

const navigationProno = createStackNavigator(
    {
        Home: ScreenHome,
        Match: ScreenMatch,
        Subscribe: ScreenSubscription,
    },
    {
        initialRouteName: 'Subscribe',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default navigationProno;
