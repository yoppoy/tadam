import React from 'react';
import Navigation from '../config/Navigation';
import {StatusBar} from 'react-native';
import {Colors} from '../styles';

export default function RootContainer() {
    return (
        <React.Fragment>
            <StatusBar backgroundColor={Colors.darkBlue} barStyle="light-content"/>
            <Navigation/>
        </React.Fragment>
    );
}
