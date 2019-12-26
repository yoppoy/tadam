import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, View, Text, RefreshControl, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Index, Colors, Fonts, Images, Animations} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import ApplicationStyles from '../../styles/ApplicationStyles';
import Header from '../../components/Navigation/Header';
import {DefaultButton} from '../../components/Button';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';
import MatchInfo from './MatchInfo';
import ModalPronosticCreate from './ModalPronosticCreate';
import LottieView from 'lottie-react-native';

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
                    <RefreshControl
                        refreshing={state.refreshing}
                        onRefresh={onRefresh}
                        tintColor={Colors.green}
                        colors={[Colors.darkBlue]}
                    />
                }>
                <Header title={'Ligue 1'}/>
                <Text style={styles.textDate}>{'17 oct 2019'.toUpperCase()}</Text>
                <MatchInfo/>
                <View style={{...ApplicationStyles.row, marginHorizontal: scale(17)}}>
                    <DefaultButton
                        onPress={() => console.log('hey')}
                        text={'Ouvrir le salon'}
                        style={styles.actionButton}
                        touchStyle={{flex: 1}}
                        textStyle={{fontSize: scale(14), color: '#6F82AA'}}
                    />
                    <DefaultButton
                        onPress={() => setState({...state, modalVisible: true})}
                        text={'Faire un prono'}
                        style={{...styles.actionButton, backgroundColor: 'rgba(13,202,157, 0.2)'}}
                        touchStyle={{flex: 1}}
                        textStyle={{fontSize: scale(14), color: Colors.green}}/>
                </View>
                <View style={{...CardStyles.cardContainer, marginTop: verticalScale(30, 30), flexGrow: 1}}>
                    <LottieView source={Animations.loadingCircle} autoPlay loop hardwareAccelerationAndroid={true} style={{height: 50, alignSelf: 'center', padding: 0}}/>
                </View>
            </ScrollView>
            <ModalPronosticCreate
                visible={state.modalVisible}
                onClose={() => setState({...state, modalVisible: false})}
            />
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
