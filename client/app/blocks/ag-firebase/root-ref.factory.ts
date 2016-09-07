/*@ngInject*/
function rootRefFactory(firebase) {
    return firebase.database().ref();
}

export default rootRefFactory;