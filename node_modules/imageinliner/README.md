## imageinliner

[![Build Status](https://api.travis-ci.org/kentandersen/imageinliner.png)](https://travis-ci.org/kentandersen/imageinliner)

```bash
npm install -g imageinliner
```

Tool for inlining background data-uri's into css files.


```bash
imageinliner -i style.css -o outputStyle.css
```

To overwrite the input file instead of outputting to a separate file, add the `--overwrite` flag.

```bash
imageinliner -i style.css --overwrite
```

When referring to images using source root (/some/images) the imageinliner need to know from where to calculate the root path. Use the `--rootPath` parameter.

```bash
imageinliner -i style.css -o outputStyle.css --rootPath /some/images
```

imageinliner will reformat the css (line breaks and indentations). To preserve compression and output all in one line, pass the `--compress` flag.

```bash
imageinliner -i style.css -o outputStyle.css --compress
```

Base64 images is somewhat larger than size of image by itself. Inlining files above 10k is not recommended. Best performance can be achieved for smaller files, where the http setup accounts for a large portion of the transfer. 

Pass a limiter (in byte) using the `--sizeLimit` parameter to exclude images above the sizeLimit.

```bash
imageinliner -i style.css -o outputStyle.css --sizeLimit 10240
```

Multiple parameters can be combined
```bash
imageinliner -i style.css -o outputStyle.css --rootPath /some/images --sizeLimit 10240 --compress
```

The imageinliner module can also be used from node.

with file path
```javascript
var inliner = require("imageinliner");

var cssData = inliner.file("style.css", {
    maxImageFileSize:   10240,
    rootImagePath:      "some/directory",
    compressOutput:     true
});
```

with css string
```javascript
var inliner = require("imageinliner");

var cssData = inliner.css(css, {
    maxImageFileSize:   10240,
    cssBasePath:        "some/directory/css"
    rootImagePath:      "some/directory",
    compressOutput:     true
});
```


---

## License

The MIT License (MIT)

Copyright (c) 2014 Kent Andersen &lt;kentareandersen@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
