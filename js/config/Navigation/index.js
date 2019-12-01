import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import navigationRoot from './navigationRoot';
import CalendarPicker from '../../components/HeaderCalendar/CalendarPicker';

const Navigation = createStackNavigator(
    {
        Main: {
            screen: navigationRoot,
        },
        ModalCalendarPicker: {
            screen: CalendarPicker,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(Navigation);
