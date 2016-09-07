// This module contains common code that's likely to be injected/shared throughout many feature modules of the
// application. These services can also be used by "components".
import * as angular from 'angular';
import agFirebaseAuthMod from './auth';

import firebaseFactory from './firebase.factory';
import rootRefFactory from './root-ref.factory';

const mod = angular.module('ag.firebase', [ agFirebaseAuthMod ]);

mod.factory('firebase', firebaseFactory);
mod.factory('rootRef', rootRefFactory);

export default mod.name;