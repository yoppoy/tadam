import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import AuthFacebook from './AuthFacebook';
import AuthGoogle from './AuthGoogle';
import {ApplicationStyles} from '../../styles';
import {DefaultButton} from '../../components/Button';
import AuthLogin from './AuthLogin';
import {NavigationActions, StackActions} from 'react-navigation';
import UserList from '../User/UserList';

const AuthHome = props => {
    return (
        <SafeAreaView>
            <View>
                <AuthLogin navigation={props.navigation}/>
                <DefaultButton
                    onPress={() => props.navigation.navigate('Register')}
                    text={'Create Account'}
                    style={{backgroundColor: 'red'}}
                    textStyle={{}}
                />
                <View styles={styles.socialMediaContainer}>
                    <AuthFacebook navigation={props.navigation}/>
                    <AuthGoogle onSuccess={() => console.log("nonthinge")}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AuthHome;

const styles = StyleSheet.create({
    ...ApplicationStyles,
    socialMediaContainer: {},
});
