import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView, ScrollView, View, Text, Button} from 'react-native';
import {ApplicationStyles} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import {Colors} from '../../styles';
import FormField from '../../components/Form/FormField';
import FormError from '../../components/Form/FormError';
import FormPrefix from '../../components/Form/FormPrefix';

const HomeScreen = props => {
    return (
        <View><Text>HEY THerer</Text></View>
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
