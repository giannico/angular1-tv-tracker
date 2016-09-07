const appComponent = {
    template: `
        <top-nav-bar user="$ctrl.authManager.user"></top-nav-bar>
        <div class="container" ui-view></div>`,
    /*@ngInject*/
    controller: function(authManager) {
        const ctrl = this;
        ctrl.authManager = authManager;
    }
};

export default appComponent;