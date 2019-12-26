import React from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    InteractionManager,
    Text,
} from 'react-native';
import Header from '../../components/Navigation/Header';
import {Animations, Colors, Fonts, Index} from '../../styles';
import SafeBottomColor from '../../components/SafeBottomColor';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';
import {GET_USERS, CREATE_USER} from '../../graphql/User';
import GraphqlError from '../../components/Error/GraphqlError';
import LottieView from 'lottie-react-native';
import {DefaultButton} from '../../components/Button';

export default function ScreenNotifications() {
    let {loading, error, data, refetch} = useQuery(GET_USERS);
    const [createUser, mutation] = useMutation(CREATE_USER);

    function onPress() {
        const newUser = {
            email:
                Math.random()
                    .toString(36)
                    .substring(3) + '@gmail.com',
            firstname: 'tmpF',
            lastname: 'but why',
        };

        createUser({
            variables: {
                user: newUser,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                createUser: {
                    __typename: 'User',
                    email: newUser.email,
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    id: newUser.email,
                },
            },
            update: (proxy, {data: {createUser}}) => {
                const data = proxy.readQuery({query: GET_USERS});
                proxy.writeQuery({
                    query: GET_USERS, data: {
                        users: [...data.users, createUser],
                    },
                });
            },
        }).then(stuff => {
            console.log('Done : ', stuff);
        });
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.darkBlue}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <SafeBottomColor color={Colors.grey}/>
                <Header title={'Notifications'}/>
                <View style={styles.mainContainer}>
                    <DefaultButton
                        text={'refresh'}
                        style={{paddingHorizontal: 10, padding: 2, margin: 2}}
                        onPress={() => refetch()}
                    />
                    <DefaultButton
                        text={'Create user'}
                        style={{paddingHorizontal: 10, padding: 2, margin: 2}}
                        onPress={onPress}
                    />
                    {error && <GraphqlError error={error}/>}
                    {loading && (
                        <LottieView
                            source={Animations.loadingCircle}
                            hardwareAccelerationAndroid={true}
                            style={{
                                height: 50,
                                alignSelf: 'center',
                                padding: 0,
                            }}
                            autoPlay
                            loop
                        />
                    )}
                    {data &&
                    data.users
                        .filter(user => user.firstname === 'tmpF')
                        .reverse()
                        .map((user, index) => {
                            return (
                                <View
                                    style={[styles.profileContainer, user.id === user.email && styles.optimistic]}
                                    key={user.id}>
                                    <Text style={styles.emailText}>
                                        {user.firstname} - {user.lastname}
                                    </Text>
                                    <Text style={styles.nameText}>
                                        {user.email}
                                    </Text>
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
        paddingBottom: 8,
        paddingTop: 8,
        borderColor: 'rgba(216, 216, 216, 0.4)',
        borderBottomWidth: 1,
    },
    emailText: {
        ...CardStyles.cardNameText,
        fontFamily: Fonts.type.base,
        fontSize: 14,
    },
    nameText: {
        ...CardStyles.cardNameText,
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 14,
    },
    optimistic: {
        opacity: 0.5,
    },
});
