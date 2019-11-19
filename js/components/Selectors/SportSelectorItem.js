import {Text, View} from 'react-native';
import TouchableView from '../Button/TouchableView';
import {Colors, Fonts} from '../../styles';
import React from 'react';

export default function SportSelectorItem({name, icon, selected}) {
    return (
        <View style={{marginRight: 8, alignItems: 'center', opacity: selected ? 1 : 0.32}}>
            <TouchableView rippleColor={Colors.darkBlue}>
                <View style={[styles.iconContainer, selected && {backgroundColor: Colors.green}]}>
                    {icon}
                </View>
            </TouchableView>
            <Text style={[styles.text, selected && {fontFamily: Fonts.type.AvenirB}]}>{name}</Text>
        </View>
    );
};

const styles = {
    iconContainer: {
        backgroundColor: 'white',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 9,
    },
    text: {
        color: 'white',
        fontFamily: Fonts.type.Avenir,
        lineHeight: 16,
        fontSize: 11,
    },
};
