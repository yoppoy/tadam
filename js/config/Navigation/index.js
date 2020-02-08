import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import navigationRoot from './navigationRoot';
import CalendarPicker from '../../components/HeaderCalendar/CalendarPicker';
import ModalLoading from '../../components/ModalLoading';
import PronosticCreate from '../../containers/Pronostic/PronosticCreate';
import PronosticPicker from '../../containers/Pronostic/PronosticPicker';

const Navigation = createStackNavigator(
    {
        Main: {
            screen: navigationRoot,
            navigationOptions: {
                gesturesEnabled: false,
            },
        },
        ModalCalendarPicker: {
            screen: CalendarPicker,
        },
        /*ModalPronosticCreate: {
            screen: PronosticCreate,
            navigationOptions: {
                gestureResponseDistance: {vertical: 1000}, // default is 135 },
            },
        },
        ModalPronosticPicker: {
            screen: PronosticPicker,
            navigationOptions: {
                gestureResponseDistance: {vertical: 1000}, // default is 135 },
            },
        },*/
    },
    {
        mode: 'modal',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: true,
        },
    },
);

export default createAppContainer(Navigation);
