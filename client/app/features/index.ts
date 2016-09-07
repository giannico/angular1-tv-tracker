// This module contains application-specific features. Each feature is expected to be contained within its own
// folder/sub-module.
import * as angular from 'angular';

// application feature modules
import homeMod from './home';
import showsMod from './shows';
import authMod from './auth';
import errorsMod from './errors';
import myProfileMod from './my-profile';

const mod = angular.module('features', [
    homeMod,
    showsMod,
    authMod,
    errorsMod,
    myProfileMod
]);

export default mod.name;