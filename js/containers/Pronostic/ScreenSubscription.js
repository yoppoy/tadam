import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {Colors, Fonts, Index} from '../../styles';
import PropTypes from 'prop-types';
import Header from '../../components/Navigation/Header';
import {DefaultButton} from '../../components/Button';
import TouchableView from '../../components/Button/TouchableView';
import {withNavigation} from 'react-navigation';

const ScreenSubscription = ({...props}) => {
    const [selected, setSelected] = useState(undefined);
    const offers = [
        {price: 29.9, pronoCount: 1},
        {price: 39.9, pronoCount: 3},
        {price: 59.9, pronoCount: 5},
    ];

    const onSelect = (offer) => {
        if (selected === offer) {
            setSelected(undefined);
        } else {
            setSelected(offer);
        }
    };

    const onConfirm = () => {
        console.log('hey');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}
                    contentContainerStyle={styles.contentContainer}>
                    <View>
                        <Header/>
                        <Text style={styles.title}>
                            Sélectionnez un abonnement
                        </Text>
                    </View>
                    <View style={{marginVertical: 10}}>
                        {offers.map((offer, index) => {
                            return (
                                <TouchableView onPress={() => onSelect(index)} rippleColor={Colors.green}>
                                    <View style={[styles.containerOffer, selected === index && styles.selected]}>
                                        <Text style={styles.textOfferPrice}>{offer.price.toFixed(2)} €</Text>
                                        <View style={{
                                            ...styles.textOfferContainer,
                                            backgroundColor: selected === index ? 'rgba(216, 216, 216, 0.5)' : 'rgba(216, 216, 216, 0.1)',
                                        }}>
                                            <Text style={{...styles.textOfferCount}}>{offer.pronoCount}</Text>
                                        </View>
                                        <Text style={styles.textOfferProno}>
                                            Pronostiqueur{offer.pronoCount > 1 && 's'}
                                        </Text>
                                    </View>
                                </TouchableView>
                            );
                        })}
                        <View style={{marginTop: 24}}>
                            <Text style={{...styles.textInfo}}>Paiement récurrent tous les mois,</Text>
                            <Text style={{...styles.textInfoLink}}>voir les conditions</Text>
                        </View>
                    </View>
                    <DefaultButton
                        onPress={onConfirm}
                        text={'confirmer'}
                        style={{...Index.formButton, marginBottom: 25}}
                        textStyle={{fontFamily: Fonts.type.bold}}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: Colors.darkBlue,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    title: {
        ...Fonts.title,
        color: 'white',
        flexGrow: 1,
    },
    containerOffer: {
        ...Index.row,
        flex: 1,
        backgroundColor: '#13151E',
        padding: 22,
        marginHorizontal: 3,
        borderRadius: 4,
        marginBottom: 3,
    },
    selected: {
        backgroundColor: Colors.green,
        marginHorizontal: 0,
    },
    textOfferPrice: {
        flex: 2,
        fontFamily: Fonts.type.AvenirB,
        fontSize: 20,
        color: 'white',
    },
    textOfferContainer: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(216, 216, 216, 0.1)',
        width: 22,
        height: 22,
        borderRadius: 1,
    },
    textOfferCount: {
        fontFamily: Fonts.type.AvenirB,
        fontSize: 13,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
    textOfferProno: {
        flex: 2,
        fontFamily: Fonts.type.Avenir,
        textAlign: 'center',
        color: 'white',
    },
    textInfo: {
        fontFamily: Fonts.type.Avenir,
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },
    textInfoLink: {
        fontFamily: Fonts.type.Avenir,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.green,
        textDecorationLine: 'underline',
    },
});

ScreenSubscription.defaultProps = {
    style: {},
};

ScreenSubscription.propTypes = {
    style: PropTypes.object,
};

export default withNavigation(ScreenSubscription);
