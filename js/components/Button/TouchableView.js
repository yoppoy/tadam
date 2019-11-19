import React from 'react';
import {Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

export default function TouchableView({children, rippleColor = 'rgba(255, 255, 255, 1)', rippleBorderless = false, ...props}) {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                background={
                    Platform.Version >= 21
                        ? TouchableNativeFeedback.Ripple(rippleColor, rippleBorderless)
                        : TouchableNativeFeedback.SelectableBackground()
                }
                delayPressIn={0}
                {...props}>
                {children}
            </TouchableNativeFeedback>
        );
    }
    return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};
