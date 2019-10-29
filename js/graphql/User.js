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
    {
        createUser(input: $user) {
            id
            email
            lastname
        }
    }
`;
