import React from 'react';
import {StyleSheet, View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import AuthFacebook from './AuthFacebook';
import AuthGoogle from './AuthGoogle';
import {ApplicationStyles} from '../../styles';
import {Fonts} from '../../styles';
import {DefaultButton} from '../../components/Button';
import AuthLogin from './AuthLogin';

const AuthSignUpHome = props => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.mainContainer}>
                <Text style={[Fonts.h1, styles.title]}>
                    Créer un compte pour accèder à l'ensemble du contenu
                </Text>
                <View style={styles.buttonContainer}>
                    <AuthFacebook navigation={props.navigation}/>
                    <AuthGoogle onSuccess={() => console.log('nonthinge')}/>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
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

export default AuthSignUpHome;

const styles = StyleSheet.create({
    ...ApplicationStyles,
    title: {
        fontSize: 40,
        padding: 16,
        flexGrow: 1,
    },
    buttonContainer: {
        padding: 22,
    },
    buttonLocalSignup: {
        textDecorationLine: 'underline',
    },
});
