//@flow
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
} from '@react-native-community/google-signin';
import {DefaultButton} from '../../components/Button';

const CANCELLED_ERROR = '12501';

const AuthGoogle = ({callback}) => {
    const [state, setState] = useState({
        error: null,
        isSigninInProgress: false,
    });

    const requestLoginPermission = async () => {
        setState({...state, isSigninInProgress: true, error: null});
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.configure();
            const userInfo = await GoogleSignin.signIn();
            callback(userInfo);
        } catch (error) {
            if (error.code !== CANCELLED_ERROR) {
                setState({
                    ...state,
                    error: `${error.message}, code: ${error.code}`,
                });
            }
        }
    };

    return (
        <React.Fragment>
            <View>
                <DefaultButton
                    text={'Continuer avec Google'}
                    style={{backgroundColor: '#DD4B39', margin: 0, marginBottom: 12}}
                    textStyle={{alignSelf: 'flex-start'}}
                    onPress={requestLoginPermission}
                    disabled={state.isSigninInProgress}/>
                {state.error && <Text style={{alignSelf: 'center'}}>Erreur : {state.error}</Text>}
            </View>
        </React.Fragment>
    );
};

export const AuthGoogleVerifyLogin = async callback => {
    try {
        await GoogleSignin.configure();
        const userInfo = await GoogleSignin.signInSilently();
        callback(userInfo, null);
    } catch (error) {
        callback(null, error);
    }
};

export default AuthGoogle;
