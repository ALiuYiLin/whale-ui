import {series } from "gulp";
import {aliasResolve, buildModulesComponents } from "./src";
import { copyFile } from "fs/promises";
import path from "path";


const epPackage = path.resolve(__dirname,"../packages/whale-ui/package.json")
const epOutput = path.resolve(__dirname,"../dist/whale-ui")

export const copyFiles = () => Promise.all([
  copyFile(epPackage,path.join(epOutput,'package.json')),
])


export default series(
  buildModulesComponents,
  aliasResolve,
  copyFiles
)