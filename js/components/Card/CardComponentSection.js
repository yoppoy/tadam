import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Dash from 'react-native-dash';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';

export default function CardComponentSection({dashed, children, ...props}) {
    return (
        <View>
            <View style={CardStyles.cardSection}>
                {children}
            </View>
            {dashed && (
                <Dash style={{height: 1}} dashGap={4} dashLength={4} dashColor={'#cbcbcb'} dashThickness={0.4}/>
            )}
        </View>
    );
}

CardComponentSection.defaultProps = {
    dashed: false,
};

CardComponentSection.propTypes = {
    dashed: PropTypes.bool,
};
