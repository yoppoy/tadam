import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../styles';
import {useNavigation} from '@react-navigation/native';

const Header = ({style, left, right, title, ...props}) => {
    console.log(props);
    const navigation = useNavigation();
    return (
        <View style={[styles.header, style]} {...props}>
            <View style={{flex: 1}}>
                {title && (
                    <Text style={styles.headerText}>{title}</Text>
                )}
            </View>
            {!left && (
                <View style={{position: 'absolute', left: 0, paddingLeft: 25}}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                        <View style={{alignSelf: 'flex-start'}}>
                            <Icon name={'ios-arrow-back'} style={styles.headerIcon}/>
                        </View>
                    </TouchableOpacity>

                </View>
            )}
            {left && (
                <View style={{position: 'absolute', left: 0}}>
                    {left}
                </View>
            )}
            {right && (
                <View style={{position: 'absolute', right: 0}}>
                    {right}
                </View>
            )}
        </View>
    );
};

Header.defaultProps = {
    style: {},
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: Colors.darkBlue
    },
    headerIcon: {
        color: 'white',
        fontSize: 20,
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Fonts.type.AvenirB,
        letterSpacing: 0.36,
    },
});

export default Header;
