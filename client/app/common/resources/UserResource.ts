interface IUserResource {
    uid: string;
    email: string;
    isAnonymous: boolean;
    emailVerified: boolean;

    markShowAsFavorite(show: any, add: boolean): any;
    isAFavoriteShow(showId: number);
}

/*@ngInject*/
function userResourceFactory(rootRef, $firebaseObject, $firebaseArray) {

    class UserResource implements IUserResource {
        public uid: string;
        public email: string;
        public isAnonymous: boolean;
        public emailVerified: boolean;

        private userRef: any;
        public favoriteShows: any;
        public profile: any;

        constructor(userData: any) {
            this.uid = userData.uid;
            this.email = userData.email;
            this.isAnonymous = userData.isAnonymous;
            this.emailVerified = userData.emailVerified;

            this.userRef = rootRef.child('users').child(this.uid);
            this.profile = $firebaseObject(this.userRef.child('profile'));
            this.favoriteShows = $firebaseArray(this.userRef.child('favoriteShows'));
        }

        markShowAsFavorite(show: any, add: boolean) {
            const favoriteShowsRef = this.userRef.child('favoriteShows');

            const obj = $firebaseObject(favoriteShowsRef.child(`shows_${show.id}`));

            if (add) {
                obj.id = show.id,
                obj.name = show.name,
                obj.image = {
                    medium: show.image.medium
                };

                return obj.$save();
            } else {
                return obj.$remove();
            }
        }

        setName(name: string) {
            this.profile.name = name;

            return this.profile.$save();
        }

        isAFavoriteShow(showId: number) {
            return this.favoriteShows.$indexFor(`shows_${showId}`) !== -1;
        }
    }

    return UserResource;
}

export { userResourceFactory };