import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Alert, StyleSheet} from 'react-native';
import {LoginManager, AccessToken, GraphRequest, GraphRequestManager, GraphRequestCallback} from 'react-native-fbsdk';
import {DefaultButton} from '../../components/Button';
import AuthActions, {connectionTypes} from '../../redux/auth-reducer';
import {useDispatch, useSelector} from 'react-redux';
import formatError from '../../config/constants/networkErrors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Index} from '../../styles';
import {navigationReset} from '../../config/Navigation/navigatorService';

type AuthFacebookProps = {
    type?: 'signup' | 'login';
};

export default function AuthFacebook({type = 'signup'}: AuthFacebookProps) {
    const navigation = useNavigation();
    const api = useSelector((state: any) => state.auth.api);
    const dispatch = useDispatch();

    const requestProfileInfo = (callback: GraphRequestCallback) => {
        let profileRequest = new GraphRequest(
            '/me',
            {
                httpMethod: 'GET',
                version: 'v2.5',
                parameters: {
                    fields: {
                        string: 'email,first_name,last_name,gender',
                    },
                },
            },
            (err, res) => callback(err, res),
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };

    const onSignup = async (data: AccessToken) => {
        let request;

        try {
            request = await api.signUpFacebook(data.accessToken.toString());
            if (!request.error) {
                dispatch(AuthActions.onConnected(connectionTypes.FACEBOOK, request.data.token));
                requestProfileInfo((err, res) => {
                    if (res) {
                        console.log(res);
                        navigation.navigate('Register');
                    } else {
                        navigation.navigate('Register');
                    }
                });
            } else if (request.status === 409) {
                return await onLogin(data);
            } else {
                Alert.alert('Erreur Facebook', formatError(request, 'auth'));
            }
        } catch (e) {
            console.log(e);
            Alert.alert('Erreur Facebook', 'Une erreur est survenue');
        }
    };

    const onLogin = async (data: AccessToken) => {
        let request;

        try {
            request = await api.loginFacebook(data.accessToken.toString());
            if (!request.error) {
                console.log(request.data);
                dispatch(AuthActions.onConnected(connectionTypes.FACEBOOK, request.data.token));
                navigationReset(navigation, 'App');
            } else {
                Alert.alert('Erreur Facebook', formatError(request, 'auth'));
            }
        } catch (e) {
            Alert.alert('Erreur Facebook', 'Une erreur est survenue');
        }
    };

    const requestLoginPermission = async () => {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            async result => {
                if (!result.isCancelled) {
                    const data = await AccessToken.getCurrentAccessToken();

                    if (!data) {
                        Alert.alert('Erreur Facebook', 'La génération de token a échouée');
                    } else if (type === 'signup') {
                        await onSignup(data);
                    } else if (type === 'login') {
                        await onLogin(data);
                    }
                }
            },
            error => {
                Alert.alert('Erreur de connexion', JSON.stringify(error));
            },
        );
    };

    return (
        <View>
            <DefaultButton
                onPress={requestLoginPermission}
                text={'Continuer avec Facebook'}
                style={styles.AuthButton}
                icon={<Icon name={'logo-facebook'} style={styles.buttonIcon}/>}
                textStyle={{alignSelf: 'flex-start'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ...Index,
    AuthButton: {
        backgroundColor: '#3B5999',
        margin: 0,
        marginBottom: 12,
    },
} as any);
