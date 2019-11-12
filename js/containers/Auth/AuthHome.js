import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import AuthFacebook from './AuthFacebook';
import AuthGoogle from './AuthGoogle';
import {ApplicationStyles} from '../../styles';
import {DefaultButton} from '../../components/Button';
import AuthLogin from './AuthLogin';
import UserList from '../User/UserList';

const AuthHome = props => {
    /*useEffect(() => {
        AuthFacebookVerifyLogin((data, error) => {
            console.log('Verifying facebook : ');
            console.log('Data : ', data);
            console.log('Error : ', error);
        });
        AuthGoogleVerifyLogin((data, error) => {
            console.log('Verifying google : ');
            console.log('Data : ', data);
            console.log('Error : ', JSON.stringify(error));
        });
    }, []);*/

    return (
        <SafeAreaView>
            <View>
                <AuthLogin onSuccess={() => props.navigation.navigate('App')}/>
                <DefaultButton
                    onPress={() => props.navigation.navigate('Register')}
                    text={'Create Account'}
                    style={{backgroundColor: 'red'}}
                    textStyle={{}}
                />
                <View styles={styles.socialMediaContainer}>
                    <AuthFacebook onSuccess={() => props.navigation.navigate('App')}/>
                    <AuthGoogle onSuccess={() => props.navigation.navigate('App')}/>
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
