import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    title: string;
    style?: any;
    customIcon?: React.ReactElement;
};

export default function FormError({title, style, customIcon}: Props) {
    return (
        <View style={[styles.container, style]}>
            {!customIcon ? <Icon name={'md-alert'} style={styles.icon}/> : customIcon}
            <Text style={styles.error}>{title}</Text>
        </View>
    );
}

FormError.defaultProps = {
    style: {},
};

type StylesProp = {
    container: ViewStyle;
    error: TextStyle;
    icon: ViewStyle;
};

const styles = StyleSheet.create<StylesProp>({
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
