import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import ApplicationStyles from '../../styles/ApplicationStyles';
import {Colors, Fonts, Images} from '../../styles';

export default function MatchInfo({style, ...props}) {
    return (
        <View style={[styles.container, style]}>
            <View style={{flex: 1}}>
                <View style={styles.teamContainer}>
                    <Image
                        style={styles.teamImage}
                        resizeMode={'contain'}
                        source={Images.testTeamOL}
                    />
                </View>
                <Text style={styles.teamText}>Lyon</Text>
                <View style={styles.containerOdds}>
                    <Text style={styles.textOddsScore}>2.20</Text>
                    <Text style={styles.textOddsPercent}>58%</Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <View style={styles.teamContainer}>
                    <Text style={styles.textHour}>21:45</Text>
                    <Text style={styles.subtitle}>VS</Text>
                </View>
                <Text style={styles.teamText}>Nul</Text>
                <View style={styles.containerOdds}>
                    <Text style={styles.textOddsScore}>1.10</Text>
                    <Text style={styles.textOddsPercent}>20%</Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <View style={styles.teamContainer}>
                    <Image
                        style={styles.teamImage}
                        resizeMode={'contain'}
                        source={Images.testTeamFCB}
                    />
                </View>
                <Text style={styles.teamText}>FC Barcelone</Text>
                <View style={styles.containerOdds}>
                    <Text style={styles.textOddsScore}>1.50</Text>
                    <Text style={styles.textOddsPercent}>22%</Text>
                </View>
            </View>
        </View>
    );
}

MatchInfo.defaultProps = {
    style: {},
};

MatchInfo.propTypes = {
    style: PropTypes.object,
};

const styles = {
    container: {
        ...ApplicationStyles.rowSpaceBetween,
        margin: 12,
        marginTop: 24,
        marginBottom: 0,
    },
    textHour: {
        fontSize: 28,
        fontFamily: Fonts.type.AvenirB,
        color: 'white',
        letterSpacing: 1.2,
        lineHeight: 38,
        textAlignVertical: 'center',
    },
    subtitle: {
        fontFamily: Fonts.type.Avenir,
        fontSize: 13,
        letterSpacing: 0.21,
        color: 'white',
    },
    teamContainer: {
        height: 64,
        marginHorizontal: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    teamImage: {
        width: 56,
        marginHorizontal: 5,
    },
    teamText: {
        marginTop: 16,
        alignSelf: 'center',
        fontFamily: Fonts.type.AvenirB,
        color: 'white',
        letterSpacing: 0.12,
    },
    containerOdds: {
        borderRadius: 4,
        borderColor: '#2E374A',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15,
        marginHorizontal: 12,
    },
    textOddsScore: {
        padding: 6,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.22,
        fontFamily: Fonts.type.AvenirB,
        borderRadius: 4,
        backgroundColor: Colors.violet,
    },
    textOddsPercent: {
        padding: 6,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: '#54617D',
        fontSize: 14,
        letterSpacing: 0.22,
        fontFamily: Fonts.type.AvenirB,
    },
};
