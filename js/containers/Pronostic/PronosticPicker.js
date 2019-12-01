import React, {useState} from 'react';
import {Platform, SafeAreaView, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import {scale, verticalScale, moderateScale} from '../../services/pixelResizer';
import ApplicationStyles from '../../styles/ApplicationStyles';
import {Colors, Fonts, Images, Index} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Navigation/Header';

export default function PronosticPicker({style, ...props}) {
    const categories = [
        {
            title: 'les + populaires',
            bets: [
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
            ],
        }, {
            title: 'Buts',
            bets: [
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
            ],
        }, {
            title: 'Double chance',
            bets: [
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
            ],
        }, {
            title: 'Buteurs',
            bets: [
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
                {title: 'Barcelone ou Nul', odds: 1.5},
            ],
        },
    ];
    const match = {
        teamA: 'Olympique Lyonnais',
        teamB: 'FC Barcelone',
        date: moment(new Date()),
    };
    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView
                keyboardShouldPersistTaps={'handled'}
                style={{flex: 1}}
                contentContainerStyle={{flexGrow: 1}}>
                <Header
                    title={'Les paris'}
                    right={
                        <View style={{flexDirection: 'row', paddingRight: 17}}>
                            <TouchableOpacity
                                onPress={() => console.log('hey')}
                                hitSlop={{top: 15, bottom: 15}}>
                                <View style={{alignSelf: 'center'}}>
                                    <Icon name={'ios-switch'} style={styles.headerIcon}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => console.log('hey')}
                                hitSlop={{top: 15, bottom: 15}}>
                                <View style={{alignSelf: 'center'}}>
                                    <Icon name={'ios-search'} style={styles.headerIcon}/>
                                </View>
                            </TouchableOpacity>
                        </View>}
                />
                <View style={styles.mainContainer}>
                    <View style={styles.matchInfo}>
                        <Text style={styles.textDate}>{match.date.format('D MMMM YYYY').toUpperCase()}</Text>
                        <Text
                            style={styles.textTeams}>{`${match.teamA} - ${match.teamB}`}</Text>
                    </View>
                    {categories.map(category => {
                        return (
                            <View style={styles.categoryContainer}>
                                <Text style={Index.sectionBanner}>{category.title.toUpperCase()}</Text>
                                <View style={styles.betsContainer}>
                                    {category.bets.map(bet => {
                                        return (
                                            <View style={styles.betRow}>
                                                <Text style={styles.betTitle}>{bet.title}</Text>
                                                <View style={styles.betOdds}>
                                                    <Text style={styles.betOddsValue}>{bet.odds.toFixed(2)}</Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

PronosticPicker.defaultProps = {
    style: {},
};

PronosticPicker.propTypes = {
    style: PropTypes.object,
};

const styles = {
    safeContainer: {
        backgroundColor: Colors.darkBlue,
        flexGrow: 1,
    },
    mainContainer: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: Colors.grey,
        flexGrow: 1,
    },
    matchInfo: {
        margin: 16,
        marginBottom: 4,
    },
    textDate: {
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 12,
        color: '#242128',
        opacity: 0.5,
        lineHeight: 19,
    },
    textTeams: {
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 12,
        color: '#242128',
        lineHeight: 19,
    },
    categoryContainer: {
        marginHorizontal: 8,
    },
    betsContainer: {
        borderRadius: 4,
        backgroundColor: 'white',
        paddingTop: 4,
        marginBottom: 4,
    },
    betRow: {
        ...Index.row,
        alignSelf: 'stretch',
        margin: 8,
        marginTop: 4,
    },
    betTitle: {
        marginLeft: 16,
        flexGrow: 6,
        fontSize: 14,
        fontFamily: Fonts.type.Avenir,
    },
    betOdds: {
        flex: 2,
        padding: 7,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: Colors.violet,
    },
    betOddsValue: {
        color: 'white',
        fontSize: 14,
        fontFamily: Fonts.type.AvenirB,
        letterSpacing: 0.22,
    },
    headerIcon: {
        color: 'white',
        fontSize: 25,
        marginHorizontal: 8,
    },
};
