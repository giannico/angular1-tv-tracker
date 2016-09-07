const signUpViewComponent: any = {
    template: require('./sign-up-view.html'),
    controller: SignUpViewCtrl
};

/*@ngInject*/
function SignUpViewCtrl($state, authManager, APP_STATES, toastr) {
    const ctrl = this;

    ctrl.signUp = function(email, password, name) {
        ctrl.errorMessage = null;

        authManager.signUp(email, password, name).
            then((data) => {
                $state.go(APP_STATES.HOME);
                toastr.success('Thanks for joining!');
            }).catch((error) => {
                ctrl.errorMessage = error.message;
            });
    };
}

////////////////////

export default signUpViewComponent;