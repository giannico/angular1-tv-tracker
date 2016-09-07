import * as angular from 'angular';

// application styles
import './app.css';

// application feature modules
import blocksModule from './blocks';
import commonModule from './common';
import componentsModule from './components';
import featuresModule from './features';

import { configureApp } from './app.config';

import appComponent from './app.component';

const mod = angular.module('app', [
    'vendor',

    blocksModule,
    commonModule,
    componentsModule,
    featuresModule
]);

configureApp(mod);

mod.component('app', appComponent);

export default mod.name;