import React from 'react';
import FormCheckBox from './FormCheckBox';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../styles';
import {PropTypes} from 'prop-types';

export default function FormCheckboxLine({children, onPress, checked, style, ...props}) {
    return (
        <View style={[styles.container, style]}>
            <FormCheckBox checked={checked} onPress={onPress} style={{margin: 5, marginRight: 12}}/>
            <TouchableOpacity onPress={onPress}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    {children}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 2,
    },
});

FormCheckboxLine.defaultProps = {
    style: {},
    checked: false,
};

FormCheckboxLine.propTypes = {
    onPress: PropTypes.func,
    checked: PropTypes.bool,
};
