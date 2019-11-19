import React, {useState, useEffect} from 'react';
import {Platform, Text, TextInput, View, StyleSheet, Animated, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';
import {ApplicationStyles} from '../../styles';
import HeaderCalendarSelect from './HeaderCalendarSelect';
import HeaderCalendarDay from './HeaderCalendarDay';
import IconCalendar from '../../assets/img/misc/IconCalendar';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';
import CalendarPicker from './CalendarPicker';
import moment from 'moment';

function HeaderCalendar({error, children, filled, navigation, ...props}) {
    const [state, setDate] = useState({
        currentDate: new Date(),
    });
    const onDateSelect = (day) => {
        console.log('Hello : ', day);
    };

    return (
        <View style={[styles.container, props.style]}>
            <HeaderCalendarDay date={state.currentDate} offset={0} selected/>
            <HeaderCalendarDay date={state.currentDate} offset={1} />
            <HeaderCalendarDay date={state.currentDate} offset={2} />
            <HeaderCalendarDay date={state.currentDate} offset={3} />
            <HeaderCalendarDay date={state.currentDate} offset={4} />
            <HeaderCalendarSelect onPress={() => navigation.navigate('CalendarPicker', {onSelect: onDateSelect})}>
                <IconCalendar/>
            </HeaderCalendarSelect>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.row,
        backgroundColor: 'white',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    modal: {
        margin: 0,
        padding: 0,
    },
});

HeaderCalendar.defaultProps = {
    textInputProps: {},
    style: {},
};

HeaderCalendar.propTypes = {
    style: PropTypes.object,
};

export default withNavigation(HeaderCalendar);
