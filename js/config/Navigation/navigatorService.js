import React from 'react';
import {NavigationActions, StackActions} from 'react-navigation';

export const navigationReset = (navigation, routeName) => {
    navigation.dispatch(
        StackActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Main',
                    action: NavigationActions.navigate({routeName: routeName}),
                })],
        }));
};
