// Dependencies
var jipics  = "http://jipics.net/"
  , Request = require("request")
  , fs      = require("fs")
  ;

/**
 * upload
 *
 * @name upload
 * @function
 * @param {Object} options a string representing the image path or an
 *  object contanining the following fields:
 *   - path: the path to the image
 *   - deleteAfterUpload: if true, the image will be deleted after a sucessful upload
 * @param {Function} callback The callback function that will be called after upload is done.
 * @return {Object} The post request that is made
 */
exports.upload = function (options, callback) {

    // get the image from the request
    if (typeof options === "string") {
        options = {
            path: options
        }
    }

    // force options to be an object
    options = Object (options);

    // validate options
    if (!options.path && !options.stream) {
        return callback ("A path or a stream to the image must be provided.");
    }

    var stream = options.path ? fs.createReadStream(options.path) : options.stream;

    // upload the image to jipics.net
    return Request.post(jipics, function (err, res) {

        // handle error
        if (err) { return callback (err); }

        // parse body
        try {
            res.body = JSON.parse(res.body);
        } catch (e) {
            return callback (res.body);
        }

        // delete image
        if (options.deleteAfterUpload && options.path) {
            fs.unlink(options.path);
        }

        // callback
        callback (null, res.body);

    // create the read stream from image file
    }).form().append("image", stream);
};
