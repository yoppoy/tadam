import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Images} from '../../styles';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import TouchableView from '../Button/TouchableView';
import OddsGrid from '../Card/OddsGrid';

function HeadLineSliderItem({teamA, teamB, odds, imageSource, ...props}) {
    return (
        <TouchableView rippleColor={Colors.grey} rippleBorderless={false} useForeground>
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={imageSource}
                />
                <LinearGradient
                    colors={[Colors.darkBlue, 'rgba(255, 255, 255, 0)']}
                    style={styles.topGradient}/>
                <View style={styles.textMatchContainer}>
                    <Text style={styles.textMatch}>{teamA}</Text>
                    <Text style={styles.textMatch}>{teamB}</Text>
                </View>
                <OddsGrid style={styles.oddsContainer} odds={odds}/>
            </View>
        </TouchableView>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: 130,
        minHeight: 180,
        backgroundColor: Colors.darkBlue,
        marginRight: 8,
        marginLeft: 0,
        borderRadius: 8,
        elevation: 3,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
    },
    background: {
        height: 180,
        width: 130,
        borderRadius: 8,
    },
    textMatchContainer: {
        padding: 12,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    textMatch: {
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 15,
        lineHeight: 17,
        color: 'white',
    },
    oddsText: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 7,
        paddingHorizontal: 5,
        fontFamily: Fonts.type.AvenirB,
        fontSize: 12,
        letterSpacing: -0.21,
    },
    oddsContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 8,
    },
    topGradient: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 100,
    },
});

HeadLineSliderItem.defaultProps = {
    style: {},
};

HeadLineSliderItem.propTypes = {
    teamA: PropTypes.string.isRequired,
    teamB: PropTypes.string.isRequired,
    odds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default HeadLineSliderItem;
