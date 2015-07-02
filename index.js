// Dependencies
var Request = require("request")
  , Fs = require("fs")
  , Ul = require("ul")
  ;

// Constants
const JIPICS_URL  = "http://jipics.net/";

// Constructor
var Jipics = module.exports = {};

/**
 * upload
 * Uploads an image to jipics.net.
 *
 * @name upload
 * @function
 * @param {Object} options A string representing the image path or an object:
 *
 *   - `path` (String): the path to the image.
 *   - `stream` (Stream): a readable stream to get the image from (remote, hard-disk etc).
 *   - `deleteAfterUpload` (Boolean): if `true`, the image will be deleted after a sucessful upload.
 *
 * @param {Function} callback The callback function.
 * @return {Request} The request object.
 */
Jipics.upload = function (options, callback) {

    // Get the image from the request
    if (typeof options === "string") {
        options = {
            path: options
        }
    }

    // Force options to be an object
    options = Ul.merge(options, {
        stream: null
      , deleteAfterUpload: false
    });

    // Validate options
    if (!options.path && !options.stream) {
        return callback ("A path or a stream to the image must be provided.");
    }

    // Create stream from hard disk or remote
    var stream = options.path ? Fs.createReadStream(options.path) : options.stream;

    // Upload the image to jipics.net
    return Request.post(JIPICS_URL, function (err, res) {
        if (err) { return callback(err); }

        // Parse body
        try {
            res.body = JSON.parse(res.body);
        } catch (e) {
            return callback(res.body);
        }

        // Delete image
        if (options.deleteAfterUpload && options.path) {
            Fs.unlink(options.path);
        }

        callback (null, res.body);
    }).form().append("image", stream);
};
