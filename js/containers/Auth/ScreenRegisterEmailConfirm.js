import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import useForm from 'react-hook-form';
import {ApplicationStyles, Colors, Fonts} from '../../styles';
import FormError from '../../components/Form/FormError';
import FormField from '../../components/Form/FormField';
import {DefaultButton} from '../../components/Button';
import IconRegister from '../../assets/img/auth/IconRegister';

const ScreenRegisterEmailConfirm = ({navigation}) => {

    const onPress = () => {

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
                        <Text style={ApplicationStyles.sectionText}>
                            Nous vous avons envoyé un mail pour valider votre inscription.
                        </Text>
                    </View>
                    <View>
                        <DefaultButton
                            onPress={onPress}
                            text={'Voir mes mails'}
                            style={{...ApplicationStyles.formButton, marginBottom: 15}}
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
        marginBottom: 15
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
