import {series } from "gulp";
import {aliasResolve, buildModulesComponents } from "./src";
import { copyFile } from "fs/promises";
import path from "path";


const epPackage = path.resolve(__dirname,"../packages/element-x/package.json")
const epOutput = path.resolve(__dirname,"../dist/element-x")

export const copyFiles = () => Promise.all([
  copyFile(epPackage,path.join(epOutput,'package.json')),
])


export default series(
  buildModulesComponents,
  aliasResolve,
  copyFiles
)