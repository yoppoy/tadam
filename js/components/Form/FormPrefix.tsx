import React, {ReactElement} from 'react';
import {Fonts} from '../../styles';
import {Text, Platform, StyleSheet, TextStyle} from 'react-native';

type Props = {
    children: ReactElement | string;
};

export default function FormPrefix({children}: Props) {
    return <Text style={styles.title}>{children}</Text>;
}

type StyleProp = {
    title: TextStyle;
};

const styles = StyleSheet.create<StyleProp>({
    title: {
        color: 'white',
        left: Platform.OS === 'android' ? 3 : 0,
        fontFamily: Fonts.type.base,
    },
});
