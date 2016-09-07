// This module contains components that are specific to this application that are reusable, but
// are specific to this application.
import * as angular from 'angular';
import authMod from './auth';
import layoutMod from './layout';
import showsMod from './shows';

const mod = angular.module('components', [
    authMod,
    layoutMod,
    showsMod
]);

export default mod.name;