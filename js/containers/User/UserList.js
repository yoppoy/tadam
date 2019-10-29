import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {View, Text} from 'react-native';
import {GET_USERS} from '../../graphql/User';
import GraphqlError from '../../components/Error/GraphqlError';

export default function UserList() {
    const {loading, error, data} = useQuery(GET_USERS);

    console.log(loading, error, data);
    return (
        <View>
            {loading && <Text>Loading...</Text>}
            {!loading &&
            <View>
                {error ? <GraphqlError error={error}/> :
                    data.users.map(user => (
                        <Text>{user.firstname} - {user.lastname}</Text>
                    ))}
            </View>
            }
        </View>
    );
}
