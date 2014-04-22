var Jipics = require ("../index");

Jipics.upload ("./heisencat.png", function (err, data) {
    console.log (err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});
