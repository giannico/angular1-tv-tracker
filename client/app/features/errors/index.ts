import * as angular from 'angular';
import './errors.css';
import pageNotFoundViewComponent from './page-not-found.view.ts';

const mod = angular.module('errors', []);

mod.component('pageNotFoundView', pageNotFoundViewComponent);

/*@ngInject*/
mod.config(function($stateProvider) {
    $stateProvider.state({
        name: 'pageNotFound',
        url: '/404',
        template: '<page-not-found-view></page-not-found-view>'
    });
});

export default mod.name;