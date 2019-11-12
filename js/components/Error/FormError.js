import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function FormError({children}) {
    return <Text style={styles.error}>{children}</Text>;
}

const styles = StyleSheet.create({
    error: {
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
    },
});
