import React, {useState, useEffect} from 'react';
import {Platform, Text, TextInput, View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';

export default function FormField({error, children, ...props}) {
    const [focused, setFocused] = useState(false);

    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.fieldContainer, error && styles.error]}>
                {!children ? (
                    <React.Fragment>
                        {props.left && props.left}
                        <View style={styles.inputContainer}>
                            {(props.label) && (
                                <Text style={[styles.label, (props.filled || focused) && styles.labelFocused]}>{props.label}</Text>
                            )}
                            <TextInput
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                blurOnSubmit
                                style={styles.input}
                                {...props.textInputProps}
                            />
                        </View>
                        {!props.right ? (
                            <Icon name={props.iconName} style={[styles.icon, error && styles.error]}/>
                        ) : (
                            props.right
                        )}
                    </React.Fragment>
                ) : (
                    children
                )}
            </View>
            {error}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginTop: 0,
        marginBottom: 8
    },
    fieldContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 7,
        height: 56,
    },
    error: {
        color: Colors.redError,
        borderBottomColor: Colors.redError,
    },
    inputContainer: {
        flex: 1,
        flexGrow: 1,
    },
    input: {
        fontSize: 15,
        height: 56,
        color: 'white',
        fontFamily: Fonts.type.base,
        borderWidth: 0,
    },
    icon: {
        padding: 20,
        fontSize: 20,
        color: 'white',
    },
    label: {
        position: 'absolute',
        fontSize: 15,
        top: Platform.OS === 'android' ? 15 : 18,
        left: Platform.OS === 'android' ? 3 : 0,
        color: 'rgba(255, 255, 255,0.5)',
        fontFamily: Fonts.type.base,
    },
    labelFocused: {
        fontSize: 10,
        left: Platform.OS === 'android' ? 4 : 0,
        top: 0,
    },
});

FormField.defaultProps = {
    textInputProps: {},
    style: {},
};

FormField.propTypes = {
    filled: PropTypes.boolean,
    textInputProps: PropTypes.object,
    label: PropTypes.string,
    iconName: PropTypes.string,
    style: PropTypes.object,
    left: PropTypes.object,
    right: PropTypes.object,
};

/* WITH ANIMATION :
const animatedFocused = new Animated.Value(focused ? 0 : 1);
    console.log(props);
    useEffect(() => {
        Animated.timing(animatedFocused, {
            toValue: focused ? 1 : 0,
            duration: 100,
        }).start();
    });

    const labelStyle = {
        top: animatedFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [Platform.OS === 'android' ? 15 : 18, 0],
        }),
        left: animatedFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [3, 4],
        }),
        fontSize: animatedFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 10],
        }),
        color: animatedFocused.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(255, 255, 255,0.5)', 'rgba(255, 255, 255,0.4)'],
        }),
    };*/
