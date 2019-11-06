import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthHome from './Auth/AuthHome';
import {ApplicationStyles} from '../styles';

const RootContainer = () => {
    return (
        <View style={styles.mainContainer}>
            <AuthHome/>
        </View>
    );
};

export default RootContainer;

const styles = StyleSheet.create({
    ...ApplicationStyles,
});
