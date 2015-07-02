// Dependencies
var Jipics = require("../lib")
  , Request = require("request")
  ;

// Upload the local file
Jipics.upload(__dirname + "/heisencat.png", function (err, data) {
    console.log(err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});

// Upload some laaaarge file, from remote
Jipics.upload({
    stream: Request("https://github.com/IonicaBizau/node-statique/raw/master/examples/public/images/large.jpg")
}, function (err, data) {
    console.log(err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});
