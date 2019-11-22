import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Index, Colors, Images, Fonts} from '../../styles';
import BookMark from '../../assets/img/card/BookMark';

export default function CardComponentMatch({dashed, children, ...props}) {
    return (
        <View styles={styles.container}>
            <View style={{...Index.rowSpaceBetween}}>
                <View style={{...Index.row}}>
                    <BookMark style={{marginRight: 16}}/>
                    <Text style={styles.dateInfo}>MER, 04/03</Text>
                </View>
                <View>
                    <Text style={styles.dateInfo}>20:45</Text>
                </View>
            </View>
            <View style={{...Index.rowSpaceBetween}}>
                <View style={{...Index.row, paddingVertical: 15}}>
                    <View style={styles.teamLogoContainer}>
                        <Image
                            style={{width: 19}}
                            resizeMode='contain'
                            source={Images.testTeamOL}
                        />
                    </View>
                    <Text style={{...styles.teamInfo, marginLeft: 8}}>Olympique Lyonnais</Text>
                </View>
                <View style={{...Index.row, paddingVertical: 15, opacity: 0.5}}>
                    <Text style={{...styles.teamInfo, marginRight: 8}}>FC Barcelone</Text>
                    <View style={{...styles.teamLogoContainer, elevation: 0}}>
                        <Image
                            style={{width: 19}}
                            resizeMode='contain'
                            source={Images.testTeamFCB}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

CardComponentMatch.defaultProps = {};

CardComponentMatch.propTypes = {};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    dateInfo: {
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 11,
        letterSpacing: 0.4,
        color: Colors.darkBlue,
        opacity: 0.5,
    },
    teamInfo: {
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 12,
        marginVertical: 6,
        color: Colors.darkBlue,
    },
    teamLogoContainer: {
        width: 32,
        height: 32,
        elevation: 5,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
