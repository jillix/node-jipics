node-jipics
===========

Node.JS wrapper for jipics image hosting website.

## Example

```js
var Jipics = require("jipics");
var Request = require("request");

// Using a file path
Jipics.upload(__dirname + "/heisencat.png", function (err, data) {
    console.log(err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});

// Using a stream
Jipics.upload({ stream: request.get("http://... myImage.png")}, function (err, body) {
    console.log(err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});
```

## Methods

### `upload (options, callback)`
Uploads an image.

#### Arguments
  - `@options`: a **string representing the image path** or an **object** contanining the following fields:
    - `path`: the path to the image
    - `stream`: the read stream that can be from remote or from hard disk
    - `deleteAfterUpload`: if true, the image will be deleted after a *sucessful* upload

## Changelog

### v0.1.2
 - When `options.deleteAfterUpload` is true, no response was comming

### v0.1.1
 - Fixed a variable that was not defined

### v0.1.0
 - Initial release

## License
See the LICENSE file.
