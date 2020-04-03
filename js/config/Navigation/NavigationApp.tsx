import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale} from '../../services/pixelResizer';
import IconVip from '../../assets/img/menu/icon-vip';
import IconLiveScore from '../../assets/img/menu/icon-livescore';
import IconMenu from '../../assets/img/menu/icon-menu';
import IconNotif from '../../assets/img/menu/icon-notif';
import OverflowTab from '../../components/Navigation/OverflowTab';
import {Colors, Fonts, Images} from '../../styles';
import NavigationProno from './NavigationProno';
import ScreenVipHome from '../../containers/VIP/ScreenVipHome';
import ScreenNotifications from '../../containers/Notifications/ScreenNotifications';
import ScreenMenu from '../../containers/Menu/ScreenMenu';

export type AppParamsList = {
    Home: undefined;
    VIP: undefined;
    Pronos: undefined;
    Notifications: undefined;
    Menu: undefined;
};

const Tab = createBottomTabNavigator<AppParamsList>();

export default function NavigationApp() {
    const HeightStyle = Platform.OS === 'android' ? {height: moderateScale(62, 62)} : {};
    const TabBarOptions = {
        activeTintColor: Colors.green,
        indicatorStyle: {opacity: 0},
        labelStyle: {
            fontFamily: Fonts.type.sofia,
            fontSize: 10,
            marginBottom: 5,
            marginTop: 0,
        },
        iconStyle: {
            height: 200,
            backgroundColor: 'red',
        },
        style: {
            borderTopColor: 'transparent',
            paddingTop: 4,
            elevation: 30,
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'rgba(0,0,0,0.1)',
            ...HeightStyle,
        },
    };

    return (
        <Tab.Navigator initialRouteName={'Pronos'} tabBarOptions={TabBarOptions}>
            <Tab.Screen
                name="Home"
                component={NavigationProno}
                options={{
                    tabBarIcon: ({color}) => <IconVip tintColor={color} />,
                }}
            />
            <Tab.Screen
                name="VIP"
                component={ScreenVipHome}
                options={{
                    tabBarIcon: ({color}) => <IconLiveScore tintColor={color} />,
                }}
            />
            <Tab.Screen
                name="Pronos"
                component={NavigationProno}
                options={{
                    tabBarIcon: () => (
                        <OverflowTab icon={<Image style={{width: 24, height: 24}} source={Images.IconMenuPronos}/>}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={ScreenNotifications}
                options={{
                    tabBarIcon: ({color}) => <IconNotif tintColor={color} />,
                }}
            />
            <Tab.Screen
                name="Menu"
                component={ScreenMenu}
                options={{
                    tabBarIcon: ({color}) => <IconMenu tintColor={color} />,
                }}
            />
        </Tab.Navigator>
    );
}


/*const navigationApp = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <IconVip tintColor={tintColor}/>
                ),
            }),
        },
        VIP: {
            screen: ScreenVipHome,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <IconLiveScore tintColor={tintColor}/>
                ),
            }),
        },
        Pronos: {
            screen: navigationProno,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <OverflowTab
                        tintColor={tintColor}
                        icon={
                            <Image
                                style={{width: 24, height: 24}}
                                source={Images.IconMenuPronos}
                            />
                        }
                    />
                ),
            }),
        },
        Notifications: {
            screen: ScreenNotifications,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <IconNotif tintColor={tintColor}/>
                ),
            }),
        },
        Menu: {
            screen: ScreenMenu,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <IconMenu tintColor={tintColor}/>
                ),
            }),
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions:
);*/

//export default navigationApp;
