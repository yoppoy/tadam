//@flow
import React, {useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {DefaultButton} from '../../components/Button';

const AuthFacebook = ({callback}) => {
    const [state, setState] = useState({error: null});

    const requestLoginPermission = async () => {
        setState({error: null});
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            async result => {
                if (!result.isCancelled) {
                    const data = await AccessToken.getCurrentAccessToken();

                    if (!data) {
                        setState({error: 'Access token retrieval failed'});
                    } else if (callback) {
                        await callback(data.accessToken.toString());
                    }
                }
            },
            error => setState({error}),
        );
    };

    return (
        <View>
            <DefaultButton
                onPress={requestLoginPermission}
                text={'Facebook Login'}
                style={{backgroundColor: '#3b5998'}}/>
            {state.error && <Text>Error : {state.error}</Text>}
        </View>
    );
};

export const AuthFacebookVerifyLogin = async callback => {
    try {
        console.log('Facebook : verifying login');
        const data = await AccessToken.getCurrentAccessToken();
        callback(data, null);
    } catch (error) {
        callback(null, error);
    }
};

export default AuthFacebook;
