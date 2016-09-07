/*@ngInject*/
function firebaseFactory($window) {

    const firebaseObj = $window.firebase;

    if (firebaseObj == null) {
        throw new Error('Firebase library has not been loadded!');
    }

    return firebaseObj;
}

export default firebaseFactory;