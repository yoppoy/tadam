import React from 'react';
import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import TouchableView from '../Button/TouchableView';
import {Colors} from '../../styles';

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    checked: boolean,
    style?: any;
    color?: string;
    size?: number;
};

export default function FormCheckBox({onPress, checked, style, color, size, ...props}: Props) {
    return (
        <TouchableView
            onPress={onPress}
            rippleColor={color}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            underlayColor="transparent">
            <View style={[styles.checkBox, {width: size, height: size}, style]} {...props}>
                {checked && <View style={styles.checked}/>}
            </View>
        </TouchableView>
    );
}

FormCheckBox.defaultProps = {
    style: {},
    color: Colors.green,
    size: 14,
    checked: false,
};

const styles = StyleSheet.create({
    checkBox: {
        borderColor: Colors.green,
        borderWidth: 1,
        borderRadius: 1,
        padding: 2,
    },
    checked: {
        flex: 1,
        borderRadius: 1,
        backgroundColor: Colors.green,
    },
});
