import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthHome from './Auth/AuthHome';
import UserList from './User/UserList'
import {ApplicationStyles, Colors} from '../styles';

const RootContainer = () => {
    return (
        <View style={styles.mainContainer}>
            {
                //<AuthHome />
            }
            <UserList />
        </View>
    );
};

export default RootContainer;

const styles = StyleSheet.create({
    ...ApplicationStyles,
});
