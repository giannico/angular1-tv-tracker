import * as angular from 'angular';
import showsDataServiceFactory from './shows-data-service.factory';

const dataServicesMod = angular.module('common.dataServices', []);

dataServicesMod.factory('showsDataService', showsDataServiceFactory);

export default dataServicesMod.name;