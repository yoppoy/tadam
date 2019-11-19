import Config from 'react-native-config';
import * as yup from 'yup';
import {LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

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
        email: 'L\'adresse email n\'est pas valide',
        min: 'Un minimum de ${min} charactères sont requis',
        max: 'Ce champ est limité à ${max} charactères',
    },
    number: {
        min: 'Le minimum requis est ${min}',
    },
});

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'fr';

