import React, {useState} from 'react';
import FormCheckBox from './FormCheckBox';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

type Props = {
    children: React.ReactElement;
    onPress: (checked: boolean) => void;
    style?: any;
    color?: string;
    ref: any;
};

export default function FormCheckboxLine({children, onPress, style, ...props}: Props) {
    const [checked, setChecked] = useState<boolean>(false);

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
