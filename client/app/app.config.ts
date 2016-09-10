import { Resolvable } from 'angular-ui-router';

function configureApp(mod: angular.IModule): void {

    mod.constant('APP_OPTIONS', APP_OPTIONS);
    mod.config(configRouting);
    mod.run(configureFirebase);
    mod.run(configureAuthManager);
    mod.run(configureAuthFailOptions);
    mod.run(configureStateChangeErrorHandler);
    mod.config(configureToastr);
    mod.config(configureGlobalResolves);
    mod.run(enableStateLoadingBar);

    /////////////////////////

    /*@ngInject*/
    function configRouting($locationProvider, $urlRouterProvider): void {
        $locationProvider.html5Mode(true).hashPrefix('!');
        // Note: due to the way the ui-router authentication has been implemented in this project, the
        // "otherwise" URL cannot be a URL that requires authentication checks
        $urlRouterProvider.otherwise('/404');
    }

    /*@ngInject*/
    function configureFirebase(APP_OPTIONS, firebase) {
        const firebaseConfig = APP_OPTIONS.firebaseOptions;

        firebase.initializeApp(firebaseConfig);
    }

    function configureAuthManager(authManager, toastr, UserResource, APP_STATES) {
        authManager.setOptions({
            userConstructor: UserResource,
            unauthenticatedLogOutState: APP_STATES.HOME,
            onLogOut: function() {
                toastr.success('Come back soon!');
            },
            onAuthenticationExpiration: function() {
                toastr.error('Your session has expired.');
            }
        });

        // starts the initial authentication of the application
        authManager.initialize();
    }

    /*@ngInject*/
    function configureAuthFailOptions(authStateInterceptors, toastr, UserResource) {
        authStateInterceptors.setOptions({
            authenticationFailState: 'logIn',
            onAuthenticationFail: function() {
                toastr.error('You must be authenticated to view this page!');
            }
        });
    }

    /*@ngInject*/
    function configureToastr(toastrConfig) {
        toastrConfig.positionClass = 'toast-bottom-right';
    }

    /*@ngInject*/
    function configureStateChangeErrorHandler($state, toastr) {
        $state.defaultErrorHandler(function(err) {
            toastr.error(err.message);
        });
    }

    /*@ngInject*/
    function configureGlobalResolves($transitionsProvider) {

        $transitionsProvider.onStart({}, ($transition$) => {
            const authManagerResolvable = new Resolvable({
                token: 'authManager',
                deps: ['authManager'],
                resolveFn: (authManager) => {
                    return authManager;
                }
            });

            $transition$.addResolvable(authManagerResolvable);
        });
    }

    function enableStateLoadingBar(stateLoadingBar) {
        stateLoadingBar.setOptions({
            loadingThreshold: 50
        });

        stateLoadingBar.enable();
    }
}

export { configureApp }