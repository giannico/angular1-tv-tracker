import * as angular from 'angular';

function stateLoadingBarProvider() {
    let options = {
        loadingThreshold: 0 // state change time in ms before showing loading bar
    };

    function setOptions(newOptions) {
        angular.extend(options, newOptions);
    }

    // provider interface
    return {
        setOptions,
        $get
    };

    ////////////////////

    /*@ngInject*/
    function $get($transitions, $timeout, cfpLoadingBar) {
        return {
            setOptions,
            enable
        };

        function enable() {
            $transitions.onStart({}, ($transition$) => {

                let hasRouteChangedCompleted = false;

                $timeout(() => {
                    if (!hasRouteChangedCompleted) {
                        cfpLoadingBar.start();
                    }
                }, options.loadingThreshold);

                $transition$.
                    promise.
                    finally(() => {
                        hasRouteChangedCompleted = true;
                        cfpLoadingBar.complete();
                    });
            });

            $transitions.onSuccess({}, cfpLoadingBar.complete);
        }
    }
}

export default stateLoadingBarProvider;