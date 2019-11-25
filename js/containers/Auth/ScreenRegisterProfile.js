import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {useMutation} from '@apollo/react-hooks';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import {CREATE_USER} from '../../graphql/User';
import GraphqlError from '../../components/Error/GraphqlError';
import {Index, Colors, Fonts} from '../../styles';
import FormError from '../../components/Form/FormError';
import FormField from '../../components/Form/FormField';
import FormPrefix from '../../components/Form/FormPrefix';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableView from '../../components/Button/TouchableView';
import {DefaultButton} from '../../components/Button';
import FormCheckboxLine from '../../components/Form/FormCheckboxLine';
import FormDropdown from '../../components/Form/FormDropdown';
import Header from '../../components/Navigation/Header';

const RegisterSchema = yup.object().shape({
    pseudo: yup.string().min(1).max(128).required(),
    firstname: yup.string().min(1).max(128).required(),
    lastname: yup.string().min(1).max(128).required(),
    age: yup.number().min(18).max(90).required(),
    sex: yup.string().required(),
    password: yup.string().min(6).max(128).required(),
    validated: yup.boolean().oneOf([true]).required('Veuillez Valider les conditions générales'),
    /*phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),*/
});


const ScreenRegisterProfile = ({navigation}) => {
    const {register, setValue, handleSubmit, errors, triggerValidation} = useForm({
        validationSchema: RegisterSchema,
        submitFocusError: true,
    });
    const [state, setState] = useState({
        filledFields: {},
        passwordVisible: false,
    });
    const [createUser, {loading, error}] = useMutation(CREATE_USER);

    const onSubmit = async formData => {
        try {
            navigation.navigate('RegisterSuccess');
        } catch (err) {
            console.log(err);
        }
    };

    const onChangeValue = (value, name) => {
        let tmp = {};
        tmp[name] = value.length > 0;
        setState({
            ...state,
            filledFields: {...state.filledFields, ...tmp},
        });
        setValue(name, value, false);
    };

    const createTextInputProps = (name, additionalProps = {}) => {
        return ({
            ref: register({name: name}),
            onChangeText: text => onChangeValue(text, name),
            onBlur: () => triggerValidation({name: name}),
            ...additionalProps,
        });
    };

    const onVerify = events => {
        handleSubmit(onSubmit)(events);
    };

    return (
        <View style={{flex: 1, backgroundColor: Colors.darkBlue}}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
                    <View>
                        <Header/>
                        <Text style={styles.title}>
                            Inscription
                        </Text>
                    </View>
                    <View>
                        <FormField
                            label={'Pseudo'}
                            filled={state.filledFields['pseudo']}
                            textInputProps={createTextInputProps('pseudo', {textContentType: 'username'})}
                            left={<FormPrefix>@</FormPrefix>}
                            error={errors.pseudo && <FormError title={errors.pseudo.message}/>}
                            iconName={'md-person'}/>
                        <FormField
                            label={'Prénom'}
                            filled={state.filledFields['firstname']}
                            textInputProps={createTextInputProps('firstname', {textContentType: 'name'})}
                            error={errors.firstname && <FormError title={errors.firstname.message}/>}
                            iconName={'md-person'}
                        />
                        <FormField
                            label={'Nom'}
                            filled={state.filledFields['lastname']}
                            textInputProps={createTextInputProps('lastname', {textContentType: 'familyName'})}
                            error={errors.lastname && <FormError title={errors.lastname.message}/>}
                            iconName={'md-person'}
                        />
                        <FormField
                            label={'Age'}
                            filled={state.filledFields['age']}
                            textInputProps={createTextInputProps('age', {keyboardType: 'number-pad'})}
                            iconName={'md-person'}
                            error={errors.age && <FormError title={errors.age.message}/>}/>
                        <FormDropdown
                            ref={register({name: 'sex'})}
                            onValueChange={value => {
                                onChangeValue(value, 'sex');
                                triggerValidation({name: 'sex'});
                            }}
                            error={errors.sex && <FormError title={errors.sex.message}/>}
                        />
                        <FormField
                            label={'Mot de passe'}
                            filled={state.filledFields['password']}
                            textInputProps={createTextInputProps('password', {
                                returnKeyType: 'go',
                                onSubmitEditing: onVerify,
                                secureTextEntry: !state.passwordVisible,
                                autoCorrect: false,
                                autoCapitalize: 'none',
                            })}
                            right={
                                <TouchableView
                                    onPress={() => setState({...state, passwordVisible: !state.passwordVisible})}>
                                    <Icon
                                        name={state.passwordVisible ? 'md-eye' : 'md-eye-off'}
                                        style={Index.formIcon}/>
                                </TouchableView>}
                            error={errors.password && <FormError title={errors.password.message}/>}
                        />
                        <FormCheckboxLine
                            onPress={(checked) => {
                                setValue('validated', checked, false);
                                triggerValidation({name: 'validated'});
                            }}
                            ref={register({name: 'validated'})}
                            color={errors.validated ? Colors.redError : null}>
                            <Text
                                style={[Index.formCheckBoxText, errors.validated && {color: Colors.redError}]}>
                                J’accèpte les
                            </Text>
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
                        style={{...Index.formButton, marginBottom: 25}}
                        textStyle={{fontFamily: Fonts.type.bold}}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default ScreenRegisterProfile;

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
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: Colors.darkBlue,
    },
    checkBoxLine: {
        ...Index.formCheckBoxText,
        marginLeft: 4,
        color: Colors.green,
    },
});
