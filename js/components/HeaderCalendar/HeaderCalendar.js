import React, {useState, useMemo} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {ApplicationStyles} from '../../styles';
import HeaderCalendarSelect from './HeaderCalendarSelect';
import HeaderCalendarDay from './HeaderCalendarDay';
import IconCalendar from '../../assets/img/misc/IconCalendar';
import {withNavigation} from 'react-navigation';
import CalendarPicker from './CalendarPicker';
import moment from 'moment';

function HeaderCalendar({navigation, onDateSelect, ...props}) {
    const [state, setState] = useState({
        startDate: new Date().toString(),
        selectedDate: new Date().toString(),
    });
    const dates = [
        moment(state.startDate),
        moment(state.startDate).add(1, 'd'),
        moment(state.startDate).add(2, 'd'),
        moment(state.startDate).add(3, 'd'),
        moment(state.startDate).add(4, 'd'),
    ];

    const onCalendarSelect = (date) => {
        setState({...state, startDate: date, selectedDate: date});
        onDateSelect(date);
    };

    const onDaySelect = (date) => {
        setState({...state, selectedDate: date});
        onDateSelect(date);
    };

    return (
        <View style={[styles.container, props.style]}>
            <View style={{flexDirection: 'row', flex: 5, height: 90, overflow: 'hidden'}}>
                <HeaderCalendarDay
                    date={state.startDate}
                    onPress={() => onDaySelect(dates[0])}
                    selectedDate={state.selectedDate}/>
                <HeaderCalendarDay
                    date={dates[1]}
                    onPress={() => onDaySelect(dates[1])}
                    selectedDate={state.selectedDate}/>
                <HeaderCalendarDay
                    date={dates[2]}
                    onPress={() => onDaySelect(dates[2])}
                    selectedDate={state.selectedDate}/>
                <HeaderCalendarDay
                    date={dates[3]}
                    onPress={() => onDaySelect(dates[3])}
                    selectedDate={state.selectedDate}/>
                <HeaderCalendarDay
                    date={dates[4]}
                    onPress={() => onDaySelect(dates[4])}
                    selectedDate={state.selectedDate}/>
            </View>
            <View style={{flex: 1}}>
                <HeaderCalendarSelect
                    onPress={() => navigation.navigate('CalendarPicker', {onSelect: onCalendarSelect})}>
                    <IconCalendar/>
                </HeaderCalendarSelect>
            </View>
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
    onDateSelect: PropTypes.func,
};

export default withNavigation(HeaderCalendar);
