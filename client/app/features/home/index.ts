import * as angular from 'angular';
import homeViewComponent from './home.view.ts';

const mod = angular.module('home', []);

mod.component('homeView', homeViewComponent);

/*@ngInject*/
mod.config(function($stateProvider, APP_STATES) {
    $stateProvider.state({
        name: APP_STATES.HOME,
        url: '/',
        template: '<home-view></home-view>'
    });
});

export default mod.name;