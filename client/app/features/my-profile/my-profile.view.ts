const myProfileViewComponent: any = {
    bindings: {
        user: '<'
    },
    template: require('./my-profile-view.html'),
    controller: MyProfileViewCtrl
};

/*@ngInject*/
function MyProfileViewCtrl(APP_STATES, authManager) {
    const ctrl = this;

    ctrl.APP_STATES = APP_STATES;
}

export default myProfileViewComponent;