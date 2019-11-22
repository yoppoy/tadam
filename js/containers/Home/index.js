import React from 'react';
import {connect} from 'react-redux';
import {Platform, SafeAreaView, ScrollView, View, Button, Text, RefreshControl} from 'react-native';
import {Index, Colors, Fonts} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import CardComponentMatch from '../../components/Card/CardComponentMatch';
import HeaderCalendar from '../../components/HeaderCalendar/HeaderCalendar';
import SportSlider from '../../components/Selectors/SportSlider';
import CardPronostic from '../../components/Card/CardPronostic';
import HeadLineSlider from '../../components/Selectors/HeadLineSlider';
import CardDropdown from '../../components/Card/CardDropdown';
import CardComponentOdds from '../../components/Card/CardComponentOdds';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const HomeScreen = props => {
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
                                    colors={[Colors.green]}
                                    progressBackgroundColor={Colors.darkBlue}
                    />
                }>
                {Platform.OS === 'ios' && (
                    <View
                        style={{
                            backgroundColor: '#EFEFEF',
                            height: 500,
                            position: 'absolute',
                            bottom: -500,
                            left: 0,
                            right: 0,
                        }}
                    />
                )}
                <SportSlider/>
                <View style={{backgroundColor: Colors.grey, borderTopLeftRadius: 14, borderTopRightRadius: 14}}>
                    <HeadLineSlider/>
                    <HeaderCalendar onDateSelect={date => console.log(date)}/>
                </View>
                <View style={{backgroundColor: '#EFEFEF', flexGrow: 999}}>
                    <Text style={Index.sectionBanner}>TOP COMPÉTITIONS</Text>
                    <CardDropdown title={'Ligue 1'}>
                        <CardComponentMatch/>
                        <CardComponentOdds odds={[2.3, 1, 1.5]}/>
                    </CardDropdown>
                    <CardDropdown title={'Première Ligue (Angleterre)'}>
                        <CardComponentMatch/>
                        <CardComponentOdds odds={[2.3, 1, 1.5]}/>
                    </CardDropdown>
                    <Text style={Index.sectionBanner}>TOUTES LES COMPÉTITIONS (A-Z)</Text>
                    <CardDropdown title={'France'}>
                        <CardComponentMatch/>
                        <CardComponentOdds odds={[2.3, 1, 1.5]}/>
                    </CardDropdown>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);
