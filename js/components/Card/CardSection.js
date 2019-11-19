import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Dash from 'react-native-dash';

export default function CardSection({dashed, children, ...props}) {
    return (
        <View>
            <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
                { children }
            </View>
            {dashed && (
                <Dash style={{height: 1}} dashGap={4} dashLength={4} dashColor={'#cbcbcb'} dashThickness={0.4}/>
            )}
        </View>
    );
}

CardSection.defaultProps = {
    dashed: false,
};

CardSection.propTypes = {
    dashed: PropTypes.bool,
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 8,
        elevation: 2,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,

    },
});
