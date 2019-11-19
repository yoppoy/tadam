import React, {useState} from 'react';
import FormCheckBox from './FormCheckBox';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../styles';
import PropTypes from 'prop-types';

export default function FormCheckboxLine({children, onPress, style, ...props}) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={[styles.container, style]}>
            <FormCheckBox
                checked={checked}
                onPress={() => {
                    onPress(!checked);
                    setChecked(!checked);
                }}
                style={[
                    {margin: 5, marginRight: 12},
                    props.color && {
                        color: props.color,
                        borderColor: props.color,
                    },
                ]}/>
            <TouchableOpacity
                onPress={() => {
                    onPress(!checked);
                    setChecked(!checked);
                }}>
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
