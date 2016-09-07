// This module contains components that are specific to this application that aren't specifically related to one
// application "feature module".
import * as angular from 'angular';

import topNavBarComponent from './top-nav-bar/top-nav-bar.component';

const mod = angular.module('components.layout', []);

mod.component('topNavBar', topNavBarComponent);

export default mod.name;