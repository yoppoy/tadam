const customErors = {
    auth: {
        401: 'Mot de passe incorrect',
        404: 'Impossible de trouver votre compte Tadam',
        408: 'Une erreur est survenue, veuillez vérifier votre connexion',
        409: 'Un compte existe déjà avec ces informations',
    },
};

const defaultErrors = {
    default: 'Une erreur est survenue : ',
    400: 'Une erreur 400 est survenue',
    401: 'Requête non authorisée',
    404: 'Impossible de trouver le contenue',
    405: 'Une erreur est survenue',
};

export default function formatError(request, type = null) {
    let errors = defaultErrors;

    if (type) {
        errors = Object.assign(errors, customErors[type]);
    }
    console.log('Error', request);
    return errors.hasOwnProperty(request.status)
        ? errors[request.status]
        : `{errors.default} : ${request.status}`;
}
