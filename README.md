# rollup-copy-static
Small plugin to copy static files when building with rollup.

## Installation
```bash
yarn add @axel669/rollup-copy-static
```

## Usage
Default export is a function that takes the source directory of the static
files. I let rollup decide where the output dir is with some magic. Path is
relative to the dir where the script is run (like other rollup options).

```js
import copyStatic from "@axel669/rollup-copy-static"

export default {
    input: "app/main.mjs",
    output: {
        file: "build/app.mjs",
        format: "esm",
    },
    plugins: [
        copyStatic("static")
    ]
}
```

## Credits
Bayonetta Image: [Aleksandra Skiba](https://twitter.com/alexineskiba/status/1441433433700552705?s=21)
