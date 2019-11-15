import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {useMutation} from '@apollo/react-hooks';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import {CREATE_USER} from '../../graphql/User';
import GraphqlError from '../../components/Error/GraphqlError';
import {ApplicationStyles, Colors, Fonts} from '../../styles';
import FormError from '../../components/Form/FormError';
import FormField from '../../components/Form/FormField';
import FormPrefix from '../../components/Form/FormPrefix';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableView from '../../components/Button/TouchableView';
import {DefaultButton} from '../../components/Button';
import FormCheckboxLine from '../../components/Form/FormCheckboxLine';

const RegisterSchema = yup.object().shape({
    pseudo: yup.string().min(1).max(128).required(),
    firstname: yup.string().min(1).max(128).required(),
    lastname: yup.string().min(1).max(128).required(),
    email: yup.string().email().required(),
    age: yup.number().min(18).max(90).required(),
    password: yup.string().min(6).max(128).required(),
    /*phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
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
        conditionsValidated: false,
        filledFields: {},
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
        <View style={{flex: 1, backgroundColor: Colors.darkBlue}}>
            <SafeAreaView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}
                            contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
                    <View>
                        <Text style={styles.title}>
                            Inscription
                        </Text>
                    </View>
                    <View>
                        <FormField
                            label={'Pseudo'}
                            filled={state.filledFields['pseudo']}
                            textInputProps={{
                                ref: register({name: 'pseudo'}),
                                onChangeText: (text) => {
                                    setValue('pseudo', text, false);
                                    setState({
                                        ...state,
                                        filledFields: {...state.filledFields, 'pseudo': text.length > 0},
                                    });
                                },
                                textContentType: 'familyName',
                            }}
                            left={<FormPrefix>@</FormPrefix>}
                            error={errors.pseudo && <FormError title={errors.pseudo.message}/>}
                            iconName={'md-person'}/>
                        <FormField
                            label={'Prénom'}
                            filled={state.filledFields['firstname']}
                            textInputProps={{
                                autoCompleteType: 'name',
                                ref: register({name: 'firstname'}),
                                onChangeText: (text) => {
                                    setValue('firstname', text, false);
                                    setState({
                                        ...state,
                                        filledFields: {...state.filledFields, 'firstname': text.length > 0},
                                    });
                                },
                                textContentType: 'familyName',
                            }}
                            error={errors.firstname && <FormError title={errors.firstname.message}/>}
                            iconName={'md-person'}
                        />
                        <FormField
                            label={'Nom'}
                            filled={state.filledFields['lastname']}
                            textInputProps={{
                                autoCompleteType: 'name',
                                ref: register({name: 'lastname'}),
                                onChangeText: (text) => {
                                    setValue('lastname', text, false);
                                    setState({
                                        ...state,
                                        filledFields: {...state.filledFields, 'lastname': text.length > 0},
                                    });
                                },
                                textContentType: 'familyName',
                            }}
                            error={errors.lastname && <FormError title={errors.lastname.message}/>}
                            iconName={'md-person'}
                        />
                        <FormField
                            label={'Age'}
                            textInputProps={{
                                ref: register({name: 'age'}),
                                keyboardType: 'number-pad',
                                onChangeText: (text) => {
                                    setValue('age', text, false);
                                    setState({
                                        ...state,
                                        filledFields: {...state.filledFields, 'age': text.length > 0},
                                    });
                                },
                                textContentType: 'familyName',
                            }}
                            error={errors.age && <FormError title={errors.age.message}/>}/>
                        <FormField label={'Sexe'}/>
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
                                onSubmitEditing: onVerify,
                            }}
                            right={
                                <TouchableView
                                    onPress={() => setState({...state, passwordVisible: !state.passwordVisible})}>
                                    <Icon
                                        name={state.passwordVisible ? 'md-eye-off' : 'md-eye'}
                                        style={ApplicationStyles.formIcon}/>
                                </TouchableView>}
                            error={errors.password && <FormError title={errors.password.message}/>}
                        />
                        <FormCheckboxLine
                            onPress={() => setState({...state, conditionsValidated: !state.conditionsValidated})}
                            checked={state.conditionsValidated}>
                            <Text style={ApplicationStyles.formCheckBoxText}>J’accèpte les</Text>
                            <TouchableOpacity onPress={() => console.log('Display terms')}>
                                <Text style={styles.checkBoxLine}>
                                    conditions générales de vente
                                </Text>
                            </TouchableOpacity>
                        </FormCheckboxLine>
                        <GraphqlError error={error}/>
                    </View>
                    <DefaultButton
                        onPress={onVerify}
                        text={'Inscription'}
                        style={{
                            backgroundColor: Colors.green,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 12,
                            margin: 0,
                            marginBottom: 25
                        }}
                        textStyle={{fontFamily: Fonts.type.bold}}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default AuthRegister;

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
        ...ApplicationStyles.formCheckBoxText,
        marginLeft: 4,
        color: Colors.green,
    },
});
