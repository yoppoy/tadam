import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {ApplicationStyles, Fonts, Images} from '../../styles';
import Dash from 'react-native-dash';
import CardSection from './CardSection';
import CardProfile from './CardProfile';
import CardMatch from './CardMatch';
import DefaultButton from '../Button/DefaultButton';
import Card from './Card';

export default function CardPronostic({name, ...props}) {
    return (
        <Card>
            <CardSection dashed>
                <CardProfile/>
            </CardSection>
            <CardSection>
                <CardMatch/>
                <DefaultButton
                    text={'Lyon Gagne par 2 buts (cote 2.20)'}
                    onPress={() => console.log('hey')}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonText}
                />
            </CardSection>
        </Card>
    );
}

CardPronostic.defaultProps = {};

CardPronostic.propTypes = {};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#5856D6',
        paddingVertical: 5,
        justifyContent: 'center',
        margin: 0,
        borderColor: '#4644BC',
        borderWidth: 1,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 11,
        letterSpacing: 0.44,
        lineHeight: 15,
        fontFamily: Fonts.type.AvenirB,
    },
});
