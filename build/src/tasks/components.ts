import { Plugin, rollup } from "rollup";
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'

import alias from '@rollup/plugin-alias'
import path from "path";

const epRoot = path.resolve(__dirname,"../../../packages/element-x")
const pkgRoot = path.resolve(__dirname,"../../../packages")
const projRoot = path.resolve(__dirname,"../../..")
const epOutput = path.resolve(__dirname,"../../../dist/element-x")


var __defProp = Object.defineProperty;
var __name = (target:any, value:any) => __defProp(target, 'name', { value, configurable: true });
(globalThis as any).__name = __name;


const target = 'es2018'



export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter((path) => {
    const position = path.startsWith(projRoot) ? projRoot.length : 0
    return !excludes.some((exclude) => path.includes(exclude, position))
  })
}


const plugins: Plugin[] = [
  alias({
    entries:[
      {find:"element-x",replacement:epRoot},
      {find:"@element-x",replacement:pkgRoot}
    ]
  }),
  vue(),
  nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.ts'],
  }),
  commonjs(),
  esbuild({
    sourceMap: true,
    target,
    loaders: {
      '.vue': 'ts',
    }
  }),
]

export async function buildModulesComponents() {
  const files = await glob(
    ['**/*.{js,ts,vue}', '!**/style/(index|css).{js,ts,vue}'],
    {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }
  )
  const input = excludeFiles(files)

  const bundle = await rollup({
    input,
    plugins,
    external: ['lodash-es','@vue','vue',"@vue/shared","vite","minimist"],
    treeshake:{moduleSideEffects:false}
  })

  await bundle.write({
    format: 'esm',
    dir: path.resolve(epOutput, 'es'),
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: epRoot,
    sourcemap: true,
    entryFileNames: `[name].mjs`,
  })
}
