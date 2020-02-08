import React from 'react';
import {connect} from 'react-redux';
import {Platform, SafeAreaView, ScrollView, View, Text, RefreshControl, TouchableOpacity} from 'react-native';
import {Index, Colors, Fonts} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import CardComponentMatch from '../../components/Card/CardComponentMatch';
import HeaderCalendar from '../../components/HeaderCalendar/HeaderCalendar';
import SportSlider from '../../components/Sliders/SportSlider';
import HeadLineSlider from '../../components/Sliders/HeadLineSlider';
import CardDropdown from '../../components/Card/CardDropdown';
import CardComponentOdds from '../../components/Card/CardComponentOdds';
import Header from '../../components/Navigation/Header';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ScreenHome = ({navigation, ...props}) => {
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
                    <RefreshControl
                        refreshing={refreshing}
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
                <Header left={<View/>} title/>
                <SportSlider/>
                <View style={{...CardStyles.cardContainer, padding: 0}}>
                    <HeadLineSlider/>
                    <HeaderCalendar onDateSelect={date => console.log(date)}/>
                </View>
                <View style={{backgroundColor: '#EFEFEF', flexGrow: 999, padding: 8}}>
                    <Text style={Index.sectionBanner}>TOP COMPÉTITIONS</Text>
                    <CardDropdown title={'Ligue 1'}>
                        <TouchableOpacity rippleColor={'red'} onPress={() => navigation.navigate('Match')}>
                            <React.Fragment>
                                <CardComponentMatch/>
                                <CardComponentOdds odds={[2.3, 1, 1.5]}/>
                            </React.Fragment>
                        </TouchableOpacity>
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
)(ScreenHome);
