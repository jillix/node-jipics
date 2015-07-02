<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

# jipics

Node.JS wrapper for jipics image hosting website.

## Installation

```sh
$ npm i jipics
```

## Example

```js
// Dependencies
var Jipics = require("jipics")
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

```

## Documentation

### `upload(options, callback)`
Uploads an image to jipics.net.

#### Params
- **Object** `options`: A string representing the image path or an object:
  - `path` (String): the path to the image.
  - `stream` (Stream): a readable stream to get the image from (remote, hard-disk etc).
  - `deleteAfterUpload` (Boolean): if `true`, the image will be deleted after a sucessful upload.
- **Function** `callback`: The callback function.

#### Return
- **Request** The request object.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
See the [LICENSE][license] file.

[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md