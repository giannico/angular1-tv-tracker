import * as angular from 'angular';
import myProfileViewComponent from './my-profile.view.ts';

const homeMod = angular.module('myProfile', []);

homeMod.component('myProfileView', myProfileViewComponent);

/*@ngInject*/
homeMod.config(function($stateProvider, APP_STATES) {
    $stateProvider.state({
        name: APP_STATES.MY_PROFILE,
        url: '/my-profile',
        template: '<my-profile-view user="$resolve.authManager.user"></my-profile-view>',
        data: {
            requireAuthentication: true
        }
    });
});

export default homeMod.name;