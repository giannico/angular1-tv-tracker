const showsViewComponent: any = {
    bindings: {
        user: '<',
        page: '='
    },
    template: require('./shows-view.html'),
    controller: ShowsViewCtrl
};

/*@ngInject*/
function ShowsViewCtrl($state, APP_STATES) {
    const ctrl = this;

    ctrl.APP_STATES = APP_STATES;

    ctrl.isShowsListViewActive = function() {
        return $state.is(ctrl.APP_STATES.SHOWS.LIST);
    };
}

export default showsViewComponent;