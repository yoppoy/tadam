import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, SafeAreaView, ScrollView, View, Button, Text} from 'react-native';
import {ApplicationStyles} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import {Colors} from '../../styles';
import FormField from '../../components/Form/FormField';
import FormError from '../../components/Form/FormError';
import FormPrefix from '../../components/Form/FormPrefix';
import Dash from 'react-native-dash';

const HomeScreen = props => {
    return (
        <View style={{backgroundColor: '#EFEFEF', flex: 1}}>
            <View style={styles.card}>
                <View style={{padding: 10}}>
                    <Text>Test</Text>
                </View>
                <Dash style={{height:1}} dashGap={5} dashLength={5} dashColor={'#979797'} dashThickness={0.4}/>
                <View style={{padding: 10}}>
                    <Text>Test</Text>
                </View>
            </View>
        </View>
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
    card: {
        backgroundColor: 'white',
        margin: 8,
        elevation: 2,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,

    },
});
