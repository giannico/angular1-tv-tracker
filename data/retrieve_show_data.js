var request = require('sync-request');
var jsonfile = require('jsonfile');

////////////////////

var shows = [];
var pageNum = 0;

getShows(pageNum);

////////////////////

function getShows(pageNum) {
    var dataPage = getShowData(pageNum);

    if (dataPage === null) {
        jsonfile.writeFileSync('./all_shows.json', shows, { spaces: 4 });
        process.exit();
    } else {
        shows = shows.concat(dataPage);
        pageNum++;
    }

    setTimeout(function() {
        getShows(pageNum);
    }, 2000);
}

function getShowData(pageNum) {
    var requestUrl = 'http://api.tvmaze.com/shows?page=' + pageNum;

    console.log('Retrieving data: %s', requestUrl);

    var response = request('GET', requestUrl);

    if (response.statusCode >= 300) {
        console.log(response);
        return null;
    }

    return JSON.parse(response.body);
}