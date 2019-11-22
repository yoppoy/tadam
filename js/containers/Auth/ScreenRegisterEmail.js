import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {useMutation} from '@apollo/react-hooks';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import {CREATE_USER} from '../../graphql/User';
import {Index, Colors, Fonts} from '../../styles';
import FormError from '../../components/Form/FormError';
import FormField from '../../components/Form/FormField';
import {DefaultButton} from '../../components/Button';
import FormPrefix from '../../components/Form/FormPrefix';
import TouchableView from '../../components/Button/TouchableView';
import Icon from 'react-native-vector-icons/Ionicons';
import FormCheckboxLine from '../../components/Form/FormCheckboxLine';
import GraphqlError from '../../components/Error/GraphqlError';

const EmailSchema = yup.object().shape({
    email: yup.string().email().required(),
});

const ScreenRegisterEmail = ({navigation}) => {
    const {register, setValue, handleSubmit, errors, triggerValidation} = useForm({
        validationSchema: EmailSchema,
        submitFocusError: true,
    });
    const [state, setState] = useState({
        filledFields: {},
        passwordVisible: false,
        error: null,
    });

    const onSubmit = async formData => {
        try {
            //SEND EMAIL
            navigation.navigate('RegisterEmailConfirm');
            console.log('done');
        } catch (err) {
            console.log(err);
        }
    };

    const onVerify = events => {
        setState({...state, error: null});
        handleSubmit(onSubmit)(events);
    };

    return (
        <View style={{flex: 1, backgroundColor: Colors.darkBlue}}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}
                    contentContainerStyle={{flexGrow: 1}}>
                    <View>
                        <Text style={styles.title}>
                            Votre Email
                        </Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <FormField
                            label={'Email'}
                            filled={state.filledFields['email']}
                            textInputProps={{
                                autoCompleteType: 'email',
                                autoCapitalize: 'none',
                                ref: register({name: 'email'}),
                                onChangeText: (text) => {
                                    setValue('email', text, false);
                                    setState({
                                        ...state,
                                        filledFields: {...state.filledFields, 'email': text.length > 0},
                                    });
                                },
                                onBlur: () => triggerValidation({name: 'email'}),
                                onSubmitEditing: onVerify,
                                textContentType: 'emailAddress',
                            }}
                            error={errors.email && <FormError title={errors.email.message}/>}
                            iconName={'md-mail'}
                        />
                        <FormField
                            label={'Mot de passe'}
                            filled={state.filledFields['password']}
                            textInputProps={{
                                returnKeyType: 'go',
                                autoCorrect: false,
                                autoCapitalize: 'none',
                                autoCompleteType: 'password',
                                ref: register({name: 'password'}),
                                textContentType: 'password',
                                secureTextEntry: !state.passwordVisible,
                                onChangeText: text => {
                                    setValue('password', text, false);
                                    setState({
                                        ...state,
                                        filledFields: {...state.filledFields, 'password': text.length > 0},
                                    });
                                },
                                onBlur: () => triggerValidation({name: 'password'}),
                                onSubmitEditing: onVerify,
                            }}
                            right={
                                <TouchableView
                                    onPress={() => setState({...state, passwordVisible: !state.passwordVisible})}>
                                    <Icon
                                        name={state.passwordVisible ? 'md-eye' : 'md-eye-off'}
                                        style={Index.formIcon}/>
                                </TouchableView>}
                            error={errors.password && <FormError title={errors.password.message}/>}
                        />
                    </View>
                    <View style={{flexGrow: 1}}/>
                    <View>
                        {state.error && <FormError title={state.error} style={{marginBottom: 10}}/>}
                        <DefaultButton
                            onPress={onVerify}
                            text={'Continuer'}
                            style={{...Index.formButton, marginBottom: 25}}
                            textStyle={{fontFamily: Fonts.type.bold}}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default ScreenRegisterEmail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        ...Fonts.title,
        color: 'white',
        flexGrow: 1,
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        padding: 16,
        backgroundColor: Colors.darkBlue,
    },
    checkBoxLine: {
        ...Index.formCheckBoxText,
        marginLeft: 4,
        color: Colors.green,
    },
});
