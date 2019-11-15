import React from 'react';
import {Fonts} from '../../styles';
import {Text} from 'react-native';

export default function FormPrefix({children}) {
    return (
        <Text style={{color: 'white', fontFamily: Fonts.type.base}}>
            {children}
        </Text>
    );
}
