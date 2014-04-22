var Jipics = require ("../index");

Jipics.upload (__dirname + "/heisencat.png", function (err, data) {
    console.log (err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});
