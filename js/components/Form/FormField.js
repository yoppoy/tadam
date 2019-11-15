import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../../styles';

export default function FormField({textInputProps, children, ...props}) {
    return (
        <View style={styles.container}>
            {!children ? (
                <React.Fragment>
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(255, 255, 255,0.5)'}
                        style={styles.input}
                        {...textInputProps} />
                    <Icon name={'logo-google'} style={styles.icon}/>
                </React.Fragment>
            ) : (
                children
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        height: 56,
        margin: 16,
    },
    input: {
        flex: 1,
        flexGrow: 1,
        fontSize: 15,
        height: 56,
        color: 'white',
        fontFamily: Fonts.type.base,
    },
    icon: {
        padding: 20,
        fontSize: 20,
        color: 'white',
    },
});

FormField.defaultProps = {
    textInputProps: {},
};
