import React from 'react';
import {StyleSheet, View, ViewStyle, SafeAreaView, Text, TextStyle, TouchableOpacity} from 'react-native';
import AuthFacebook from './AuthFacebook';
import AuthGoogle from './AuthGoogle';
import {Index} from '../../styles';
import {Fonts} from '../../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamsList} from '../../config/Navigation/NavigationAuth';

type Props = {
    navigation: StackNavigationProp<AuthParamsList>;
};

export default function ScreenConnection(props: Props) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>
                    Créer un compte pour accèder à l'ensemble du contenu
                </Text>
                <View style={styles.buttonContainer}>
                    {/*<AuthApple/>*/}
                    <AuthFacebook/>
                    <AuthGoogle callback={(userInfo: any) => console.log(userInfo)}/>
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

type StylesProp = {
    title: TextStyle,
    buttonContainer: ViewStyle,
    buttonLocalSignup: TextStyle,
    mainContainer: ViewStyle
};

const styles = StyleSheet.create<StylesProp>({
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
