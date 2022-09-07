import copyStatic from "../main.js"

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
