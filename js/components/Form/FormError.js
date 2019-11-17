import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';

export default function FormError({title, style, customIcon, ...props}) {
    return (
        <View style={[styles.container, style]}>
            {!customIcon ? <Icon name={'md-alert'} style={styles.icon}/> : customIcon}
            <Text style={styles.error}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    error: {
        color: Colors.redError,
        fontFamily: Fonts.type.base,
        fontSize: 14,
    },
    icon: {
        margin: 4,
        marginRight: 8,
        fontSize: 15,
        color: Colors.redError,
    },
});

FormError.defaultProps = {
    style: {},
    textInputProps: {},
};

FormError.propTypes = {
    textInputProps: PropTypes.object,
    iconName: PropTypes.string,
    customIcon: PropTypes.object,
};
