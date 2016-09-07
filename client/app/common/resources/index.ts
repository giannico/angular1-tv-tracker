import * as angular from 'angular';
import { userResourceFactory } from './UserResource';

const mod = angular.module('common.resources', []);

mod.service('UserResource', userResourceFactory);

export default mod.name;