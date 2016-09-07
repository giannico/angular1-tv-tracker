import * as angular from 'angular';

import showsViewComponent from './shows.view.ts';
import showsListViewComponent from './list/shows-list.view.ts';
import favoriteShowsViewComponent from './favorites/favorite-shows.view.ts';

const mod = angular.module('shows', []);

mod.component('showsView', showsViewComponent);
mod.component('showsListView', showsListViewComponent);
mod.component('favoriteShowsView', favoriteShowsViewComponent);

/*@ngInject*/
mod.config(function($stateProvider) {

    // abstract home view
    $stateProvider.state({
        name: 'shows',
        url: '/shows?page',
        redirectTo: 'shows.list',
        template: '<shows-view user="$resolve.authManager.user" page="$resolve.page"></shows-view>',
        resolve: {
            page: ($transition$) => {
                return parseInt($transition$.params().page || 0);
            }
        }
    });

    // list view
    $stateProvider.state({
        name: 'shows.list',
        url: '/',
        template: '<shows-list-view shows="$resolve.shows" user="$resolve.authManager.user"></shows-list-view>',
        resolve: {
            shows: (showsDataService, page) => {
                return showsDataService.getShows(page).$loaded();
            }
        }
    });

    // favorites view
    $stateProvider.state({
        name: 'shows.favorites',
        url: '/favorites',
        template: `<favorite-shows-view shows="$resolve.favoriteShows"
                    user="$resolve.authManager.user"></favorite-shows-view>`,
        data: {
            requireAuthentication: true
        },
        resolve: {
            favoriteShows: (authManager) => {
                return authManager.user.favoriteShows.$loaded();
            }
        }
    });
});


export default mod.name;