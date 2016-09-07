const changePasswordViewComponent: any = {
    template: require('./change-password-view.html'),
    controller: ChangePasswordViewCtrl
};

/*@ngInject*/
function ChangePasswordViewCtrl($state, authManager, toastr, APP_STATES) {
    const ctrl = this;

    ctrl.changePassword = function({ currentPassword, newPassword, confirmPassword }) {
        ctrl.errorMessage = null;

        authManager.updatePassword(currentPassword, newPassword).
            then(() => {
                toastr.success('Password updated successfully.');
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

export default changePasswordViewComponent;