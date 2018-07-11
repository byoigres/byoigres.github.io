var rawjs = require("raw.js");
const wallpaper = require("wallpaper");
var reddit = new rawjs("raw.js example script");
var fs = require("fs");
var http = require("https");
var tmp = require("tmp");

reddit.setupOAuth2(
  "56AjsL5FyCEOQQ",
  "2_NGheKK8h8c0OiVWd9lERLJtHg"
);

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    // check if response is success
    if (response.statusCode !== 200) {
      return cb("Response status was " + response.statusCode);
    }

    response.pipe(file);

    file.on("finish", function() {
      file.close(cb); // close() is async, call cb after close completes.
    });
  });

  // check for request error too
  request.on("error", function(err) {
    fs.unlink(dest);
    return cb(err.message);
  });

  file.on("error", function(err) {
    // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    return cb(err.message);
  });
};

reddit.auth({ username: "byoigres", password: "reignOFTERROR??72!" }, function(
  err,
  response
) {
  if (err) {
    console.log("Unable to authenticate user: " + err);
  } else {
    // The user is now authenticated. If you want the temporary bearer token, it's available as response.access_token
    // and will be valid for response.expires_in seconds.
    // raw.js will automatically refresh the bearer token as it expires. Unlike web apps, no refresh tokens are available.
    // console.log(response);
    // console.log(reddit);

    /*
    reddit.subredditInfo("earthporn", function(err, response) {
      console.log(err, response);
    });
    */
    reddit.comments({ r: "earthporn" }, function(err, response) {
    // reddit.random({ r: "earthporn" }, function(err, response) {
      console.log(err);
      // console.log(JSON.stringify(response, null, 2));
      //console.log(response);
      console.log(response.data.children[1]);

      tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
        if (err) throw err;

        console.log("File: ", path);
        console.log("Filedescriptor: ", fd);

        // If we don't need the file anymore we could manually call the cleanupCallback
        // But that is not necessary if we didn't pass the keep option because the library
        // will clean after itself.
        download(response.data.children[1].data.link_url, path, function() {
            wallpaper.set(path).then(() => {
              console.log("done");
            });
        });
      });
    });
  }
});