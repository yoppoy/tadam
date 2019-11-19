import React, {useState, useEffect, useMemo} from 'react';
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

export default function HeaderCalendarDay({date, selectedDate, ...props}) {
    const displayDate = useMemo(() => moment(date), [date]);
    const selected = useMemo(() => moment(selectedDate), [selectedDate]);
    const isSelected = useMemo(() => (displayDate.format('DD/MM/YYYY') === selected.format('DD/MM/YYYY')), [date, selectedDate]);

    displayDate.locale('fr');
    const weekDay = useMemo(() => displayDate.format('ddd').toUpperCase(), [date]);
    const day = useMemo(() => displayDate.format('DD').toUpperCase(), [date]);
    const month = useMemo(() => displayDate.format('MMM').toUpperCase(), [date]);
    return (
        <HeaderCalendarSelect selected={isSelected} {...props}>
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
    offset: 0,
    onPress: () => console.log('onPress not assigned'),
};

HeaderCalendarDay.propTypes = {
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    offset: PropTypes.number,
};
