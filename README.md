# rollup-copy-static
Small plugin to copy static files when building with rollup.

## Installation
```bash
yarn add @axel669/rollup-copy-static
```

## Usage
Default export is a function that takes any number of sources to copy files
from. If an argument is a string, the library globs for `**/*` inside the folder
and copies the files into the output directory. Alternatively an argument can
be an object with a `glob` property and an optional `dir` property. If the glob
argument is used, any part of the path that is in the blob will be in the
relative destination path.

```js
import copy from "@axel669/rollup-copy-static"

export default {
    input: "app/main.mjs",
    output: {
        file: "build/app.mjs",
        format: "esm",
    },
    plugins: [
        copy(
            // Same as { glob: "**/*", dir: "static" }
            // Copies all the files in the static dir and puts them at the top
            // level of the build dir
            "static",
            // copies css files in the extra dir into build/extra/*.css
            { glob: "extra/*.css" },
            // Copies all js files in the scripts dir into the build dir at
            // the top level
            { glob: "**/*.js", dir: "scripts" }
        )
    ]
}
```

### Example
Source Files + example config above
```
src
├──┬ app
│  ├─── main.js
├──┬ static
│  ├─── image.jpg
│  └─── banner.png
├──┬ extra
│  ├─── notes.txt
│  └─── styles.css
└──┬ scripts
   ├─── windstorm.js
   └─── libs.json

"static"
    -> ["image.jpg", "banner.jpg"]
{ glob: "extra/*.css" }
    -> ["extra/styles.css"]
{ glob: "**/*.js", dir: "scripts" }
    -> ["windstorm.js"]

build
├─── banner.jpg
├──┬ extra
│  ├─── notes.txt
│  └─── styles.css
├─── image.jpg
├─── main.js
├─── windstorm.js
```

## Credits
Bayonetta Image (in test folder):
[Aleksandra Skiba](https://twitter.com/alexineskiba/status/1441433433700552705?s=21)
