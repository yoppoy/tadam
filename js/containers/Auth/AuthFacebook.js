//@flow
import React, {useState} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthFacebook = ({callback}) => {
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
            <TouchableNativeFeedback
                onPress={requestLoginPermission}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View>
                    <Text style={{padding: 10}}>Facebook Login</Text>
                    {state.error && <Text>Error : {state.error}</Text>}
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};
