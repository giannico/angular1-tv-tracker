// This module contains common code that's likely to be injected/shared throughout many feature modules of the
// application. These services can also be used by "components".
import * as angular from 'angular';

import stateLoadingBarProvider from './state-loading-bar.provider';

const mod = angular.module('ag.stateLoadingBar', [
    'ui.router',
    'angular-loading-bar'
]);

mod.provider('stateLoadingBar', stateLoadingBarProvider);

export default mod.name;