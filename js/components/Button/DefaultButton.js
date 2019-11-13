import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {ApplicationStyles, Fonts} from '../../styles';

const TouchableView = ({
    children,
    rippleColor = 'rgba(255, 255, 255, 1)',
    ...props
}) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                background={
                    Platform.Version >= 21
                        ? TouchableNativeFeedback.Ripple(rippleColor, false)
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

const DefaultButton = props => {
    const rippleColor = props.rippleColor
        ? props.rippleColor
        : 'rgba(255, 255, 255, 1)';

    return (
        <TouchableView onPress={props.onPress} rippleColor={rippleColor}>
            <View style={props.style ? [styles.main, props.style] : styles.main}>
                {props.icon && props.icon}
                {props.text ? (
                    <Text style={props.textStyle ? [styles.text, props.textStyle] : styles.text}>{props.text}</Text>
                ) : (
                    props.children
                )}
            </View>
        </TouchableView>
    );
};

DefaultButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string,
    rippleColor: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    icon: PropTypes.object
};

const styles = StyleSheet.create({
    ...ApplicationStyles,
    main: {
        flexDirection: 'row',
        padding: 15,
        margin: 5,
        marginBottom: 0,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        ...Fonts.button,
        fontSize: 16,
        color: 'white',
    },
});

export default DefaultButton;
