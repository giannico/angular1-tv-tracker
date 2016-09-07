const logInFormComponent: any = {
    bindings: {
        errorMessage: '<',
        onSubmit: '&'
    },
    template: require('./log-in-form.html'),
    controller: LogInFormCtrl
};

/*@ngInject*/
function LogInFormCtrl() {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.formData = {
            email: null,
            password: null
        };

        ctrl.errorMessage = null;
    };

    ctrl.submitFormHandler = function({ email, password }) {
        ctrl.errorMessage = null;

        ctrl.onSubmit({
            $event: {
                email,
                password
            }
        });
    };
}

export default logInFormComponent;