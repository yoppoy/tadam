import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {ApplicationStyles, Colors, Fonts} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableView from '../Button/TouchableView';
import SportSelectorItem from './SportSelectorItem';

function SportSelector({navigation, onSelect, ...props}) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row', marginVertical: 16, marginLeft: 9}}>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>} selected/>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSelectorItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.row,
    },
});

SportSelector.defaultProps = {
    style: {},
};

SportSelector.propTypes = {
    onSelect: PropTypes.func,
};

export default SportSelector;
