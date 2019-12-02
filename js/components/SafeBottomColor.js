import React from 'react';
import {Platform, View} from 'react-native';
import {Colors} from '../styles';

export default function SafeBottomColor({color = Colors.grey, style = {}, ...props}) {
    return (
        <React.Fragment>
            {Platform.OS === 'ios' && (
                <View
                    style={{
                        backgroundColor: color,
                        height: 500,
                        position: 'absolute',
                        bottom: -500,
                        left: 0,
                        right: 0,
                        ...style,
                    }}
                    {...props}
                />
            )}
        </React.Fragment>
    );
}
