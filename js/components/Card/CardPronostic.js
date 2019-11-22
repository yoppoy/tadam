import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Index, Fonts, Images} from '../../styles';
import CardComponentSection from './CardComponentSection';
import CardComponentProfile from './CardComponentProfile';
import CardComponentMatch from './CardComponentMatch';
import DefaultButton from '../Button/DefaultButton';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';

export default function CardPronostic({name, style = {}, ...props}) {
    return (
        <View style={[CardStyles.card, style]} {...props}>
            <CardComponentSection dashed>
                <CardComponentProfile/>
            </CardComponentSection>
            <CardComponentSection>
                <CardComponentMatch/>
                <DefaultButton
                    text={'Lyon Gagne par 2 buts (cote 2.20)'}
                    onPress={() => console.log('hey')}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonText}
                />
            </CardComponentSection>
        </View>
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
