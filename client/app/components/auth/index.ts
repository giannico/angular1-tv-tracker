import * as angular from 'angular';
import './auth-forms.css';

import changeEmailFormComponent from './change-email-form/change-email-form.component';
import changePasswordFormComponent from './change-password-form/change-password-form.component';
import logInFormComponent from './log-in-form/log-in-form.component';

const mod = angular.module('components.auth', []);

mod.component('changeEmailForm', changeEmailFormComponent);
mod.component('changePasswordForm', changePasswordFormComponent);
mod.component('logInForm', logInFormComponent);

export default mod.name;