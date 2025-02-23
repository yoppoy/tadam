//@flow
import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {DefaultButton} from '../../components/Button';
import AuthActions, {connectionTypes} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import formatError from '../../config/constants/networkErrors';
import {navigationReset} from '../../config/Navigation/navigatorService';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import {Index} from '../../styles';

const AuthApple = ({api, onConnected, navigation}) => {
    const [state, setState] = useState({
        passwordVisible: false,
        error: null,
    });

    const onSignup = async data => {
        let request;

        try {
            request = await api.signUpApple(data.accessToken.toString());
            if (!request.error) {
                onConnected(request.data.token);
                navigation.navigate('Register');
            } else if (request.status === 409) {
                return await onLogin(data);
            } else {
                Alert.alert(
                    'Erreur Apple',
                    formatError(request, 'auth'),
                );
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
            request = await api.loginApple(data.accessToken.toString());
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
    };

    return (
        <View>
            <DefaultButton
                onPress={requestLoginPermission}
                text={'Continuer avec Apple'}
                style={styles.AuthButton}
                rippleColor={'#242A37'}
                icon={<Icon name={'logo-apple'} style={{...styles.buttonIcon, color: '#242A37'}}/>}
                textStyle={styles.AuthButtonText}/>
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
        onConnected: token => dispatch(AuthActions.onConnected(connectionTypes.APPLE, token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withNavigation(AuthApple));

const styles = StyleSheet.create({
    ...Index,
    AuthButton: {
        backgroundColor: '#F0F1F5',
        margin: 0,
        marginBottom: 12,
    },
    AuthButtonText: {
        color: '#242A37',
        alignSelf: 'flex-start'
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
