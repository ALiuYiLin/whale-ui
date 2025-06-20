import { glob } from "fast-glob"
import path from "path"
import { readFile, writeFile } from "fs/promises"
import { copy, remove } from "fs-extra"

const epOutput = path.resolve(__dirname,"../../../dist/element-x")
const PKG_PREFIX = "@element-x"
const PKG_NAME = "element-x"


export const pathRewriter = () => {
  return (id: string) => {
    id = id.replaceAll(`${PKG_PREFIX}/theme`, `${PKG_NAME}/theme`)
    id = id.replaceAll(`${PKG_PREFIX}/`, `${PKG_NAME}/es/`)
    return id
  }
}




export const aliasResolve = async () => {
  const typesDir = path.join(epOutput, 'es')
  const filePaths = await glob(`**/*.d.ts`, {
    cwd: typesDir,
    absolute: true,
  })
  const rewriteTasks = filePaths.map(async (filePath) => {
    // console.log('filePath: ', filePath);
    const content = await readFile(filePath, 'utf8')
    await writeFile(filePath, pathRewriter()(content), 'utf8')
  })
  await Promise.all(rewriteTasks)
  const sourceDir = path.join(typesDir, PKG_NAME)
  await copy(sourceDir, typesDir)
  await remove(sourceDir)
}