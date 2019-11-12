import Config from 'react-native-config';

export default {
    debugErrorMessages: false,
    apiHost: Config.API_HOST
        ? Config.API_HOST
        : 'https://tadam-auth.golfe-internal.xyz/',
    graphqlHost: Config.GRAPHQL_HOST
        ? Config.GRAPHQL_HOST
        : 'http://178.62.87.154:8001/query',
};
