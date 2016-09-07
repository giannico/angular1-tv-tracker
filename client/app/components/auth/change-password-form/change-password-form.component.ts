const changePasswordFormComponent: any = {
    bindings: {
        errorMessage: '<',
        onSubmit: '&',
        onCancel: '&'
    },
    template: require('./change-password-form.html'),
    controller: ChangePasswordFormCtrl
};

/*@ngInject*/
function ChangePasswordFormCtrl() {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.formData = {
            currentPassword: null,
            newPassword: null,
            confirmPassword: null,
        };

        ctrl.errorMessage = null;
    };

    ctrl.submitFormHandler = function({ currentPassword, newPassword, confirmPassword }) {
        ctrl.errorMessage = null;

        if (newPassword !== confirmPassword) {
            ctrl.errorMessage = 'Passwords do not match.';
            return;
        }

        ctrl.onSubmit({
            $event: {
                currentPassword,
                newPassword
            }
        });
    };

    ctrl.cancelFormHandler = function() {
        ctrl.onCancel();
    };
}

export default changePasswordFormComponent;