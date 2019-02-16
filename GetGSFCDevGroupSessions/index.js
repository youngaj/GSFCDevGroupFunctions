module.exports = function(context, req) {
  var search = require("youtube-search");

  context.log("JavaScript HTTP trigger function processed a request.");

  var youtubeKey = process.env["YOUTUBE_KEY"];
  var opts = {
    maxResults: 10,
    key: youtubeKey
  };

  search("GSFC Dev Group", opts, function(err, results) {
    if (err){
      console.error("Error found");
      context.done();
      return;
    }

    console.dir(results);
    context.res = {
      body: results
    };
    context.done();
  });
  console.log("Completed operation");
};
