const topNavBarComponent: any = {
    bindings: {
        'user': '<'
    },
    template: require('./top-nav-bar.html'),
    controller: TopNavBarCtrl
};

/*@ngInject*/
function TopNavBarCtrl(authManager, $state, APP_STATES) {
    const ctrl = this;

    ctrl.APP_STATES = APP_STATES;

    ctrl.authManager = authManager;

    ctrl.logOut = function() {
        authManager.logOut();
    };

    ctrl.isErrorPage = function() {
        return $state.current.name === 'pageNotFound';
    };
}

export default topNavBarComponent;