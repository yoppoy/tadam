import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoot from './NavigationRoot';
import CalendarPicker from '../../components/HeaderCalendar/CalendarPicker';
//import {createAppContainer} from 'react-navigation';
/*import ModalLoading from '../../components/ModalLoading';
import PronosticCreate from '../../containers/Pronostic/PronosticCreate';
import PronosticPicker from '../../containers/Pronostic/PronosticPicker';

const Navigation = createStackNavigator(
    {
        Main: {
            screen: navigationRoot,
            navigationOptions: {},
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
        },*//*
    },
    {
        mode: 'modal',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: true,
        },
    },
);*/

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                mode={'modal'}
                headerMode={'none'}
                screenOptions={{gestureEnabled: true}}>
                <Stack.Screen name="Main" component={NavigationRoot} options={{gestureEnabled: false}}/>
                <Stack.Screen name="ModalCalendarPicker" component={CalendarPicker}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
