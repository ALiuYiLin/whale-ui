import {series } from "gulp";
import {buildModulesComponents } from "./src";

export default series(
  buildModulesComponents
)