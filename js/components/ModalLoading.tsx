import React from 'react';
import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import {Animations} from '../styles';

type Props = {
    message?: string;
};

export default function ModalLoading({message}: Props) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
            <LottieView source={Animations.loadingCircle} autoPlay loop style={{height: 100}}/>
            {message && (
                <Text>{message}</Text>
            )}
        </View>
    );
};
