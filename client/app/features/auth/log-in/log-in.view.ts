const logInViewComponent: any = {
    template: require('./log-in-view.html'),
    controller: LogInViewCtrl
};

/*@ngInject*/
function LogInViewCtrl($state, authManager, APP_STATES) {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.APP_STATES = APP_STATES;
    };

    ctrl.logIn = function({ email, password }) {
        ctrl.errorMessage = null;

        authManager.logIn(email, password).
            then((data) => {
                $state.go(APP_STATES.HOME);
            }).catch((error) => {
                ctrl.errorMessage = error.message;
            });
    };
}

////////////////////

export default logInViewComponent;