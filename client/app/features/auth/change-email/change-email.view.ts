const changeEmailViewComponent: any = {
    bindings: {
        user: '<'
    },
    template: require('./change-email-view.html'),
    controller: ChangeEmailViewCtrl
};

/*@ngInject*/
function ChangeEmailViewCtrl($state, authManager, toastr, APP_STATES) {
    const ctrl = this;

    ctrl.changeEmail = function({ newEmail, confirmEmail, currentPassword }) {
        ctrl.errorMessage = null;

        authManager.updateEmail(newEmail, currentPassword).
            then(() => {
                toastr.success('Email updated successfully.');
                $state.go(APP_STATES.MY_PROFILE);
            }).
            catch((err) => {
                ctrl.errorMessage = err.message;
            });
    };

    ctrl.navigateToMyProfile = function() {
        $state.go(APP_STATES.MY_PROFILE);
    };
}

////////////////////

export default changeEmailViewComponent;