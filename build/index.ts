import { rollup } from "rollup";
import vue from '@vitejs/plugin-vue'
import glob from "fast-glob";
import esbuild from 'rollup-plugin-esbuild'
import { copyFile } from "fs/promises";
import scss from 'rollup-plugin-scss';
import alias from '@rollup/plugin-alias';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function copyFiles() {
  copyFile('packages/package.json','dist/whale-ui/package.json')
}

export async function buildComponents() {
  const files = await glob("**/*.{js,ts,vue}", {
    cwd: "packages",
    absolute: true
  });
  const bundle = await rollup({
    input: files,
    plugins: [
      alias({
        entries: [
          { find: /^@whale-ui\/(.*)$/, replacement: path.resolve(__dirname, '../packages/$1/index.ts') },
          { find: /^whale-ui$/, replacement: path.resolve(__dirname, '../packages/index.ts') }
        ]
      }),
      vue(),
      scss({
        // outputStyle:'compressed',
        fileName:'index.css',
        sourceMap: true
      }),
      esbuild()
    ],
    external: ["vue","@vue/shared","lodash-unified"],

  });
  await bundle.write({
    entryFileNames: '[name].js',
    dir:'dist/whale-ui/es',
    preserveModules: true,
    format: "es",
    sourcemap: true,
  });
}
// 打包scss
export async function buildScss(){
  const bundle = await rollup({
    input: path.resolve(__dirname, '../packages/theme/index.scss'),
    plugins: [
      scss({
        fileName: 'index.css',
        sourceMap: true
      }),
    ],
  });
  await bundle.write({
    dir:'dist/whale-ui/theme',
    format: "es",
    sourcemap: true,
  });
}

export async function buildMain(){
  await buildComponents()
  await buildScss()
  await copyFiles()
}

buildMain()