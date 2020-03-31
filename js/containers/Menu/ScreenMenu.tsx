import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Header from '../../components/Navigation/Header';
import TouchableView from '../../components/Button/TouchableView';
import {NavigationStackProp} from 'react-navigation-stack';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

const menuCategories = [
    [
        {
            title: 'Mon compte',
            icon: null,
            onPress: () => console.log('hey'),
        },
        {
            title: 'Chat',
            icon: <Icon name={'ios-chatbubbles'} size={18} style={{marginRight: 6}}/>,
            onPress: null,
        },
        {
            title: 'Infos sports',
            icon: <Icon name={'ios-information-circle-outline'} size={18} style={{marginRight: 6}}/>,
            onPress: null,
        },
    ],
    [
        {
            title: 'Préférences',
            icon: null,
            onPress: null,
        },
        {
            title: 'Préférences',
            icon: null,
            onPress: null,
        },
        {
            title: 'Notifications',
            icon: null,
            onPress: null,
        },
        {
            title: 'Connexion',
            icon: null,
            onPress: null,
        },
    ],
    [
        {
            title: 'Contact Us',
            icon: null,
            onPress: null,
        },
    ],
];

type Props = {
    navigation: NavigationStackProp;
};

type Field = {
    title: string;
    icon: ViewStyle;
    onPress: (navigation: NavigationStackProp) => void;
};

export default function ScreenMenu({navigation}: Props) {
    return (
        <SafeAreaView style={{backgroundColor: Colors.darkBlue, flex: 1}}>
            <Header left={<View/>} title={'Menu'}/>
            <ScrollView style={{flex: 1}} contentContainerStyle={styles.mainContainer}>
                {menuCategories.map((category: any) => {
                    return (
                        <View style={styles.category}>
                            {category.map((field: Field) => {
                                return (
                                    <View style={styles.menuField}>
                                        {field && field.onPress ? (
                                            <TouchableView
                                                onPress={() => field.onPress(navigation)}
                                                rippleColor={Colors.grey}>
                                                <View style={styles.menuFieldContainer}>
                                                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                                        {field.icon && field.icon}
                                                        <Text style={styles.menuFieldText}>{field.title}</Text>
                                                    </View>
                                                    <Icon name={'ios-arrow-forward'} size={14}/>
                                                </View>
                                            </TouchableView>
                                        ) : (
                                            <View style={styles.menuFieldContainer}>
                                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                                    {field.icon && field.icon}
                                                    <Text style={styles.menuFieldText}>{field.title}</Text>
                                                </View>
                                                <Icon name={'ios-arrow-forward'} size={14}/>
                                            </View>
                                        )}
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: Colors.grey,
        flexGrow: 1,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    category: {
        borderRadius: 14,
        backgroundColor: 'white',
        marginBottom: 8,
    },
    menuField: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    menuFieldContainer: {
        paddingVertical: 13,
        paddingHorizontal: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuFieldText: {
        color: '#242A37',
    },
    menuFieldIcon: {},
});
