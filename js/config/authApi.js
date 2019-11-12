import apisauce from 'apisauce';
import appConfig from './appConfig';
import networkError from './constants/networkErrors';

const create = (baseURL = appConfig.apiHost) => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
        },
        timeout: 30000,
    });
    api.addResponseTransform(response => {
        if (response.problem) {
            if (networkError.hasOwnProperty(response.problem)) {
                response.error = networkError[response.problem];
            }
            response.error = `${response.problem} : ${response.status} : ${response.originalError.message}`;
        }
    });

    const loginLocal = (email, password) => {
        return api.post('login/local', {email, password});
    };

    const loginFacebook = token => {
        return api.post('login/facebook', {token});
    };

    const loginGoogle = token => {
        return api.post('login/google', {token});
    };

    const loginApple = token => {
        return api.post('login/apple', {token});
    };

    const signUpLocal = (email, password) => {
        return api.post('signup/local', {email, password});
    };

    const signUpFacebook = token => {
        return api.post('signup/facebook', {token});
    };

    const signUpGoogle = token => {
        return api.post('signup/google', {token});
    };

    const signUpApple = token => {
        return api.post('signup/apple', {token});
    };

    return {
        loginLocal,
        loginFacebook,
        loginGoogle,
        loginApple,
        signUpLocal,
        signUpApple,
        signUpFacebook,
        signUpGoogle,
    };
};

export default {
    create,
};
