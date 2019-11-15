import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';
import {ApplicationStyles} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import {Colors} from '../../styles';
import FormField from '../../components/Form/FormField';

const HomeScreen = props => {
    return (
        <ScrollView style={{backgroundColor: Colors.darkBlue, flex: 1, flexDirection: 'column'}}>
            <FormField/>
            <FormField/>
            <FormField/>
            <FormField/>
            <FormField/>
            <FormField/>
        </ScrollView>
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

const styles = StyleSheet.create({
    ...ApplicationStyles,
});
