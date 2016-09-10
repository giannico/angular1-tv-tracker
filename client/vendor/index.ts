// vendor js libraries
import * as angular from 'angular';
import 'lodash';
import angularUiRouterMod from 'angular-ui-router';
import { app, auth } from 'firebase';

// No TypeScript definitions exist for these modules, so using CommonJS syntax
const angularfireMod = require('angularfire');
const angularToastrMod = require('angular-toastr');
const dropdownMod = require('angular-ui-bootstrap/src/dropdown');
const angularLoadingBarMod = require('angular-loading-bar');

// vendor css
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-toastr/dist/angular-toastr.css';
import 'angular-loading-bar/src/loading-bar.css';

const vendorModule = angular.module('vendor', [
    angularUiRouterMod,
    angularfireMod,
    angularToastrMod,
    dropdownMod,
    angularLoadingBarMod
]);

export { vendorModule };