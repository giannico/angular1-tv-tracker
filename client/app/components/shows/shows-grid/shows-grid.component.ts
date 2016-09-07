const showsGridComponent: any = {
    bindings: {
        shows: '<',
        user: '<'
    },
    template: require('./shows-grid.html'),
    controller: ShowsGridCtrl
};

/*@ngInject*/
function ShowsGridCtrl() {
    const ctrl = this;

    ctrl.isFavorite = function(show) {
        if (!ctrl.user) { return false; }

        return ctrl.user.isAFavoriteShow(show.id);
    };

    ctrl.markAsFavorite = function(show) {
        ctrl.user.markShowAsFavorite(show, true);
    };

    ctrl.removeAsFavorite = function(show) {
        ctrl.user.markShowAsFavorite(show, false);
    };
}

export default showsGridComponent;