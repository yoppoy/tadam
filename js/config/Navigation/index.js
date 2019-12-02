import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import navigationRoot from './navigationRoot';
import CalendarPicker from '../../components/HeaderCalendar/CalendarPicker';
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
        transparentCard: true,
        navigationOptions: {
            gesturesEnabled: true,
        },
        cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1,
        },
    },
);

export default createAppContainer(Navigation);
