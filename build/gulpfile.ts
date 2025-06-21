import {series } from "gulp";
import {aliasResolve, buildModulesComponents } from "./src";
import { copyFile } from "fs/promises";
import path from "path";


const epPackage = path.resolve(__dirname,"../packages/whale-ui/package.json")
const epOutput = path.resolve(__dirname,"../dist/whale-ui")
const readme = path.resolve(__dirname,"../README.md")
export const copyFiles = () => Promise.all([
  copyFile(epPackage,path.join(epOutput,'package.json')),
  copyFile(readme,path.join(epOutput,'README.md')),
])


export default series(
  buildModulesComponents,
  aliasResolve,
  copyFiles
)