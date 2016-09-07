import * as angular from 'angular';
import { APP_STATES } from './AppRouter';

const mod = angular.module('common.routing', []);

mod.constant('APP_STATES', APP_STATES);

export default mod.name;