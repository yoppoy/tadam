import React, {useState} from 'react';
import {Platform, Picker, View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';

type Props = {
    onValueChange: (value: any) => void;
    error?: any;
    ref: any
};

const FormDropdown = ({onValueChange, error}: Props) => {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.fieldContainer,
                    error && {borderBottomColor: Colors.redError},
                ]}>
                {value !== null && value.length > 0 && (
                    <Text style={styles.label}>Sexe</Text>
                )}
                {Platform.OS === 'android' && (
                    <Picker
                        selectedValue={value}
                        style={{height: 56, marginRight: 3}}
                        onValueChange={value => {
                            setValue(value);
                            onValueChange(value);
                        }}
                        mode="dropdown">
                        <Picker.Item
                            label="Sexe"
                            value=""
                            color={'rgba(255, 255, 255, 0.5)'}
                        />
                        <Picker.Item label="Homme" value="man"/>
                        <Picker.Item label="Femme" value="woman"/>
                    </Picker>
                )}
                {Platform.OS === 'ios' && (
                    <RNPickerSelect
                        onValueChange={value => {
                            setValue(value);
                            onValueChange(value);
                        }}
                        value={value}
                        style={{
                            placeholder: {
                                fontSize: 16,
                                color: '#8B8E96',
                            },
                            inputIOS: {
                                height: 56,
                                fontSize: 16,
                                color: 'white',
                                paddingRight: 30, // to ensure the text is never behind the icon
                            },
                        }}
                        placeholder={{label: 'Sexe', value: ''}}
                        doneText={'Valider'}
                        items={[
                            {label: 'Homme', value: 'man'},
                            {label: 'Femme', value: 'woman'},
                        ]}
                        Icon={() => {
                            return (
                                <Icon
                                    name={'md-arrow-dropdown'}
                                    style={{
                                        padding: 20, fontSize: 20,
                                        color: error
                                            ? Colors.redError
                                            : 'white',
                                    }}
                                />
                            );
                        }}
                    />
                )}
            </View>
            {error}
        </View>
    );
};

type StylesTypes = {
    container: ViewStyle,
    fieldContainer: ViewStyle,
    label: TextStyle,
}

const styles = StyleSheet.create<StylesTypes>({
    container: {
        marginTop: 0,
        marginBottom: 8,
    },
    fieldContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 7,
        height: 56,
    },
    label: {
        fontSize: 10,
        position: 'absolute',
        top: 0,
        left: Platform.OS === 'android' ? 4 : 0,
        color: 'rgba(255, 255, 255,0.5)',
        fontFamily: Fonts.type.base,
    },
});

export default FormDropdown;
