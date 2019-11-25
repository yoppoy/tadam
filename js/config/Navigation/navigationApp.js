import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import HomeScreen from '../../containers/Pronostic/ScreenHome';
import MatchScreen from '../../containers/Pronostic/ScreenMatch';
import IconVip from '../../assets/img/menu/icon-vip';
import IconLiveScore from '../../assets/img/menu/icon-livescore';
import IconMenu from '../../assets/img/menu/icon-menu';
import IconNotif from '../../assets/img/menu/icon-notif';
import OverflowTab from '../../components/Navigation/OverflowTab';
import {Colors, Fonts, Images} from '../../styles';
import navigationProno from './navigationProno';

const navigationApp = createBottomTabNavigator(
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
            screen: HomeScreen,
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
        Notification: {
            screen: HomeScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <IconNotif tintColor={tintColor}/>
                ),
            }),
        },
        Menu: {
            screen: HomeScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <IconMenu tintColor={tintColor}/>
                ),
            }),
        },
    },
    {
        initialRouteName: 'Pronos',
        tabBarOptions: {
            activeTintColor: Colors.green,
            indicatorStyle: {opacity: 0},
            labelStyle: {
                fontFamily: Fonts.type.sofia,
                fontSize: 10,
                marginBottom: 5,
                marginTop: 0,
            },
            style: {
                borderTopColor: 'transparent',
                paddingTop: 4,
                height: 62,
                elevation: 30,
                shadowOpacity: 0.75,
                shadowRadius: 5,
                shadowColor: 'rgba(0,0,0,0.1)',
            },
        },
    },
);

export default navigationApp;
