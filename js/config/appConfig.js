import Config from 'react-native-config';
import * as yup from 'yup';

console.disableYellowBox = true;

export default {
    debugErrorMessages: false,
    apiHost: Config.API_HOST
        ? Config.API_HOST
        : 'https://tadam-auth.golfe-internal.xyz/',
    graphqlHost: Config.GRAPHQL_HOST
        ? Config.GRAPHQL_HOST
        : 'http://178.62.87.154:8001/query',
};

/* Yup config */
yup.setLocale({
    mixed: {
        required: 'Veuillez remplir ce champ',
    },
    string: {
        email: "L'adresse email n'est pas valide",
        min: 'Un minimum de ${min} charactères sont requis',
        max: 'Ce champ est limité à ${max} charactères',
    },
    number: {
        min: 'Le minimum requis est ${min}'
    }
});
