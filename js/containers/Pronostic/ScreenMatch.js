import React from 'react';
import {connect} from 'react-redux';
import {Platform, SafeAreaView, ScrollView, View, Button, Text, RefreshControl, Image} from 'react-native';
import {Index, Colors, Fonts, Images} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import ApplicationStyles from '../../styles/ApplicationStyles';
import Header from '../../components/Navigation/Header';
import {DefaultButton} from '../../components/Button';
import CardPronostic from '../../components/Card/CardPronostic';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';
import FormDropdown from '../../components/Form/FormDropdown';
import MatchInfo from './MatchInfo';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ScreenMatch = props => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <SafeAreaView style={{backgroundColor: Colors.darkBlue, flex: 1}}>
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{flexGrow: 1}}
                refreshControl={
                    <RefreshControl refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    tintColor={Colors.green}
                                    colors={[Colors.darkBlue]}
                    />
                }>
                <Header title={'Ligue 1'}/>
                <Text style={styles.textDate}>{'17 oct 2019'.toUpperCase()}</Text>
                <MatchInfo/>
                <View style={{...ApplicationStyles.row, marginHorizontal: 17}}>
                    <DefaultButton onPress={() => console.log('hey')}
                                   text={'Ouvrir le salon'}
                                   style={styles.actionButton}
                                   touchStyle={{flex: 1}}
                                   textStyle={{color: '#6F82AA'}}
                    />
                    <DefaultButton onPress={() => console.log('hey')}
                                   text={'Faire un prono'}
                                   style={{...styles.actionButton, backgroundColor: 'rgba(13,202,157, 0.2)'}}
                                   touchStyle={{flex: 1}}
                                   textStyle={{color: Colors.green}}/>
                </View>
                <View style={{...CardStyles.cardContainer, marginTop: 30, flexGrow: 1}}>

                </View>
            </ScrollView>
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
        margin: 7,
        backgroundColor: '#2E374A',
        justifyContent: 'center',
        paddingVertical: 9,
    },
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenMatch);
