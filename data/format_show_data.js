var _ = require('lodash');
var jsonfile = require('jsonfile');

var originFile = './all_shows.json';
var destinationFile = './formatted_shows.json';

var shows = jsonfile.readFileSync(originFile);

var formattedShows = _.map(shows, function(show) {
    // convert show thumbnail URLs from http to https
    if (show.image != null && show.image.medium != null) {
       show.image.medium = show.image.medium.replace('http', 'https');
    }

    if (show.image != null && show.image.original != null) {
       show.image.original = show.image.original.replace('http', 'https');
    }

    return show;
});

// turn array into a dictionary, prefixing each key with "shows_"
var showMap = _.keyBy(formattedShows, function(obj) {
  var key = 'shows_' + obj.id;
  return key;
});

// nest shows under "shows" node
var data = { shows: showMap };

jsonfile.writeFileSync(destinationFile, data);