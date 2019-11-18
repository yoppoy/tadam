import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Platform,
    Linking,
} from 'react-native';
import useForm from 'react-hook-form';
import {ApplicationStyles, Colors, Fonts} from '../../styles';
import FormError from '../../components/Form/FormError';
import FormField from '../../components/Form/FormField';
import MailOpener from '../../config/NativeModules/MailOpener';
import {DefaultButton} from '../../components/Button';
import IconRegister from '../../assets/img/auth/IconRegister';
import IconSuccess from '../../assets/img/auth/IconSuccess';
import {navigationReset} from '../../config/Navigation/navigatorService';

const ScreenRegisterSuccess = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: Colors.darkBlue}}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
                    <View/>
                    <View>
                        <IconSuccess style={{alignSelf: 'center'}}/>
                        <Text style={styles.title}>
                            Inscription terminée
                        </Text>
                        <Text style={{...ApplicationStyles.sectionText, marginLeft: 16, marginRight: 16}}>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno
                        </Text>
                    </View>
                    <View>
                        <DefaultButton
                            onPress={() => navigationReset(navigation, 'App')}
                            text={'Continuer'}
                            style={{...ApplicationStyles.formButton, marginBottom: 15}}
                            textStyle={{fontFamily: Fonts.type.bold}}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default ScreenRegisterSuccess;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...Fonts.title,
        color: 'white',
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 40,
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        padding: 32,
        backgroundColor: Colors.darkBlue,
    },
    checkBoxLine: {
        ...ApplicationStyles.formCheckBoxText,
        marginLeft: 4,
        color: Colors.green,
    },
});
