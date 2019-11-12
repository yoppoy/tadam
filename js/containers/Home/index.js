import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileSlider from '../../components/ProfileSlider';
import {ApplicationStyles} from '../../styles';

export default function Index() {
    return (
        <View style={styles.centerAlign}>
            <ProfileSlider/>
        </View>
    );
}


const styles = StyleSheet.create({
    ...ApplicationStyles,
});
