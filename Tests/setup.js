import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import {NativeModules as RNNativeModules, Linking} from 'react-native';

RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
    State: {BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END'},
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),

};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
    forceTouchAvailable: false,
};

jest.mock('react-native/Libraries/Linking/Linking', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
    };
});
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-reanimated', () => {

    const {View} = require('react-native');
    return {
        Value: jest.fn(),
        event: jest.fn(),
        add: jest.fn(),
        eq: jest.fn(),
        set: jest.fn(),
        cond: jest.fn(),
        interpolate: jest.fn(),
        View,
        Extrapolate: {CLAMP: jest.fn()},
        Transition: {
            Together: 'Together',
            Out: 'Out',
            In: 'In',
        },
        Easing: {
            in: jest.fn(),
            out: jest.fn(),
            inOut: jest.fn(),
        },
    };
});
jest.mock('@react-native-community/google-signin', () => {});
