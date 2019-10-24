//@flow
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Config from 'react-native-config';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
});

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
            console.log('User info : ', userInfo);
            callback(userInfo);
        } catch (error) {
            console.log(JSON.stringify(error));
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
