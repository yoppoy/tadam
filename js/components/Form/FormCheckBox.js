import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import TouchableView from '../Button/TouchableView';
import {Colors} from '../../styles';
import PropTypes from 'prop-types';

export default function FormCheckBox({onPress, checked, style, color, size, ...props}) {
    return (
        <TouchableView
            onPress={onPress}
            rippleColor={color}
            underlayColor="transparent">
            <View style={[styles.checkBox, {width: size, height: size}, style]} {...props}>
                {checked && <View style={styles.checked}/>}
            </View>
        </TouchableView>
    );
}

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

FormCheckBox.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    color: PropTypes.string,
    check: PropTypes.bool,
};

FormCheckBox.defaultProps = {
    style: {},
    color: Colors.green,
    size: 14,
    checked: false,
};
