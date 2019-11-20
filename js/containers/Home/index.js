import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView, ScrollView, View, Button, Text} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import Card from '../../components/Card/Card';
import CardSection from '../../components/Card/CardSection';
import CardProfile from '../../components/Card/CardProfile';
import CardMatch from '../../components/Card/CardMatch';
import DefaultButton from '../../components/Button/DefaultButton';
import HeaderCalendar from '../../components/HeaderCalendar/HeaderCalendar';
import SportSelector from '../../components/Selectors/SportSelector';
import CardPronostic from '../../components/Card/CardPronostic';

const HomeScreen = props => {
    return (
        <SafeAreaView style={{backgroundColor: Colors.darkBlue, flex: 1}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{backgroundColor: Colors.darkBlue}}>
                    <SportSelector/>
                    <HeaderCalendar onDateSelect={date => console.log(date)}/>
                </View>
                <View style={{backgroundColor: '#EFEFEF', flex: 1}}>
                    <CardPronostic />
                    <CardPronostic />
                    <CardPronostic />
                    <CardPronostic />
                    <CardPronostic />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onDisconnected: () => dispatch(AuthActions.onDisconnected()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);
