import path from "node:path"

import glob from "fast-glob"
import fs from "fs-jetpack"

const globArgs = (source) => {
    if (source.glob !== undefined) {
        return {
            pattern: source.glob,
            dir: path.resolve(source.dir ?? ".")
        }
    }
    return {
        pattern: "**/*",
        dir: path.resolve(source)
    }
}
export default (...sources) => ({
    async generateBundle() {
        for (const source of sources) {
            const { pattern, dir } = globArgs(source)
            const files = await glob(pattern, { cwd: dir })
            for (const file of files) {
                this.emitFile({
                    type: "asset",
                    fileName: file,
                    source: await fs.readAsync(
                        path.resolve(dir, file),
                        "buffer"
                    )
                })
            }
        }
    }
})
