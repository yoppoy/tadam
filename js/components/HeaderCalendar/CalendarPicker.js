import React from 'react';
import {View, Button, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {LocaleConfig, CalendarList} from 'react-native-calendars';
import {Colors, Fonts} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import TouchableView from '../Button/TouchableView';

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

export default function CalendarPicker({navigation, ...props}) {
    const currentDate = props.currentDate.toISOString().slice(0, 10);

    const onSelect = day => {
        navigation.goBack();
        navigation.state.params.onSelect(new Date(day.dateString));
    };

    const onExit = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <CalendarList
                current={currentDate}
                minDate={currentDate}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                //maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                    console.log("Hey there")
                    onSelect(day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                    console.log('selected day', day);
                }}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                //onMonthChange={(month) => {
                //    console.log('month changed', month);
                //}}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Do not show days of other months in month page. Default = false
                //hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                //hideDayNames={true}
                // Show week numbers to the left. Default = false
                //showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                calendarHeight={340}
                theme={calendarStyles}
            />
            <LinearGradient
                pointerEvents={'none'}
                colors={['rgba(255, 255, 255, 0)', 'white']}
                style={styles.bottomGradient}/>
            <TouchableView onPress={onExit}>
                <View style={styles.roundButton}>
                    <Icon name={'md-close'} style={{fontSize: 28, color: 'white'}}/>
                </View>
            </TouchableView>
        </SafeAreaView>
    );
}

CalendarPicker.defaultProps = {
    currentDate: new Date(),
};

const styles = StyleSheet.create({
    bottomGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 150,
    },
    roundButton: {
        bottom: 0,
        width: 66,
        height: 66,
        left: SCREEN_WIDTH / 2 - 33,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 33,
        backgroundColor: Colors.darkBlue,
    },
});

const calendarStyles = {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: Colors.green,
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: Colors.darkBlue,
    indicatorColor: Colors.darkBlue,
    textDayFontFamily: Fonts.type.base,
    textMonthFontFamily: Fonts.type.medium,
    textDayHeaderFontFamily: Fonts.type.medium,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
};
