import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import {scale, verticalScale, moderateScale} from '../../services/pixelResizer';
import ApplicationStyles from '../../styles/ApplicationStyles';
import {Colors, Fonts, Images, Index} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Navigation/Header';
import SafeBottomColor from '../../components/SafeBottomColor';

export default function PronosticPicker({style, onSelected, onClose, ...props}) {
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
        <React.Fragment>
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView
                    keyboardShouldPersistTaps={'handled'}
                    style={{flex: 1}}
                    contentContainerStyle={{flexGrow: 1}}>
                    <Header
                        title={'Les paris'}
                        left={
                            <View style={{flexDirection: 'row', paddingLeft: 25}}>
                                <TouchableOpacity
                                    onPress={onClose}
                                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}>
                                    <View style={{alignSelf: 'flex-start'}}>
                                        <Icon name={'ios-arrow-back'} style={{fontSize: 20, color: 'white'}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
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
                            <Text style={styles.textTeams}>{`${match.teamA} - ${match.teamB}`}</Text>
                        </View>
                        {categories.map(category => {
                            return (
                                <View key={category.title} style={styles.categoryContainer}>
                                    <Text style={Index.sectionBanner}>{category.title.toUpperCase()}</Text>
                                    <View style={styles.betsContainer}>
                                        {category.bets.map((bet, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={`${category.title}-${bet.title}-${index}`}
                                                    onPress={() => onSelected(category)}>
                                                    <View style={styles.betRow}>
                                                        <Text style={styles.betTitle}>{bet.title}</Text>
                                                        <View style={styles.betOdds}>
                                                            <Text
                                                                style={styles.betOddsValue}>{bet.odds.toFixed(2)}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </React.Fragment>
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
