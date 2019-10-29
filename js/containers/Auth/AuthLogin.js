import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import useForm from 'react-hook-form';
import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const AuthLogin = () => {
    const {register, setValue, handleSubmit, errors} = useForm({
        validationSchema: LoginSchema,
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
            <Button title="Se connecter" disabled={state.submitting} onPress={onVerify}/>
        </View>
    );
};

export default AuthLogin;

const styles = StyleSheet.create({
    container: {},
});
