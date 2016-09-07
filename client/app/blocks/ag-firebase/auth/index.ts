import * as angular from 'angular';

import authManagerFactory from './auth-manager.factory';
import authStateInterceptorsProvider from './auth-state-interceptors.provider';

import cloakAuthDirective from './cloak-auth.directive';
import hideAuthDirective from './hide-auth.directive';
import showAuthDirective from './show-auth.directive';


const mod = angular.module('ag.firebase.auth', ['ui.router']);

mod.factory('authManager', authManagerFactory);
mod.provider('authStateInterceptors', authStateInterceptorsProvider);

mod.directive('cloakAuth', cloakAuthDirective);
mod.directive('hideAuth', hideAuthDirective);
mod.directive('showAuth', showAuthDirective);

mod.run((authStateInterceptors) => {
    authStateInterceptors.setupStateAuthChecks();
});

export default mod.name;