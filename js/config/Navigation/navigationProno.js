import {createStackNavigator} from 'react-navigation-stack';
import ScreenHome from '../../containers/Pronostic/ScreenHome';
import ScreenMatch from '../../containers/Pronostic/ScreenMatch';
import ScreenSubscription from '../../containers/Pronostic/ScreenSubscription';
import PronosticCreate from '../../containers/Pronostic/PronosticCreate';
import PronosticPicker from '../../containers/Pronostic/PronosticPicker';

const navigationProno = createStackNavigator(
    {
        Home: ScreenHome,
        Match: ScreenMatch,
        Subscribe: ScreenSubscription,
        ModalPronoPicker: PronosticPicker,
    },
    {
        initialRouteName: 'ModalPronoPicker',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default navigationProno;
