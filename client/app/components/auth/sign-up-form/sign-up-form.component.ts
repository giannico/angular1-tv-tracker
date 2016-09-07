const signUpFormComponent: any = {
    bindings: {
        errorMessage: '<',
        onSubmit: '&'
    },
    template: require('./sign-up-form.html'),
    controller: SignUpFormCtrl
};

/*@ngInject*/
function SignUpFormCtrl() {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.formData = {
            name: null,
            email: null,
            password: null
        };

        ctrl.errorMessage = null;
    };

    ctrl.submitFormHandler = function({ name, email, password }) {
        ctrl.errorMessage = null;

        ctrl.onSubmit({
            $event: {
                name,
                email,
                password
            }
        });
    };
}

export default signUpFormComponent;