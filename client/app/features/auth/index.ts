import * as angular from 'angular';
import logInViewComponent from './log-in/log-in.view.ts';
import signUpViewComponent from './sign-up/sign-up.view.ts';
import changeEmailViewComponent from './change-email/change-email.view.ts';
import changePasswordViewComponent from './change-password/change-password.view.ts';
import './auth.css';

const mod = angular.module('auth', []);

mod.component('logInView', logInViewComponent);
mod.component('signUpView', signUpViewComponent);
mod.component('changeEmailView', changeEmailViewComponent);
mod.component('changePasswordView', changePasswordViewComponent);

/*@ngInject*/
mod.config(function($stateProvider, APP_STATES) {

    $stateProvider.state({
        name: APP_STATES.LOG_IN,
        url: '/log-in',
        template: '<log-in-view></log-in-view>'
    });

    $stateProvider.state({
        name: APP_STATES.SIGN_UP,
        url: '/sign-up',
        template: '<sign-up-view></sign-up-view>'
    });

    $stateProvider.state({
        name: APP_STATES.CHANGE_EMAIL,
        url: '/change-email',
        template: '<change-email-view user="$resolve.authManager.user"></change-email-view>',
        data: {
            requireAuthentication: true
        }
    });

    $stateProvider.state({
        name: APP_STATES.CHANGE_PASSWORD,
        url: '/change-password',
        template: '<change-password-view></change-password-view>',
        data: {
            requireAuthentication: true
        }
    });
});

export default mod.name;