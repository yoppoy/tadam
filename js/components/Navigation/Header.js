import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts} from '../../styles';

const Header = ({navigation, style, left, right, title, ...props}) => {
    return (
        <View style={[styles.header, style]} {...props}>
            <View style={{width: 50, paddingLeft: 5}}>
                {left && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                        <View style={{alignSelf: 'flex-start'}}>
                            <Icon name={'ios-arrow-back'} style={styles.headerIcon}/>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
            <View>
                {title && (
                    <Text style={styles.headerText}>{title}</Text>
                )}
            </View>
            <View style={{width: 50}}>
                {right && (
                    <TouchableOpacity
                        onPress={() => console.log('hey')}
                        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                        <View style={{alignSelf: 'center'}}>
                            <Icon name={'ios-search'} style={styles.headerIcon}/>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

Header.defaultProps = {
    left: true,
    right: false,
    style: {},
};

Header.propTypes = {};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    headerIcon: {
        color: 'white',
        fontSize: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontFamily: Fonts.type.AvenirB,
        letterSpacing: 0.36,
    },
});

export default withNavigation(Header);
