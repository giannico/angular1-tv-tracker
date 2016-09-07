// This module contains components/services that are generic and can be dropped into any application. They contain no
// application-specific functionality.
import * as angular from 'angular';
import agFirebaseMod from './ag-firebase';

const mod = angular.module('blocks', [
    agFirebaseMod
]);

export default mod.name;