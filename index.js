// Dependencies
var Request = require("request");
var Fs      = require("fs");

// Jipics usr
const JIPICS_URL  = "http://jipics.net/";

// Constructor
var Jipics = module.exports = {};

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
Jipics.upload = function (options, callback) {

    // Get the image from the request
    if (typeof options === "string") {
        options = {
            path: options
        }
    }

    // Force options to be an object
    options = Object(options);

    // Validate options
    if (!options.path && !options.stream) {
        return callback ("A path or a stream to the image must be provided.");
    }

    // Create stream from hard disk or remote
    var stream = options.path ? fs.createReadStream(options.path) : options.stream;

    // Upload the image to jipics.net
    return Request.post(JIPICS_URL, function (err, res) {
        if (err) { return callback(err); }

        // parse body
        try {
            res.body = JSON.parse(res.body);
        } catch (e) {
            return callback(res.body);
        }

        // delete image
        if (options.deleteAfterUpload && options.path) {
            fs.unlink(options.path);
        }

        // callback
        callback (null, res.body);
    }).form().append("image", stream);
};
