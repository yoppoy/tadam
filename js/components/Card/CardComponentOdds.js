import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Images} from '../../styles';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import TouchableView from '../Button/TouchableView';

function CardComponentOdds({odds, style, ...props}) {
    return (

        <View style={[styles.oddsContainer, style]}>
            <Text style={styles.oddsText}>{Number(odds[0]).toFixed(2)}</Text>
            <Text style={{...styles.oddsText, backgroundColor: '#4E4CC1', opacity: 0.8}}>
                {Number(odds[1]).toFixed(2)}
            </Text>
            <Text style={styles.oddsText}>{Number(odds[2]).toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: Colors.violet,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
    },
});

CardComponentOdds.defaultProps = {
    style: {},
};

CardComponentOdds.propTypes = {
    odds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CardComponentOdds;
