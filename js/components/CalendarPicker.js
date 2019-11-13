import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {LocaleConfig, CalendarList} from 'react-native-calendars';
import {Colors, Fonts} from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import TouchableView from '../components/Button/TouchableView';

export default function CalendarPicker({onSelect, ...props}) {
    const currentDate = props.currentDate.toISOString().slice(0, 10);

    return (
        <React.Fragment>
            <CalendarList
                // Initially visible month. Default = Date()
                current={currentDate}
                minDate={currentDate}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                //maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
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
                colors={['rgba(0,0,0,0)', 'white']}
                style={styles.absoluteContainer}>
                <TouchableView>
                    <View style={styles.roundButton}>
                        <Icon name={'md-close'} style={{fontSize: 28, color: 'white'}}/>
                    </View>
                </TouchableView>
            </LinearGradient>
        </React.Fragment>
    );
}

CalendarPicker.defaultProps = {
    currentDate: new Date(),
};

const styles = StyleSheet.create({
        absoluteContainer: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 100,
        },
        roundButton: {
            backgroundColor: Colors.darkBlue,
            borderRadius: 33,
            width: 66,
            height: 66,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
        },
    },
);

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
LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'fr';
