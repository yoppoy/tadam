import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import HeadLineSliderItem from './HeadLineSliderItem';
import {Images} from '../../styles';

function HeadLineSlider({navigation, onSelect, ...props}) {
    return (
        <ScrollView
            snapToEnd
            snapToAlignment={'end'}
            snapToInterval={138}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.scroller}
            contentContainerStyle={{flexDirection: 'row'}}>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <HeadLineSliderItem teamA={'PSG'} teamB={'Barcelona'} odds={[2.2, 2.3, 2.5]} imageSource={Images.testHeadLine}/>
            <View style={{width: 8}}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroller: {
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        padding: 8,
    },
});

HeadLineSlider.defaultProps = {
    style: {},
};

HeadLineSlider.propTypes = {
    onSelect: PropTypes.func,
};

export default HeadLineSlider;
