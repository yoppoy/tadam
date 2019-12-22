import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Platform,
    Linking,
} from 'react-native';
import {Index, Colors, Fonts} from '../../styles';
import FormError from '../../components/Form/FormError';
import MailOpener from '../../config/NativeModules/MailOpener';
import {DefaultButton} from '../../components/Button';
import IconRegister from '../../assets/img/auth/IconRegister';

const ScreenRegisterEmailConfirm = () => {
    const [error, setError] = useState(null);

    const onPress = () => {
        setError(null);
        if (Platform.OS === 'android') {
            MailOpener.open();
        } else {
            Linking.canOpenURL('message:')
                .then(supported => {
                    if (!supported) {
                        setError('Une erreur est survenue');
                    } else {
                        return Linking.openURL('message:');
                    }
                })
                .catch(err => {
                    setError(`Une erreur est survenue: ${err.message}`);
                });
        }
    };

    return (
        <View style={{flex: 1, backgroundColor: Colors.darkBlue}}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
                    <View/>
                    <View>
                        <IconRegister style={{alignSelf: 'center'}}/>
                        <Text style={styles.title}>
                            Confirmez votre inscription
                        </Text>
                        <Text style={Index.sectionText}>
                            Nous vous avons envoyé un mail pour valider votre inscription.
                        </Text>
                    </View>
                    <View>
                        {error && <FormError title={error} style={{marginBottom: 10}}/>}
                        <DefaultButton
                            onPress={onPress}
                            text={'Voir mes mails'}
                            style={{...Index.formButton, marginBottom: 15}}
                            textStyle={{fontFamily: Fonts.type.bold}}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default ScreenRegisterEmailConfirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...Fonts.title,
        color: 'white',
        textAlign: 'center',
        marginTop: 22,
        marginBottom: 15,
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        padding: 32,
        backgroundColor: Colors.darkBlue,
    },
    checkBoxLine: {
        ...Index.formCheckBoxText,
        marginLeft: 4,
        color: Colors.green,
    },
});
