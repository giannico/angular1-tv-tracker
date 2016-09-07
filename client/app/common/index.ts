// This module contains common code that's likely to be injected/shared throughout many feature modules of the
// application. These services can also be used by "components".
import * as angular from 'angular';
import dataServicesMod from './data-services';
import resourcesMod from './resources';
import routingMod from './routing';

const mod = angular.module('common', [
    dataServicesMod,
    resourcesMod,
    routingMod
]);

export default mod.name;