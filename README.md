node-jipics
===========

Node.JS wrapper for jipics image hosting website.

## Example

```js
var Jipics = require ("jipics");

Jipics.upload (__dirname + "/heisencat.png", function (err, data) {
    console.log (err || "Image sucessfully uploaded: " + JSON.stringify(data, null, 4));
});
```

## Methods

### `upload (options, callback)`
Uploads an image.

#### Arguments
  - `@options`: a **string representing the image path** or an **object** contanining the following fields:
    - `path`: the path to the image
    - `deleteAfterUpload`: if true, the image will be deleted after a *sucessful* upload

## Changelog

### v0.1.0
 - Initial release

## License
See the LICENSE file.
