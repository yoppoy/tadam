import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {Index, Colors, Fonts} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableView from '../Button/TouchableView';
import SportSliderItem from './SportSliderItem';

function SportSlider({navigation, onSelect, ...props}) {
    return (
        <ScrollView
            snapToEnd
            snapToAlignment={'end'}
            snapToInterval={80}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row', marginBottom: 16, marginTop: 4, marginLeft: 9}}>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>} selected/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
            <SportSliderItem name={'Football'} icon={<Icon name='md-baseball' style={{fontSize: 32}}/>}/>
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
        ...Index.row,
    },
});

SportSlider.defaultProps = {
    style: {},
};

SportSlider.propTypes = {
    onSelect: PropTypes.func,
};

export default SportSlider;
