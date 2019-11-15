import React from 'react';
import {Fonts} from '../../styles';
import {Text, Platform, StyleSheet} from 'react-native';

export default function FormPrefix({children}) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        left: Platform.OS === 'android' ? 3 : 0,
        fontFamily: Fonts.type.base,
    },
});
