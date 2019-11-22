import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import AuthFacebook from './AuthFacebook';
import AuthGoogle from './AuthGoogle';
import {Index} from '../../styles';
import {Fonts} from '../../styles';
import {DefaultButton} from '../../components/Button';
import AuthLogin from './AuthLogin';
import AuthApple from './AuthApple';
import {NavigationActions, StackActions} from 'react-navigation';

const ScreenRegisterHome = props => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    Créer un compte pour accèder à l'ensemble du contenu
                </Text>
                <View style={styles.buttonContainer}>
                    <AuthApple/>
                    <AuthFacebook/>
                    <AuthGoogle onSuccess={() => console.log('nonthinge')}/>
                    <TouchableOpacity onPress={() => props.navigation.navigate('RegisterEmail')}>
                        <View style={{alignSelf: 'center'}}>
                            <Text style={styles.buttonLocalSignup}>
                                Ou vous pouvez utilisez une adresse mail
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ScreenRegisterHome;

const styles = StyleSheet.create({
    ...Index,
    title: {
        ...Fonts.title,
        color: 'white',
        padding: 16,
        flexGrow: 1,
    },
    buttonContainer: {
        padding: 22,
    },
    buttonLocalSignup: {
        fontFamily: Fonts.type.bold,
        fontSize: 14,
        textDecorationLine: 'underline',
        color: 'white',
    },
});
