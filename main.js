const path = require("path")

const fs = require("fs-jetpack")
const glob = require("fast-glob")

const copy = (source) => {
    return {
        async generateBundle() {
            const sourceDir = path.resolve(source)

            if (fs.exists(sourceDir) === false) {
                console.log("Static source not found, skipping")
                return
            }

            const files = await glob(
                "**/*",
                { cwd: sourceDir }
            )

            for (const file of files) {
                this.emitFile({
                    type: "asset",
                    fileName: file,
                    source: fs.read(
                        path.resolve(sourceDir, file),
                        "buffer"
                    )
                })
            }
        }
    }
}

module.exports = copy
