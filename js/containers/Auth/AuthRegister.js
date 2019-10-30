import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import useForm from 'react-hook-form';
import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
    pseudo: yup.string().min(1).max(128).required(),
    firstname: yup.string().min(1).max(128).required(),
    lastname: yup.string().min(1).max(128).required(),
    age: yup.number().required(),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(128).required(),
});

const AuthRegister = () => {
    const {register, setValue, handleSubmit, errors} = useForm({
        validationSchema: RegisterSchema,
        submitFocusError: true,
    });
    const [state, setState] = useState({
        displayErrors: false,
        passwordVisible: false,
        submitting: false
    });

    const onSubmit = (data) => {
        if (!state.submitting) {
            setState({...state, submitting: true});
            console.log('Submitting :');
            console.log(data);
        }
    };

    const onVerify = (events) => {
        setState({...state, displayErrors: true});
        handleSubmit(onSubmit)(events);
    };

    return (
        <View style={styles.container}>
            <TextInput
                autoCompleteType={'name'}
                ref={register({name: 'firstname'})}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue('firstname', text, true)}
                placeholder={'firstname'}
                textContentType={'familyName'}
            />
            <TextInput
                autoCompleteType={'name'}
                ref={register({name: 'firstname'})}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue('lastname', text, true)}
                placeholder={'lastname'}
                textContentType={'familyName'}
            />
            <TextInput
                autoCompleteType={'email'}
                ref={register({name: 'email'})}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue('email', text, true)}
                placeholder={'email'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
            />
            <TextInput
                returnKeyType='go'
                autoCorrect={false}
                autoCompleteType={'password'}
                ref={register({name: 'password'})}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue('password', text, true)}
                placeholder={'password'}
                keyboardType={state.passwordVisible ? 'visible-password' : 'default'}
                textContentType={'password'}
                onSubmitEditing={onVerify}
                secureTextEntry
            />
            {
                state.displayErrors && Object.keys(errors).map((key) => {
                    return (<Text key={errors[key].message}>{errors[key].message}</Text>);
                })
            }
            <Button title="Créer mon compte" disabled={state.submitting} onPress={onVerify}/>
        </View>
    );
};

export default AuthRegister;

const styles = StyleSheet.create({
    container: {},
});
