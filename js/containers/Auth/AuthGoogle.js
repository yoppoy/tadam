//@flow
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
} from '@react-native-community/google-signin';

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
            setState({
                ...state,
                error: `${error.message}, code: ${error.code}`,
            });
        }
    };

    return (
        <React.Fragment>
            <View>
                <GoogleSigninButton
                    style={{width: 192, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={requestLoginPermission}
                    disabled={state.isSigninInProgress}
                />
                {state.error && <Text>Error : {state.error}</Text>}
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
