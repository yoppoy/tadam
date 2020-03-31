import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {DefaultButton} from '../../components/Button';
import AuthActions, {connectionTypes} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import formatError from '../../config/constants/networkErrors';
import {navigationReset} from '../../config/Navigation/navigatorService';
import Icon from 'react-native-vector-icons/Ionicons';
import {Index} from '../../styles';

const AuthFacebook = ({type = 'signup', api, onConnected}) => {
    const navigation = useNavigation();
    const [state, setState] = useState({
        passwordVisible: false,
        error: null,
    });

    const onSignup = async data => {
        let request;

        try {
            request = await api.signUpFacebook(data.accessToken.toString());
            if (!request.error) {
                onConnected(request.data.token);
                navigation.navigate('Register');
            } else if (request.status === 409) {
                return await onLogin(data);
            } else {
                Alert.alert('Erreur Facebook', formatError(request, 'auth'));
                setState({error: request.error});
            }
        } catch (e) {
            console.log(e);
            setState({...state, requestError: e.message});
        }
    };

    const onLogin = async data => {
        let request;

        try {
            request = await api.loginFacebook(data.accessToken.toString());
            if (!request.error) {
                onConnected(request.data.token);
                navigationReset(navigation, 'App');
            } else {
                Alert.alert('Erreur Facebook', formatError(request, 'auth'));
                setState({requestError: request.error});
            }
        } catch (e) {
            console.log(e);
            setState({...state, requestError: e.message});
        }
    };

    const requestLoginPermission = async () => {
        setState({error: null});
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            async result => {
                if (!result.isCancelled) {
                    const data = await AccessToken.getCurrentAccessToken();

                    if (!data) {
                        Alert.alert(
                            'Erreur Facebook',
                            'La génération de token a échouée',
                        );
                        setState({error: 'Access token retrieval failed'});
                    } else if (type === 'signup') {
                        await onSignup(data);
                    } else if (type === 'login') {
                        await onLogin(data);
                    }
                }
            },
            error => {
                Alert.alert('Erreur de connexion', JSON.stringify(error));
                setState({error});
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
                textStyle={{alignSelf: 'flex-start'}}/>
            {state.error && <Text>Error : {state.error}</Text>}
        </View>
    );
};

const mapStateToProps = state => {
    return {
        api: state.auth.api,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onConnected: token => dispatch(AuthActions.onConnected(connectionTypes.FACEBOOK, token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthFacebook);

const styles = StyleSheet.create({
    ...Index,
    AuthButton: {
        backgroundColor: '#3B5999',
        margin: 0,
        marginBottom: 12,
    },
});

export const AuthFacebookVerifyLogin = async callback => {
    try {
        console.log('Facebook : verifying login');
        const data = await AccessToken.getCurrentAccessToken();
        callback(data, null);
    } catch (error) {
        callback(null, error);
    }
};
