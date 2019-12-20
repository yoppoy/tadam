import React from 'react';
import {SafeAreaView, StyleSheet, RefreshControl, ScrollView, TouchableOpacity, View, Image, Text} from 'react-native';
import Header from '../../components/Navigation/Header';
import {Fonts, Colors, Images, Index} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SafeBottomColor from '../../components/SafeBottomColor';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';
import DefaultButton from '../../components/Button/DefaultButton';

export default function ScreenVipHome() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, [refreshing]);

    const profiles = [
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
        {name: 'Diego Mortales'},
    ];

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.darkBlue}}>
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
                <SafeBottomColor color={Colors.grey}/>
                <Header
                    title={'Les pronostiqueurs'}
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
                    {profiles.map((profile, index) => {
                        return (
                            <View style={[styles.profileContainer, index === 0 && {paddingTop: 0}]}>
                                <Image
                                    style={{width: 44, height: 44}}
                                    source={Images.testProfileImg}
                                />
                                <View style={{
                                    flexGrow: 1,
                                    marginLeft: 16,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={styles.nameText}>Diego Mortales</Text>
                                    <Text style={CardStyles.cardStatsText}>1503€ - 13% - 67% (150)</Text>
                                </View>
                                <DefaultButton
                                    text={'Ajouter'}
                                    style={{backgroundColor: Colors.violet, paddingHorizontal: 9, paddingVertical: 5}}
                                    textStyle={{fontFamily: Fonts.type.AvenirB, fontSize: 12}}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerIcon: {
        color: 'white',
        fontSize: 25,
        marginHorizontal: 8,
    },
    mainContainer: {
        ...CardStyles.cardContainer,
        flexGrow: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    profileContainer: {
        ...Index.row,
        borderBottomWidth: 1,
        paddingBottom: 16,
        paddingTop: 16,
        borderColor: 'rgba(216, 216, 216, 0.4)',
        justifyContent: 'center',
    },
    nameText: {
        ...CardStyles.cardNameText,
        fontFamily: Fonts.type.AvenirB,
        fontSize: 14,
    },
});
