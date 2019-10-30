import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthFacebook, {AuthFacebookVerifyLogin} from './AuthFacebook';
import AuthGoogle, {AuthGoogleVerifyLogin} from './AuthGoogle';
import {ApplicationStyles} from '../../styles';
import {DefaultButton} from '../../components/Button';

const AuthHome = (props) => {
    useEffect(() => {
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
    }, []);

    return (
        <React.Fragment>
            <View>
                <DefaultButton
                    onPress={() => props.navigation.navigate('Register')}
                    text={'Create Account'}
                    style={{backgroundColor: 'red'}}
                    textStyle={{}}
                />
                <View styles={styles.socialMediaContainer}>
                    <AuthFacebook callback={(token) => console.log(token)}/>
                    <AuthGoogle callback={(token) => console.log(token)}/>
                </View>
            </View>
        </React.Fragment>
    );
};

export default AuthHome;

const styles = StyleSheet.create({
    ...ApplicationStyles,
    socialMediaContainer: {},
});
