import React, {useState, useEffect} from 'react';
import {Platform, Text, TextInput, View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
import {ApplicationStyles} from '../../styles';
import TouchableView from '../Button/TouchableView';
import HeaderCalendarSelect from './HeaderCalendarSelect';
import {LocaleConfig} from 'react-native-calendars';

export default function HeaderCalendarDay({date, offset, ...props}) {
    const displayDate = moment(date).add(offset, 'd');
    displayDate.locale('fr');
    const weekDay = displayDate.format('ddd').toUpperCase();
    const day = displayDate.format('DD').toUpperCase();
    const month = displayDate.format('MMM').toUpperCase();
    return (
        <HeaderCalendarSelect {...props}>
            <Text style={styles.day}>{weekDay}</Text>
            <Text style={styles.date}>{day}</Text>
            <Text style={styles.month}>{month}</Text>
        </HeaderCalendarSelect>
    );
}

const styles = StyleSheet.create({
    container: {
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

HeaderCalendarDay.defaultProps = {
    selected: false,
    offset: 0,
    onPress: () => console.log('onPress not assigned'),
};

HeaderCalendarDay.propTypes = {
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    offset: PropTypes.number
};
