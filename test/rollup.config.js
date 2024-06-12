import copy from "../main.js"

export default {
    input: "app/main.mjs",
    output: {
        file: "build/app.mjs",
        format: "esm",
    },
    plugins: [
        copy(
            "static",
            { glob: "extra/*.css" },
            { glob: "**/*.css", dir: "extra" },
        )
    ]
}
