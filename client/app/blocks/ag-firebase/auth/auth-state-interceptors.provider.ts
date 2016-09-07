import * as angular from 'angular';

function authStateInterceptorsProvider() {
    let options = {
        authenticationFailState: 'logIn',
        onAuthenticationFail: angular.noop,
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
    function $get($transitions, $state, authManager) {
        return {
            setupStateAuthChecks,
            setOptions
        };

        ////////////////////////////////////////

        function setupStateAuthChecks() {
            $transitions.onStart({
                to: function(toState) {
                    return toState.data != null && toState.data.requireAuthentication === true;
                }
            },
            function() {
                return authManager.
                        requireAuthentication().
                        catch(() => {
                            // execute the authentication failed handler, if it's registered
                            if (options.onAuthenticationFail) { options.onAuthenticationFail(); }

                            // redirect the user to the authenticationFailState, if it's set
                            if (options.authenticationFailState) {
                                // the location: true forces the browser's URL to be updated
                                return $state.target(options.authenticationFailState, undefined, { location: true });
                            }
                        });
            });
        }

    }
}

export default authStateInterceptorsProvider;