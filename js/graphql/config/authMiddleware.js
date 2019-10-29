import AsyncStorage from '@react-native-community/async-storage';
import {ApolloLink} from 'apollo-link';
import React from 'react';

const authMiddleware = new ApolloLink(async (operation, forward) => {
    try {
        const token = await AsyncStorage.getItem('token');

        operation.setContext({
            headers: {
                authorization: token || null,
            },
        });
    } catch (error) {
        console.error('Auth Middleware :', JSON.stringify(error));
    }
    return forward(operation);
});

export default authMiddleware;
