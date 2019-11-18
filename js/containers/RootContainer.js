import React, {useEffect, useRef} from 'react';
import Navigation from '../config/Navigation';
import {Linking, StatusBar, Platform} from 'react-native';
import {Colors} from '../styles';
import {NavigationActions} from 'react-navigation';

export default function RootContainer() {
    const navigatorRef = useRef(null);

    useEffect(() => {
        //navigate('tadam://register?token=foeoifoeifozeifo&love=89');
        Linking.getInitialURL().then(url => {
            handleDeepLink({url});
        });
        Linking.addEventListener('url', handleDeepLink);
        return () => Linking.removeEventListener('url', handleDeepLink);
    });

    const handleDeepLink = ({url}) => {
        const route = url.split('?')[0].replace(/.*?:\/\//g, '');
        const routeName = route.split('/')[0];

        if (routeName === 'register') {
            let token = url.match(/\A?token=[^&]+&*/g);
            navigatorRef.current.dispatch(
                NavigationActions.navigate({
                    routeName: 'Register',
                    params: {
                        token,
                    },
                }),
            );
        }
    };

    return (
        <React.Fragment>
            <StatusBar backgroundColor={Colors.darkBlue} barStyle="light-content"/>
            <Navigation ref={navigatorRef}/>
        </React.Fragment>
    );
}
