import React from 'react';
import {NavigationActions, StackActions} from 'react-navigation';

export const navigationReset = (navigation, routeName) => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: routeName})],
    });
    navigation.dispatch(resetAction);
};
