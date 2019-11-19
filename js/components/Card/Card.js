import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dash from 'react-native-dash';
import {ApplicationStyles} from '../../styles';

export default function Card({children, ...props}) {
    return (
        <View style={styles.card}>
            { children }
        </View>
    );
}

Card.defaultProps = {};

Card.propTypes = {};


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 8,
        elevation: 5,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,

    },
});
