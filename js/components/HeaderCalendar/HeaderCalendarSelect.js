import React, {useState, useEffect} from 'react';
import {Platform, Text, TextInput, View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';
import {ApplicationStyles} from '../../styles';
import TouchableView from '../Button/TouchableView';

export default function HeaderCalendarSelect({selected, children, onPress, ...props}) {
    return (
        <TouchableView onPress={onPress} rippleColor={Colors.darkBlue} style={{flex: 1}}>
            <View style={[styles.container, selected && styles.selected]}>
                {children}
            </View>
        </TouchableView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 18,
        opacity: 0.32,
        flex: 1,
        borderBottomWidth: 3,
        borderColor: 'white',
    },
    selected: {
        opacity: 1,
        borderColor: Colors.green,
    },
    day: {
        fontFamily: Fonts.type.AvenirB,
        fontSize: 10,
        lineHeight: 14,
        color: '#242A37',
    },
    date: {
        fontFamily: Fonts.type.AvenirB,
        fontSize: 20,
        lineHeight: 27,
        color: '#242A37',
    },
    month: {
        fontFamily: Fonts.type.AvenirB,
        fontSize: 8,
        lineHeight: 11,
        letterSpacing: 0.6,
        color: '#242A37',
    },
});

HeaderCalendarSelect.defaultProps = {
    selected: false,
    onPress: () => console.log('onPress not assigned'),
};

HeaderCalendarSelect.propTypes = {
    selected: PropTypes.bool,
    onPress: PropTypes.func,
};
