var util = require('util');

var error = function (err, response, body) {
  console.log('ERROR [%s]', util.inspect(err));
};
var success = function (data) {
  console.log('Data [%s]', util.inspect(data));
};

var Twitter = require('twitter-node-client').Twitter;

process.env.twitterConsumerKey = "";
process.env.twitterConsumerSecret = "";
process.env.twitterAccessToken = "";
process.env.twitterAccessTokenSecret = "";

var twitter = new Twitter();

// works!
// twitter.getUserTimeline({ screen_name: 'google', count: '2'}, error, success);
//twitter.getMentionsTimeline({ count: '2' }, error, success);
//twitter.getHomeTimeline({ count: '2' }, error, success);
//twitter.getReTweetsOfMe({ count: '2'}, error, success);
//twitter.getTweet({ id: '1111111111'}, error, success);
//twitter.getSearch({ 'q': '#javascript', 'count': 2 }, error, success);
//twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);
//twitter.getCustomApiCall('/statuses/lookup.json',{ id: '412312323'}, error, success)

// twitter.getUser({ screen_name: 'ihenvyr' }, error, success);
