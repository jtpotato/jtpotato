const background = Bun.file("svgs/background.svg")
const text = Bun.file("svgs/text.svg")
const location = Bun.file("svgs/location.svg")
const index = Bun.file("svgs/index.svg")

const backgroundSvgContents = await background.text()
const textSvgContents = await text.text()
const locationSvgContents = await location.text()
const indexSvgContents = await index.text()

let buildSvgContents = indexSvgContents.replace(/\{\{\s*background\s*\}\}/, backgroundSvgContents)
buildSvgContents = buildSvgContents.replace(/\{\{\s*text\s*\}\}/, textSvgContents)
buildSvgContents = buildSvgContents.replace(/\{\{\s*location\s*\}\}/, locationSvgContents)

await Bun.write("build.svg", buildSvgContents)