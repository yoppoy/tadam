//@flow
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Config from 'react-native-config';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure();

export const AuthGoogle = ({callback}) => {
    const [state, setState] = useState({
        error: null,
        isSigninInProgress: false,
    });

    const requestLoginPermission = async () => {
        setState({...state, isSigninInProgress: true, error: null});
        try {
            await GoogleSignin.hasPlayServices();
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
    );
};
