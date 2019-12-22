import React, {useState} from 'react';
import {Platform, Text, TextInput, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    error?: any;
    children?: any;
    filled: boolean;
    textInputProps?: any;
    label: string;
    iconName?: string;
    style?: any;
    left?: React.ReactElement;
    right?: React.ReactElement;
};

export default function FormField({error, children, filled, ...props}: Props) {
    const [focused, setFocused] = useState(false);

    const onBlur = () => {
        setFocused(false);
        if (props.textInputProps && props.textInputProps.onBlur)
            props.textInputProps.onBlur();
    };

    const onFocus = () => {
        setFocused(true);
        if (props.textInputProps && props.textInputProps.onFocus)
            props.textInputProps.onFocus();
    };

    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.fieldContainer, error && styles.error, (!error && filled) && styles.success]}>
                {!children ? (
                    <React.Fragment>
                        {props.left && props.left}
                        <View style={styles.inputContainer}>
                            {(props.label) && (
                                <Text
                                    style={[styles.label, (filled || focused) && styles.labelFocused]}>{props.label}</Text>
                            )}
                            <TextInput
                                blurOnSubmit
                                style={styles.input}
                                {...props.textInputProps}
                                onFocus={onFocus}
                                onBlur={onBlur}
                            />
                        </View>
                        {(!props.right && props.iconName) ? (
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
    success: {
        color: Colors.green,
        borderBottomColor: Colors.green,
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
