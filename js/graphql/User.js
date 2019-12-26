import gql from 'graphql-tag';

export const GET_USERS = gql`
    {
        users {
            id
            email
            firstname
            lastname
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($user: NewUser!) {
        createUser(input: $user) {
            id
            email
            firstname
            lastname
        }
    }
`;
