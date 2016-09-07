/*@ngInject*/
function showsDataServiceFactory(rootRef, $firebaseArray) {
    const showsRef = rootRef.child('shows');

    return {
        getShows
    };

    ////////////////////

    function getShows(pageNum = 0, pageSize = 100) {
        const firstRecord = pageNum * pageSize;
        const lastRecord = firstRecord + pageSize;

        const showsQuery = showsRef.
                            orderByChild('id').
                            startAt(firstRecord).
                            limitToFirst(pageSize);

        return $firebaseArray(showsQuery);
    }
}

export default showsDataServiceFactory;