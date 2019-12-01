import React, {useState} from 'react';
import {Platform, SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';
import {scale, verticalScale, moderateScale} from '../../services/pixelResizer';
import ApplicationStyles from '../../styles/ApplicationStyles';
import {Colors, Fonts, Images, Index} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultButton from '../../components/Button/DefaultButton';
import TouchableView from '../../components/Button/TouchableView';

function PronosticCreate({navigation, style, ...props}) {
    const [state, setState] = useState({
        selected: 2,
        odds: [
            {
                label: 'Lyon',
                value: 2.2,
            },
            {
                label: 'Nul',
                value: 1.1,
            },
            {
                label: 'Barcelone',
                value: 1.5,
            },
        ],
        amount: 0,
    });

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Votre pronostique</Text>
                <TouchableView rippleColor={'darkgrey'}>
                    <View style={styles.dropdown}>
                        <Text style={styles.dropdownText}>Plus de paris</Text>
                        <Icon name={'ios-arrow-down'} style={styles.dropdownIcon}/>
                    </View>
                </TouchableView>
                <View style={{marginBottom: verticalScale(24, 24)}}>
                    <View style={styles.oddsTopRow}>
                        {state.odds.map((odd, index) => {
                            return (
                                <TouchableOpacity onPress={() => setState({...state, selected: index})}
                                                  style={[{flex: 1},
                                                      index % 2 !== 0 && {marginHorizontal: scale(8)}]}>
                                    <View style={[
                                        styles.oddsTopContainer,
                                        state.selected === index && styles.oddsContainerSelected,
                                    ]}>
                                        <Text adjustsFontSizeToFit numberOfLines={1} style={[
                                            styles.oddsTopText,
                                            state.selected === index && styles.oddsTextSelected]}>
                                            {odd.label}
                                        </Text>
                                    </View>
                                </TouchableOpacity>);
                        })}
                    </View>
                    <View style={styles.oddsBottomRow}>
                        {state.odds.map((odd, index) => {
                            return (<View
                                style={[
                                    styles.oddsBottomContainer,
                                    state.selected === index && styles.oddsContainerSelected,
                                    index % 2 !== 0 && {marginHorizontal: scale(8)},
                                ]}>
                                <Text style={[
                                    styles.oddsBottomText,
                                    state.selected === index && styles.oddsTextSelected]}>
                                    {odd.value.toFixed(2)}
                                </Text>
                            </View>);
                        })}
                    </View>
                </View>
                <View style={{marginBottom: verticalScale(24, 24)}}>
                    <Text style={{...styles.textAmount, marginBottom: 9}}>Votre mise</Text>
                    <View style={{...Index.row}}>
                        <View style={[styles.inputContainer, isNaN(state.amount) && {borderColor: Colors.redError}]}>
                            <TextInput
                                placeholder={'0'}
                                value={state.amount}
                                onChangeText={(value) => setState({...state, amount: value})}
                                keyboardType={'number-pad'}
                                style={[styles.inputAmount, isNaN(state.amount) && {borderColor: Colors.redError}]}/>
                            <TouchableView onPress={() => console.log('hey')}
                                           rippleColor={'lightgrey'}
                                           rippleBorderless={true}>
                                <View>
                                    <Icon name={'md-refresh'} size={17} style={{marginVertical: 3}}/>
                                </View>
                            </TouchableView>
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                            <Text style={styles.textAmount}>Barcelone remporte le match</Text>
                            <Text style={styles.textAmount}>
                                Gains possible
                                <Text style={{color: Colors.green}}>
                                    {' ' + (state.amount * state.odds[state.selected].value).toFixed(1)}€
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{...Index.row}}>
                    <DefaultButton
                        text={'Gratuit'}
                        style={{
                            ...styles.button,
                            flex: Platform.OS === 'android' ? 2 : 0,
                            marginRight: scale(8),
                        }}
                        touchStyle={{flex: 2}}
                        textStyle={{fontSize: verticalScale(14, 14), color: '#804E586E'}}
                        rippleColor={'lightgrey'}
                        onPress={() => console.log('lol')}
                    />
                    <DefaultButton
                        text={'Diffuser en VIP'}
                        style={{
                            ...styles.button,
                            backgroundColor: Colors.green,
                            borderColor: Colors.green,
                            flex: Platform.OS === 'android' ? 4 : 0,
                        }}
                        textStyle={{fontSize: verticalScale(14, 14)}}
                        touchStyle={{flex: 4}}
                        onPress={() => console.log('lol')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

PronosticCreate.defaultProps = {
    style: {},
};

PronosticCreate.propTypes = {
    style: PropTypes.object,
};

const styles = {
    container: {
        ...ApplicationStyles.rowSpaceBetween,
        margin: verticalScale(12, 12),
        marginTop: verticalScale(24, 24),
        marginBottom: 0,
    },
    safeContainer: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: 'white',
    },
    mainContainer: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        padding: scale(24),
        elevation: 3,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
        backgroundColor: 'white',
    },
    title: {
        color: Colors.oxfordBlue,
        fontFamily: Fonts.type.AvenirB,
        fontSize: scale(18),
        letterSpacing: -0.27,
        alignSelf: 'center',
        marginBottom: verticalScale(22, 22),
    },
    dropdown: {
        ...Index.row,
        padding: scale(9),
        borderRadius: 4,
        backgroundColor: '#EAEBEE',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: verticalScale(22, 22),
    },
    dropdownText: {
        color: Colors.oxfordBlue,
        fontFamily: Fonts.type.Avenir,
        fontSize: scale(14, 14),
    },
    dropdownIcon: {
        color: '#4E586E',
        fontSize: scale(16, 16),
        position: 'absolute',
        right: 0,
        marginRight: 15,
    },
    oddsTopRow: {
        ...Index.row,
        elevation: 10,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        zIndex: 5,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {height: 3},
        backgroundColor: 'white',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    oddsBottomRow: {
        ...Index.row,
        borderRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    oddsTopContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: verticalScale(14, 14),
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
    oddsTopText: {
        fontFamily: Fonts.type.AvenirDB,
        fontSize: scale(13, 13),
        letterSpacing: 0.6,
        opacity: 0.5,
        color: Colors.darkBlue,
    },
    oddsBottomContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EAEBEE',
        padding: verticalScale(8, 8),
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    oddsBottomText: {
        fontFamily: Fonts.type.Avenir,
        fontSize: scale(13, 13),
        letterSpacing: 0.22,
        opacity: 0.5,
        color: Colors.darkBlue,
    },
    oddsContainerSelected: {
        backgroundColor: '#6462F2',
    },
    oddsTextSelected: {
        fontFamily: Fonts.type.AvenirDB,
        color: 'white',
        opacity: 1,
    },
    inputContainer: {
        ...Index.row,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.green,
        paddingRight: scale(17, 17),
        paddingLeft: scale(13, 13),
        marginRight: scale(15, 15),
    },
    inputAmount: {
        width: scale(60),
        paddingVertical: verticalScale(13, 13),
        marginRight: scale(5, 5),
        fontSize: verticalScale(16, 16),
    },
    textAmount: {
        fontFamily: Fonts.type.base,
        fontSize: scale(12),
        color: '#4E586E',
        letterSpacing: 0.17,
        lineHeight: 14,
    },
    button: {
        margin: 0,
        alignSelf: 'stretch',
        paddingHorizontal: scale(14, 14),
        paddingVertical: verticalScale(14, 14),
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: '#804E586E',
        borderWidth: 1,
    },

};

export default withNavigation(PronosticCreate);
