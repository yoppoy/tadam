import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView, TextInput, Button} from 'react-native';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import FormError from '../../components/Error/FormError';
import AuthActions, {connectionTypes} from '../../redux/auth-reducer';
import formatError from '../../config/constants/networkErrors';

yup.setLocale({
    mixed: {
        required: 'Veuillez remplir ce champ',
    },
    string: {
        email: 'Adresse mail invalide',
        min: 'Un minimum de ${min} charactères sont requis',
        max: 'Ce champ est limité à ${max} charactères',
    },
});

const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const AuthLogin = ({api, onConnected, onSuccess}) => {
    const {register, setValue, handleSubmit, errors} = useForm({
        validationSchema: LoginSchema,
        submitFocusError: true,
    });
    const [state, setState] = useState({
        displayErrors: false,
        passwordVisible: false,
        submitting: false,
        requestError: null,
    });

    const onSubmit = async data => {
        let request;

        if (!state.submitting) {
            setState({...state, submitting: true});
            try {
                request = await api.loginLocal(data.email, data.password);
                if (!request.error) {
                    onConnected(request.data.token);
                    onSuccess();
                } else {
                    setState({requestError: formatError(request, 'auth')});
                }
            } catch (e) {
                console.log(e);
                setState({...state, requestError: e.message});
            }
        }
    };

    const onVerify = async events => {
        setState({...state, displayErrors: true, requestError: null});
        handleSubmit(onSubmit)(events);
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    autoCapitalize={'none'}
                    autoCompleteType={'email'}
                    ref={register({name: 'email'})}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => setValue('email', text, true)}
                    placeholder={'email'}
                    keyboardType={'email-address'}
                    textContentType={'username'}
                />
                {state.displayErrors && errors.email && (
                    <FormError>{errors.email.message}</FormError>
                )}
                <TextInput
                    returnKeyType="go"
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
                {state.displayErrors && errors.password && (
                    <FormError>{errors.password.message}</FormError>
                )}
                {state.requestError && <FormError>{state.requestError}</FormError>}
                <Button title="Se connecter" disabled={state.submitting} onPress={onVerify}/>
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    return {
        api: state.auth.api,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onConnected: token => dispatch(AuthActions.onConnected(connectionTypes.DEFAULT, token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthLogin);

const styles = StyleSheet.create({
    container: {},
});
