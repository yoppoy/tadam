import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, View, Text, RefreshControl, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Index, Colors, Fonts, Images} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import ApplicationStyles from '../../styles/ApplicationStyles';
import Header from '../../components/Navigation/Header';
import {DefaultButton} from '../../components/Button';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';
import MatchInfo from './MatchInfo';
import BottomModal from '../../components/BottomModal';
import Icon from 'react-native-vector-icons/Ionicons';
import PronosticCreate from './PronosticCreate';
import Modal from 'react-native-modal';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ScreenMatch = props => {
    const [state, setState] = React.useState({
        refreshing: false,
        modalVisible: false,
    });

    const onRefresh = React.useCallback(() => {
        setState({...state, refreshing: true});

        wait(2000).then(() => setState({...state, refreshing: false}));
    }, [state]);


    return (
        <SafeAreaView style={{backgroundColor: Colors.darkBlue, flex: 1}}>
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{flexGrow: 1}}
                refreshControl={
                    <RefreshControl refreshing={state.refreshing}
                                    onRefresh={onRefresh}
                                    tintColor={Colors.green}
                                    colors={[Colors.darkBlue]}
                    />
                }>
                <Header title={'Ligue 1'}/>
                <Text style={styles.textDate}>{'17 oct 2019'.toUpperCase()}</Text>
                <MatchInfo/>
                <View style={{...ApplicationStyles.row, marginHorizontal: scale(17)}}>
                    <DefaultButton onPress={() => console.log('hey')}
                                   text={'Ouvrir le salon'}
                                   style={styles.actionButton}
                                   touchStyle={{flex: 1}}
                                   textStyle={{fontSize: scale(14), color: '#6F82AA'}}
                    />
                    <DefaultButton onPress={() => setState({...state, modalVisible: true})}
                                   text={'Faire un prono'}
                                   style={{...styles.actionButton, backgroundColor: 'rgba(13,202,157, 0.2)'}}
                                   touchStyle={{flex: 1}}
                                   textStyle={{fontSize: scale(14), color: Colors.green}}/>
                </View>
                <View style={{...CardStyles.cardContainer, marginTop: verticalScale(30, 30), flexGrow: 1}}>

                </View>
            </ScrollView>
            <BottomModal
                visible={state.modalVisible}
                onSwipeComplete={() => setState({...state, modalVisible: false})}
                onBackdropPress={() => setState({...state, modalVisible: false})}
                animationInTiming={300}
                style={{backgroundColor: Colors.grey, padding: 0}}
                backdropColor={'rgba(0,0,0,0.4)'}
            >
                <React.Fragment>
                    <TouchableOpacity onPress={() => setState({...state, modalVisible: false})}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>
                                Analyse d'avant match
                            </Text>
                            <Icon name={'ios-arrow-down'} style={{fontSize: verticalScale(16)}}/>
                        </View>
                    </TouchableOpacity>
                    <PronosticCreate/>
                </React.Fragment>
            </BottomModal>
        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onDisconnected: () => dispatch(AuthActions.onDisconnected()),
    };
};

const styles = {
    textDate: {
        fontFamily: Fonts.type.Avenir,
        fontSize: 10,
        letterSpacing: 0.16,
        color: 'white',
        alignSelf: 'center',
        marginTop: -10,
    },
    actionButton: {
        flex: 1,
        margin: verticalScale(7),
        backgroundColor: '#2E374A',
        justifyContent: 'center',
        paddingVertical: verticalScale(9),
    },
    modalHeader: {
        ...Index.row,
        paddingHorizontal: 24,
        paddingVertical: verticalScale(16, 16),
    },
    modalTitle: {
        flex: 1,
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 14,
        color: Colors.oxfordBlue,
    },
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenMatch);
