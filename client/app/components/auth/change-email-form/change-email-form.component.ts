const changeEmailFormComponent: any = {
    template: require('./change-email-form.html'),
    bindings: {
        user: '<',
        errorMessage: '<',
        onSubmit: '&',
        onCancel: '&'
    },
    controller: ChangeEmailFormCtrl
};

/*@ngInject*/
function ChangeEmailFormCtrl(authManager) {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.formData = {
            currentPassword: null,
            newEmail: authManager.user.email,
            confirmEmail: null,
        };
    };

    ctrl.submitFormHandler = function({ currentPassword, newEmail, confirmEmail }) {
        ctrl.errorMessage = null;

        if (newEmail !== confirmEmail) {
            ctrl.errorMessage = 'Email addresses do not match.';
            return;
        };

        ctrl.onSubmit({
            $event: {
                currentPassword,
                newEmail
            }
        });
    };

    ctrl.cancelFormHandler = function() {
        ctrl.onCancel();
    };
}

export default changeEmailFormComponent;