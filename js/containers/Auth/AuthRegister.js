import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {useMutation} from '@apollo/react-hooks';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import {CREATE_USER} from '../../graphql/User';
import GraphqlError from '../../components/Error/GraphqlError';
import FormError from '../../components/Error/FormError';

const RegisterSchema = yup.object().shape({
    firstname: yup.string().min(1).max(128).required(),
    lastname: yup.string().min(1).max(128).required(),
    email: yup.string().email().required(),
    /*password: yup.string().min(6).max(128).required(),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    pseudo: yup.string().min(1).max(128).required(),
    age: yup.number().required(),*/
});

const AuthRegister = ({navigation}) => {
    const {register, setValue, handleSubmit, errors} = useForm({
        validationSchema: RegisterSchema,
        submitFocusError: true,
    });
    const [state, setState] = useState({
        displayErrors: false,
        passwordVisible: false,
    });
    const [createUser, {loading, error}] = useMutation(CREATE_USER);

    const onSubmit = async formData => {
        try {
            const result = await createUser({
                variables: {user: {...formData}},
            });
            console.log('Created user : ', result.data.createUser);
            navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: 'App'})],
                }),
            );
        } catch (err) {
            console.log(err);
        }
    };

    const onVerify = events => {
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
            {errors.firstname && <FormError>{errors.firstname.message}</FormError>}
            <TextInput
                autoCompleteType={'name'}
                ref={register({name: 'lastname'})}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue('lastname', text, true)}
                placeholder={'lastname'}
                textContentType={'familyName'}
            />
            {errors.lastname && <FormError>{errors.lastname.message}</FormError>}
            <TextInput
                autoCompleteType={'email'}
                ref={register({name: 'email'})}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue('email', text, true)}
                placeholder={'email'}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
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
            {errors.password && <FormError>{errors.password.message}</FormError>}
            <Button title="Créer mon compte" disabled={loading} onPress={onVerify}/>
            <GraphqlError error={error}/>
        </View>
    );
};

export default AuthRegister;

const styles = StyleSheet.create({
    container: {},
});
