import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {ApplicationStyles, Colors, Fonts} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableView from '../Button/TouchableView';
import SportSliderItem from './SportSliderItem';

function SportSlider({navigation, onSelect, ...props}) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row', marginVertical: 16, marginLeft: 9}}>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>} selected/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.row,
    },
});

SportSlider.defaultProps = {
    style: {},
};

SportSlider.propTypes = {
    onSelect: PropTypes.func,
};

export default SportSlider;
