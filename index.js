// dependencies
var jipics  = "http://jipics.net/"
  , Request = require("request")
  , fs      = require("fs")
  ;

/**
 *  Upload method
 *
 *  Arguments
 *    @options: a string representing the image path or an
 *    object contanining the following fields:
 *      - path: the path to the image
 *      - deleteAfterUpload: if true, the image will be deleted after a sucessful upload
 *
 * */
exports.upload = function (options, callback) {

    // get the image from the request
    if (typeof options === "string") {
        options = {
            path: options
        }
    }

    // force options to be an object
    options = Object (options);

    // validate path
    if (!options.path) {
        return callback ("The path to the image must be provided.");
    }

    // upload the image to jipics.net
    Request.post(jipics, function (err, res) {

        // handle error
        if (err) { return callback (err); }

        // delete image
        if (options.deleteAfterUpload) {
            return fs.unlink(absoluteImagePath, callback);
        }

        callback (null, res);
    // create the read stream from image file
    }).form().append("image", fs.createReadStream(options.path));
};
