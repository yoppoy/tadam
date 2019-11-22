import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Index, Fonts, Images} from '../../styles';
import Dash from 'react-native-dash';

export default function CardComponentProfile({name, ...props}) {
    return (
        <View style={{...Index.rowSpaceBetween}}>
            <View style={{...Index.row}}>
                <Image
                    style={{width: 28, height: 28, marginRight: 7}}
                    source={Images.testProfileImg}
                />
                <Text style={styles.name}>Diego Morata</Text>
            </View>
            <View style={{...Index.rowSpaceBetween, paddingVertical: 5}}>
                <Text style={styles.stats}>1503€</Text>
                <Text style={styles.stats}> - </Text>
                <Text style={styles.stats}>13%</Text>
                <Text style={styles.stats}> - </Text>
                <Text style={styles.stats}>67% (150)</Text>
            </View>
        </View>
    );
}

CardComponentProfile.defaultProps = {
    dashed: false,
    name: '...',
};

CardComponentProfile.propTypes = {
    dashed: PropTypes.bool,
    name: PropTypes.string,
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 8,
        elevation: 3,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,
    },
    name: {
        fontFamily: Fonts.type.Avenir,
        lineHeight: 18,
        color: '#242A37',
        fontSize: 13,
        letterSpacing: 0.37,
    },
    stats: {
        fontFamily: Fonts.type.AvenirDB,
        color: '#242A37',
        lineHeight: 18,
        opacity: 0.64,
        fontSize: 11,
        letterSpacing: 0.57,
    },
});
