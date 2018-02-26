
var configTagged = {
  "id": '966828187153035265',
  "domId": 'example1',
  "maxTweets": 6,
  "enableLinks": true,
  "showImages": true,
  "customCallback": handleTweets //This will call the function that we have declared below, to handle the layout that the tweets are displayed as
};
twitterFetcher.fetch(configTagged);

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example1');
    var html = '<div class="container"><div class="row row-eq-height mb-6">';
    while(n < x) {
      html += '<div class="col-6">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div></div>';
    element.innerHTML = html;
}
