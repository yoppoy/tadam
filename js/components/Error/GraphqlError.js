import React from 'react';
import appConfig from '../../config/appConfig';
import {Text} from 'react-native';

const GraphqlError = (error, ...props) => {
    if (error && error.error) {
        const debugError = JSON.stringify(error);
        const message = appConfig.debugErrorMessages ? debugError : error.error.message;

        return (
            <Text {...props}>{message}</Text>
        );
    }
    return <React.Fragment/>;
};

export default GraphqlError;
