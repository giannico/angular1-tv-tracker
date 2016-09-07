import * as angular from 'angular';

/*@ngInject*/
function authManagerFactory($firebaseAuth, $state, $q) {

    // the firebase auth object
    let auth = null;

    let initializationPromise = null;

    const manager = {
        user: null,
        isInitialized: false,
        initialize,
        setOptions,
        logIn,
        signUp,
        logOut,
        updateEmail,
        updatePassword,
        requireAuthentication,
        isAuthenticated
    };

    const options = {
        userConstructor: null,
        unauthenticatedLogOutState: 'home',
        onLogOut: angular.noop,
        onAuthenticationExpiration: angular.noop
    };

    return manager;

    ////////////////////

    function initialize() {
        // make sure initialize is only executed once
        if (initializationPromise != null) {
            return initializationPromise;
        }
        // if initialization hasn't already been run, run it
        auth = $firebaseAuth();

        // register listener for authentication state changes
        auth.$onAuthStateChanged(handleAuthStateChange);

        initializationPromise = auth.$waitForSignIn().
                                    then(storeUser).
                                    then(waitForProfile).
                                    finally(() => {
                                        manager.isInitialized = true;
                                    });
    }

    function setOptions(newOptions) {
        angular.extend(options, newOptions);
    }

    ////////////////////

    function handleAuthStateChange(userData) {
        if (userData == null && manager.user != null) {
            const authenticationExpired = true;
            logOut(authenticationExpired);
        } else {
            storeUser(userData);
        }
    }

    function storeUser(userData) {
        if (userData != null && options.userConstructor) {
            manager.user = new options.userConstructor(userData);
        } else {
            manager.user = userData;
        }

        return manager.user;
    }

    function waitForProfile() {
        if (manager.user != null) {
            return manager.user.profile.$loaded();
        }
    }

    function clearUser() {
        manager.user = null;
    }

    function logIn(email, password) {
        return auth.
            $signInWithEmailAndPassword(email, password).
            then(storeUser);
    };

    function signUp(email, password, name) {
        return auth.
            $createUserWithEmailAndPassword(email, password).
            then(storeUser).
            then(function() {
                return manager.user.setName(name);
            });
    };

    function logOut(authenticationExpired = false) {
        // if the user is on a screen that requires authentication, force them to
        // the options.unauthenticatedLogOutState state
        if ($state.current.data && $state.current.data.requireAuthentication
            && options.unauthenticatedLogOutState) {
                $state.go(options.unauthenticatedLogOutState);
        }

        // if the user logged out gracefully, trigger onLogOut action
        if (!authenticationExpired && options.onLogOut) {
            options.onLogOut();
        }

        // if the user was logged out due to expiration, trigger onAuthenticationExpiration trigger
        if (authenticationExpired && options.onAuthenticationExpiration) {
            options.onAuthenticationExpiration();
        }

        return auth.
                $signOut().
                then(clearUser);
    };

    function updateEmail(newEmail, password) {
        return logIn(manager.user.email, password).
                    then(() => {
                        return auth.$updateEmail(newEmail);
                    });
    }

    function updatePassword(currentPassword, newPassword) {
        return logIn(manager.user.email, currentPassword).
                    then(() => {
                        return auth.$updatePassword(newPassword);
                    });
    }

    function requireAuthentication() {
        return auth.$requireSignIn().
                        then(storeUser).
                        catch(function(error) {
                            if (isAuthenticated()) {
                                const authenticationExpired = true;
                                logOut(true);
                            }

                            return $q.reject(error);
                        });
    };

    function isAuthenticated() {
        return !!manager.user;
    };
}

export default authManagerFactory;