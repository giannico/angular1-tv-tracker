// This module contains components that are specific to this application that aren't specifically related to one
// application "feature module".
import * as angular from 'angular';

import showsGridComponent from './shows-grid/shows-grid.component';

const mod = angular.module('components.shows', []);

mod.component('showsGrid', showsGridComponent);

export default mod.name;